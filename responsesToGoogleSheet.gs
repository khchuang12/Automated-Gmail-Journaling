// Function to extract and populate email replies in a Google Sheets spreadsheet
function extractAndPopulateEmailReplies() {
  // Get the active spreadsheet
  var sheet = SpreadsheetApp.getActiveSheet();

  // Get the latest 100 threads from the Gmail inbox (adjust the range as needed)
  var threads = GmailApp.getInboxThreads(0, 100);

  // Clear the existing content in the sheet
  sheet.clear();

  // Create headers in the spreadsheet
  sheet.appendRow(["Replier Email", "Date", "Question", "Reply"]);

  // Dictionary to group replies by email address
  var groupedReplies = {};

  // Loop through each email thread
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();

    // Extract information from the initial message in the thread
    var initialMessage = messages[0];
    var emailBody = initialMessage.getPlainBody();
    var initialSender = initialMessage.getFrom();

    // Loop through each reply message in the thread
    for (var j = 1; j < messages.length; j++) {
      var message = messages[j];
      var date = message.getDate();
      var sender = message.getFrom();
      var body = message.getPlainBody();

      // Check if the sender is not the specified email address
      if (sender !== 'senderemail@gmail.com') {   // gmail used for sending prompts
        // Extract the email address of the replier using a regular expression
        var replyEmail = sender.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);

        if (replyEmail) {
          replyEmail = replyEmail[0];

          // Find the position of the delimiter '>'
          var indexOfDelimiter = body.indexOf(">");

          // Check if the delimiter exists in the body
          if (indexOfDelimiter >= 0) {
            // Extract reply and question from the email body
            var reply = body.substring(indexOfDelimiter + 13).trim();
            var question = body.split("<")[0].split("\n").slice(0, -2).join("\n");

            // Initialize an array for the replier if it doesn't exist in the dictionary
            if (!groupedReplies[replyEmail]) {
              groupedReplies[replyEmail] = [];
            }

            // Push the reply data to the array for the replier
            groupedReplies[replyEmail].push({ date: date, reply: reply, question: question });
          }
        }
      }
    }
  }

  // Get sorted replier emails
  var sortedRepliers = Object.keys(groupedReplies).sort();

  // Loop through sorted repliers and their replies, appending rows to the sheet
  for (var replierEmail of sortedRepliers) {
    groupedReplies[replierEmail].forEach(function (replyData) {
      sheet.appendRow([replierEmail, replyData.date, replyData.reply, replyData.question]);
    });
  }
}
