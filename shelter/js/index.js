const pets = [
    {
      name: "Katrine",
      img: "assets/img/pets-katrine.png",
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
      img: "assets/img/pets-jennifer.png",
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
      img: "assets/img/pets-woody.png",
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
      img: "assets/img/pets-sopia.png",
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
      img: "assets/img/pets-timmy.png",
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
      img: "assets/img/pets-charly.png",
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
      img: "assets/img/pets-scarlet.png",
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
      img: "assets/img/pets-freddie.png",
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

    document.body.addEventListener('click', function(event) {
        
        if(!event.target.closest('nav')) {
        burg.classList.remove('openBurg');
        menu.classList.remove('openMenu');
        dar.classList.remove('dark');
    }  
    })

    document.body.addEventListener('click', function(event) {
        
        if(event.target.closest('.menu')) {
        burg.classList.remove('openBurg');
        menu.classList.remove('openMenu');
        dar.classList.remove('dark');
        document.body.style.overflow = 'visible';
        }  
    })
})

// случайные карточки, при загрузке и нажатии на кнопки

let currentSlide = [];
let lastSlide = [];  
let count = 0;
let minus = 0

function a(pets) {
  lastSlide = [];

  for(let i = 0; i < currentSlide.length; i++) {
    lastSlide.push(currentSlide[i]);
  }

  let pets2 = pets.filter(pet => !lastSlide.includes(pet));

  currentSlide = [];

  for(let i = 0; i < 3; i++) {
    let k = Math.floor(Math.random() * pets.length);
    for(let j = 0; j < 3; j++) {
      if(currentSlide.length == 3) {
        break;
      }  else {
        let p = Math.floor(Math.random() * pets2.length);
        for(let k = 0; k < 3; k++) {
        if(currentSlide.length == 0) {
          currentSlide.push(pets2[p]);
          break;
        } else if(currentSlide[k]['name'] === pets2[p]['name']) {
          --i;
          break;
        } else if (currentSlide[currentSlide.length - 1]['name'] !== pets2[p]['name']) {
        currentSlide.push(pets2[p]);
      break;
        } else if (currentSlide[k]['name'] !== pets2[p]['name']) {
          continue;
        }
      }
      }
    }
  }

  return carts(currentSlide);
}

a(pets);

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

    //  вызов модального окна

    let carts = document.querySelectorAll('.cart');
    let wrapModal = document.body.querySelector('.wrapModal');
    
    wrapModal.style.display = 'none';
  
    carts.forEach((cart, index) => { 
    cart.addEventListener('click', function (event) {
      if(event.target.closest('.cart')) {
        modalWindow(currentSlide[index]);
        wrapModal.style.display = '';
        document.body.style.overflow = 'hidden'; 
      }
  
      let wrapMod = document.body.querySelector('.wrapModal');
      let modal = document.body.querySelector('.modal');
      let exit = document.querySelector('.exit');
  
      wrapMod.addEventListener('click', function (event) {
        if(!event.target.closest('.modalCart')) {
          modal.remove();
          wrapModal.style.display = 'none';
          document.body.style.overflow = ''; 
        } 
      })
  
      exit.addEventListener('click', function () {
        modal.remove();
        wrapModal.style.display = 'none';
        document.body.style.overflow = ''; 
      })
    })
  })
}

//  кнопки слайдера

let cartW = document.body.querySelector('.cart-wrap');
let prev = document.body.querySelector('.svg1');
let next = document.body.querySelector('.svg2');

next.addEventListener('click', function() {
  if(lastSlide.length == 0) { 
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('tran'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
  count++;
    },400)
  } else if (minus > 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('tran'));
    setTimeout(()=> {
      document.querySelectorAll('.cart').forEach(el => el.remove());
    currentSlide =[];
  for(let i = 0; i < lastSlide.length; i++) {
    currentSlide.push(lastSlide[i]);
  }
    carts(currentSlide);
  minus = 0;},400)
  } else if (currentSlide.length != 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('tran'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
  count++;
    },400)
  } else if(currentSlide.length == 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('tran'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
  count++;
    },400)
  } else { 
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('tran'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
  currentSlide =[];
    },400)
  for(let i = 0; i < lastSlide.length; i++) {
  currentSlide.push(lastSlide[i]);
  }
    carts(currentSlide);
    lastSlide=[];
    currentSlide = [];;
  }
})

