import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer} from 'redux-firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCfv4CXvRBbZuXrXivh9gXt_3ICxcSKjF4",
    authDomain: "reactproj-f97f7.firebaseapp.com",
    databaseURL: "https://reactproj-f97f7.firebaseio.com",
    projectId: "reactproj-f97f7",
    storageBucket: "reactproj-f97f7.appspot.com",
    messagingSenderId: "515871920070"
}
// react redux fbase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true
}

//Init instance +  store
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings  = {timestampsInSnapshots:true};
firestore.settings(settings);

const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase,rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});

// initial state
const initialState = {};

//create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;