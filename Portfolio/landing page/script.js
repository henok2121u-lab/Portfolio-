const hero = document.querySelector(".hero");

const backgrounds = [
  "url('https://images.unsplash.com/photo-1608889175119-3c2cfd1e7c43')",
  "url('https://images.unsplash.com/photo-1524985069026-dd778a71c7b4')",
  "url('https://images.unsplash.com/photo-1502139214982-d0ad755818d8')"
];

const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

hero.style.backgroundImage = `
  linear-gradient(to top, #141414 10%, transparent 60%),
  linear-gradient(to right, #000 20%, transparent 60%),
  ${randomBg}
`;

const movieLists = document.querySelectorAll(".movie-list");
const leftBtns = document.querySelectorAll(".scroll-btn.left");
const rightBtns = document.querySelectorAll(".scroll-btn.right");

movieLists.forEach((list, index) => {
  const left = leftBtns[index];
  const right = rightBtns[index];

  right.addEventListener("click", () => {
    list.scrollBy({ left: 300, behavior: "smooth" });
  });

  left.addEventListener("click", () => {
    list.scrollBy({ left: -300, behavior: "smooth" });
  });
});