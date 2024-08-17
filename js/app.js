"use strict";
async function userRender() {
  const answer = await fetch("https://jsonplaceholder.typicode.com/users");
  const hubData = await answer.json();
  const container = document.getElementById("user-cards");
  console.log(hubData);

  hubData.forEach((user) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");

    const userCard = document.createElement("div");
    userCard.classList.add("card");
    userCard.innerHTML = `
        <img src="https://i.pravatar.cc/150?img=${user.id}">
        <h2>${user.name}</h2>
        <p>Username: ${user.username}</p>
        <p>Email:${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website:<a href="http://${user.website}" target="_blank">${user.website}</a></p>
        <div class="social-icons">
            <a href="https://www.google.com/search?q=${user.name}" class="icon" target="_blank"><i class="fab fa-google-plus-g"></i></a>
            <a href="https://www.facebook.com/search/top?q=${user.name}" class="icon" target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://github.com/${user.username}" class="icon" target="_blank"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/search/results/all/?keywords=${user.name}" class="icon" target="_blank"><i class="fab fa-linkedin-in"></i></a>
        </div>`;

    cardContainer.appendChild(userCard);
    container.appendChild(cardContainer);
  });
}

userRender();
