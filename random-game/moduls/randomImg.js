
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

  createImg(arrImg);
}

export function createImg (arr) {
console.log(arr)

let wrapMain = document.querySelector('.wrapMain');
for(let i = 0; i < 18; i++) {
  let img = document.createElement('img');
  img.classList.add('cartFone');
  img.alt = 'image';
  img.src = "assets/image/fonCart.jpg";
  wrapMain.append(img);
}

}