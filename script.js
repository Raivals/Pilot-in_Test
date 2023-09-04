const items = document.querySelectorAll(".trust_card")
const nbSlide = items.length
const next = document.querySelector(".next_screen")
const previous = document.querySelector(".prev_screen")
let count = 0

function nextSlide() {
  items[count].classList.remove("active")
  // apparaitre la slide suivante
  if (count < nbSlide - 1) {
    count++
  } else {
    count = 0
  }

  items[count].classList.add("active")
}

next.addEventListener("click", nextSlide)

function prevSlide() {
  items[count].classList.remove("active")

  if (count > 0) {
    count--
  } else {
    count = nbSlide - 1
  }

  items[count].classList.add("active")
}

previous.addEventListener("click", prevSlide)
