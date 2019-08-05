var pic = document.getElementById("myPic");
var slide = ['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg','image6.jpg','image7.jpg','image8.jpg'];
var imageIndex= 0;

// function slideshow(){
//   pic1.setAttribute('src',slide[index]);
//   if (index== slide.length-1){
//     index=0;
//   }
//   index++;
// }
// setInterval(slideshow,2000);

//SLIDESHOW


function changePic(){ //function that changes the picture

   pic.setAttribute("src",slide[imageIndex]); //attribute being the image src
   //Sets the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.

   if (imageIndex == slide.length-1){
       imageIndex = 0;
   }
   else {
       imageIndex++; // change the index if it's less than the length-1
   }
}

// sets the interval time it changes pics
var intervalHandle = setInterval(changePic, 1500);


var button = document.getElementById('show');
// BUTTON
button.onclick = function hide(){
  if (button.innerHTML == 'Show'){
    button.innerHTML = 'Hide'
    document.getElementById('times').style.display = 'block';

  }
  else if (button.innerHTML == 'Hide'){
    button.innerHTML = 'Show';
    document.getElementById('times').style.display = 'none';

  }


}
// on click, we want the inner html to change to hide.
// on click, we want to show the content
//
//
//
//
// onclick="document.getElementById('times').style.display='block'"
// onclick="document.getElementById('times').style.display='block'"
var cent = document.getElementById('central');
// BUTTON
cent.onclick = function pa(){
  if (cent.innerHTML == 'Show'){
    cent.innerHTML = 'Hide'
    document.getElementById('park').style.display = 'block';

  }
  else if (cent.innerHTML == 'Hide'){
    cent.innerHTML = 'Show';
    document.getElementById('park').style.display = 'none';

  }


}
var strip = document.getElementById('las');
// BUTTON
strip.onclick = function veg(){
  if (strip.innerHTML == 'Show'){
    strip.innerHTML = 'Hide'
    document.getElementById('vegas').style.display = 'block';

  }
  else if (strip.innerHTML == 'Hide'){
    strip.innerHTML = 'Show';
    document.getElementById('vegas').style.display = 'none';

  }


}

var gra = document.getElementById('grand');
// BUTTON
gra.onclick = function baz(){
  if (gra.innerHTML == 'Show'){
    gra.innerHTML = 'Hide'
    document.getElementById('bazar').style.display = 'block';

  }
  else if (gra.innerHTML == 'Hide'){
    gra.innerHTML = 'Show';
    document.getElementById('bazar').style.display = 'none';

  }


}

var city = document.getElementById('mexico');
// BUTTON
city.onclick = function the(){
  if (city.innerHTML == 'Show'){
    city.innerHTML = 'Hide'
    document.getElementById('zocalo').style.display = 'block';

  }
  else if (city.innerHTML == 'Hide'){
    city.innerHTML = 'Show';
    document.getElementById('zocalo').style.display = 'none';
  }
}

  var nue = document.getElementById('con');
  // BUTTON
  nue.onclick = function cont(){
    if (nue.innerHTML == 'next'){
      nue.innerHTML = 'Hide'
      document.getElementById('rest').style.display = 'block';
    }
    else if (nue.innerHTML == 'Hide'){
      nue.innerHTML = 'next';
      document.getElementById('rest').style.display = 'none';
    }
}
