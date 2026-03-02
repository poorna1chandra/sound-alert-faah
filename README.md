# Sound Alert Yooo 🔊

**Sound Alert Yooo** is a productivity-focused VS Code extension designed to provide immediate auditory feedback whenever an error occurs in your code. By using human-centric notifications, it helps you catch bugs the moment they appear without constantly checking the "Problems" tab.

## ✨ Features

- **Instant Auditory Feedback**: Plays a clear sound whenever a new "Red Squiggle" (Error) is detected in your active editor.
- **Smart Cooldown**: Includes a 5-second debounce timer to prevent sound-spamming while you are actively typing and fixing errors.
- **Lightweight & Native**: Uses native Windows PowerShell commands to play audio, ensuring low resource usage and no need for external heavy media players.
- **Wide Language Support**: Works across all languages supported by VS Code diagnostics (TypeScript, JavaScript, Python, C++, etc.).

## 🚀 How It Works

The extension monitors the VS Code **Diagnostics** API. When the error count in your current file increases, the extension triggers a PowerShell command to play your custom alert sound.



## 🛠️ Installation & Setup

1. **Install**: Download the extension from the VS Code Marketplace.
2. **Audio File**: By default, the extension looks for `alert.wav` in the extension's `media` folder.
3. **Volume**: Ensure your system volume is on and "Visual Studio Code" is not muted in the Windows Volume Mixer.

## 💻 Tech Stack

- **Language**: TypeScript
- **Environment**: Node.js
- **Platform**: Optimized for Windows (utilizes PowerShell `Media.SoundPlayer`)
- **API**: VS Code Extensibility API (Diagnostics)

## 👤 Author

**G Poorna Chandra Naidu** Final Year Mechanical Engineering Student, NITK Surathkal  
*Interested in Robotics, Automation, and Mechanical Design.*

---
**Enjoying the extension?** Feel free to leave a review on the Marketplace!