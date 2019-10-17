


$('.left').on('mousemove', function (evt) {
    var x = evt.offsetX;
    var y = evt.offsetY;

    x -= $('.float').width() / 2
    y -= $('.float').height() / 2

    if (x < 0) {
        x = 0
    }
    if (y < 0) {
        y = 0
    }

    if (x > $('.left').width() - $('.float').width()) {
        x = $('.left').width() - $('.float').width()
    }

    if (y > $('.left').height() - $('.float').height()) {
        y = $('.left').height() - $('.float').height()
    }

    $('.float').css({
        left: x,
        top: y
    })

    $('.right').css({
        backgroundPosition: `${x * -3}px ${y * -3}px`
    })
}).on('mouseover', function () {
    $('.float, .right').show()
}).on('mouseout', function () {
    $('.float, .right').hide()
})