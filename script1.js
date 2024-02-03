// Overlay Search

const searchIcon = document.getElementById("searchInput");
const searchBarContainer = document.getElementsByClassName("searchBar");
const overlayContainer = document.getElementById("overlayContainer");
const body = document.getElementsByClassName("body")[0];


overlayContainer.style.visibility="hidden";

var blockClose=false;
var overlayMechanism = function(){
    searchIcon.addEventListener("click", () => {
        setTimeout(() => {
            if (overlayContainer.style.visibility=="hidden"){
                overlayContainer.style.visibility="visible";
                body.classList.add('overflowHidden');
                overlayContainer.style.position="fixed";
            }
          }, "50");
        
    })
    overlayContainer.addEventListener("click", () => {
        blockClose = true;
        setTimeout(() => {
            blockClose = false;
        }, "50");
        
    })
}
overlayMechanism();

body.addEventListener("click", () => {
    if (overlayContainer.style.visibility=="visible" && !blockClose){
        overlayContainer.style.visibility="hidden";
        body.classList.remove('overflowHidden');
    }
})


// Overlay Cart//

const cartIcon = document.getElementById("cartIcon");
cartContainer = document.getElementById('cartContainer');
cartContainer.style.visibility="hidden";

var blockClose=false;
var overlayMechanismTwo = function(){
    cartIcon.addEventListener("click", () => {
        setTimeout(() => {
            if (cartContainer.style.visibility=="hidden"){
                cartContainer.style.visibility="visible";
                body.classList.add('overflowHiddenTwo');
                cartContainer.style.position="fixed";
            }
          }, "50");
        
    })
    cartContainer.addEventListener("click", () => {
        blockClose = true;
        setTimeout(() => {
            blockClose = false;
        }, "50");
        
    })
}
overlayMechanismTwo();

body.addEventListener("click", () => {
    if (cartContainer.style.visibility=="visible" && !blockClose){
        cartContainer.style.visibility="hidden";
        body.classList.remove('overflowHiddenTwo');
    }
})


// New & Bestsellers//  

const newButton = document.getElementById('newButton');
const bestsellersButton = document.getElementById('bestsellersButton');
const containerBestsellers = document.getElementsByClassName('containerBestsellers')[0];
const containerNew = document.getElementsByClassName('containerNew')[0];

newButton.classList.add('active');
containerNew.classList.add('activeContainer');

bestsellersButton.addEventListener("click", () => {
    bestsellersButton.classList.add('active');
    newButton.classList.remove('active');
    containerNew.classList.remove('activeContainer');
    containerBestsellers.classList.add('activeContainer');
})

newButton.addEventListener("click", () => {
    newButton.classList.add('active');
    bestsellersButton.classList.remove('active'); 
    containerNew.classList.add('activeContainer');
    containerBestsellers.classList.remove('activeContainer');
})
     
    




// Frequently Asked Questions//

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("activeQuestions");
      var content = this.nextElementSibling;
      if (content.style.maxHeight){
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      } 
    });
  }


// Reviews //


const nextBtn = document.getElementById('next');
const previousBtn = document.getElementById('previous');
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');

var customerSayPage = 0;


nextBtn.addEventListener("click", () => {
  customerSayPage++;
  showCustomerSayPage(customerSayPage);
});
  
previousBtn.addEventListener("click", () => {
  customerSayPage--;
  showCustomerSayPage();
});


function showCustomerSayPage(){
    let custSayPages = document.getElementsByClassName("customerSayDiv");
    let len = custSayPages.length;
    if(customerSayPage >= len-1){        
        customerSayPage = len-1;
        nextBtn.style.visibility = "hidden";
    }else if(customerSayPage < 1){
        customerSayPage = 0;
        previousBtn.style.visibility = "hidden";
    }else{
        nextBtn.style.visibility = "visible";
        previousBtn.style.visibility = "visible";
    }

  for(let i=0; i < len; i++){

    if(i < customerSayPage){
        //PAGE IS INFERIOR TO THE CURRENT
        custSayPages[i].classList.add("left");
    }else if(customerSayPage == i){
        //CURRENT PAGE
        custSayPages[i].classList.remove("right");
        custSayPages[i].classList.remove("left");
    }else{
        //PAGE IS SUPERIOR THAN THE CURRENT
        custSayPages[i].classList.add("right");
    }
  }

}



// const nextBtn = document.getElementById('next');
// const previousBtn = document.getElementById('previous');

// var i = 0;
// nextBtn.addEventListener("click", () => {
//    i++;
//   if (i == 1) {
//     div1.style.display = "none";
//     div2.style.display = "flex";
//     div3.style.display = "none";
//     previousBtn.style.visibility="visible";
//   }  else if (i == 2) {
//     div1.style.display = "none";
//     div2.style.display = "none";
//     div3.style.display = "flex";
//     nextBtn.style.visibility="hidden";
//   } 
// });
  
// previousBtn.addEventListener("click", () => {
//     i--;
//     if (i == 2) {
//       div1.style.display = "none";
//       div2.style.display = "none";
//       div3.style.display = "flex";
//       nextBtn.style.visibility="hidden";
//     }  else if (i == 1) {
//       div1.style.display = "none";
//       div2.style.display = "flex";
//       div3.style.display = "none";
//       previousBtn.style.visibility="visible";
//       nextBtn.style.visibility="visible";
//     } 
//     else if (i == 0) {
//         div1.style.display = "flex";
//         div2.style.display = "none";
//         div3.style.display = "none";
//         previousBtn.style.visibility="hidden";
//         nextBtn.style.visibility="visible";
//       } 
      

//   });
    
    
/* Adding products to the cart */

const cart = document.getElementsByClassName('cart');
const addBtn = document.getElementsByClassName("add");
const quantity = document.getElementsByClassName("quantity");


var i = 0;
function buttonClick() {
    quantity.innerText = Number(quantity.innerText) +1;
};

addBtn.addEventListener("click", buttonClick);


// quantity.innerText = '0';
// var l = 0;
// addBtn.addEventListener('click', () => {
//     l++;
//     quantity.innetText = Number(quantity.innerText) ++;

// })





// let listProductsHTML = document.querySelector('.listProduct');

// let listProducts = [];

// const addDataToHTML = () => {
//     listProductsHTML.innerHTML - '';
//     if(listProducts.length > 0){
//         listProducts.forEach(product => {
//             let newProduct = document.createElement('div');
//             newProduct.classList.add('item');
//             newProduct.innerHTML = `
//             `
//         })
//     }
// }

// const initApp = () => {
//     fetch('products.json')
//     .then(response => response.json())
//     .then(data => {
//         listProducts = data;
//         addDataToHTML();
//     })
// }

// initApp();





    


// Footer
const date = document.getElementById("date");
date.innerText = new Date().getFullYear();


