// const toggleBtn = document.getElementById("toggleBtn");
// const body = document.body;

// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("light-mode");

//   toggleBtn.textContent = body.classList.contains("light-mode")
//     ? "🌙 no  aqua"
//     : "☀️ with aqua";
// });

// 

// const toggleBtn = document.getElementById("toggleBtn");
// const body = document.body;
// const icon = toggleBtn.querySelector(".material-icons");
// // const btnText = document.getElementById("With-aqua");
// const btnText = document.getElementById("WithAqua");


// toggleBtn.addEventListener("click", () => {
//   body.classList.toggle("light-mode");

//   const isLight = body.classList.contains("light-mode");

//   icon.textContent = isLight ? "light_mode" : "dark_mode";
//   btnText.textContent = isLight ? "No Aqua" : "With Aqua";
// });

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;
const icon = toggleBtn.querySelector(".darkmode"); // ✅ Correct selector
const btnText = document.getElementById("WithAqua");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  const isLight = body.classList.contains("light-mode");

  icon.textContent = isLight ? "light_mode" : "dark_mode";
  btnText.textContent = isLight ? "Light Mode" : "Dark Mode";
});

function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    sideMenu.classList.toggle('active');
  }

  const roles = [
    "Full_stack Developer",
    "Software Engineer",
  ];
  
  let i = 0, j = 0, current = "", isDeleting = false;
  const speed = 100;
  const target = document.getElementById("typed-text");

  function type() {
    current = roles[i];
    target.textContent = isDeleting
      ? current.substring(0, j--)
      : current.substring(0, j++);

    if (!isDeleting && j === current.length) {
      isDeleting = true;
      setTimeout(type, 1200);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, speed);
    }
  }

  type();
  const btn = document.getElementById("githubBtn");
    const text = document.querySelector(".Tiktok");

    btn.addEventListener("click", () => {
        text.classList.toggle("show"); // toggles visibility on each click
    });
 const gifs = [
      "https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif",  // code rain
      "https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif",  // scrolling code
      "https://media.giphy.com/media/iIqmM5tTjmpOB9mpbn/giphy.gif",  // hacker terminal
      "https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif",      // particle blast
      "https://media.giphy.com/media/U3qYN8S0j3bpK/giphy.gif",       // pulsing ring
      "https://media.giphy.com/media/RbDKaczqWovIugyJmW/giphy.gif"      // particles
    ];

    let currentIndex = -1;

    function showRandomGif() {
      const gifImg = document.getElementById("devGif");
      let randomIndex;

      // Get a different gif each time
      do {
        randomIndex = Math.floor(Math.random() * gifs.length);
      } while (randomIndex === currentIndex);

      currentIndex = randomIndex;
      gifImg.src = gifs[randomIndex];
    }

    // Init on load
    window.addEventListener("DOMContentLoaded", () => {
      showRandomGif();

      document.getElementById("newReactionBtn").addEventListener("click", showRandomGif);
    });


  const texts = "These are My Current Tech Skills";
  const typeEl = document.getElementById("typewriter");
  const speeds = 60; // typing speed in ms
  const pauseTime = 5000; // 5 seconds pause after typing

  let x = 0;

  function typeWriter() {
    if (x < texts.length) {
      const char = texts.charAt(x) === '\n' ? '<br>' : texts.charAt(x);
      typeEl.innerHTML += char;
      x++;
      setTimeout(typeWriter, speeds);
    } else {
      // After done typing, wait then restart
      setTimeout(() => {
        typeEl.innerHTML = "";
        x = 0;
        typeWriter();
      }, pauseTime);
    }
  }

  // Start on load
  window.onload = typeWriter;

  function handleSubmit(e) {
  e.preventDefault();
  document.getElementById("message").classList.add("visible");

  setTimeout(() => {
    e.target.reset();
    document.getElementById("message").classList.remove("visible");
  }, 3000);
}



const searchInput = document.getElementById("sectionSearch");

  searchInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const value = searchInput.value.trim().toLowerCase();
      const validSections = ["home", "about", "gallery","contact"];

      if (validSections.includes(value)) {
        document.getElementById(value).scrollIntoView({ behavior: "smooth" });
      } else {
        alert("Section not found!");
      }
    }
  });