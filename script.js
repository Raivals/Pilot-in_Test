const items = document.querySelectorAll(".trust_card")
const nbSlide = items.length
const next = document.querySelector(".next_screen")
const next1 = document.querySelector(".next_screen1")
const next2 = document.querySelector(".next_screen2")
const previous = document.querySelector(".prev_screen")
const previous1 = document.querySelector(".prev_screen1")
const previous2 = document.querySelector(".prev_screen2")
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
next1.addEventListener("click", nextSlide)
next2.addEventListener("click", nextSlide)

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
previous1.addEventListener("click", prevSlide)
previous2.addEventListener("click", prevSlide)

// Truncate string

const titles = document.querySelectorAll(".article_explication")

titles.forEach((title) => {
  truncateString(title.innerHTML, 107, title)
})

const texts = document.querySelectorAll(".article_description")
texts.forEach((text) => {
  truncateString(text.innerHTML, 320, text)
})

function truncateString(str, num, elt) {
  if (str.length <= num) {
    return (elt.innerHTML = str)
  } else {
    return (elt.innerHTML = str.slice(0, num).concat("..."))
  }
}
