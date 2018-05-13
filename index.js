function getFirstSelector(selector){
  
  return document.querySelector(selector);
}

function nestedTarget(){
  
  return document.getElementById('nested').querySelector('div.target');
}


function deepestChild(){
var dc = document.getElementById('grand-node').querySelectorAll('div');
return dc[dc.length-1];

}

function increaseRankBy(n){
  var glowUp = document.getElementById('app').querySelectorAll('ul.ranked-list');
  
  for (let i = 0; i < glowUp.length; i++){
  glowUp[i].innerHTML = ((parseInt(glowUp[i].innerHTML)) + n);
  
  
  }
  //return glowUp;
  
}