let product= [
    {
        id: 0,
        image:'images/CaramelBlend.webp',
        title:'Caramel Blend',
        price:'8',
    },
    {
        id: 1,
        image:'images/Toffee.png',
        title:'Toffee Blend',
        price:'12',
    },
    {
        id: 2,
        image:'images/ChocolateBean.webp',
        title:'Chocolate Blend',
        price:'15',
    },
    {
        id: 3,
        image:'images/BlackCoffee.webp',
        title:'Decaf Black',
        price:'5',
    },
    {
        id: 4,
        image:'images/DECAF COFFEE.webp',
        title:'Decaf Espresso',
        price:'10',
    },
    {
        id: 5,
        image:'images/espresso.webp',
        title:'Espresso',
        price:'13',
    },
    {
        id: 6,
        image:'images/HotChocolateDecaf.webp',
        title:'Decaf Hot Chocolate',
        price:'14',
    },
    {
        id: 7,
        image:'images/Vanilla.webp',
        title:'Vanilla Coffee',
        price:'17',
    },
    {
        id: 8,
        image:'images/brazil.jpg',
        title:'Brazil Campo Alegre',
        price:'18',
    },
    {
        id: 9,
        image:'images/ground.jpg',
        title:'Ground Coffee',
        price:'20',
    },
];

let autocompletewords = [
    "Caramel Blend",
    "Toffee Blend",
    "Chocolate Blend",
    "Decaf Black",
    "Decaf Espresso",
    "Espresso",
    "Decaf Hot Chocolate",
    "Vanilla Coffee",
    "Brazil Campo Alegre",
    "Ground Coffee",
]

const resultBox = document.querySelector('.searchresultbox');
const searchinputbox = document.getElementById('searchinputbox');
const categories = [...new Set(product.map((item)=> {return item}))]
let i = 0;
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
const displayitem = (item) => {
    document.getElementById('storebody').innerHTML=item.map((item)=>{
        var {image, title, price} = item;
        return(
            `<div class="menuitem">`+
            "<button id='addtocartbtn' onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `<p>${title}</p>
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




var cart = []
function addtocart(a) {
    cart.push({...categories[a]});
    showcart();
}

function deleteElement(a){
    cart.splice(a, 1);
    showcart();
}


function clearcart() {
    cart = []
    document.getElementById('cartitem').innerHTML = "";
    document.getElementById('total').innerHTML = "$0.00";
    document.getElementById("itemcartbadge").innerHTML = cart.length;
    document.getElementById("count").innerHTML = "Items:" + ' ' + cart.length;
    
}

document.onclick = ($e) => {
    let x = [$e.srcElement];
    let checker = x[0].id;
    console.log(checker)
    if(checker =="searchinputbox" || checker == "searchresultbox" || checker == "row") {
        resultBox.style.display = "block";
        profilemenu.classList.remove('openedmenu')
    } else {
        resultBox.style.display ="none";
    } if(checker == 'profileicon') {
        profilemenu.classList.toggle('openedmenu');
    } if(checker =='addtocartbtn') {
    }
    else {
        if (checker !== 'profileicon' && checker !== 'menu' && checker !== "logintext" && checker !== '' && checker !== "clearcart") {
            profilemenu.classList.remove('openedmenu');
    }
}};

function showcart(a){
    console.log(cart)
    let k = 0;
    let total=0;
    document.getElementById("itemcartbadge").innerHTML = cart.length;
    document.getElementById("count").innerHTML = "Items:" + ' ' + cart.length;
    if(cart.length==0) {
        document.getElementById('cartitem').innerHTML = 'Your cart is empty!';
    } else {
        document.getElementById('cartitem').innerHTML = cart.map((items) => {
            var {image, title, price} = items;
            total=total+parseInt(price, 10);
            document.getElementById('total').innerHTML = "$ "+total+".00";
            return(
                `<div class="cartproduct">
                <div class=cartimagebox>
                <img class="cartimage" src=${image}>
                </div>
                <p>${title}</p>
                <h2>$${price}.00</h2>`+
                "<span class='fa-solid fa-trash' onclick='deleteElement("+ (k++) +")'></span>"+
               ` </div>`
            )
        }).join('');
    }
}