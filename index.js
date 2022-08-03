 //animate_navigation_bar

 window.addEventListener('scroll', function (){
    let header = document.getElementById('head');
    let windowPosition = window.scrollY>0;
    header.classList.toggle('animate-nav', windowPosition);
});


// circular navigation
let menuToggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
menuToggle.onclick = function(){
menu.classList.toggle('active')
menuToggle.classList.toggle('active')
}


const list = document.querySelectorAll('li');
function activeLink(){
list.forEach((item) =>
item.classList.remove('active'));
this.classList.add('active')
}
list.forEach((item) =>
item.addEventListener('click',activeLink))

// timer
var countDownTime = new Date("Sep 1,  2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownTime - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
},1000);

// faq
const faqs = document.querySelectorAll(".faq-box")
faqs.forEach(faq => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active")
    })
})