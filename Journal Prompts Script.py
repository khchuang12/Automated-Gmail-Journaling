import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
from datetime import date  # core python module
import pandas as pd  # pip install pandas
from send_mail import SendMail  # local python module
from pandas import *
import datetime

SHEET_ID = "1a9dJCTiFDp8rG2XnhokltWDwOvtCN_2u8UywnN5ZbQ"  # Change to your sheet ID
SHEET_NAME = "Sheet1"  # Change to your sheet name
URL = f"https://docs.google.com/spreadsheets/d/{SHEET_ID}/gviz/tq?tqx=out:csv&sheet={SHEET_NAME}"

csvfile = read_csv(URL)

# Setup port number and server name

smtp_port = 587                 # Standard secure SMTP port
smtp_server = "smtp.gmail.com"  # Google SMTP Server

curr_time = datetime.datetime.now()
curr_day = curr_time.day
curr_month = curr_time.month
curr_year = curr_time.year

# Set up the email lists
email_from = "youemail@gmail.com"
email_list = csvfile['emails'].tolist() # Change 'emails' to your column name

journal_prompt = csvfile['prompts'].tolist() # Change 'prompts' to your column name

# Define the password (better to reference externally)
pswd = "yourpassword" 

today = datetime.date.today()
start_day = datetime.date(2023, 10, 31)
diff = today - start_day
index = diff.days

# name the email subject
subject = f"Journal Prompt #{index + 1} - {curr_month}/{curr_day}/{curr_year}"

# Define the email function (dont call it email!)
def send_emails(email_list):

    for person in email_list:
        # Make the body of the email
        body = f"{journal_prompt[index]}"


        # make a MIME object to define parts of the email
        msg = MIMEMultipart()
        msg['From'] = email_from
        msg['To'] = person
        msg['Subject'] = subject
        msg.attach(MIMEText(body,'plain'))

        # Cast as string
        text = msg.as_string()

        # Connect with the server
        print("Connecting to server...")
        TIE_server = smtplib.SMTP(smtp_server, smtp_port)
        TIE_server.starttls()
        TIE_server.login(email_from, pswd)
        print("Succesfully connected to server")
        print()


        # Send emails to "person" as list is iterated
        print(f"Sending email to: {person}...")
        TIE_server.sendmail(email_from, person, text)
        print(f"Email sent to: {person}")
        print()

    # Close the port
    TIE_server.quit()


# Run the function
send_emails(email_list)




        





