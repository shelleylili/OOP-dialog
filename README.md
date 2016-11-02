# OOP-dialog
##是一个设计模式例子练习改造的，主要是使用享元模式，提取公共的数据和属性，减少冗余代码，一个可以创建不同类型的弹窗的方式。<br>
###
    1.一个基类() 无参数
    2.弹出框公用部分类(id,classname) 参数==字面意思
    3.提醒文字的类 (id,classname,text) 参数==字面意思, 
        有normal和smal两种class的类型，通过new 此类时候传参数控制，参数==字面意思
    4.按钮类(id,classname,text) 参数==字面意思
        btn-ok和btn-cancel两种class的类型 参数==字面意思
    5.input输入类(id,classname,placeholder) 参数==字面意思
