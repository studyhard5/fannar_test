
const videoDiv = document.getElementById("div_splash_video");
const video=document.getElementById("splash_video");
  const mainContent = document.getElementById('mainContent');

video.addEventListener('ended', function() {
    video.classList.add('fade-out');
    
    setTimeout(function() {
        videoDiv.style.display = 'none';
        mainContent.classList.add('show');
    }, 500);
});