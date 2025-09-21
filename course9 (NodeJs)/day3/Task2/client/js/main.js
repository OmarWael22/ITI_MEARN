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
            div.textContent = `${user.id} - ${user.username} - ${user.mobile} - ${user.email} - ${user.address}`;
            let deleteBtn = document.createElement("button")
            deleteBtn.setAttribute("data-id",user.id)
            deleteBtn.innerText = "Delete"
            /// when delete is clicked send /users/delete/userid --> and server will handle this
            deleteBtn.addEventListener("click", async () => {
                console.log(`delete ${user.id} is clicked`);
                await sendApi(`/users/delete/${user.id}`,"DELETE");
                showUsers();
            })
            // div.appendChild(deleteBtn);
            let updateBtn = document.createElement("button")
            updateBtn.setAttribute("data-id", user.id);
            updateBtn.innerText = "Update"
            updateBtn.addEventListener("click", async () => {
                let username = prompt("enter new username",user.username)
                let mobile = prompt("enter new mobile",user.mobile)
                let email = prompt("enter new email",user.email)
                let address = prompt("enter new address", user.address)
                let newUserObj = {
                    id: user.id,
                    username,
                    mobile,
                    email,
                    address
                }
                await sendApi(`/users/update/${user.id}`, "PUT", newUserObj)
                showUsers();
            })
            let buttonsDiv = document.createElement("div")
            buttonsDiv.append(updateBtn);
            buttonsDiv.append(deleteBtn);
            div.append(buttonsDiv)
            /// when delete is clicked send /users/delete/userid --> and server will handle this
            // deleteBtn.addEventListener("click", async () => {
            //     console.log(`delete ${user.id} is clicked`);
            //     await sendApi(`/users/delete/${user.id}`);
            //     showUsers();
            // })
            // div.appendChild(updateBtn);
        container.appendChild(div);
        });
    } catch (err) {
        console.error(err);
    }
}

async function sendApi(api ,meth,data=null) {
    try {
        if (data == null) {
            const res = await fetch(api, {
                method : meth
            })
        }
        else {
            const res = await fetch(api, {
                method: meth,
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(data)
            })
        }
    }
    catch (err) {
        console.log(err);
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
