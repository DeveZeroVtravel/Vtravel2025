const arr=["a","b","c"];
var VTaskBar= function(){
    this.init=function(Links){
        for(let i=0;i<Links.length;i++){
            console.log(Links[i]);
        }
    }
}
var myTest=new VTaskBar();
myTest.init(arr);