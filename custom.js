let app = document.querySelector('#app');
let quote = document.querySelector('#quote');
let author = document.querySelector('#author');
let background = document.querySelector('#btnBackground')
let Download = document.querySelector('#btnDownload')


let quoteText = document.querySelector("[name=quote]");
let authorText = document.querySelector("[name=author]");

let colors = ["#0d4e0a", "#0a0a4e", "#490a4e", "#0a4e3a", "#e2ff09", "lightblue"]
let quotes = [
    'You can totally do this.',
    'Do not tell people your plans. Show them your results.',
    'No pressure, no diamonds. Thomas Carlyle',
    'We can do anything we want to if we stick to it long enough.',
    'When nothing goes right, go left.',
    'Try Again. Fail again. Fail better.',
    'The purpose of our lives is to be happy.',
    'Life is what happens when you’re busy making other plans.',
    'Get busy living or get busy dying.',
    'You only live once, but if you do it right, once is enough.',
    'Never let the fear of striking out keep you from playing the game.',
]
newQuote.addEventListener('click', function(e) {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNumber];
})
background.addEventListener('click', function(e) {
    let index = Math.floor(Math.random() * colors.length)
    let randomColors = colors[index];
    app.style.background = randomColors
});

quoteText.addEventListener('keyup', function(e) {
    quote.innerText = e.currentTarget.value;
});
authorText.addEventListener('keyup', function(e) {
    author.innerText = e.currentTarget.value;
});

btnDownload.addEventListener('click', function(e) {
    html2canvas(app).then(canvas => {
        let a = document.createElement('a');
        a.download = Math.floor(Math.random() * 50) + ".png";
        a.href = canvas.toDataURL();
        a.click();
    });
})