$(".autoRadius").each(function autoStyle(){
    var Rad= $(this).closest().width();
    Rad=$(this).closest("Body").width() * 35/100 ;
    if(Rad>40)Rad=15;
    console.log(Rad);
    $(this).css({"border-radius":Rad+"px"});
});

