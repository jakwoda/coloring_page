// Create a new color picker instance using IroColorPicker
// https://iro.js.org/guide.html#getting-started
const colorPicker = new iro.ColorPicker(".colorPicker", {
    // color picker options
    // Option guide: https://iro.js.org/guide.html#color-picker-options
    width: 260,
    // CMY! no K
    colors: [
      "rgb(0,255,255)",
      "rgb(255, 255, 0)",
      "rgb(255, 0, 255)",
    ],
    handleRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
  });
  
  const colorList = document.getElementById("colorList");
  const activeColor = document.getElementById("activeColor");
  
  function setColor(colorIndex) {
    // setActiveColor expects the color index!
    colorPicker.setActiveColor(colorIndex);
  }
  
  // https://iro.js.org/guide.html#color-picker-events
  colorPicker.on(["mount", "color:change"], function(){
    colorList.innerHTML = '';
    colorPicker.colors.forEach(color => {
      const index = color.index;
      const hexString = color.hexString;
      colorList.innerHTML += `
        <li onClick="setColor(${ index })">
          <div class="swatch" style="background: ${ hexString }"></div>
          <span class="colorHex">${ hexString.substring(1,7)}</span>
        </li>
      `;
    });
  });
  
  colorPicker.on(["mount", "color:setActive", "color:change"], function(){
    // colorPicker.color is always the active color
    const index = colorPicker.color.index;
    const hexString = colorPicker.color.hexString;
    activeColor.innerHTML = `
      <div class="swatch" style="background: ${ hexString }"></div>
      <span class="colorHex colorActive">${ hexString.substring(1,7)}</span>
    `;
  })
  let el2=document.querySelector(".currentDrawing");
let colorClicked;
let squares;

  fetch('eyes.svg')
    .then(r => r.text())
    .then(text => {
        el2.innerHTML = text;
        let squares =document.querySelectorAll(".cls-1");
        console.log(squares);
      
     let base = document.querySelector('.currentDrawing');
 let selector = '.cls-1';


base.addEventListener('click', function(event) {
  let closest = event.target.closest(selector);
	if (closest && base.contains(closest)) {
      closest.classList.add('blue');
      console.log(closest);
      console.log(colorPicker.color);
      closest.style.fill=colorPicker.color.rgbaString;
     
      
  }
});
    
}).catch(console.error.bind(console));