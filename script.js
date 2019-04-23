$(document).ready(function() {
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter:$(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
            });
    });
    
    function newDeal(img, title, price, color, extraCls) {
        $('.deals').append("<div class='col "+extraCls+"'> <img class='img-product' src="+img+" alt=''><br><div class='mt-4'><a class='text-product title-product' href=''>"+title+"</a><p class='text-product'>"+price+"₽</p><p style='background-color: "+color+"' class='border-color'></p></div></div>");
    }
    
    $('.btn-plus').one('click', function() {
        $(this).html('<img class="check" src="arial.svg">').toggleClass('btn-plus-sh');
    })
    
    $('.more').one('click', function() {
        $('.deals').append(newDeal('https://lp2.hm.com/hmgoepprod?set=source[/eb/42/eb42f17a421fd906bb6851c9d9992822a213744b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]', 'Шорты обычные', '299', '#A8F2CD'), newDeal('https://lp2.hm.com/hmgoepprod?set=source[/eb/42/eb42f17a421fd906bb6851c9d9992822a213744b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]', 'Шорты необычные', '1299', '#B2F2EA'), newDeal('https://lp2.hm.com/hmgoepprod?set=source[/eb/42/eb42f17a421fd906bb6851c9d9992822a213744b.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[1]&call=url[file:/product/main]', 'Шорты чрезвычайно обычные', '29', '#D9A2CD'));
        $('.lhm').text('показано 6 из 12');
        $('.more').one('click', function() {
            $('.lhm').text('показано 9 из 12');
        })
    })
})