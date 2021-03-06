$(document).ready(function () {
    let toggleListView = $('#toggle-list-view')

    resizeCardBlock()
    $(window).on('resize', resizeCardBlock)
    toggleListView.on('click', resizeCardBlock)
})

/**
 * This function resizes the card block so that the text fits besides the thumbnail.
 */
function resizeCardBlock() {
    let padding = 8
    $('.card-block').width($('.video-list').width() - $('.card-header').outerWidth() - padding)
}