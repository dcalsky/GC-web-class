var div2 = document.getElementById('div2');

div2.addEventListener('mouseover', function(e) {
    this.nextSibling.style.background = "#1967d2";
})

div2.addEventListener('mouseout', function(e) {
    this.nextSibling.style.background = "#d2d2d2";
})