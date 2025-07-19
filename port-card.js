const container = document.getElementById("carousel");
const visibleCardCount = 5;
const cards = [];

const contentTemplates = [
  `<div class="card1-header">
    <img src="assets/images/port-card.png" />
    <h3>3D CARTOON DESIGN</h3>
</div>`,
  `<h3>Industry Expertise</h3>
     <p>Industry ExpertiseWith experience across multiple sectors, we understand what it takes to make brands shine.</p>`,
  `<h3>Industry Expertise</h3>
     <p>Industry ExpertiseWith experience across multiple sectors, we understand what it takes to make brands shine.</p>`,
  `<h3>Industry Expertise</h3>
     <p>Industry ExpertiseWith experience across multiple sectors, we understand what it takes to make brands shine.</p>`,
  `<h3>Industry Expertise</h3>
     <p>Industry ExpertiseWith experience across multiple sectors, we understand what it takes to make brands shine.</p>`,
];

for (let i = 0; i < visibleCardCount; i++) {
  const card = document.createElement("div");
  card.className = "port-card";
  container.appendChild(card);
  cards.push(card);
}

let activeIndex = 0;

function calculateXPositions() {
  const screenWidth = window.innerWidth;
  const cardWidth = 250;
  const halfCard = cardWidth / 2;

  return [
    0,
    screenWidth * 0.25,
    screenWidth * 0.5,
    screenWidth * 0.75,
    screenWidth * 1,
  ];
}

function getYForIndex(index) {
  const screenHeight = window.innerHeight;
  const waveY = screenHeight * 0.45;
  const offset = [-186, 218, -186, 218, -186];
  return waveY + offset[index];
}

let positions = calculateXPositions();

function render() {
  for (let i = 0; i < visibleCardCount; i++) {
    const card = cards[i];
    const logicalIdx =
      (activeIndex + i - 2 + contentTemplates.length) % contentTemplates.length;

    const x = positions[i];
    const y = getYForIndex(i);
    const isCenter = i === 2;

    card.style.left = `${x}px`;
    card.style.top = `${y}px`;
    card.style.transform = `translate(-50%, -50%) scale(${isCenter ? 1 : 0.9})`;
    card.style.opacity = isCenter ? 1 : 0.6;
    card.style.zIndex = isCenter ? 10 : 1;
    card.innerHTML = contentTemplates[logicalIdx];
  }
}

function slide(direction) {
  activeIndex =
    (activeIndex + direction + contentTemplates.length) %
    contentTemplates.length;
  render();
}

document.getElementById("prevBtn").addEventListener("click", () => slide(-1));
document.getElementById("nextBtn").addEventListener("click", () => slide(1));
window.addEventListener("resize", () => {
  positions = calculateXPositions();
  render();
});

render();
