import * as vscode from 'vscode';
import * as path from 'path';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    console.log('SOUND MONITOR: ACTIVATED WITH COOLDOWN');
    
    let lastPlayedTime = 0;
    const COOLDOWN_MS = 5000; // 5 seconds gap

    const diagnosticListener = vscode.languages.onDidChangeDiagnostics(() => {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) return;

        const diagnostics = vscode.languages.getDiagnostics(activeEditor.document.uri);
        const hasErrors = diagnostics.some(d => d.severity === vscode.DiagnosticSeverity.Error);

        if (hasErrors) {
            const currentTime = Date.now();
            
            // Only play if 5 seconds have passed since the last alert
            if (currentTime - lastPlayedTime > COOLDOWN_MS) {
                console.log("TRIGGER: Error detected (Cooldown passed)");
                playErrorSound(context);
                lastPlayedTime = currentTime;
            } else {
                console.log("DEBUG: Error exists but skipping sound (Cooldown active)");
            }
        }
    });

    context.subscriptions.push(diagnosticListener);
}

function playErrorSound(context: vscode.ExtensionContext) {
    const soundPath = path.join(context.extensionPath, 'media', 'alert.wav').replace(/\\/g, '\\\\');
    const command = `powershell -c "(New-Object Media.SoundPlayer '${soundPath}').PlaySync()"`;
    exec(command);
}

export function deactivate() {}