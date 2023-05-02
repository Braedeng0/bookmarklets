function createImage() {
    var img = document.createElement('img');
    img.setAttribute('src', 'https://drive.google.com/uc?export=download&id=1-dsYC0VOoAGgRF_t4PE-dqPdMC2IJ33i');
    img.style.position = 'absolute';
    img.style.width = '40px';
    img.style.height = '55px';
    img.style.transition = 'transform 0.15s ease-out';
    img.style.transform = 'translate(-50%, -50%) translate(30px, 30px) scale(0.8)';
    img.style.zIndex = 999;
    document.body.appendChild(img);
  
    var mouseX = 0, mouseY = 0, translateX = 0, translateY = 0;
  
    function animate() {
      requestAnimationFrame(animate);
      translateX += (mouseX - translateX - window.pageXOffset/2) * 0.1;
      translateY += (mouseY - translateY - window.pageYOffset/2) * 0.1;
      img.style.left = translateX + 'px';
      img.style.pointerEvents = "none";
      img.style.top = translateY + 'px';
    }
  
    document.addEventListener('mousemove', function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
    });
  
    animate();
  }

createImage();