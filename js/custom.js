window.addEventListener('load', function () {
    let mainCol = document.querySelectorAll('.main__col');


    for (let i in mainCol){
        let marginLeft = "margin-left: auto";
        let mainColNum = mainCol[i];

        if(parseInt(i) % 2 === 0 && parseInt(i)!== 0){

            mainColNum.setAttribute('style', marginLeft);

        }
    }


    let headerWrapBtn = $('.header__wrap-btn');
    let portfolio = $('.portfolio');
    let faSortUp = $('.fa-sort-up');

    headerWrapBtn.on('click',  function () {
        portfolio.fadeIn();
        faSortUp.addClass('fa-rotate-180');
    });

    portfolio.on('mouseleave', function () {
        portfolio.fadeOut();
        faSortUp.removeClass('fa-rotate-180');
    })



})

