import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyB4kUc1W09ZU06W-Des3DrxYDo_JvnITcw",
  authDomain: "serverless-demo-9353e.firebaseapp.com",
  databaseURL: "https://serverless-demo-9353e.firebaseio.com",
  projectId: "serverless-demo-9353e",
  storageBucket: "",
  messagingSenderId: "704258623797"
};

firebase.initializeApp(config);
export default firebase;