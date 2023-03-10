import firebase from 'firebase/app';
import 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyBeL6Nv2PMlAyT6pE725rfSEC5w1gdwHJc',
  authDomain: 'borrow4lessweb.firebaseapp.com',
  projectId: 'borrow4lessweb',
  storageBucket: 'borrow4lessweb.appspot.com',
  messagingSenderId: '970338373942',
  appId: '1:970338373942:web:aad837252b362c0578e397',
  measurementId: 'G-Q0SKSLKC43',
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
