var dataItems = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];


for (var i=0; i<dataItems.length; i++){


var productDiv = document.getElementsByClassName('name');
var myNewDiv = document.createElement('div');
myNewDiv.class = dataItems['product:'];
myNewDiv.innerHTML = dataItems[i].product;
productDiv[i].appendChild(myNewDiv);

var productDiv1 = document.getElementsByClassName('description');
var myNewDiv1 = document.createElement('div');
myNewDiv1.class = dataItems['description:'];
myNewDiv1.innerHTML = dataItems[i].description;
productDiv1[i].appendChild(myNewDiv1);

var productDiv2 = document.getElementsByClassName('price');
var myNewDiv2 = document.createElement('div');
myNewDiv2.class = dataItems['price:'];
myNewDiv2.innerHTML = dataItems[i].price;
productDiv2[i].appendChild(myNewDiv2);

}
var storeDiv = document.querySelectorAll('.name');
//get all the parent divs and store them in array called 'storeDiv'

function reveal(){
  var shopChildDiv = this.querySelector('.description');
  //this selects the first child element with the class 'revealMe'
  if(shopChildDiv.style.display === 'none'){
    //if the CSS for display is none -> Set to block
    shopChildDiv.style.display = 'block';
  } else {
    //else (or if the style is block) -> Set the display to none (hide the element)
    shopChildDiv.style.display = 'none';
  }
}

for(var i = 0; i < storeDiv.length; i++){
  //we loop through the all of the parent elements (storeDiv)
  storeDiv[i].addEventListener('click', reveal);
  //then we add an event listener to each index by using [i],
  //and add the function we created up there called reveal
}


var numbers = [1.11, 39.57, 8.88, 9.29, 2.33, 599.99];

function getSum(total, num) {
    return total + num;
    
}
function myFunction(item) {
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}








