const pic = ".sort_pic"
const toy = '.sort_toy'
const trink = '.sort_trink'
const menu = '.menu'
let slide = 1
appear =  'header :first-child :nth-child(n+2)'

$(pic).click(function() {
        $( ".container_trink" ).addClass( "hidden" )
        $( ".container_toy" ).addClass( "hidden" )
        $( ".container_pic" ).removeClass( "hidden" )
});

$(toy).click(function() {
        $( ".container_trink" ).addClass( "hidden" )
        $( ".container_pic" ).addClass( "hidden" )
        $( ".container_toy" ).removeClass( "hidden" )
});

$(trink).click(function() {
        $( ".container_pic" ).addClass( "hidden" )
        $( ".container_toy" ).addClass( "hidden" )
        $( ".container_trink" ).removeClass( "hidden" )
});

$(menu).click(function() {
        $(appear).removeClass('hov');
        if (slide) {
                $(appear).slideDown();
                slide = 0
        }
        else {
                $(appear).slideUp();
                slide = 1
        }
});



    
function zoom() {
        document.body.style.background = "gray"
}

