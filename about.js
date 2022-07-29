console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form has been submitted successfully!')
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

/////// DUCK MOUSEOVER ////////
let duck = document.querySelector('.duck')
duck.addEventListener('mouseover', () => {
	alert('Good job for noticing this awesome cape I have on!')
})