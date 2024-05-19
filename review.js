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
