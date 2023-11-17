// firebase-auth.js

// Import the Firebase authentication module via script tag
const script = document.createElement('script');
script.src = 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
script.type = 'module';
document.head.appendChild(script);

// Wait for the script to load, then initialize the authentication
script.onload = () => {
    const auth = getAuth();

    // Function to check if the user is logged in
    function checkAuthAndRedirect() {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                // Redirect to the login page
                window.location.href = "https://evancooke.github.io/lab3/login.html";
            }
        });
    }

    // Export the function (optional)
    window.checkAuthAndRedirect = checkAuthAndRedirect;
};
