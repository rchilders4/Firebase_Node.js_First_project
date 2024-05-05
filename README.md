How to run this project (make sure you have node.js installed).
In the terminal of the main folder enter the following lines:
(If the program is not working){
  1. npm i firebase-tools -D
  2. npx firebase-tools login
  3. npx firebase init
     a.  Choose Firestore, Functions, and Emulators at minimum.
  }
1. firebase login
2. Go to your Cloud Firestore and create the collections items and inventory
3. firebase deploy --only functions

Once you have the url created in the terminal you can go there to test the first function.
You will initially see a white screen with the text undefined,
but if you add '/chair' or '/lamp' you will see new text.

To test the second function you will need to open a second instance of the terminal in the
functions directory. In the main terminal run the line
'npx firebase emulators:start --only firebase' where you will get a URL for your Emulator UI.
Then navigate to the Firestore tab.
Then in the functions terminal, you run 'npm run shell',
the second function that you can test will give an item's price in eur from USD.
When you see 'firebase >' type something like 'newsku({name:'Yoyo',usd:4})' to use the conversation
function. Once it completes go back to the Emulator UI Firestore tab and you will see your entry in the
collection with a EUR price included.

For the third function if you had already run the deploy line then the function URL should have 
already been created. Copy and paste that URL into your browser and add ?text=<YOUR_TEXT_HERE>
to the end of it and hit enter. When you go back to your Firestore window and check the chats you 
will see a new user and the message you typed.

Included in the main folder is a test.txt, which is for testing the API using the vs code extension
Rest Client. With it installed you can simply highlight the URL from when you used to deploy and press
ctrl+alt+r in the text file and get a screen to the left showing if you get a successful response.

