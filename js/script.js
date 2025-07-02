document.addEventListener("DOMContentLoaded", function () { 
    const headquarter = document.getElementById("headquarter");
    const locations = [
        { name: "Jakarta", image: "" },
        { name: "Bandung", image: "" },
        { name: "Surabaya", image: "" }
    ];

    locations.forEach(location => {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src="${location.image}" alt="${location.name}" class="w-24 h-24 mx-auto rounded-full border">
            <p class="mt-2">${location.name}</p>
        `;
        headquarter.appendChild(div);
    });

    document.getElementById("userName").textContent = "Vriza Hexandria Saputra";

    document.getElementById("messageForm").addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const category = document.getElementById("category").value;

        const outputDiv = document.getElementById("formOutput");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!name || !email || !phone || !category) {
            outputDiv.innerHTML = `<p class="text-red-500 font-semibold">All fields are required.</p>`;
            return;
        }

        if (!emailPattern.test(email)) {
            outputDiv.innerHTML = `<p class="text-red-500 font-semibold">Please enter a valid email address.</p>`;
            return;
        }
        const output = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Category:</strong> ${category}</p>
        `;

        document.getElementById("formOutput").innerHTML = output;
    });
})