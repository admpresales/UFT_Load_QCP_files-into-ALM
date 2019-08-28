# Script Name
uft-gui-alm-load-qcp-files-into-alm

# Description
This utility script was written to enable TE to easily load multiple .qcp files into ALM from the administration web page

# Usage

Thi test was written with Web and WPF add-ins loaded, just because this is my go to add-ins (RSercely). But, WPF is not actually used in the test. Feel free to change this if desired

The test:
1. Logs in to the ALM running in nimbusserver, using hard coded username/password
2. The action LoadQCPFiles, will iterate through the rows in the local sheet adding the defined qcp files with the defined names
3. Logout and close the browser

Note that the path to the qcp files is stored as a parameter in the global sheet.

Remember that on each desktop where you want to run this test, you must, one time, go into:<br>
Tools->Options->GUI Testing->Web

and clear the checkbox in front of "Ignore ALM"
