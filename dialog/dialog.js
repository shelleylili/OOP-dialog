/*享元模式(Flyweight)。避免对象（动作）间有相同的冗余内容，抽取出来
    找准内部状态（数据与方法），外部状态（数据和方法）
    */
    //享元模式和组合模式结合
    (function(){
        function extendClass(subClass,superClass){
            var F = function(){};
            F.prototype = superClass.prototype;
            var P = function(){};
            P.prototype = new F();
            P.constructor = subClass;
            subClass.prototype = P;
        }
        //基础类，（组合模式）
        function Basic(){
            this.element = null;

            this.init();
        }
        Basic.prototype.init = function(){
            throw new Error("请重写该方法");
        }
        Basic.prototype.getElement = function(){
            throw new Error("请重写该方法");
        }

        //内部状态公有部分数据和方法
        var Flyweight =function (id,classname){
            Basic.call(this);
            this.id = id;
            this.classname = classname||"";

            this.init();
        }
        extendClass(Flyweight,Basic);
        Flyweight.prototype.init = function(){
            this.element= document.createElement("dialog");
            this.element.id = this.id;
            this.element.className = "dialog "+this.classname;
            var cover = document.createElement("div");
            cover.className = "cover";
            this.element.appendChild(cover);
            var dialogBody = document.createElement("div");
            dialogBody.className = "dialog-body";
            this.element.appendChild(dialogBody);

        }
        Flyweight.prototype.addBodyChild = function(child){
            this.element.children[1].appendChild(child);
            return this;
        }
        Flyweight.prototype.getElement = function(){
            return this.element;
        }
        Flyweight.prototype.show = function(){
            this.element.style.display = "block";
        }
        Flyweight.prototype.hide = function(){
            this.element.style.display = "none";
        }
        //title的提示文字类
        function Title(id,classname,text){
            Basic.call(this);
            this.text = text||"";
            this.id = id;
            this.classname = classname||"";

            this.init();
        }
        extendClass(Title,Basic);
        Title.prototype.init = function(){
            this.element = document.createElement("h3");
            this.element.id = this.id;
            this.element.innerHTML = this.text;
            this.element.className = "hint-text "+this.classname;
        }
        Title.prototype.getElement = function(){
            return this.element;
        };
        //按钮类
        function Btn(id,classname,text){
            Basic.call(this);
            this.id = id;
            this.classname = classname||"";
            this.text = text ||"";

            this.init();
        }
        extendClass(Btn,Basic);
        Btn.prototype.init = function(){
            this.element = document.createElement("button");
            this.element.setAttribute("id",this.id);
            this.element.innerHTML = this.text;
            this.element.className = "btn "+this.classname;
        }
        Btn.prototype.getElement = function(){
            return this.element;
        }
        //按钮类
        function Inpt(id,classname,placeholder){
            Basic.call(this);
            this.id = id;
            this.classname = classname||"";
            this.placeholder = placeholder||"";

            this.init();
        }
        extendClass(Inpt,Basic);
        Inpt.prototype.init = function(){
            this.element = document.createElement("input");
            this.element.id = this.id;
            this.element.placeholder = this.placeholder;
            this.element.className = this.classname;
        }
        Inpt.prototype.getElement = function(){
            return this.element;
        }

        /*var fl = new Flyweight("dialog1","dialog");
        fl.addBodyChild(
            new Title("t1","normal","确认删除吗").getElement()
        ).addBodyChild(
            new Btn("ok","btn-ok","确定").getElement()
        ).addBodyChild(
            new Btn("cancel","btn-cancel","取消").getElement()
        )*/
        var fl = new Flyweight("dialog2","dialog2");
        fl.addBodyChild(
            new Title("t1","small","确认删除吗").getElement()
        ).addBodyChild(
            new Inpt("inpt1","inpt","输入你的用户名").getElement()
        ).addBodyChild(
            new Btn("ok","btn-ok","确定").getElement()
        ).addBodyChild(
            new Btn("cancel","btn-cancel","取消").getElement()
        )
        document.body.appendChild(fl.getElement());
    }());