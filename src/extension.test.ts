import * as vscode from 'vscode';
import * as path from 'path';
import { exec } from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    console.log('SOUND MONITOR: ACTIVATED');
    
    // Test sound immediately on startup
    playErrorSound(context);

    const diagnosticListener = vscode.languages.onDidChangeDiagnostics(() => {
        const activeEditor = vscode.window.activeTextEditor;
        if (!activeEditor) return;

        const diagnostics = vscode.languages.getDiagnostics(activeEditor.document.uri);
        const hasErrors = diagnostics.some(d => d.severity === vscode.DiagnosticSeverity.Error);

        if (hasErrors) {
            console.log("TRIGGER: Error detected!");
            playErrorSound(context);
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