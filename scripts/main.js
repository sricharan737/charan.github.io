document.querySelector('h1').onclick = function(){
    alert('This is the main heading');
}

document.querySelector('p').onclick = function(){
    alert('This is a paragraph');
}

document.querySelector('h4').onclick = function(){
    alert('This is a different heading');
}

document.querySelector('li').onclick = function(){
    alert('This a list');
}

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    let myHeading = document. querySelector('h1');
    if(mySrc==='images/emily.png'){
    myImage.setAttribute('src','images/corvo.png');
    myHeading.textContent = 'Corvo Attano';
    }else{
        myImage.setAttribute('src','images/emily.png');
        myHeading.textContent = 'Emily Attano';
    }    
    }

let myButton = document.querySelector('button');
let myHeading1 = document.querySelector('h5');

function setUsername() {
    let myName = prompt('Please enter your Username:-');
    localStorage.setItem('name',myName);
    myHeading1.textContent = 'signed in as ' +myName;
}
if(!localStorage.getItem('name')){
    setUsername();
    }else{
        let storedName = localStorage.getItem('name');
        myHeading1.textContent = 'signed in as ' +storedName;
    }

myButton.onclick = function() {
    setUsername();
}