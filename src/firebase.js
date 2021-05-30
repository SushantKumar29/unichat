import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyC18xIYLm2W4vbNdX0lHTeHpOBZJphBdeo',
    authDomain: 'unichat-6c274.firebaseapp.com',
    projectId: 'unichat-6c274',
    storageBucket: 'unichat-6c274.appspot.com',
    messagingSenderId: '321023188803',
    appId: '1:321023188803:web:4753f005a6724c8be259f6',
  })
  .auth();
