async function showUsers() {
    try {
        const res = await fetch("/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const users = await res.json();

        const container = document.querySelector(".allusers");
        container.innerHTML = ""; 
        users.forEach((user) => {
            const div = document.createElement("div");
            div.classList.add("user")
        div.textContent = `${user.userName} - ${user.mobileNumber} - ${user.email} - ${user.address}`;
        container.appendChild(div);
        });
    } catch (err) {
        console.error(err);
    }
}

function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;

    const mobilePattern = /^[0-9]{11}$/; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Validation
    if (username === "") {
        alert("Username is required.");
        return false;
    }
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid mobile number (11 digits).");
        return false;
    }
    if (address === "") {
        alert("Address is required.");
        return false;
    }
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    document.querySelector("form").submit();
}
