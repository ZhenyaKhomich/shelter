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
let car = 8;
let cal = 6;

let c = [[{name: 'sdsd'}],[{name:'fff'}],[],[],[]]

function aaa(arr) {
  return arr.filter(el => el.length > 0 );
}

console.log(aaa(c));

if(size > 768) {
  car = 8;
  cal = 6; 
  console.log(initCarts (pets));
  carts(allCarts[0]);
  colCarts(car, cal);
  
}
if(size <= 768 && size > 600){
  car = 6;
  cal = 8;
  console.log(initCarts (pets));
  
  carts(allCarts[0]);
  colCarts(8, 6);
  colCarts(car, cal);
 } else if (size < 600) {
  car = 3;
  cal = 16;
  console.log(initCarts (pets));
  allCarts = aaa(allCarts);
  carts(allCarts[0]);
  colCarts(6, 8);
  colCarts(car, cal);
 }

console.log(size);
console.log(car);
console.log(cal);
console.log(size);







 //не доделал ее!!!!!!

function initCarts (pets) {
  for(let j = 0; j < 6; j++) {
    onePageCarts=[];

    if(allCarts.length == 1 || allCarts.length == 4) {
    
      let last = allCarts[j-1][allCarts[j-1].length-1];
      let last2 = allCarts[j-1][allCarts[j-1].length-2];

       onePageCarts.push(last2);
       onePageCarts.push(last);
    } else if (allCarts.length == 2 || allCarts.length == 5) {
      let last = allCarts[j-1][allCarts[j-1].length-1];
      let last2 = allCarts[j-1][allCarts[j-1].length-2];
      let last3 = allCarts[j-2][allCarts[j-2].length-1];
      let last4 = allCarts[j-2][allCarts[j-2].length-2];

      onePageCarts.push(last);
      onePageCarts.push(last4);
      onePageCarts.push(last2);
      onePageCarts.push(last3);
    }

    for(let i = 0; i < 8; i++) {
      let random = Math.floor(Math.random() * pets.length);
      if(allCarts.length == 0 || allCarts.length == 3) {
        if(!onePageCarts.includes(pets[random])) {
          onePageCarts.push(pets[random]);
        } else if(onePageCarts.length == 8) {
          allCarts.push(onePageCarts);
          console.log(allCarts[0]);
          break;
        } 
        else {
          i--;
          continue;
        } 
      } else if(allCarts.length < 9) {

        if (onePageCarts.length < 8 && onePageCarts.length > 1) {
          if(!onePageCarts.includes(pets[random])) {
            onePageCarts.push(pets[random]);
          } 
          else if(onePageCarts.length == 8) {
            allCarts.push(onePageCarts);
            console.log(allCarts[0]);
            break;
          }  else {
            i--;
            continue;
          } 
        }
      } else {
        i = 8;
      }
    }
    allCarts.push(onePageCarts);
  }
return allCarts;
}
// console.log(initCarts (pets));

// carts(allCarts[0])


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
  console.log(allCarts);
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




function oneElem(arr) {
  let k = arr.filter(el => arr.indexOf(el) == 1);
  arr.splice(1, 1);
return k[0];
}


function colCarts(car, cal) {

  let a = [];
  // let b = [];
  for(let i = 0; i < cal; i++) {

    if(allCarts[i].length > car) {
    
// debugger
    if(allCarts[i].length == car) {
      continue;
    } else {
      while(allCarts[i].length > car) {
        let last = allCarts[i][allCarts[i].length-1];
        console.log(last['name']);
        if(a.length == 0) {
          a.push(allCarts[i].pop());
        } else if(!a.includes(last)) {
        a.push(allCarts[i].pop());
        console.log(allCarts)
      } else {
        colCarts(car, cal);
      }
     
        
        if(a.length == car) {
          allCarts.push(a);
          a = [];
          console.log(allCarts)
        
        } 
     
      }

    }

      



    } else if(allCarts[i].length < car) {
    // debugger;
    console.log(allCarts[i].length)
      while(allCarts[i].length < car) { 

        if(car == 8) {
          let k = 0;
          let y = 1;
          if(i > 2) {
            k = 1;
          }
          while(allCarts[cal+k].length !== 0){
            // debugger
            if(allCarts[i].length < car) {
              // allCarts[i].push(allCarts[cal+k].shift());
              allCarts[i].push(oneElem(allCarts[cal+k]));
              console.log(allCarts[cal+k][0])
              allCarts[i].push(allCarts[cal+k].shift());
            } else if (allCarts[i + y].length < car) {
              allCarts[i + y].push(oneElem(allCarts[cal+k]));
              allCarts[i + y].push(allCarts[cal+k].shift());
            } else if(allCarts[cal+k].length == 0) {
              k = 1;
            }
            else {
               y++;
               continue;
            }
          }



        } 
        
      else if(allCarts[cal+i].length !== 0) {
          let y = 1;
          while(allCarts[cal+i].length !== 0){
            if(allCarts[i].length < car) {
              allCarts[i].push(allCarts[cal+i].pop());
            } else if (allCarts[i + y].length < car) {
              allCarts[i + y].push(allCarts[cal+i].shift());
            } else {
               y++;
            }
             
            // при загрузке 320 загружается 15 или 14 обьектов, где то
            
          }
          
          //  if (i == cal) {
          //   allCarts.splice(cal, 1);
          //   console.log(allCarts);
          // }

        } else {
          allCarts[i].push(allCarts[cal+i].shift());
        }

      } 
      
      // if (allCarts[cal].length == 0) {
      //   allCarts.splice(cal, 1);
      //   console.log(allCarts.splice(cal+1, 1))
      // }
    } else if (i == cal) {
      allCarts.splice(cal, 1);
      console.log(allCarts);
    } else {
      continue;
    }
  }
  console.log(aaa(allCarts))

 allCarts = aaa(allCarts);
 console.log(allCarts);
  let cart = document.body.querySelectorAll('.cart');
  cart.forEach(el=>el.remove());
  carts(allCarts[0]);
  num = 0;
  figure.textContent = num + 1;
  console.log(allCarts)
  
}



window.addEventListener('resize', () => {
 size = window.innerWidth;
 console.log(size);
 if( size > 768 ) {
  // let cart = document.body.querySelectorAll('.cart');
  // cart.forEach(el=>el.remove());
  car = 8;
  cal = 6;
  colCarts(car, cal);
  // allCarts = [];
  // initCarts (pets);
  // carts(allCarts[0]);
  // num = 0;
  // figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
 } else if(size <= 768 && size >= 600){

  // let cart = document.body.querySelectorAll('.cart');
  // cart.forEach(el=>el.remove());
  car = 6;
  cal = 8;

  colCarts(car, cal);
  // console.log(allCarts);
  // allCarts = [];
  // initCarts (pets);
  // carts(allCarts[0]);
  // num = 0;
  // figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
 }
 
 else if (size <= 600 && size >=320) {
  // let cart = document.body.querySelectorAll('.cart');
  // cart.forEach(el=>el.remove());
  car = 3;
  cal = 16;
  colCarts(car, cal);
  // allCarts = [];
  // initCarts (pets);
  // carts(allCarts[0]);
  // num = 0;
  // figure.textContent = num + 1;
  butsNext.forEach(el=>el.classList.remove('inactive'));
  butsLast.forEach(el=>el.classList.add('inactive'));
 }  
})





