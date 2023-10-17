function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

// toggleFullScreen();

window.addEventListener('beforeunload', e => {
  e.preventDefault();
})