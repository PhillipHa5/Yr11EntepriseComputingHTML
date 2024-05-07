const profilebutton = document.getElementById('profileicon')
const profilemenu = document.getElementById('menu')

document.onclick = ($e) => {
    let x = [$e.srcElement];
    console.log(x);
    console.log(x[0])
    let pee = x[0].id;
    console.log(pee);
    if(pee == 'profileicon') {
        profilemenu.classList.toggle('openedmenu');
        console.log("HAIII");
    }
    if(pee == 'menu') {
    }
    else {
        profilemenu.classList.remove('openedmenu');
    }
}