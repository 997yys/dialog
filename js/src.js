function Dilog(obj){
    this.obj=obj;
    this.title=this.obj.title;
    this.error=this.obj.error;
    this.sures=this.obj.sures;
    this.init();
}
Dilog.prototype ={
    constructor:Dilog,
    init:function(){
        var box=document.createElement("box");
        var h3=document.createElement("h3");
        h3.innerHTML="<h3>"+this.title+"</h3>";
        var span1=document.createElement("span");
        span1.innerHTML="<span>"+this.sures+"</span>";
        var span2=document.createElement("span");
        span2.innerHTML="<span class='close'>"+this.error+"</span>";
        box.className="mark";
        box.appendChild(h3);
        box.appendChild(span1);
        box.appendChild(span2);
        document.body.appendChild(box);
        var close = document.getElementsByClassName('close')[0];
        close.onclick = function() {
        box.style.display = 'none';
        }
    }
}