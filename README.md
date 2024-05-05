How to run this project (make sure you have node.js installed).
In terminal of main folder enter the following lines:
(If program is not working){
  1. npm i firebase-tools -D
  2. npx firebase-tools login
  3. npx firebase init
     a.  Choose Firestore, Functions, and Emulators at minumum.
  }
1. firebase login
2. firebase deploy --only functions

Once you have the url created in the terminal you can go there to test the first function.
You will initualy see a white screen with the text undefined,
but if you add '/chair' or '/lamp' you will see new text.

To test the second function you will need to open a second instances of the terminal in the
functions directory. In the main terminal run the line
'npx firebase emulators:start --only firebase' where you will get a url for your Emulator UI.
Then navigate to the firestore tab.
Then in the functions terminal you run 'npm run shell',
the second function that you can test will give an item's price in eur from usd.
When you see 'firebase >' type something like 'newsku({name:'Yoyo',usd:4})' to use the converstion
function. Once it completes go back the Emulator UI firestore tab and you will see your entry in the
collection with a eur price included.

Included in the main folder is a test.txt, this is for testing the api using the vs code extenstion
Rest Client. With it installed you can simply highlight the url from when you used deploy and press
ctrl+alt+r in teh text file and get a screen to the left showing if you get a successful response.

