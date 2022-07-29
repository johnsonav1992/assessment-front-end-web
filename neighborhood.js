let restaurantButton = document.querySelector('.restaurant-button')
let restNotification = document.createElement('h1')
let body = document.querySelector('body')
    restNotification.classList.add('rest-notification')
    restNotification.classList.add('hide')
    body.append(restNotification)

restaurantButton.addEventListener('click', () => {
    let restaurants = document.querySelectorAll('.p-links')
    console.log(restaurants)

    let randomRestaurant = Math.floor(Math.random() * restaurants.length)
    let randomChosenRestaurant = restaurants[randomRestaurant]
    
    restNotification.textContent = `You should go eat at ${randomChosenRestaurant.innerHTML}!`
    restNotification.classList.remove('hide')
    setTimeout(() => {
        restNotification.classList.add('hide')
    }, 2000)
    setTimeout(() => {
    window.open(randomChosenRestaurant.href, 'blank')
}, 2000)
})
