//star

var star = document.querySelectorAll('.star');
var starIcon = document.querySelector('.glyphicon-star');

for (i = 0; i < star.length; i++) {
  star[i].addEventListener('click', addStar);
}

function addStar() {
  var x = this.firstChild.innerHTML;
  var starScore = parseInt(x);
  if (this.childNodes[1].classList.contains('star-active') == false) {
    this.childNodes[1].classList.add('star-active');
    starScore += 1;
    this.firstChild.innerHTML = starScore;
  } else {
    this.childNodes[1].classList.remove('star-active');
    starScore -= 1;
    this.firstChild.innerHTML = starScore;

  }
}


//scrollTop
var elBody = document.querySelector('body'),
  buttonTop = document.querySelector('.back');
buttonTop.addEventListener('click', goTop);

function goTop() {
  elBody.scrollTop = 0;
}


//menu

var navbars = document.querySelector('.nav-bars'),
    menu = document.querySelector('nav');

navbars.addEventListener('click',displayMenu);

function displayMenu(){
  console.log(navbars.innerHTML);
  if ( menu.style.display == 'block') {
     navbars.innerHTML='<i class="fa fa-bars" aria-hidden="true"></i>';
           menu.style.display = "none"
   } else {
     navbars.innerHTML='<i class="fa fa-times" aria-hidden="true"></i>';
     menu.style.display = "block"
   
   }
 
}


