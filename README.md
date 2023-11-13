Journal Prompts Program
Overview
The Journal Prompts Program consists of two main components: a Python script and a Google Apps Script. The program facilitates the distribution of journal prompts via email, collects user responses, and organizes the responses in a Google Sheet.

Python Script - JournalPromptsScript.py
Features
Email Journal Prompts: The script uses a Gmail account to send journal prompts to users.
Responses Handling: Collects responses to the journal prompts and organizes them for further analysis.
CSV Export: Converts a Google Sheets link with journal prompts and recipient emails into a CSV file.
Usage
Input Google Sheets Link: Provide a Google Sheets link with columns for journal prompts and recipient emails.
Email Distribution: The script sends journal prompts to the specified email addresses.
Responses Collection: Gathers user responses and organizes them for further analysis.
CSV Export: Converts the Google Sheets link into a CSV file for easy handling.
Instructions
Replace the placeholder Google Sheets link with the actual link in the script.
Run the script using a Python environment.
bash
Copy code
python JournalPromptsScript.py
Google Apps Script - responsesToGoogleSheet.gs
Features
Automated Response Handling: Implemented as a script in the Google Sheet.
Daily Organization: Populates Gmail responses to the Google Sheet on a daily basis.
Structured Data: Organizes responses by Replier Email, Date, Question, and Reply.
Usage
Link to Gmail Account: Authorize the Google Sheet to access the Gmail account.
Daily Automation: The script runs daily to update the Google Sheet with the latest responses.
Instructions
Copy and paste the content of responsesToGoogleSheet.gs into the script editor of your Google Sheet.
Authorize the script to access Gmail and run daily.
Contributions
Contributions are welcome! If you have ideas for improvements or bug fixes, please create an issue or a pull request.
