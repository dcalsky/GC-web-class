// 面向过程编程

var total = 3
var current = 1
var isScrolling = false

$(document).ready(function(event) {
    console.log('init')
    
    var sections = $('.section') // 获取3个section
    var page = $('#page')[0] // 获取id = page的对象
    var windowHeight = $(window).innerHeight() // 获取可视的窗口大小

    sections.each(function(element) {
        $(this).height(windowHeight)
    })
    $(window).on('webkitTransitionEnd', function() { // 动画结束事件
        isScrolling = false // 滑动结束后解锁
    })
    $(window).resize(function(event) {
        sections.each(function() {
            $(this).height(windowHeight)
        })
    })
    $(window).on('mousewheel', function(e) {
        var event = e.originalEvent // 获取原生的事件对象
        var y = event.deltaY // 获取Y坐标的移动距离
        e.preventDefault() // 阻止原本的事件发生
        if(!isScrolling && y > 0) { // 当滚轮向下的时候，当无锁的时候
            if(current < total) {
                isScrolling = true // 加锁
                current += 1 
                $(page).css('transform', 'translate(0,' + -(current - 1) * windowHeight  + 'px)')
            }
        } else if(!isScrolling && y < 0) { // 当滚轮向上的时候，当无锁的时候
            if(current > 0) {
                isScrolling = true // 加锁
                current -= 1
                $(page).css('transform', 'translate(0,' + -(current - 1) * windowHeight  + 'px)')
            }
        }
    })
})