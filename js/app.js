

const rightPage = document.querySelector(".right");
const leftPage = document.querySelector(".left");


rightPage.addEventListener("click", showme); 


   



function showme(e){

    const clickedItem = e.target;
    classToggle(clickedItem , "fa-eye-slash" , "fa-eye")
}


function getAllSiblings (elem) {

	
	var siblings = [];
	var sibling = elem.parentNode.firstChild;

	
	while (sibling) {
		if (sibling.nodeType === 1 && sibling !== elem) {
			siblings.push(sibling);
		}
		sibling = sibling.nextSibling
	}

	return siblings;

};

function classToggle(El,firstClass , secondClass){

    if (El.classList["1"] === firstClass){
        El.classList.remove(firstClass);
        El.classList.add(secondClass);

        passwordToggle(getAllSiblings(El));

    }else if(El.classList["1"] === secondClass){
        El.classList.remove(secondClass);
        El.classList.add(firstClass);

        passwordToggle(getAllSiblings(El));
    }
}

function passwordToggle (El){

    for (item of El){
        if(item.type==="password"){
            item.type="text";

        }else if(item.type === "text"){
            item.type = "password"
        }
    }
}

function createBubbles(){
    
    const createElement = document.createElement("span");
    createElement.classList.add("bubble");
   
    var size = Math.random()*60;
    createElement.style.width  = 20 + size + 'px';
    createElement.style.height = 20 + size + 'px';
    createElement.style.left = Math.random()* innerWidth +'px';
    
    leftPage.appendChild(createElement);
    
    
    

    setTimeout(()=>{
        createElement.remove()
    } , 4000)
}
setInterval(createBubbles,50)


