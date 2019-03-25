# UFT_Load_QCP_files-into-ALM

Thi test was written with Web and WPF add-ins loaded, just because this is my go to add-ins (RSercely). 
But, WPF is not actually used in the test. Feel free to change this if desired

The test:
1. Logs in to the ALM running in nimbusserver, using hard coded username/password
2. The action LoadQCPFiles, will iterate through the rows in the local sheet adding the defined qcp files with the defined names
3. Logout and close the browser

Note that the path to the qcp files is stored as a parameter in the global sheet.
