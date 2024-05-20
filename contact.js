const feedbackfirstname = document.getElementById('feedbackfirstname');
const feedbacksecondname = document.getElementById('feedbacksecondname');
const feedbacktext = document.getElementById('feedbacktext');
const feedbackform = document.getElementById('feedbackform');
const submittext = document.getElementById('submittedtext')
function submitfeedback() {
    feedbackfirstname.classList.remove('empty')
    feedbacksecondname.classList.remove('empty')
    feedbacktext.classList.remove('empty')
    if(feedbackfirstname.value == '') {
        feedbackfirstname.classList.add('empty');
        console.log('hi')
    } 
    if(feedbacksecondname.value == '') {
        feedbacksecondname.classList.add('empty')
        console.log('ha')
    }
        
    if(feedbacktext.value == '') {
            feedbacktext.classList.add('empty')
            console.log('hai')
        }
    if(feedbacktext.value !== '' && feedbackfirstname.value !== '' && feedbacktext.value !== '') {
        feedbackform.classList.add('noshow')
        submittext.classList.toggle('noshow')
        
    }
    
}