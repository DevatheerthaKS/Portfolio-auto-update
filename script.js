const themeBtn =
document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

const greeting =
document.getElementById("greeting");

const hour = new Date().getHours();

if(hour < 12){
  greeting.textContent =
  "Good Morning";
}
else if(hour < 18){
  greeting.textContent =
  "Good Afternoon";
}
else{
  greeting.textContent =
  "Good Evening";
}

fetch("projects.json")
  .then(response => response.json())
  .then(projects => {

    const container =
      document.getElementById("github-projects-container");

    projects.forEach(project => {

      container.innerHTML += `
        <div class="project-card">

          <div class="project-image">💻</div>

          <div class="project-content">

            <h3>${project.name}</h3>

            <p>
              ${project.description || "GitHub Repository"}
            </p>

            <a href="${project.url}"
               target="_blank">
               View Repository
            </a>

          </div>

        </div>
      `;
    });

  });