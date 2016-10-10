var div2 = document.getElementById('div2');

div2.addEventListener('mouseover', function() {
    this.nextSibling.style.background = "#1976d2";
})

div2.addEventListener('mouseout', function() {
    this.nextSibling.style.background = "#d2d2d2";
})







// $ ???


// var div2 = $('#div2');
// div2.mouseover(function() {
//     $(this).next().css('background', '#1976d2')
// })

// div2.mouseout(function() {
//     $(this).next().css('background', '#d2d2d2')
// })