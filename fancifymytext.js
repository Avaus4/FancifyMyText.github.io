function alertFunction() {
   alert("Hello, world!");
}

function bigger() {
   document.getElementById("inputText-1").style.fontSize = "24pt";
}

function changeStyle() {
   var textArea = document.getElementById("inputText-1");
   var fancyShmancy = document.getElementById("fancyShmancy");
   if (fancyShmancy.checked) {
      textArea.style.fontWeight = "bold";
      textArea.style.color = "blue";
      textArea.style.textDecoration = "underline";
   } else {
      textArea.style.fontWeight = "normal";
      textArea.style.color = "";
      textArea.style.textDecoration = "";
   }
}

function addMoo() {
   const textArea = document.getElementById("inputText-1");
   const words = textArea.value.toUpperCase().split(" ");
   for (let i = 0; i < words.length; i++) {
      let word = words[i].trim();
      word += "-Moo"; 
      words[i] = word;
   }
   text = words.join(" ");
   textArea.value = text;
}

document.addEventListener("DOMContentLoaded", function() {
   var biggerButton = document.querySelector("button");
   biggerButton.addEventListener("click", bigger);

   var fancyShmancy = document.getElementById("fancyShmancy");
   fancyShmancy.addEventListener("change", function() {
      alert("FancyShmancy is selected");
      changeStyle();
   });

   var boringBetty = document.getElementById("boringBetty");
   boringBetty.addEventListener("change", function() {
      alert("BoringBetty is selected");
      changeStyle();
   });
});