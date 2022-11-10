var header =document.querySelector("h1")


header.style.color="red"


function getRandomColor(){
    var letters="0123456789ABCDEF";
    var color="#";
    for (var i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)];

    }
    return color

}

function changeHeaderColor(){
    colorInput=getRandomColor()
    header.style.color=colorInput;
}

setInterval("changeHeaderColor()",500);


//Let's explore some events samples!

var headOne = document.querySelector('#one')
// var headTwo = document.querySelector('#two')
// var headThree = document.querySelector('#three')





// Hover (mouseover and mouseout)
headOne.addEventListener('mouseover',function(){
  headOne.textContent = "HireTale";
  headOne.style.color = 'red';
})




headOne.addEventListener('mouseout',function(){
  headOne.textContent = "Fastest Way To Hire Talent"
  headOne.style.color = 'blue';

})


// // On Click
// headTwo.addEventListener("click",function(){
//   headTwo.textContent = "Clicked On";
//   headTwo.style.color = 'blue';
// })

// // Double Click
// headThree.addEventListener("dblclick",function(){
//   headThree.textContent = "Double Clicked!";
//   headThree.style.color = 'red';
// })

