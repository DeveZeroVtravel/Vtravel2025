var popWindow = function(){
    this.init=function(){
        $('body').append('<div id="phwPopWindowPlaceHolder"><div class=popWindow></div></div> <div id=blurredBg></div>')
    }
}
function flowIn(){
    console.log("clicked2");
    $("#testDiv").css({
    "background-color:":"rgba(142,142,147,0)",
    "transition-timing-function": "ease-in-out",
    "transition-duration": "0.3s",
    "bottom":"0",
    });
    console.log($("#testDiv").length);
}
$(".testButton").on("click",flowIn);
$("#testDiv").on("click",flowOut);
function flowOut(){
    console.log("clicked1");
    $("#testDiv").css({
        "bottom":"-100vh",
        "background-color:":"rgba(142,142,147,0.5)",
    })
}