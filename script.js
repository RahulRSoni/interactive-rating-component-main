
// $('button').on('click', function () {
//     $('#stateEnd').css('display', 'block');
//     $('#stateStart').css('display', 'none');
// });

// $('.num').click(function () {
//     $(this).css("background-color", "hsl(217, 12%, 63%)");
// });

// $('.num').hover(function () {
//     $(this).css("background-color", "hsl(25, 97%, 53%)");
// });


let btn = document.getElementsByClassName('btn')[0];

btn.addEventListener('click', () => {
    let page1 = document.getElementById('stateStart');
    let page2 = document.getElementById('stateEnd');

    page1.style.display = 'none';
    page2.style.display = 'block';
})

let ratings = document.getElementsByClassName('rating');

ratings.addEventListener('click', () => {
    for (let i = 0; i < ratings.length; i++) {
        console.log(ratings[i])
    }
})
