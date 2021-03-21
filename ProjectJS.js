//jshint esnext: true

console.log("Here are the rectangle IDs");


  const mm = document.getElementById("rectangleWrapper");
  const allDivs = mm.getElementsByTagName("div");

  for (var prop of allDivs){
    console.log(prop.id)
  }
