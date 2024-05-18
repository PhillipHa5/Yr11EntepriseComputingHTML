const profilebutton = document.getElementById('profileicon')
const profilemenu = document.getElementById('menu')
let bookingformcheck = document.getElementById('bookingform')

document.onclick = ($e) => {
    let x = [$e.srcElement];
    let pee = x[0].id;
    if (pee == 'profileicon') {
        profilemenu.classList.toggle('openedmenu');
    }
    if (pee == 'logintext') {}
    if (pee == 'menu') {}
    if (pee == '') {
        profilemenu.classList.remove('openedmenu')
    } else {
        if (pee !== 'profileicon' && pee !== 'menu' && pee !== "logintext") {
            profilemenu.classList.remove('openedmenu');
        }
    }
}
let namecheckjs = document.getElementById('namecheck')
let emailcheckjs = document.getElementById('emailcheck')
let phonecheckjs = document.getElementById('phonecheck')
let numbercheckjs = document.getElementById('numbercheck')
let datetimejs = document.getElementById('datetime')
let wrongname = document.getElementById('incorrectname')
let wrongemail = document.getElementById('incorrectemail')
let wrongphone = document.getElementById('incorrectphone')
let wrongnumber = document.getElementById('incorrectnumber')
let wrongdate = document.getElementById('incorrectdate')
let bookform = document.getElementById('bookingform')
let submitbutton = document.getElementById('submitted')
const validemail = document.getElementById('emailcheck')

function bookingcheck() {
    namecheckjs.classList.remove('empty')
    emailcheckjs.classList.remove('empty')
    phonecheckjs.classList.remove('empty')
    numbercheckjs.classList.remove('empty')
    datetimejs.classList.remove('empty')
    wrongname.style.display = 'none';
    wrongemail.style.display = 'none';
    wrongphone.style.display = 'none';
    wrongnumber.style.display = 'none';
    wrongdate.style.display = 'none';
    console.log(validemail)
    console.log(document.getElementById('emailcheck'))
    if (document.querySelector('#namecheck').value == '') {
        console.log('Empty')
        namecheckjs.classList.add('empty')
        wrongname.style.display = 'block';
        wrongname.style.color = 'red';
    }
    if (document.querySelector('#emailcheck').value == '') {
        emailcheckjs.classList.add('empty')
        wrongemail.style.display = 'block';
        wrongemail.style.color = 'red';
    }
    if (document.querySelector('#phonecheck').value == '') {
        phonecheckjs.classList.add('empty')
        wrongphone.style.display = 'block';
        wrongphone.style.color = 'red';
    }
    if (document.querySelector('#numbercheck').value == '') {
        numbercheckjs.classList.add('empty')
        wrongnumber.style.display = 'block';
        wrongnumber.style.color = 'red';
    }
    if (document.querySelector('#datetime').value == '') {
        datetimejs.classList.add('empty')
        wrongdate.style.display = 'block';
        wrongdate.style.color = 'red';
    }
    if (document.querySelector('#namecheck').value !== '' &&
        document.querySelector('#emailcheck').value !== '' &&
        document.querySelector('#phonecheck').value !== '' &&
        document.querySelector('#numbercheck').value !== '' &&
        document.querySelector('#datetime').value !== '') {
        console.log('BookingSubmitted')
        bookform.style.display = 'none';
        submitbutton.style.display = 'block';
        submitbutton.style.padding = '15vh';
    }
}

const reviewtext = document.getElementById('reviewtext')
const reviewbox = document.getElementById('reviewnamebox')
const reviewform = document.getElementById('review')
const reviewsubmitteddone = document.getElementById('reviewsubmitted')
const latestreviewtext = document.getElementById('latestreviewtext')
const latestreviewname = document.getElementById('latestreviewname')
let lateststarrating = document.getElementById('lateststarrating')

const checkedstar = document.createElement("span");
const emptystar = document.createElement("span")
checkedstar.classList.add('fa')
checkedstar.classList.add('fa-star')
checkedstar.classList.add('fa-2x')
checkedstar.classList.add('checked')
emptystar.classList.add('fa')
emptystar.classList.add('fa-star')
emptystar.classList.add('fa-2x')
document.querySelector('#review').addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const reviewname = data.get("ReviewName")
    const starrating = data.get("staroutoffive")
    const messagereview = data.get("reviewmessage")
    console.log(reviewname)
    console.log(starrating)
    console.log(messagereview)
    if (reviewname == '') {
        reviewbox.classList.add('empty')
    }
    if (messagereview == '') {
        reviewtext.classList.add('empty')
    }

    if( reviewname !== '' &&
        messagereview !== ''
    ) {
        reviewform.style.display = 'none';
        reviewsubmitteddone.style.display = 'block';
        reviewsubmitteddone.classList.add('show')
        latestreviewtext.innerHTML = '"'  + messagereview + '"';
        latestreviewname.innerHTML = '-' + " " + reviewname;
        lateststarrating.innerHTML = '';
       if(starrating == '1') {
        lateststarrating.appendChild(checkedstar.cloneNode(true));
        for(let i = starrating; i<5; i++) { 
            lateststarrating.appendChild(emptystar.cloneNode(true));
            }
        }}
        if(starrating == '2') {
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            for(let i = starrating; i<5; i++) { 
                lateststarrating.appendChild(emptystar.cloneNode(true));
                }
            }
        if(starrating == '3') {
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            for(let i = starrating; i<5; i++) { 
                    
                lateststarrating.appendChild(emptystar.cloneNode(true));
                    }
                }
        if(starrating == '4') {
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            lateststarrating.appendChild(checkedstar.cloneNode(true));
            for(let i = starrating; i<5; i++) { 
                 lateststarrating.appendChild(emptystar.cloneNode(true));
                }
            }
            if(starrating == '5') {
                lateststarrating.appendChild(checkedstar.cloneNode(true));
                lateststarrating.appendChild(checkedstar.cloneNode(true));
                lateststarrating.appendChild(checkedstar.cloneNode(true));
                lateststarrating.appendChild(checkedstar.cloneNode(true));
                lateststarrating.appendChild(checkedstar.cloneNode(true));
                for(let i = starrating; i<5; i++) { 
                     lateststarrating.appendChild(emptystar.cloneNode(true));
                    }
                 }
})


