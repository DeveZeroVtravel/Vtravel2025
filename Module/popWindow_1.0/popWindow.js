var PopWindow = function () {
    this.init = function () {
        $("body").append(
            '<div id="phwPopPlaceHolder"> <div id="phwPopWindow"><div id="phwPopContentHolder"> <div id="phwPopIllus"></div> <div id="phwPopMessage" > </div></div> <div id="phwPopOptionHolder"></div> </div> </div> <div id="phwPopBackground"></div>'
        )
        $("#phwPopPlaceHolder").css({
            "bottom":"-100vh",
            "width": "100vw",
            "height": "100vh",
            "display": "flex",
            "z-index": "9",
            "position": "fixed",
            "transition-timing-function": "ease-in-out",
            "transition-duration": "0.3s",
            "justify-content": "center",
            "align-items": "center",
        })
        $("#phwPopWindow").css({
            "background-color":"white",
            "box-shadow":"0 0 40px -10px rgba(0,0,0,.3), 0 0 25px -15px rgba(0,0,0,.2)",
            "display":"flex",
            "position":"relative",
            "border-radius":"15px",
            "padding":"10px"
        })
        $("#phwPopOption").css({
            "width":"calc(100%)",
            "height":"calc(30vh)",
            "background-color":"blue",
            "margin":"0",
            //"position":"absolute",
            "bottom":"0",

        })
        $("#phwPopBackground").css({
            "bottom":"-100vh",
            "width": "100vw",
            "height": "100vh",
            //"display": "flex",
            "z-index": "8",
            "position": "fixed",
            "transition-timing-function": "ease-in-out",
            "transition-duration": "0.3s",
            "background-color": "rgba(142,142,147,0)"
        });
        $("#phwPopPlaceHolder").on("click",this.flowOut)
    }
    this.popNofiThis = function(Mes){
        console.log(Mes)
        $("#phwPopWindow").css({
            "width":"40vw",
            "height":"10vw"
            
        })
        $("#phwPopMessage").css({
            "width":"40vw",
            "height":"10vw",
            "background-color":"green",
        })
        $("#phwPopMessage").append('<p>'+Mes+'</p>');
        this.flowIn();
    }
    //initEnd//
    this.flowIn = async function () {
        //console.log("clicked")
        $("#phwPopBackground").css({
            "transform": "translateY(-100vh)",
        });
        await delay(300);
        $("#phwPopBackground").css({
            "background-color": "rgba(142,142,147,0.5)"
        });
        $("#phwPopPlaceHolder").css({
            "transform": "translateY(-100vh)"
        });
    }
    this.flowOut =async function () {
        $("#phwPopBackground").css({
            "background-color": "rgba(142,142,147,0)"
        });
        await delay(300);
        $("#phwPopBackground").css({
            "transform": "translateY(+100vh)",
        });
        $("#phwPopPlaceHolder").css({
            "transform": "translateY(+100vh)"
        });
        $("#phwPopIllus").html("");
        $("#phwPopMessage").html("");
        //document.getElementById("phwPopMessage").innerHTML="";
        $("#phwPopOptionHolder").html("");
    }

}
const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
};