export const data = [
  {
    img: "assets/image/img0.jpg",
    num: '0',
  },
  {
    img: "assets/image/img1.jpg",
    num: '1',
  },
  {
    img: "assets/image/img2.jpg",
    num: '2',
  },
  {
    img: "assets/image/img3.jpg",
    num: '3',
  },
  {
    img: "assets/image/img4.jpg",
    num: '4',
  },
  {
    img: "assets/image/img5.jpg",
    num: '5',
  },
  {
    img: "assets/image/img6.jpg",
    num: '6',
  },
  {
    img: "assets/image/img7.jpg",
    num: '7',
  },
  {
    img: "assets/image/img8.jpg",
    num: '8',
  },
  {
    img: "assets/image/img9.jpg",
    num: '9',
  },
  {
    img: "assets/image/img10.jpg",
    num: '10',
  },
  {
    img: "assets/image/img11.jpg",
    num: '11',
  },
  {
    img: "assets/image/img12.jpg",
    num: '12',
  },
  {
    img: "assets/image/img13.jpg",
    num: '13',
  },
  {
    img: "assets/image/img14.jpg",
    num: '14',
  },
  {
    img: "assets/image/img15.jpg",
    num: '15',
  },
  {
    img: "assets/image/img16.jpg",
    num: '16',
  },
]


export function randomArrays (arr) {

  let firstArray = [];
  let secondArray = [];
  let arrayImg = [];
  let set = new Set();

  while(firstArray.length < 9) {
    let a = Math.floor(Math.random() * arr.length);
    set.add(arr[a]);
    firstArray = Array.from(set);
  }

  set.clear()

  while(secondArray.length < 9) {
    let a = Math.floor(Math.random() * firstArray.length);
    set.add(firstArray[a]);
    secondArray = Array.from(set);
  }

  let arrImg = arrayImg.concat(firstArray, secondArray);
  return arrImg;
}

export function createImg (arr, count) {
  let wrapMain = document.querySelector('.wrapMain');
  for(let i = 0; i < 18; i++) {
    count = 0;
    let img = document.createElement('img');
    img.classList.add('cartFone');
    img.classList.add('disabl');
    img.alt = 'image';
    img.src = `${arr[i].img}`;
    img.setAttribute('num', `${i}`);
    img.setAttribute('dataNum', `${arr[i].num}`);
    wrapMain.append(img);
  }
}
