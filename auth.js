/* =========================================================
   AUTHENTICATION SYSTEM (LOGIN + REGISTER)
   Storage: localStorage
   Pages: auth.html
   ========================================================= */


/* ---------- TOGGLE BETWEEN LOGIN & REGISTER ---------- */

// Show Register form and hide Login form
function showRegister() {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("registerBox").classList.remove("hidden");
}

// Show Login form and hide Register form
function showLogin() {
    document.getElementById("registerBox").classList.add("hidden");
    document.getElementById("loginBox").classList.remove("hidden");
}


/* ---------- REGISTER FUNCTION ---------- */

function register() {
    // Get values entered by user
    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;

    // Basic validation
    if (!name || !email || !password) {
        alert("All fields are required");
        return;
    }

    // Get existing users from localStorage (or empty array)
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email already exists
    const alreadyExists = users.some(user => user.email === email);
    if (alreadyExists) {
        alert("User already registered");
        return;
    }

    // Create new user object
    const newUser = {
        name: name,
        email: email,
        password: password   // (plain text for demo; hashed in real apps)
    };

    // Save user to users list
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Please login.");

    // Switch to login form
    showLogin();
}


/* ---------- LOGIN FUNCTION ---------- */

function login() {
    // Get login inputs
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    // Fetch users list
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find matching user
    const user = users.find(
        u => u.email === email && u.password === password
    );

    // If no user found → invalid login
    if (!user) {
        alert("Invalid email or password");
        return;
    }

    /* Save logged-in user
       This value is used across the site
       to identify current user */
    localStorage.setItem("loggedInUser", email);

    alert("Login successful");

    // Redirect to home page
    window.location.href = "home.html";
}


/* ---------- LOGOUT FUNCTION (OPTIONAL, USED LATER) ---------- */

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "auth.html";
}
