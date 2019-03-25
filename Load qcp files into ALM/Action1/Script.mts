' test written with Web and WPF add-ins loaded, just because this is my go to add-ins - RSercely
' WPF is not actually used here however.
' test closes all copies of IE, then opens a new one

SystemUtil.CloseProcessByName "iexplore.exe"
SystemUtil.Run "iexplore.exe", "http://nimbusserver.aos.com:8082/qcbin/"


Browser("Micro Focus Application").Page("Micro Focus Application").Link("Site Administration").Click @@ hightlight id_;_Browser("Micro Focus Application").Page("Micro Focus Application").Link("Site Administration")_;_script infofile_;_ZIP::ssf1.xml_;_
if Browser("Micro Focus Application").InsightObject("User Name").Exist (120) then ' username (120) @@ hightlight id_;_3607526_;_script infofile_;_ZIP::ssf3.xml_;_
	Browser("Micro Focus Application").InsightObject("User Name").Click ' username
	For Iterator = 1 To 10 ' ugly,but if you don't clear the field, the later .type appends to existing content
		Browser("Micro Focus Application").InsightObject("User Name").Type micBack @@ hightlight id_;_3607526_;_script infofile_;_ZIP::ssf3.xml_;_
	Next
	Browser("Micro Focus Application").InsightObject("User Name").Type "admin" ' username
else
	ExitTest
End If
' Dont know why, but this click
''Browser("Micro Focus Application").InsightObject("Password").Click ' password
' does not seem to change focus, but the <tab> does>
Browser("Micro Focus Application").InsightObject("User Name").Type micTab ' username

Browser("Micro Focus Application").InsightObject("Password").Type "Password1" ' password
Browser("Micro Focus Application").InsightObject("Login").Click
 

foo = 1 ' so can set a breakpoint
