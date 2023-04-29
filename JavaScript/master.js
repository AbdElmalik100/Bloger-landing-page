let links = document.querySelectorAll(".links .link")
let arrowIcon = document.querySelectorAll(".link i")
let dropDownList = document.querySelectorAll("#dl")
links.forEach(link => {
    link.addEventListener("click", (e) => {
        links.forEach(li => {li.classList.remove("active")})
        arrowIcon.forEach(i => {i.classList.remove("open")})
        dropDownList.forEach(dl => {dl.classList.remove("open")})

        e.target.classList.add("active")
        e.target.childNodes[3].classList.add("open")

        if (e.target.dataset.link === e.target.childNodes[5].className) {
            document.querySelector(`.${e.target.dataset.link}`).classList.toggle("open")
        }

        window.onclick = (ev) => {
            if (ev.target !== e.target) {
                e.target.classList.remove("active")
                e.target.childNodes[3].classList.remove("open")
                document.querySelector(`.${e.target.dataset.link}`).classList.remove("open")
            }
        }
    })
})



// Burger Icon Handling

let burgerIcon = document.querySelector(".burger-icon")
let closeIcon = document.querySelector(".close-icon")
let phoneLinks = document.querySelector(".header nav")

burgerIcon.addEventListener("click" , (e) => {
    e.target.classList.add("active")
    closeIcon.classList.add("active")
    phoneLinks.classList.add("active")
})

closeIcon.addEventListener("click", (e) => {
    closeIcon.classList.remove("active")
    burgerIcon.classList.remove("active")
    phoneLinks.classList.remove("active")
}) 


