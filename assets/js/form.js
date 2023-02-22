let button = document.getElementById("my-form-button")
// start of script to prevent form submit new tab
window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  let form = document.getElementById("my-form")

  let status = document.getElementById("my-form-status")

  // Success and Error functions for after the form is submitted
  let statusStyles = ""
  function success() {
    form.reset()
    button.style = "display: none "
    status.style = "display: block;"
    status.innerHTML = "Thanks for the message! I'll be in touch ASAP! 🚀"
  }

  function error() {
    status.innerHTML = "Oops! There was a problem."
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    var data = new FormData(form)
    ajax(form.method, form.action, data, success, error)
  })
})

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.setRequestHeader("Accept", "application/json")
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType)
    } else {
      error(xhr.status, xhr.response, xhr.responseType)
    }
  }
  xhr.send(data)
}
// end of script to prevent form submit new tab

const names = document.querySelectorAll(".name")

// let typed = new Typed('#typed', {
//   strings: ["Let's build something beautiful.", "Let's build something exciting.", "Let's build something together."],
//   typeSpeed: 40,
//   smartBackspace: true // Default value
// });

// Hide submit button if form is unchecked
let box = document.querySelector("#my-form input.checkbox")

setInterval(() => {
  if (!box.checked) {
    button.setAttribute("disabled", "disabled")
  } else {
    button.removeAttribute("disabled")
  }
}, 100)
