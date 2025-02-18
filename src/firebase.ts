import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: "AIzaSyAOwhlomfgL5PchbMuHSjW2iLCd6-qBwXI",
	authDomain: "online-cinema-e4a7d.firebaseapp.com",
	projectId: "online-cinema-e4a7d",
	storageBucket: "online-cinema-e4a7d.firebasestorage.app",
	messagingSenderId: "256938642874",
	appId: "1:256938642874:web:b881e7e991dca19f52a183"
};

const app = initializeApp(firebaseConfig)
export { app }
