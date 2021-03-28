var images=["MyFamilyBook.jpeg","dad.jpeg","Mom.png","Brother.jpeg","Girl.jpeg"];
var names=["Family Book","Ravi Kalidindi","Pavitra Kalidindi","Rohit Kalidindi","Chakrika Kalidindi"];
var i=0;
function update(){
  i++;
  var total=4;
  if (i>total) {
    i=0;
  }
  document.getElementById("album").src=images[i];
  document.getElementById("family_names").innerHTML=names[i];
}