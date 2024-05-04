document.addEventListener("DOMContentLoaded", function(event) {
  var fade = document.getElementById('fade');
  var opacity = 1;
  var duration = 1000; // 2 seconds
  
  var startTime = null;

  function fadeStep(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    opacity = 1 - progress / duration;
    if (opacity >= 0) {
      fade.style.opacity = opacity;
      requestAnimationFrame(fadeStep);
    } else {
      fade.style.display = 'none';
    }
  }

  requestAnimationFrame(fadeStep);
});

function changeVideo(videoSrc) {
  var videoPlayer = document.getElementById('video-player');
  videoPlayer.src = videoSrc;
  videoPlayer.style.display = 'block';
}

function hideVideo() {
  var videoPlayer = document.getElementById('video-player');
  videoPlayer.style.display = 'none';
}


