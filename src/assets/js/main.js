// Mobile menu
const nav = document.querySelector("nav.top")
const menuBtn = document.querySelector(".menu-btn")
const links = document.getElementById("nav-links")

function setMenu(open) {
  links.classList.toggle("open", open)
  menuBtn.setAttribute("aria-expanded", String(open))
  menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu")
}

menuBtn.addEventListener("click", () => setMenu(!links.classList.contains("open")))
links.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false) })
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setMenu(false) })

// Nav border once the page scrolls
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8)
window.addEventListener("scroll", onScroll, { passive: true })
onScroll()

// Reveal sections as they scroll into view
const reveals = document.querySelectorAll(".reveal")
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in")
        io.unobserve(entry.target)
      }
    })
  }, { rootMargin: "0px 0px -60px 0px" })
  reveals.forEach((el) => io.observe(el))
} else {
  reveals.forEach((el) => el.classList.add("in"))
}

// Contact form (Formspree) without leaving the page
const form = document.getElementById("contact-form")

if (form) {
  const status = form.querySelector(".status")
  const submit = form.querySelector("button[type=submit]")

  form.addEventListener("submit", async (e) => {
    e.preventDefault()
    submit.disabled = true
    status.className = "status"
    status.textContent = "Sending…"

    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
      if (!res.ok) throw new Error(res.status)
      form.reset()
      status.classList.add("ok")
      status.textContent = "Thanks! Your message is on its way, and I'll be in touch soon. 🚀"
    } catch {
      status.classList.add("err")
      status.textContent = "Something went wrong. Please try again or email barkley.santo@gmail.com."
    } finally {
      submit.disabled = false
    }
  })
}

document.getElementById("year").textContent = new Date().getFullYear()
