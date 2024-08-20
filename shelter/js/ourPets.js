const pets = [
    {
      name: "Katrine",
      img: "../assets/img/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Jennifer",
      img: "../assets/img/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Woody",
      img: "../assets/img/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
    },
    {
      name: "Sophia",
      img: "../assets/img/pets-sopia.png",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Timmy",
      img: "../assets/img/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
    },
    {
      name: "Charly",
      img: "../assets/img/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
    },
    {
      name: "Scarlett",
      img: "../assets/img/pets-scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
    },
    {
      name: "Freddie",
      img: "../assets/img/pets-freddie.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
    },
  ];

//  бургер меню
document.addEventListener('DOMContentLoaded', function() {

    let burg = document.body.querySelector('.burg');
    let menu = document.body.querySelector('.menu');
    let dar = document.body.querySelector('.dar');

    burg.classList.remove('openBurg');
    menu.classList.remove('openMenu');
    dar.classList.remove('dark');

    burg.addEventListener('click', function() {
        burg.classList.toggle('openBurg');
        menu.classList.toggle('openMenu');
        dar.classList.toggle('dark');

        if(burg.className == 'burg openBurg') {
          document.body.style.overflow = 'hidden'; 
        } else {
            document.body.style.overflow = 'visible';
        }
    })

    document.body.addEventListener('click', function() {
        
        if(!event.target.closest('nav')) {
        burg.classList.remove('openBurg');
        menu.classList.remove('openMenu');
        dar.classList.remove('dark');
    }  
    })

    document.body.addEventListener('click', function() {
        
        if(event.target.classList == 'li') {
        burg.classList.remove('openBurg');
        menu.classList.remove('openMenu');
        dar.classList.remove('dark');
        }  
    })
})

// инициализация карточки

function carts(arr) {
    let cartWrap = document.querySelector('.cart-wrap');

    arr.forEach(el => {
        let cart = document.createElement('div');
        cart.classList.add('cart');

        let imgCart = document.createElement('div');
        imgCart.classList.add('img-cart');

        let img = document.createElement('img');
        img.src = el.img;
        img.alt = `dog ${el.name}`;

        imgCart.append(img);
        cart.append(imgCart);

        let textOur = document.createElement('div');
        textOur.classList.add('text-our');

        let nameDog = document.createElement('div');
        nameDog.classList.add('name-dog');

        let p = document.createElement('p');
        p.textContent = el.name;

        nameDog.append(p);
        textOur.append(nameDog);

        let button = document.createElement('button');
        button.textContent = 'Learn more';

        textOur.append(button);

        cart.append(textOur);

        cartWrap.append(cart);
    })
}

// carts(pets);
let figure = document.body.querySelector('.svg3');
let size = window.innerWidth;
let currentSlide = [];
let lastSlide = [];
let lastNext = [];
let lastPrev = [];
let allCarts = [];
let onePageCarts = [];
let num = 0;
let cart = 8;
let cal = 6;

if(size > 768) {
  cart = 8;
  cal = 6; 
}
if(size <= 768 && size > 600){
  cart = 6;
  cal = 8;
 } else if (size < 600) {
  cart = 3;
  cal = 16;
 }

function initCarts (pets) {
  for(let j = 0; j < cal; j++) {
    onePageCarts=[];
    for(let i = 0; i < cart; i++) {
      let random = Math.floor(Math.random() * pets.length);
    
      if(!onePageCarts.includes(pets[random])) {
        onePageCarts.push(pets[random]);
        // console.log( onePageCarts);
      } else {
        i--;
        continue;
      }
    }
    allCarts.push(onePageCarts);
  }
return allCarts;
}
console.log(initCarts (pets));

carts(allCarts[0])

let prevLast = document.body.querySelector('.svg1');
let last = document.body.querySelector('.svg2');
let next = document.body.querySelector('.svg4');
let nextLast = document.body.querySelector('.svg5');
let butsLast = document.body.querySelectorAll('.in');
let butsNext = document.body.querySelectorAll('.out');

nextLast.addEventListener('click', function() {
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  num = 5;
  carts(allCarts[num]);
  figure.textContent = cal;
  butsNext.forEach(el=>el.classList.add('inactive'));
  butsLast.forEach(el=>el.classList.remove('inactive'));
})

next.addEventListener('click', function() {
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  ++num;
  carts(allCarts[num]);
  figure.textContent = num + 1;
  if(num >= cal-1 ) {
    butsNext.forEach(el=>el.classList.add('inactive'));
  } else if (num > 0) {
    butsLast.forEach(el=>el.classList.remove('inactive'));
  } 
})

prevLast.addEventListener('click', function() {
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  num = 0;
  carts(allCarts[num]);
  figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
})

last.addEventListener('click', function() {
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  --num;
  carts(allCarts[num]);
  figure.textContent = num + 1;
  if(num < cal-1 ) {
    butsNext.forEach(el=>el.classList.remove('inactive'));
  }
  if (num <= 0) {
    butsLast.forEach(el=>el.classList.add('inactive'));
  }
})






window.addEventListener('resize', () => {
 size = window.innerWidth;
 console.log(size);
 if(size > 768 && size <= 800) {
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  cart = 8;
  cal = 6;
  allCarts = [];
  initCarts (pets);
  carts(allCarts[0]);
  num = 0;
  figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
 } else if (size <= 600 && size >=560) {
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  cart = 3;
  cal = 16;
  allCarts = [];
  initCarts (pets);
  carts(allCarts[0]);
  num = 0;
  figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
 } else if(size <= 768 && size >= 748){
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  cart = 6;
  cal = 8;
  allCarts = [];
  initCarts (pets);
  carts(allCarts[0]);
  num = 0;
  figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
 } 
})





