function closeHint() {
  let hint = document.getElementById("hint");

  hint.style.display = "none";

 document.getElementById("gallery").src = "";
}

function openHint() {
  let hint = document.getElementById("hint");

  hint.style.display = "flex";

  document.getElementById("gallery").src = "controll.html";

  let meta = window.parent.document.getElementById('close');

  meta.className ="close";


}

function openHint2() {

let hint = document.getElementById("hint");

hint.style.display = "flex";

document.getElementById("gallery").src = "gallery2.html";

let meta = window.parent.document.getElementById('close');

meta.className ="close";


}


function openHint3() {

let hint = document.getElementById("hint");

hint.style.display = "flex";

document.getElementById("gallery").src = "gallery3.html";

let meta = window.parent.document.getElementById('close');

meta.className ="close";


}



function openHint4() {

  let hint = document.getElementById("hint");

  hint.style.display = "flex";

  document.getElementById("gallery").src = "gallery4.html";

  let meta = window.parent.document.getElementById('close');

  meta.className ="close";


  }











function openMeta() {
let meta = document.getElementById("metaUniverse");

meta.style.display = "flex";

}

function closeMeta() {
let meta = document.getElementById("metaUniverse");

meta.style.display = "none";

}





