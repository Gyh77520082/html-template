// JavaScript Document
$(document).ready(function ($) {
    // lazyload
    $("img.lazy").lazyload({
        threshold: 200,
        effect: "fadeIn",
        skip_invisible: true,
    });

    // fade effect
    // $(window).scroll(function () {
    //     $(".fadeup,.fadeleft,.faderight").each(function () {
    //         let elemPos = $(this).offset().top;
    //         let scroll = $(window).scrollTop();
    //         let windowHeight = $(window).height();
    //         if (scroll > elemPos - windowHeight + 50) {
    //             $(this).addClass("scrollin");
    //         } else {
    //             $(this).removeClass("scrollin");
    //         }
    //     });
    // });

    // fade effect2
    $(window).scroll(function () {
        //ウィンドウの高さを取得
        var windowH = $(window).height(),
            //スクロール位置を取得
            scrollY = $(window).scrollTop();

        $(".fadeup,.fadeleft,.faderight").each(function () {
            //要素の位置（上端）を取得
            var thisPosition = $(this).offset().top;
            //要素の高さを取得
            var thisHeight = $(this).height();

            //要素が画面上に表示されているときにclass="effect"をつける
            if (thisPosition <= scrollY + windowH && thisPosition + thisHeight >= scrollY) {
                $(this).addClass("scrollin");
            } else {
                $(this).removeClass("scrollin");
            }
        });
    });

    // #で始まるリンクをクリックしたら実行されます(ページ内リンク)
    $('a[href^="#"]').click(function () {
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top;
        $("body,html").animate({ scrollTop: position }, speed, "swing");
        return false;
    });

    // トップに戻る
    var pagetop = $(".gotop");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $("body, html").animate({ scrollTop: 0 }, 500, "swing");
        return false;
    });
});
