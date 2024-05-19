let product= [
    {
        id: 0,
        image:'images/bananasplit.jpg',
        title:'Beans',
        price:'15',
    },
    {
        id: 1,
        image:'images/burger.jpg',
        title:'phatbeans',
        price:'15',
    },
    {
        id: 2,
        image:'images/cart.jpg',
        title:'LargeBeans',
        price:'15',
    },
    {
        id: 3,
        image:'images/hotchocolate.jpg',
        title:'Product 3',
        price:'15',
    },
];

let autocompletewords = [
    "Beans",
    "phatbeans",
    "LargeBeans",
]

const resultBox = document.querySelector('.searchresultbox');
const searchinputbox = document.getElementById('searchinputbox');
const categories = [...new Set(product.map((item)=> {return item}))]
searchinputbox.onkeyup = function() {
    resultBox.style.display = "block";
    let result = [];
    let input = searchinputbox.value;
    let filterinput = searchinputbox.value.toLowerCase()
    if (input.length) {
        result = autocompletewords.filter((kword) => {
            return kword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    let filteredcategories = categories.filter((item)=> {
        return(
            item.title.toLocaleLowerCase().includes(filterinput)
        )
    })
    searchdisplay(result);
    displayitem(filteredcategories)
    if(!result.length) {
        resultBox.innerHTML = '';
    }
    
}
const displayitem = (items) => {
    document.getElementById('storebody').innerHTML=items.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class="menuitem">
            <button id="addtocartbtn">Add to cart</button>
            <p>${title}</p>
            <h2>$ ${price}.00</h2>
            <div id="menuphotobox">
            <img src="${image}" id="menuphoto">
            </div>
        </div>`
        )
    }).join('')
};
displayitem(categories)

function searchdisplay(result) {
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultBox.innerHTML= "<ul>" + content.join('') + "</ul>";
}

function selectInput(list) {
    searchinputbox.value = list.innerHTML;
    resultBox.innerHTML = '';
}


function searchinput() {
    console.log(searchinputbox.value)
}

document.onclick = ($e) => {
    let x = [$e.srcElement];
    let checker = x[0].id;
    console.log(checker)
    if(checker =="searchinputbox" || checker == "searchresultbox" || checker == "row") {
        resultBox.style.display = "block";
    } else {
        resultBox.style.display ="none";
    }
};

