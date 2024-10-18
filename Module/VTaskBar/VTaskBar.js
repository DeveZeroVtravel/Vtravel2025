var VTaskBar=function(){
    this.init=function(links,icons){
        $("body").append('<div id="VSliderFrame"></div><div id="VNavBar"></div>');
        for(var i=0;i<=links.length;i++){
            $('#VSliderFrame').append('<div id="VSlideView'+i+'"><iframe src="'+links[i]+'" height="100vh" width="100vw"></iframe>/div>')
            $('#VNavigationBar').append('<div id="VNavIcon'+i+'">'+icons[i]+'</div>')
        }
    }
}      