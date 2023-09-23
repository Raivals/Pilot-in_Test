/* navbar on scroll */

/* navbar smartphone */
let nav_toggle = document.querySelector(".fa-bars")

let nav_menu = document.querySelector(".navbar_ul")

nav_toggle.addEventListener("click", () => {
  nav_menu.classList.toggle("active")
})

// Maint title animation
const txtAnim = document.querySelector("h1")

new Typewriter(txtAnim, {
  loop: true,
  deleteSpeed: 20,
})
  .changeDelay(50)
  .typeString(
    'Meet the future of your <span style="color: #26c1d9">organization</span> today',
  )
  .pauseFor(10000)
  .deleteChars(50)
  .start()

/**
 * calcul la position de l'élément par rapport au haut de la page
 * @param {HTMLElement} element
 * @returns {number}
 */
function offsetTop(element, acc = 0) {
  if (!element.offsetParent) {
    return offsetTop(element.offsetParent, acc + element.offsetTop)
  }
  return acc + element.offsetTop
}

// Parrallaxe effect
class Parallax {
  /**
   *
   * @param {HTMLElement} element
   */
  constructor(element) {
    this.element = element
    this.ratio = parseFloat(element.dataset.parallax)
    this.onScroll = this.onScroll.bind(this)
    this.onIntersection = this.onIntersection.bind(this)
    this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2
    const observer = new IntersectionObserver(this.onIntersection)
    observer.observe(element)
    this.onScroll()
  }

  /**
   * @param {IntersectionObserverEntry[]} entries
   */
  onIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.addEventListener("scroll", this.onScroll)
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2
      } else {
        document.removeEventListener("scroll", this.onScroll)
      }
    }
  }

  onScroll() {
    window.requestAnimationFrame(() => {
      const screenY = window.scrollY + window.innerHeight / 2
      const diffY = this.elementY - screenY
      this.element.style.setProperty(
        "transform",
        `translateY(${diffY * -1 * this.ratio}px)`,
      )
    })
  }

  /**
   * @returns {Parallax[]}
   */
  static bind() {
    return Array.from(document.querySelectorAll(".parallax")).map((element) => {
      return new Parallax(element)
    })
  }
}

Parallax.bind()
// Caroussel

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
  truncateString(text.innerHTML, 100, text)
})

function truncateString(str, num, elt) {
  if (str.length <= num) {
    return (elt.innerHTML = str)
  } else {
    return (elt.innerHTML = str.slice(0, num).concat("..."))
  }
}
