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




// Footer
const date = document.getElementById("date");
date.innerText = new Date().getFullYear();


