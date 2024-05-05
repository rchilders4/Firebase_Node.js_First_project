/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {logger} = require("firebase-functions");
const {onRequest} = require("firebase-functions/v2/https");
const {onDocumentCreated} = require("firebase-functions/v2/firestore");

// const v1 = require("firebase-functions/v1");

// The Firebase Admin SDK to access Firestore.
const {initializeApp} = require("firebase-admin/app");
const {getFirestore} = require("firebase-admin/firestore");

initializeApp();

exports.helloworld = onRequest((request, response) => {
  const name = request.params[0].replace("/", "");
  const items = {lamp: "This is a lamp", chair: "Good chair"};
  const message = items[name];
  logger.info("Hello logs!", {structuredData: true});
  response.send(`<h1>${message}</h1>`);
});
const USD_TO_EUROS = 0.95;
exports.newsku = onDocumentCreated("/inventory/{sku}")
    .onCreate((snapshot) => {
      const data = snapshot.data();
      const eur = data.usd * USD_TO_EUROS;
      return snapshot.ref.set(Object.assign({eur}, data), {merge: true});
    });

    
// Take the text parameter passed to this HTTP endpoint and insert it into
// Firestore under the path chats/user123/messages
exports.addmessage = onRequest(async (req, res) => {
  // Grab the text parameter.
  const messages = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await getFirestore()
      .collection("chats")
      .add({messages: messages});
  // Send back a message that we've successfully written the message
  res.json({result: `Chats from user: ${writeResult.id} added.`});
});

// Listens for new messages added to chats/user123/messages
// and saves an uppercased version of the chats
// to chats/user123/messages
exports.makeuppercase = onDocumentCreated("/chats/{userId}", (event) => {
  // Grab the current value of what was written to Firestore.
  const messages = event.data.data().messages;

  // Access the parameter `{userId}` with `event.params`
  logger.log("Uppercasing", event.params.userId, messages);

  const uppercase = messages.toUpperCase();

  // You must return a Promise when performing
  // asynchronous tasks inside a function
  // such as writing to Firestore.
  // Setting an 'uppercase' field in Firestore document returns a Promise.
  return event.data.ref.set({uppercase}, {merge: true});
});
