const profilebutton = document.getElementById('profileicon')
const profilemenu = document.getElementById('menu')
let bookingformcheck = document.getElementById('bookingform')

document.onclick = ($e) => {
    let x = [$e.srcElement];
    let pee = x[0].id;
    if (pee == 'profileicon') {
        profilemenu.classList.toggle('openedmenu');
    }
    if (pee == 'logintext') {
    }
    if (pee == 'menu') {
    }
    if (pee == '') {
        profilemenu.classList.remove('openedmenu')
    } else {
        if (pee !== 'profileicon' && pee !== 'menu' && pee !== "logintext") {
            profilemenu.classList.remove('openedmenu');
        }
    }
}
let namecheckjs = document.getElementById('namecheck')
function bookingcheck() {
    namecheckjs.classList.remove('empty')
    if (document.querySelector('#namecheck').value == '') {
        console.log('Empty')
        namecheckjs.classList.add('empty')
    }
}