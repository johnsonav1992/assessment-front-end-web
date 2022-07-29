///// SELECT BUTTONS & ADD EVENT LISTENERS/////

let colorButton = document.querySelector('#color')
let placeButton = document.querySelector('#place')
let ritualButton = document.querySelector('#ritual')

colorButton.addEventListener('click', () => {
    alert('My favorite color is red!')
})

placeButton.addEventListener('click', () => {
    thaiFoodModal.classList.remove('hide')
    setTimeout(() => {
        thaiFoodModal.classList.add('hide')
    }, 3500)
    alert('My favorite place is anywhere I can eat Thai Food.')
})

ritualButton.addEventListener('click', () => {
    alert('My favorite ritual is getting out and enjoying the mow.')
})

let thaiFoodModal = document.createElement('div')
let body = document.querySelector('body')
thaiFoodModal.classList.add('thai-modal')
thaiFoodModal.classList.add('hide')
body.append(thaiFoodModal)
thaiFoodModal.textContent = "Pad Thai! YUM!!"




