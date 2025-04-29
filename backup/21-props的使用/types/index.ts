//定义一个名为PersonInter的接口，用于限制person对象的具体属性。注意ts的语法，没有=
//用export暴露
export interface PersonInter {    
    id:string,
    name:string,
    age:number,
    x?:number  //可选属性，不加？就是创建该类型数据必有得属性
}

export type Persons = Array<PersonInter>
//export type Persons = PersonInter[] 也可以