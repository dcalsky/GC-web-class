var body = document.body;
var zzButton = document.getElementById('zz-button');
var zz1Button = document.getElementById('zz1-button');


zzButton.addEventListener('click', function() {
    body.style.background = 'green';
})

zz1Button.addEventListener('click', function() {
    var i = 100000;
    setInterval(function() {
        i = i + 5000;
        body.style.background = '#' + i.toString();
    }, 50)
})

