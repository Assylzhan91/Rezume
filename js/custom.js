window.addEventListener('load', function () {
    let mainCol = document.querySelectorAll('.main__col');


    for (let i in mainCol){
        let marginLeft = "margin-left: auto";
        let mainColNum = mainCol[i];

        if(parseInt(i) % 2 === 0 && parseInt(i)!== 0){

            mainColNum.setAttribute('style', marginLeft);

        }
    }


    let headerWrapBtn = $('#dropdown');


    let portfolio = $('.portfolio');
    let faSortUp = $('.fa-sort-up');
    let someDiv = document.querySelectorAll('.someDiv');

    headerWrapBtn.on('click', function () {
        portfolio.fadeIn();
        faSortUp.attr('style', 'transform: rotate(180deg)')
    });




    portfolio.on('mouseleave', function () {
        portfolio.fadeOut();
        faSortUp.removeAttr('style');
    })



})