prev.addEventListener('click', function() {
  if(lastSlide.length == 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('ent'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
    },400) 
    ++minus;
    console.log(minus)
  } else if (count > 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('ent'));
    setTimeout(()=> {
      document.querySelectorAll('.cart').forEach(el => el.remove());
    currentSlide =[];
  for(let i = 0; i < lastSlide.length; i++) {
    currentSlide.push(lastSlide[i]);
  }
    carts(currentSlide);
  count = 0;},400)
  } else if (lastSlide.length != 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('ent'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
    },400)
    ++minus;
  } else if(currentSlide.length == 0) {
    let cartWrap = document.querySelectorAll('.cart');
    cartWrap.forEach(el=>el.classList.add('ent'));
    setTimeout(()=> {
cartWrap.forEach(el => el.remove());
  a(pets);
    },400)
    ++minus;
  } 
})

//  модальное окно

function modalWindow(arr) {
  let wrapModal = document.body.querySelector('.wrapModal')
  
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let exit = document.createElement('div');
  exit.classList.add('exit');
  exit.insertAdjacentHTML("afterbegin", `<svg class ='ex' width="52" height="52" viewBox="0 0 52 52"   xmlns="http://www.w3.org/2000/svg">
  <rect class="rect" x="1" y="1" width="50" height="50" rx="25" stroke="#F1CDB3" stroke-width="2"/>
  <path class="path" fill-rule="evenodd" clip-rule="evenodd" d="M27.4262 26L31.7046 21.7216C32.0985 21.3277 32.0985 20.6892 31.7046 20.2954C31.3108 19.9016 30.6723 19.9016 30.2785 20.2954L26 24.5739L21.7215 20.2954C21.3276 19.9015 20.6892 19.9015 20.2953 20.2954C19.9016 20.6892 19.9016 21.3277 20.2953 21.7215L24.5738 26L20.2953 30.2785C19.9016 30.6723 19.9016 31.3108 20.2953 31.7046C20.6892 32.0985 21.3276 32.0985 21.7215 31.7046L26 27.4261L30.2785 31.7046C30.6723 32.0985 31.3108 32.0985 31.7046 31.7046C32.0985 31.3108 32.0985 30.6723 31.7046 30.2785L27.4262 26Z" fill="#292929"/>
  </svg>`);

  modal.append(exit);

  let modalCart = document.createElement('div');
  modalCart.classList.add('modalCart');

  let picture = document.createElement('div');
  picture.classList.add('picture');

  let img = document.createElement('img');
  img.src = arr.img;
  img.alt = `dog ${arr.name}`;

  picture.append(img);

  modalCart.append(picture);

  let information = document.createElement('div');
  information.classList.add('information');

  let nameType = document.createElement('div');
  nameType.classList.add('nameType');

  let name = document.createElement('div');
  name.classList.add('name');

  let h2 = document.createElement('h2');
  h2.textContent = arr.name;

  name.append(h2);
  nameType.append(name);

  let type = document.createElement('div');
  type.classList.add('type');

  let typeP = document.createElement('p');
  typeP.textContent = `${arr.type} - ${arr.breed}`;

  type.append(typeP);
  nameType.append(type);

  information.append(nameType);

  let description = document.createElement('div');
  description.classList.add('description');

  let desP = document.createElement('p');
  desP.textContent = `${arr.description}`;

  description.append(desP);
  information.append(description);

  let dopInfo = document.createElement('div');
  dopInfo.classList.add('dopInfo');

  let ul = document.createElement('ul');

  let li1 = document.createElement('li');
  li1.textContent = `${arr.age}`
  let span1 = document.createElement('span');
  span1.textContent = 'Age: ';

  let li2 = document.createElement('li');
  li2.textContent = `${arr.inoculations}`
  let span2 = document.createElement('span');
  span2.textContent = 'Inoculations: ';

  let li3 = document.createElement('li');
  li3.textContent = `${arr.diseases}`
  let span3 = document.createElement('span');
  span3.textContent = 'Diseases: ';

  let li4 = document.createElement('li');
  li4.textContent = `${arr.parasites}`
  let span4 = document.createElement('span');
  span4.textContent = 'Parasites: ' ;

  li1.prepend(span1);
  li2.prepend(span2);
  li3.prepend(span3);
  li4.prepend(span4);

  ul.append(li1);
  ul.append(li2);
  ul.append(li3);
  ul.append(li4);

  dopInfo.append(ul);

  information.append(dopInfo);

  modalCart.append(information);

  modal.append(modalCart);

  wrapModal.append(modal);
}


console.log('Если вдруг возникли какие-то вопросы, напишите мне, обсудим их. Заранее спасибо.');