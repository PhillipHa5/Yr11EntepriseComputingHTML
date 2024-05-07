let openmenu = document.getElementById("menu");

const Menu = document.querySelector('menu');
const Profileicon = document.querySelector('profileicon');

function openclosemenu() {
    openmenu.classList.toggle("openedmenu");
}
if (Profileicon == null) {
    console.log('HAIIIII')
}

let x = 0;

function helpmepls() {
    if (x == 0) {
        x = x + 1
        console.log(x)
    } else {
        x = x - 1
        console.log(x)
    }
}

if (x == 0) {
    openmenu.classList.add("openedmenu")
}

if (x == 1) {
    openmenu.classList.remove("openedmenu")
}