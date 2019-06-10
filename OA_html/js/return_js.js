/**
 * Created by lxh on 2019/4/16.
 */
function returnWeb(obj) {

}
function cha(show,obj1,obj2,classname) {
    var show=document.getElementsByClassName(show)[0];
    //获得对象 X
    var index=0;
    var classname=document.getElementsByClassName(classname);
    for(var i=0;i<classname.length;i++){
        classname[i].num=i;
        classname[i].onclick=function () {
            index=this.num;
            var obj2=document.getElementsByClassName(obj2)[index];
            obj2.style.display="none";
            switch (index){
                case 0:index=0;break;
                case 1:index=0;break;
                case 2:index=1;break;
                case 3:index=1;break;
                case 4:index=2;break;
                case 5:index=2;break;
            }
            var obj1=document.getElementsByClassName(obj1)[index];
            obj1.style.display="none";
            show.style.display="block";
        }
    }

}