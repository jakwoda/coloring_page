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
    handleRadius: 9,
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
          <span class="colorHex">${ hexString }</span>
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
      <span class="colorHex colorActive">${ hexString }</span>
    `;
  })