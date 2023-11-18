// firebase-auth.js
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const auth = getAuth();

// Function to check if the user is logged in
function checkAuthAndRedirect() {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      // Redirect to the login page if the user is not authenticated
      window.location.href = "login.html";
    }
  });
}

export { auth, checkAuthAndRedirect };
