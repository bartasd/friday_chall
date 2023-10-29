// TASK 1
function getName()
{
    let name = prompt('Please enter your name:');
    return name;
}
const btn1 = document.getElementById('btn1');
const n1 = document.getElementById('n1');

btn1.addEventListener('click', function onClick() {
    btn1.classList.add('active');
    n1.innerHTML = "Hello, " + getName() + "!";
});

// TASK 2

const btn2 = document.getElementById('btn2');
const n2 = document.getElementById('n2');

btn2.addEventListener('click', function onClick() {
    btn2.classList.add('active');
    let text = prompt('Please enter some text:');
    n2.innerHTML = `&quot${text}&quot has ${text.length} symbols`;
});

// TASK 3

const btn3 = document.getElementById('btn3');
const n3 = document.getElementById('n3');

btn3.addEventListener('click', function onClick() {
    btn3.classList.add('active');
    let name = prompt('Please enter name:');
    let last_name = prompt('Please enter last name:');
    const meh = name[0].toUpperCase() + name.slice(1) + " " +  last_name[0].toUpperCase() + last_name.slice(1);
    n3.innerHTML = meh;
});

// TASK 4

const btn4 = document.getElementById('btn4');
const n4 = document.getElementById('n4');
const random = () => Math.floor(Math.random() * 6);

btn4.addEventListener('click', function onClick() {
    btn4.classList.add('active');
    n4.innerHTML = `${random()},${random()},${random()}`;
});


// TASK 5

const btn5 = document.getElementById('btn5');
const n5 = document.getElementById('n5');
const random2 = (from, to) =>  Math.floor(Math.random() * (to - from + 1) + from);

btn5.addEventListener('click', function onClick() {
    btn5.classList.add('active');
    let fr = prompt('Please enter value "from":');
    let t = prompt('Please enter value "to":');
    let lim = prompt('Please enter value "limit":');
    if (parseInt(fr) !== NaN && parseInt(t) !== NaN && parseInt(lim) !== NaN)
        {
            const arr = [];
            for (let i = 0; i < lim; i++)
                arr.push(random2(parseInt(fr), parseInt(t)));
            n5.innerHTML = arr;
        }
    else
        alert("Some/or all values are not numbers");

    n5.innerHTML = `&quot${text}&quot has ${text.length} symbols`;
});



// TASK 6

const btn6 = document.getElementById('btn6');
const n6 = document.getElementById('n6');

btn6.addEventListener('click', function onClick() {
    btn6.classList.add('active');
    let num = prompt('Please enter a number:');
    let p   = prompt('Please enter a power:');
    n6.innerHTML = `${num} ** ${p} = ${num**p}`;
});

// TASK 7

const btn7 = document.getElementById('btn7');
const n7 = document.getElementById('n7');

btn7.addEventListener('click', function onClick() {
    btn7.classList.add('active');
    let text = prompt('Please enter some text:');
    n7.innerHTML = " " + text;
});

// TASK 8

const btn8 = document.getElementById('btn8');
const n8 = document.getElementById('n8');

btn8.addEventListener('click', function onClick() {
    btn8.classList.add('active');
    let text = prompt('Please enter some text:');
    let tagNo = prompt('Please enter tag number:');
    n8.innerHTML = `<h${tagNo}>${text}</h${tagNo}>`;
});

// TASK 9

const btn9 = document.getElementById('btn9');
const n9 = document.getElementById('n9');
function isPrime(n){
    let isPrime = true;
    for(let i = 2; i < n; i++)
    {
        if(n%i === 0)
            {
                isPrime = false;
                break;
            }
    }
    return isPrime;
}
btn9.addEventListener('click', function onClick() {
    btn9.classList.add('active');
    let num = prompt('Please enter a number:');
    num = parseInt(num);
    n9.innerHTML = `${num} is${isPrime(num)?"":" not"} a prime number.`;
});

// TASK 10

const btn10 = document.getElementById('btn10');
const n10 = document.getElementById('n10');
let ahh = [];
btn10.addEventListener('click', function onClick() {
    btn10.classList.add('active');
    const buu = new Array(100);
    buu.fill(1);
    ahh = buu.map((x) => x*random2(997,15991));
    n10.innerHTML = ahh;
});

// TASK 11

const btn11 = document.getElementById('btn11');
const n11 = document.getElementById('n11');
function filter_this(l) {
    return l.filter(el => isPrime(el) && el > 5000)
}

btn11.addEventListener('click', function onClick() {
    btn11.classList.add('active');
    n11.innerHTML = filter_this(ahh);
});
