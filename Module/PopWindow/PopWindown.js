const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
  };
async function flowOut() {
    console.log("clicked1");
    $(this).css({
        "background-color":"transparent"
    })
    await delay(400);
    $(this).css({
        "bottom": "-100vh",
    })

};
async function flowIn() {
    console.log("clicked2");
    $("#PopWindow").css({
        "bottom": "0",
    });
    await delay(400);
    $("#PopWindow").css({
        "background-color": "rgba(142,142,147,0.3)",
    });
};
$("#PopWindow").each(function () {
    $(this).append('<div id="popHolder"><div id="popImage"></div> <div id="popMessage"></div><div id="popOption"></div></div>');
    $(this).css({
        "bottom": "-100vh",
        "background-color": "rgba(142,142,147,0.3)",
        "width": "100vw",
        "height": "100vh",
        "display": "flex",
        //"-webkit-backdrop-filter": "blur(1px)",
        //"background-color": myColor.light.grey1,
        "position": "fixed",
        "transition-timing-function": "ease-in-out",
        "transition-duration": "0.3s",
        "justify-content": "center",
        "align-items": "center",
    });
    $(this).on("click", flowOut);
    // $(this).append('<div id="popHolder"><div id="popImage"></div> <div id="popMessage"></div><div id="popOption"></div></div>');
})
$("#popHolder").each(function () {
    $(this).css({
        "height": "60vh",
        "width": "40vh",
        "background-color": "white",
        "border-radius": "20px",
        "visibility":"visible",
        "box-shadow":"0 0 40px -10px rgba(0,0,0,.3), 0 0 25px -15px rgba(0,0,0,.2)",
    })
})

