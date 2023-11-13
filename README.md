# Journal Prompts Program

This program automates the process of sending journal prompts via email and organizes the responses in a Google Sheet. It consists of two main components: a Python script (`JournalPromptsScript.py`) and a Google Apps Script (`responsesToGoogleSheet.gs`).

## Python Script: Journal Prompts Script.py

### Overview
The Python script automates the delivery of journal prompts via email and is designed to work with a Google Sheets link containing a list of prompts and corresponding email addresses.

### Usage
1. **Google Sheets Setup:**
   - The Google Sheets link should have columns for "Journal Prompts" and "Emails."
   - Populate the "Journal Prompts" column with the list of prompts.
   - Add the email addresses of the users to whom you want to send the prompts in the "Emails" column.
   - Note: This code will not run everyday on its own. You must use an external service to run this code. Use services such as Deta 'https://deta.space/docs/en'

2. **Script Execution:**
   - Run the Python script (`JournalPromptsScript.py`) by providing the Google Sheets link as an input.
   - The script will iterate through the list of prompts and send them via email to the specified recipients.

## Google Apps Script: responsesToGoogleSheet.gs

### Overview
The Google Apps Script is implemented within the Google Sheet and is responsible for organizing responses received via email.

### Usage
1. **Google Sheet Setup:**
   - Create a Google Sheet where the responses will be organized.
   - Ensure the sheet has the following columns: "Replier Email," "Date," "Question," and "Reply."

2. **Script Implementation:**
   - Copy and paste the contents of the `responsesToGoogleSheet.gs` script into the Google Sheet script editor.
   - Using the 'Triggers' tab in Google App Scripts, create a trigger to make the script run on a daily basis, pulling responses from Gmail and populating them in the designated columns.

### Data Organization
   - **Replier Email:** Email address of the user who responded.
   - **Date:** Date of the response.
   - **Question:** The journal prompt that was sent.
   - **Reply:** The user's response to the journal prompt.

## How It Works
1. The Python script sends daily journal prompts to users via email.
2. Users respond to the prompts via email.
3. The Google Apps Script organizes responses in the Google Sheet by the replier's email, date, question, and reply.

## Setup and Configuration
- The user needs to provide the Google Sheets link as input to the Python script.
- Ensure the Google Apps Script is implemented in the corresponding Google Sheet.
- The user will have to create a new or existing gmail account and designate it to send the journal prompts.

## Dependencies
- The Python script requires access to the Gmail API for sending emails.
- Ensure that the necessary permissions are granted for both the Python script and the Google Apps Script.

## Note
- This program assumes a secure setup for handling email addresses and responses.
- Make sure to review and adapt the scripts based on your specific requirements and security considerations.
