import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyC1wf3lbqLV3Z6Xgt3mDcbnCYH55jqdoi4",
  authDomain: "chatapp-ad341.firebaseapp.com",
  projectId: "chatapp-ad341",
  storageBucket: "chatapp-ad341.appspot.com",
  messagingSenderId: "946953020846",
  appId: "1:946953020846:web:6ab9d065238008918e943f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  const db=firebase.firestore()
  const auth=firebase.auth()


  export {db}
  export {auth}

