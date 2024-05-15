const profilebutton = document.getElementById('profileicon')
const profilemenu = document.getElementById('menu')
let bookingformcheck = document.getElementById('bookingform')

document.onclick = ($e) => {
    let x = [$e.srcElement];
    console.log(x);
    console.log(x[0])
    let pee = x[0].id;
    console.log(pee);
    if (pee == 'profileicon') {
        console.log("MenuOpened!");
        profilemenu.classList.toggle('openedmenu');
    }
    if (pee == 'logintext') {
        console.log('Clicked On Menu!')
    }
    if (pee == 'menu') {
        console.log('Clicked On Menu!')
    }
    if (pee == '') {
        console.log('Menu Closed!')
        profilemenu.classList.remove('openedmenu')
    } else {
        if (pee !== 'profileicon' && pee !== 'menu' && pee !== "logintext") {
            console.log('Nothing Selected, Menu Closed!');
            profilemenu.classList.remove('openedmenu');
            console.log(pee)
        }
    }
}
let namecheckjs = document.getElementById("namecheck");

function bookingcheck() {
    var formdata = new FormData(bookingformcheck)
    console.log(namecheckjs)
    console.log(formdata)
}