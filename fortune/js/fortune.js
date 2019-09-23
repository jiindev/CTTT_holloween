//start 버튼 클릭 시 사라지도록
let start_btn = document.querySelector('.start_btn');
let start_page = document.querySelector('.start_page');
start_btn.onclick = function () {
    start_page.classList.add('animated', 'fadeOutUp');
    setTimeout(function () {
        start_page.remove();
    }, 1000);
};

//랜덤으로 포츈결과 가져오기
let cake = document.querySelector('.cake');
let quote = document.querySelector('.quote');
cake.onclick = function () {
    newQuote();
}
let newQuote = function () {
    let index = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[index];
}
let quotes = ["좋은 결과", "보통 결과", "나쁜 결과"];