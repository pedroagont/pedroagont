(() => {
  let currentLang = "en";
  let activeQuestion = null;

  function renderQuestions() {
    const questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = "";

    content[currentLang].questions.forEach((item, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question-item";
      questionDiv.textContent = item.q;
      questionDiv.onclick = () => showResponse(index);
      questionsContainer.appendChild(questionDiv);
    });

    document.getElementById("greeting").textContent =
      content[currentLang].greeting;
    document.getElementById("exploreMore").textContent =
      content[currentLang].exploreMore;
  }

  function showResponse(index) {
    const item = content[currentLang].questions[index];
    const responseContent = document.getElementById("responseContent");
    const responseTitle = document.getElementById("responseTitle");
    const responseText = document.getElementById("responseText");
    const exploreMore = document.getElementById("exploreMore");
    const relatedProjects = document.getElementById("relatedProjects");
    const projectsTitle = document.getElementById("projectsTitle");
    const projectsGrid = document.getElementById("projectsGrid");

    // Switch background video
    switchVideo(index);

    // Remove active state from all questions
    document
      .querySelectorAll(".question-item")
      .forEach((q) => q.classList.remove("active"));

    // Add active state to clicked question
    document.querySelectorAll(".question-item")[index].classList.add("active");

    // Fade out
    responseContent.classList.remove("visible");

    setTimeout(() => {
      responseTitle.textContent = item.q;
      responseText.innerHTML = `<p>${item.a}</p>`;

      // Show related projects
      const relatedProjectsList =
        projects[currentLang].projectsByQuestion[index];
      if (relatedProjectsList && relatedProjectsList.length > 0) {
        projectsTitle.textContent = projects[currentLang].title;
        projectsGrid.innerHTML = "";

        relatedProjectsList.forEach((project) => {
          const card = document.createElement("div");
          card.className = "project-card";
          card.onclick = () => {
            if (project.link !== "#") {
              window.open(project.link, "_blank");
            }
          };

          card.innerHTML = `
                            <div class="project-image">${project.icon}</div>
                            <div class="project-content">
                                <div class="project-name">${project.name}</div>
                                <div class="project-description">${
                                  project.description
                                }</div>
                                <a 
                                    href="${project.link}" 
                                    class="project-link" 
                                    onclick="event.stopPropagation()"
                                >
                                    ${
                                      currentLang === "en"
                                        ? "Learn more →"
                                        : currentLang === "fr"
                                        ? "En savoir plus →"
                                        : currentLang === "de"
                                        ? "Mehr erfahren →"
                                        : "Conoce más →"
                                    }
                                </a>
                            </div>
                        `;

          projectsGrid.appendChild(card);
        });

        relatedProjects.style.display = "block";
      } else {
        relatedProjects.style.display = "none";
      }

      exploreMore.style.display = "block";

      // Fade in
      setTimeout(() => {
        responseContent.classList.add("visible");
      }, 50);
    }, 300);

    activeQuestion = index;
  }

  function switchVideo(index) {
    // Get all videos
    const videos = document.querySelectorAll(".video-background video");

    // Fade out all videos
    videos.forEach((video) => {
      video.classList.remove("active");
      video.pause();
    });

    // Fade in and play the selected video
    const selectedVideo = document.getElementById(`video${index}`);
    if (selectedVideo) {
      selectedVideo.classList.add("active");
      selectedVideo.currentTime = 0;
      selectedVideo.play().catch((e) => {
        // Handle autoplay restrictions
        console.log("Video autoplay prevented:", e);
      });
    }
  }

  // Language toggle
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const lang = this.dataset.lang;
      if (lang === currentLang) return;

      currentLang = lang;

      // Update active state
      document
        .querySelectorAll(".lang-btn")
        .forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      // Update HTML lang attribute
      document.documentElement.lang = lang;

      // Re-render questions
      renderQuestions();

      // If there was an active question, show its translation
      if (activeQuestion !== null) {
        showResponse(activeQuestion);
      } else {
        // Clear response area
        const responseContent = document.getElementById("responseContent");
        responseContent.classList.remove("visible");
        document.getElementById("exploreMore").style.display = "none";
      }
    });
  });

  // Initialize
  renderQuestions();
})();
