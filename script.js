document.querySelectorAll('.drawingMiniature').forEach(item => {
    item.addEventListener('click', event => {

 let drawingName = event.target.getAttribute("data-drawingName");
 localStorage.setItem('currentDrawingName', drawingName);
 let currentDrawingName = localStorage.getItem('currentDrawingName');
 console.log(currentDrawingName);
})
  })