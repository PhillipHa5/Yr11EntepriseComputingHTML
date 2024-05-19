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
