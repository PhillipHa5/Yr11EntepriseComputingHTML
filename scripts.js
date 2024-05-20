const profilebutton = document.getElementById('profileicon')
const profilemenu = document.getElementById('menu')
let bookingformcheck = document.getElementById('bookingform')

document.onclick = ($e) => {
    let y = [$e.srcElement];
    let pee = y[0].id;
    if (pee == 'profileicon') {
        profilemenu.classList.toggle('openedmenu');
    }
    if (pee == 'logintext') {
        console.log('HAII')
    }
    if (pee == 'menu') {
        console.log('HAII1')
    }
    if (pee == '') {
        profilemenu.classList.remove('openedmenu')
        console.log('HAII2')
    } else {
        if (pee !== 'profileicon' && pee !== 'menu' && pee !== "logintext") {
            profilemenu.classList.remove('openedmenu');
            console.log('HAII3')
        }
    }
}



