window.onload = () => {
  const audio = document.getElementById("holyshitthisisloud");

  fetch("https://api-v2.pixelatedaria.space/modding/")
    .then(res => res.json())
    .then(data => {
      const display = document.getElementById("crash");
      const users = data.bannedUsers;
      display.innerHTML = "";

      users.forEach(user => {
        const name = user.username || "(no username)";

        const div = document.createElement("div");
        div.className = "banned-user";
        div.innerHTML = `
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Reason:</strong> ${user.reason}</p>
          <hr>
        `;
        display.appendChild(div);
      });
    })
    .catch(err => {
      display.textContent = "Failed to load crash users";
      console.error(err);
    });

    fetch("https://api-v2.pixelatedaria.space/modding/")
    .then(res => res.json())
    .then(data => {
      const display = document.getElementById("staff");
      const users = data.staff;
      display.innerHTML = "";

      users.forEach(user => {
        const name = user.username || "(no username)";

        const div = document.createElement("div");
        div.className = "staff-user";
        div.innerHTML = `
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Role:</strong> ${user.role}</p>
          <hr>
        `;
        display.appendChild(div);
      });
    })
    .catch(err => {
      display.textContent = "Failed to load staff users";
      console.error(err);
    });
};
