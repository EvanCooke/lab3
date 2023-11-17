// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAuth, setPersistence, browserLocalPersistence } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

        const firebaseConfig = {
            apiKey: "AIzaSyDrvtpuL-GJzqpM6dThTqFFbC6BDxkQE-M",
            authDomain: "lab-3-d8c6a.firebaseapp.com",
            projectId: "lab-3-d8c6a",
            storageBucket: "lab-3-d8c6a.appspot.com",
            messagingSenderId: "910114646771",
            appId: "1:910114646771:web:3a41ebdeab13bf4a5c2586",
            measurementId: "G-MQF0BJ881D"
        };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Set persistence to 'local'
setPersistence(auth, browserLocalPersistence)
    .then(() => {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
    })
    .catch((error) => {
        // Handle errors
        console.error("Persistence error:", error);
    });

export { auth };
