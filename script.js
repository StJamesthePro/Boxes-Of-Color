console.log('linked-up')

//select the boxes

let box = document.querySelectorAll(".box")

// log it to see it worked and what it returns

console.log(box)

//iterate over the provided boxes and apply a function that makes it red

box.forEach(box => box.addEventListener('click', function () {
    box.style.backgroundColor = 'red';
}
))





//select the button

let newColor = document.querySelectorAll("button")

// itterates over the button list

newColor.forEach(newColor => newColor.addEventListener('click', () => {
    console.log(`you selected ${newColor.innerText}`)
    console.log(newColor.innerText)
    return newColor.innerText
}
))


// console.log(newColor.innerText)
//provide a function that selects a new function based on the result of this function ^^

// switch (newColor.innerText) {
//     case 'red':
//         box.forEach(box => box.addEventListener('click', function () {
//             box.style.backgroundColor = 'red';
//         }
//         ));
//         break;
//     case 'yellow':
//         box.forEach(box => box.addEventListener('click', function () {
//             box.style.backgroundColor = 'yellow';
//         }
//         ));
//         break;
//     case 'green':
//         box.forEach(box => box.addEventListener('click', function () {
//             box.style.backgroundColor = 'green';
//         }
//         ));
//         break;
//     case 'blue':
//         box.forEach(box => box.addEventListener('click', function () {
//             box.style.backgroundColor = 'blue';
//         }
//         ));
//         break;
// }

let currentColor = ''

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")

button1.addEventListener('click', function () {
    currentColor = "red"
})
button2.addEventListener('click', function () {
    currentColor = "yellow"
})
button3.addEventListener('click', function () {
    currentColor = "green"
})
button4.addEventListener('click', function () {
    currentColor = "blue"
})

box.forEach(box => box.addEventListener('click', function () {
    box.style.backgroundColor = currentColor;
}
))

let RandoBox = document.getElementById('randobutton')

// let letters = "0123456789ABCDEF";

RandoBox.addEventListener('click', function () {

    var color = '#';
    // storing all letter and digit combinations
    // for html color code
    var letters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    // html color code starts with #


    // generating 6 times as HTML color code consist
    // of 6 letter or digits
    for (var i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))]
            ;

    console.log(color);

    currentColor = color
})