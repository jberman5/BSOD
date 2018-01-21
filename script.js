function getImg(target){
  var image = document.getElementById("projectImg");
  var title = document.getElementById("windowTitle");
  var newImg;
  if (target.id == 'item1'){
    newImg = "img/safe.png";
  } else if (target.id == 'item2') {
    newImg = "img/cabin.png";
  } else if (target.id == 'item3') {
    newImg = "img/submarine.png";
  }
  title.innerHTML = target.innerHTML;
  image.src = newImg;
  console.log(target.id);

}
