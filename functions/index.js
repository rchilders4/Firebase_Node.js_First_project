/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const v1 = require("firebase-functions/v1");
exports.helloworld = onRequest((request, response) => {
  const name = request.params[0].replace("/", "");
  const items = {lamp: "This is a lamp", chair: "Good chair"};
  const message = items[name];
  logger.info("Hello logs!", {structuredData: true});
  response.send(`<h1>${message}</h1>`);
});
const USD_TO_EUROS = 0.95;
exports.newsku = v1.firestore.document("/inventory/{sku}")
    .onCreate((snapshot) => {
      const data = snapshot.data();
      const eur = data.usd * USD_TO_EUROS;
      return snapshot.ref.set(Object.assign({eur}, data), {merge: true});
    });
