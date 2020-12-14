//^---------------SELECTORS---------------------------
const btnA = document.querySelector(".a");
const btnS = document.querySelector(".s");
const btnD = document.querySelector(".d");
const btnF = document.querySelector(".f");
const btnG = document.querySelector(".g");
const btnH = document.querySelector(".h");
const btnJ = document.querySelector(".j");
const btnK = document.querySelector(".k");
const btnL = document.querySelector(".l");

//^---------------EVENT-LISTENER----------------------

function clickHandler(event) {
   //*making the key in active mode
   event.currentTarget.classList.add("active");

   //*extracting the content of the child elements
   let nodes = event.currentTarget.childNodes;
   let letter = nodes[1].textContent;
   //console.log(letter.toLowerCase());
   let music = "music-" + letter.toLowerCase();

   //*playing the corresponding music
   document.getElementById(music).play();

   //*switching the active mode to off
   setTimeout(
      (target) => {
         target.classList.remove("active");
      },
      100,
      event.currentTarget //&passing the parameter
   );
}

function keypressHandler(ele, val) {
   //*making the key in active mode
   ele.classList.add("active");

   //*playing the corresponding music
   let music = "music-" + val;
   document.getElementById(music).play();

   //*making the key go to off mode
   setTimeout(
      (target) => {
         target.classList.remove("active");
      },
      100,
      ele
   );
}

//^----------------DOM-manipulation------------------

//*click events
btnA.addEventListener("click", clickHandler);
btnS.addEventListener("click", clickHandler);
btnD.addEventListener("click", clickHandler);
btnF.addEventListener("click", clickHandler);
btnG.addEventListener("click", clickHandler);
btnH.addEventListener("click", clickHandler);
btnJ.addEventListener("click", clickHandler);
btnK.addEventListener("click", clickHandler);
btnL.addEventListener("click", clickHandler);

//* keypress events
document.addEventListener("keypress", function (event) {
   //console.log(event);

   if (event.keyCode === 97 || event.which === 97) keypressHandler(btnA, "a");
   if (event.keyCode === 115 || event.which === 115) keypressHandler(btnS, "s");
   if (event.keyCode === 100 || event.which === 100) keypressHandler(btnD, "d");
   if (event.keyCode === 102 || event.which === 102) keypressHandler(btnF, "f");
   if (event.keyCode === 103 || event.which === 103) keypressHandler(btnG, "g");
   if (event.keyCode === 104 || event.which === 104) keypressHandler(btnH, "h");
   if (event.keyCode === 106 || event.which === 106) keypressHandler(btnJ, "j");
   if (event.keyCode === 107 || event.which === 107) keypressHandler(btnK, "k");
   if (event.keyCode === 108 || event.which === 108) keypressHandler(btnL, "l");
});
