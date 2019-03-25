if Browser("Micro Focus Application").InsightObject("Projects Tab").Exist (120) then
'
else
	Exittest
end if
 @@ hightlight id_;_45_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Micro Focus Application").InsightObject("Import QCP").Click 10,10 @@ hightlight id_;_45_;_script infofile_;_ZIP::ssf26.xml_;_
Window("Create Project").InsightObject("Import project from:").Type _
	DataTable.Value("Path_to_QCP_Files", dtglobalsheet) & "\" & _
	DataTable.Value("QCP_Files", dtLocalSheet)
Window("Create Project").InsightObject("Next").Click

Window("Create Project").InsightObject("Project Name").Type DataTable.Value("Project_Name",dtLocalSheet)
Window("Create Project").WinEdit("In Domain").Set "DEFAULT" ' if we ever use multiple domains, this can be parameterized
Window("Create Project").InsightObject("Next").Click

Window("Create Project").InsightObject("Next").Click
Window("Create Project").Window("Warning").WinObject("OK").Click
Window("Create Project").InsightObject("Next").Click
Window("Create Project").InsightObject("Create").Click

if Window("Information").WinObject("OK").Exist (120) then
	Window("Information").WinObject("OK").Click
End If

foo = 1 'for debug



 @@ hightlight id_;_462432_;_script infofile_;_ZIP::ssf25.xml_;_
 
 foo = 1 ' for debugging
