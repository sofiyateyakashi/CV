
const button1 = document.querySelector('#button1');

button1.addEventListener('click', function() {
	alert('Здесь будет Резюме 😉')
});

const button2 = document.querySelector('#button2');

button2.addEventListener('click', function() {
	alert('Здесь будет Портфолио 😊')
})

const button3 = document.querySelector('#button3');

button3.addEventListener('click', function() {
	alert('Здесь будет фунционал когда освою javascript 🤓')
})

const button0 = document.querySelector('#title');

button0.addEventListener('click', function() {
	alert('Здесь будет фунционал когда освою javascript 🤓')
})

window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

gsap.registerPlugin(ScrollTrigger) 


