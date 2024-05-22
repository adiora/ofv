Set shell = CreateObject("WScript.Shell")
Set oFso = CreateObject("Scripting.FileSystemObject")
oFso.DeleteFile(shell.SpecialFolders("Desktop") & "\Automations.lnk")
oFso.DeleteFile(shell.SpecialFolders("StartMenu") & "\Programs\Automations.lnk")