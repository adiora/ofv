Set shell = CreateObject("WScript.Shell")
applicationFolder = shell.ExpandEnvironmentStrings("%LocalAppData%") & "\Adiora\Office Automations"

set oShellLink = shell.CreateShortcut(shell.SpecialFolders("Desktop") & "\Automations.lnk")
oShellLink.TargetPath = applicationFolder & "\automations.exe"
oShellLink.WindowStyle = 1
oShellLink.IconLocation = applicationFolder & "\app\ofvicon.ico"
oShellLink.Description = "Shortcut to Office Automations"
oShellLink.WorkingDirectory = applicationFolder
oShellLink.Save

set oShellLink = shell.CreateShortcut(shell.SpecialFolders("StartMenu") & "\Programs\Automations.lnk")
oShellLink.TargetPath = applicationFolder & "\automations.exe"
oShellLink.WindowStyle = 1
oShellLink.IconLocation = applicationFolder & "\app\ofvicon.ico"
oShellLink.Description = "Shortcut to Office Automations"
oShellLink.WorkingDirectory = applicationFolder
oShellLink.Save

