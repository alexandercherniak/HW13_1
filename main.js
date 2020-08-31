let step = 20;
let h = 100;

window.addEventListener('load', function(){
  let block = document.querySelector('.block');
  const target = block;
  let blockStyle = window.getComputedStyle(block);
  let wBlock = parseInt(blockStyle.getPropertyValue('width'));
  let hBlock = parseInt(blockStyle.getPropertyValue('height'));
  
document.addEventListener('keydown', function(event){
  if (event.keyCode === 37) {
    target.style.left = target.offsetLeft - step + 'px';
  } else if (event.keyCode === 38 && !event.ctrlKey) {
    target.style.top = target.offsetTop - step + 'px';
  } else if (event.keyCode === 39) {
    target.style.left = target.offsetLeft + step + 'px';
  } else if (event.keyCode === 40 && !event.ctrlKey) {
    target.style.top = target.offsetTop + step + 'px';
  } else if (event.keyCode === 32 && !event.ctrlKey) {
    let animated = false; 
    target.style.top = target.offsetTop - h + 'px';
    setInterval (function() {
      if (animated) {
        return
      } let timer = setInterval(function() {
        clearInterval(timer);
        target.style.top = target.offsetTop - h + 'px';
      }, 200); 
      setTimeout(function() {
        clearInterval(timer);
        target.style.top = target.offsetTop + h + 'px'; 
      }, 200); 
      animated = true;
    })
  } else if (event.keyCode === 17) {
    target.style.width = wBlock * 1.15 + 'px';
    target.style.height = hBlock * 0.6 + 'px';
  } 
})

document.addEventListener('keyup', function(event){
  if (event.keyCode === 32 && !event.ctrlKey) { 
  animated = true;
  } else if (event.keyCode === 17) {
    target.style.width = wBlock + 'px';
    target.style.height = hBlock + 'px';
  }
  })
})
