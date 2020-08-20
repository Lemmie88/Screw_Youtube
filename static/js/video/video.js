$(document).ready(function () {
    document.title = title.text()
    videojs('video')

    calculateVideoHeight()
    $(window).resize(calculateVideoHeight)
})

/**
 * This function calculate the height of the video based on the ratio 16:9.
 */
function calculateVideoHeight() {
    video.height(video.width() / 16 * 9)
    video.closest('div').height(video.height())
}

function editVideo() {
    let url = window.location.pathname + 'edit/'
    redirectToUrl(url)
}