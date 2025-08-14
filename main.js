document.getElementById('video-background').load();
document.getElementById('audio-background').load();

// Start Video Playback
function openPage() {
    // Animation
    document.getElementById('pre-page').style.animationName = 'fadeOut';
    document.getElementById('pre-page').style.animationDuration = '2.25s';
    document.getElementById('pre-page').style.animationFillMode = 'both';

    document.getElementById('video-background').play();
    document.getElementById('audio-background').play();
    document.getElementById('main-content').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('pre-page').style.display = 'none';
    }, "2250");
}
