

let restaurantButton = document.querySelector('.restaurant-button')
let restNotification = document.createElement('h1')
let body = document.querySelector('body')
    restNotification.classList.add('rest-notification')
    restNotification.classList.add('hide')
    body.append(restNotification)

restaurantButton.addEventListener('click', () => {
    let restaurants = ['Simply Thai', 'WhoDaq', 'IHOP', "Lupe's Tex-Mex & Grill", 'Waffle House', "Niki's Italian Bistro"]

    let randomRestaurant = Math.floor(Math.random() * restaurants.length)
    console.log(randomRestaurant)

    let randomChosenRestaurant = restaurants[randomRestaurant]
    console.log(randomChosenRestaurant)
    restNotification.textContent = `You should go eat at ${randomChosenRestaurant}!`
    restNotification.classList.remove('hide')
    setTimeout(() => {
        restNotification.classList.add('hide')
    }, 2000)
})
