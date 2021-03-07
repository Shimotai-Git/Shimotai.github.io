let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/kinopio.jpg') {
        myImage.setAttribute ('src','images/jinx.jpg');
    } else {
        myImage.setAttribute ('src','images/kinopio.jpg')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('あなたの名前を入力してください。');
    if(!myName || myName === 'null') {
        setUserName();
    } else {
        localStorage.setItem('name', myName)
    }
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Habit Clicker はすばらしいよ、' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Habit Clicker はすばらしいよ、' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
/*
document.querySelector('html').onclick = function() {
    alert(('痛っ！つつくのはやめて！'))
}
*/