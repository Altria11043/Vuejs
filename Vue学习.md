# Vue学习

## 导入

在Vue官网下载js文件 [下载](https://cn.vuejs.org/js/vue.js)

然后再html文件中进行导入

```html
<script src="../js/vue.js"></script>
```

![示例1](E:\Java\前端相关\img\1.png)

#### HelloVueJs

导入完vue.js文件后就可以开始vue框架的学习了

```html
<div id="app">
  {{message}}
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',	// 用于挂载要管理的元素
    data: {	// 定义数据
      message: 'Hello, Vue'
    }
  })
</script>
```

在上面的代码示例中, el: '#app' 可以对 id为'app'的div 进行管理

data则是对数据进行管理, 在data中的message可以在div中的{{message}}(这里的双大括号是Mustache语法)中展示出来

![示例1](E:\Java\前端相关\img\示例1.png)

let: 定义变量 / const: 定义常量

#### 列表展示

```html
<div id='app'>
    <ul>
        <li v-for="item in message">{{item}}</li>
    </ul>
</div>
<script src="../js/vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: ['复仇者联盟', '你的名字', '横空出世']
        }
    })
</script>
```

其中v-for将message中的数组元素赋值给item

![示例2](E:\Java\前端相关\img\示例2.png)

#### 计数器

```html
<div id="app">
    <h2>当前计数: {{conter}}</h2>
<!--    <button v-on:click="conter++">+</button>-->
<!--    <button v-on:click="conter&#45;&#45;">-</button>-->
    <button v-on:click="add">+</button>
    <button v-on:click="sub">-</button>
</div>

<script src="../js/vue.js"></script>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            conter: 0
        },
        methods: {
            add: function() {
                console.log("+1");
                this.conter ++;
            },
            sub: function() {
                console.log("-1");
                this.conter --;
            }
        }
    })
</script>
```

v-on:click="conter++"可以直接对数据进行修改, 但是这样只能编写一些简单的函数无法对该函数进行监听

所以采用第二种方法, 再methods中对方法进行定义, 然后v-on:click进行调用

#### vue模板

WebStorm中可以进行模板设置, 这样就可以避免每次新建html文件之后还要重复填写一些基本代码

![示例3](E:\Java\前端相关\img\示例3.png)

添加新的模板, 并将下面代码填入Template text中: 

```html
<div id="app">
  {{message}}
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好'
    }
  })
</script>
```

然后再进行一些修改, 就可以再html页面中输入'vue'然后按空格出现上面代码

![示例4](E:\Java\前端相关\img\示例4.png)

## 插值操作

#### Mustache语法

```html
<div id="app">
  <h3>{{message}}</h3>
  <h3>{{firstName + '·' + lastName}}</h3>
  <h3>{{firstName}} {{lastName}}</h3>
  <h2>{{counter * 2}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      firstName: 'Saber',
      lastName: 'Alter',
      counter: 100,
    }
  })
</script>
```

mustache语法中{{}}不仅可以直接填入变量, 还可以写一些简单的表达式

#### 插值操作的相关指令

- v-once: 在第一次展示数据之后, 所展示的数据不会跟着后面的数据变动而变动

- v-html: 当后台返回了一个html标签的时候, 可以使用v-html将这个标签的效果展示出来

  ```html
  <h2 v-html="url"></h2>
  <script src="../js/vue.js"></script>
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        url: '<a href="http://www.baidu.com">百度一下</a>'
      }
    })
  </script>
  ```
  
- v-text: 效果与{{message}}所要表达的内容几乎没有区别, 但是不够灵活无法做到Mustache语法的一些复杂操作

- v-pre: 将标签中的内容原封不动的显示出来, 不做任何解

- v-cloak: 一旦vue对该指令所标记到达标签做了解析, 这个指令就会被删除, 这样就可以做一些在没有被解析之前的样式操作

## 动态绑定属性

#### v-bind的基本使用

v-bind: 可以动态的绑定属性

```html
<body>
<div id="app">
  <img v-bind:src="imgURL" alt="">
  <a v-bind:href="aHref">超链接1</a>
  <!-- 缩写, 只需要在前面加 : 就可以了 -->
  <img :src="imgURL" alt="">
  <a :href="aHref">超链接2</a>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      imgURL: "https://img.nga.178.com/attachments/mon_201707/10/f0Q7uie-c3roK1wT1kS5a-3m.png",
      aHref: "https://www.baidu.com",
    }
  })
</script>
</body>
```

只需要把需要动态绑定属性的前面加上`v-bind`就可以了

v-bind有个简单的缩写, 就是在属性前面添加一个`:`也可以达到绑定的效果

#### v-bind动态绑定class

在实际开发中有很多时候是需要动态绑定样式的

绑定class有两种方式:

 对象语法和数组语法

```html
<head>
  <meta charset="UTF-8">
  <title>v-bind动态绑定class-01</title>
  <style>
    .active {
      color: red;
    }
  </style>
</head>
<body>
<div id="app">
  <h2 class="title" v-bind:class="{active: isActive, line: isLine}">{{message}}</h2>
  <button v-on:click="btnClick">点击</button>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      isActive: true,
      isLine: true,
    },
    methods: {
      btnClick: function(){
        this.isActive = !this.isActive
      }
    }
  })
</script>
</body>
```

在上面的代码中,  固定不变的样式可以单独在class中写出来, 

需要动态绑定的属性可以像上面的绑定方法一样, 先将样式写入对象中{类名1, boolean, 类名2, boolean}

先将其需要的样式放入其中, 在下面以控制boolean值达到动态绑定属性的效果

```html
<body>
<div id="app">
  <h2 class="title" v-bind:class="{active: isActive, line: isLine}">{{message}}</h2>
  <h2 class="title" v-bind:class="getClasses()">{{message}}</h2>
  <button v-on:click="btnClick">点击</button>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      isActive: true,
      isLine: true,
    },
    methods: {
      btnClick: function(){
        this.isActive = !this.isActive
      },
      getClasses: function () {
        return {active: this.isActive, line: this.isLine}
      }
    }
  })
</script>
```

上面的代码是对上面的进行了优化, 这样就不需要再标签中写很长一段代码了

#### v-bind动态绑定style

动态绑定样式: 两种方式

对象语法: 

```html
<body>
<div id="app">
  <p :style="{fontSize: '50px', color: 'red'}">{{message}}</p>
  <p :style="{fontSize: finalSize, color: finalColor}">{{message}}</p>
  <p :style="getStyles()">{{message}}</p>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      finalSize: '100px',
      finalColor: 'blue',
    },
    methods: {
      getStyles: function () {
        return {fontSize: this.finalSize, backgroundColor: this.finalColor}
      }
    },
  })
</script>
</body>
```

这里要留意, 属性后面的值要记得带引号

数组语法: 

```html
<div id="app">
  <h2 :style="[baseStyles1, baseStyles2]">{{message}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      baseStyles1: {backgroundColor: 'red'},
      baseStyles2: {fontSize: '100px'}
    }
  })
</script>
```

这个的数组语法很少用, 这里只做了解就可以了

## 计算属性

#### 计算属性的基本使用

```html
<div id="app">
  <h2>{{firstName + ' ' + lastName}}</h2>
  <h2>{{firstName}} {{lastName}}</h2>
  <h2>{{fullName}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      firstName: 'Saber',
      lastName: 'Alter',
    },
    computed: {
      fullName: function() {
        return this.firstName + ' ' + this.lastName
      }
    },
  })
</script>
```

**使用场景之一**: 如果有需要大量拼接字符串的相关操作, 可以用属性计算的方法简化其操作, 只需要再data下添加computed,然后再里面进行相关操作. 

#### 计算属性的复杂操作

```html
<div id="app">
  <h2>总价格: {{totalPrice}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      books: [
        {id: 110, name: 'Unix编程艺术', price: 119},
        {id: 111, name: '代码大全', price: 100},
        {id: 112, name: 'java编程思想', price: 60},
        {id: 113, name: '现代操作系统', price: 70},
      ]
    },
    computed: {
      totalPrice: function() {
        let result = 0
        // ES5语法
        // for (let i = 0; i < this.books.length; i++){
        //   result += this.books[i].price
        // }
        // ES6语法
        for (let book of this.books){
          result += book.price
        }
        return result
      }
    }
  })
</script>
```

**使用场景之一**: 将数值处理之后展示出来, 

这里用了两种for循环的使用方法, 还有一种和java的foreach一样. 

#### computed和methods的对比

```html
<div id="app">
  <h2>{{firstName + ' ' + lastName}}</h2>
<!--  <h2>{{getFullName()}}</h2>-->
<!--  <h2>{{getFullName()}}</h2>-->
<!--  <h2>{{getFullName()}}</h2>-->
<!--  <h2>{{getFullName()}}</h2>-->
<!--  <h2>{{getFullName()}}</h2>-->
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
  <h2>{{fullName}}</h2>
</div>

<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      firstName: 'Saber',
      lastName: 'Alter',
    },
    methods: {
      getFullName: function() {
        console.log('fullName');
        return this.firstName + ' ' + this.lastName
      }
    },
    computed: {
      fullName: function() {
        console.log('fullName');
        return this.firstName + ' ' + this.lastName
      },
    },
  })
</script>
```

结果:

使用methods后台的执行情况

![计算属性示例1](E:\Java\前端相关\img\计算属性示例1.png)

使用computed的使用情况

![计算属性示例2](E:\Java\前端相关\img\计算属性示例2.png)

通过上面的情况可以看出computed在后台只执行了一次, 只要数据不变动就不在执行第二次, 就**性能来看computed的性能优于methods**

#### const的使用

const关键字, 使用const修饰的标识符为常量, 不可以再次赋值

当我们修饰的标识符不会再次赋值时, 就可以使用const来保证数据的安全性

**建议**:在ES6开发中, 优先使用const, 只有需要改变某一个标识符的时候才使用let

const被数组赋值之后, 数组内的内容是可以更改的, 只要指向的内存地址没有变

#### 对象字面量的增强写法

```html
<script>
// 字面量的常规写法
  const obj = {
    name: 'Saber',
    age: 14,
    run: function() {
      console.log('在奔跑');
    },
    eat: function() {
      console.log('在吃东西');
    }
  }
//  属性的增强写法
  const name = 'Saber';
  const age = 14;
  const height = 1.6;
  // ES5写法
  const obj1 = {
    name: name,
    age: age,
    height: height,
  }
  // ES6写法
  const obj2 = {
    name,
    age,
    height,
  }
//  函数的增强写法
//  ES5写法
  const obj3 = {
    run: function() {
    },
    eat: function() {
    }
  }
//  ES6写法
  const obj4 = {
    run(){
    },
    eat(){
    },
  }
</script>
```

## v-on使用

#### v-on基本使用
事件监听, 在开发中用于监听用户的操作, 比如点击, 拖拽, 键盘事件等.   

在Vue中使用v-on进行监听.
作用: 绑定事件监听器
缩写(语法糖): @

```html
<div id="app">
  <h2>{{counter}}</h2>
<!--  <button v-on:click="counter++">+</button>-->
<!--  <button v-on:click="counter&#45;&#45;">-</button>-->
<!--  <button v-on:click="increment">+</button>-->
<!--  <button v-on:click="decrment">-</button>-->
  <button @click="increment">+</button>
  <button @click="decrment">-</button>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      counter: 0,
    },
    methods: {
      increment(){
        this.counter++
      },
      decrment(){
        this.counter--
      },
    },
  })
</script>
```

#### v-on参数传递
v-on的参数传递有三种情况:  

一. 当不需要参数传入的时候, 可以不需要添加括号. 这个时候方法正常执行里面的内容  

二. 当需要传递参数时. 如果不传递参数进去则会默认传递一个`undefined`进去, 否则传入参数正常执行  

​        如果没有传递参数进去也没有添加小括号, 则Vue会将浏览器产生的Event对象作为参数传入  

三. 当同时需要Event对象和其他参数时. `@click="btn3click('Saber', $event)"` 可以通过$event将Event对象传入  

#### v-on修饰符

**@click.stop**: 

在开发中有时会出现一个点击事件触发两个方法的情况, 就像下面这种情况

```html
<div @click="divclick">
  <p>aaa</p>
  <button @click="btnclick">按钮</button>
</div>
```

这种情况, 如果点击`<p>`标签中的文字会触发`divclick`方法, 而点击`btnclick`则会触发两个方法. 如果像避免这种情况则需要使用`stop`修饰符进行修饰. 像下面这样

```html
<div @click="divclick">
  <p>aaa</p>
  <button @click.stop="btnclick">按钮</button>
</div>
```

在按钮的点击事件处添加一个`stop`修饰符就可以避免点击按钮时触发`divclick`方法了. 

**@click.prevent**: 

在需要阻止某个默认事件的时候可以使用`prevent`修饰符. 如:

```html
<form action="PUT">
  <input type="submit" value="提交" @click="subClick">
</form>
```

如果不想在点击提交之后马上提交表格而是要对数据进行一些修改, 可以使用`prevent`修饰符, 如下: 

```html
<form action="PUT">
  <input type="submit" value="提交" @click.prevent="subClick">
</form>
```

这样就可以阻止表格提交, 然后进行其他的方法.  

**@keyup/@keydown**: 

按键监听: 如字面意义上的意思, `@keyup`只有在按住按键往上弹回原位才回触发事件, `@keydown`则回在按住按键时才回触发  

如果在其后面添加键别名或者键代码就可以指定某个按键进行监听, 代码如下:

```html
<p>任意按键都有反应</p>
<input type="text" @keyup="keyUp">
<p>只有按回车才有反应</p>
<input type="text" @keyup.enter="keyUp">
<p>只有按下回车才有反应</p>
<input type="text" @keydown.enter="keyUp">
```

**@once**: 

只触发一次事件

```html
<div>
  <button @click.once="btnclick">按钮</button>
</div>
```

## 条件判断

#### v-if的使用

进行条件判断, 代码如下:

```html
<div id="app">
  <h2 v-if="isShow">{{message}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      isShow: true,
    },
  })
</script>
```

如果`v-if`的值为true则显示这个标签内的内容, 如果为false则反之.  

#### v-if和v-else

```html
<div id="app">
  <h2 v-if="isShow">{{message}}</h2>
  <h2 v-else>如果isShow为false就显示这一行</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      isShow: true,
    },
  })
</script>
```

与java类似

#### v-if和v-else-if和v-else

```html
<div id="app">
  <h2 v-if="score>=90">优先</h2>
  <h2 v-else-if="score>=80">优先</h2>
  <h2 v-else-if="score>=60">良</h2>
  <h2 v-else>不及格</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      score: 99,
    },
  })
</script>
```

与java类似, 

要注意, 如果要进行比较复杂的运算建议使用方法

#### v-show的使用方法

`v-show`的使用方法与`v-if`类似, 都是true为显示false不显示.  

``` html
<div id="app">
  <h2 v-if="isShow">{{message}}</h2>
  <h2 v-show="isShow">{{message}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      isShow: true,
    },
  })
</script>
```

![v-show1](E:\Java\前端相关\img\v-show1.png)

![v-show2](E:\Java\前端相关\img\v-show2.png)

从上面的图片中可以看出, 当`v-show`为false的时候标签还在只是不显示了, `v-if`是标签都被删除了

只有在显示和隐藏频繁切换时才会使用`v-show`其他时候都是用v-if

## 循环遍历

#### v-for循环遍历

**数组遍历**

```html
<div id="app">
  <ul>
    <li v-for="item in message">{{item}}</li>
  </ul>
<!--  在循环遍历过程中, 获取索引值-->
  <ul>
    <li v-for="(item, index) in message">
      {{(index+1) + ' ' + item}}
    </li>
  </ul>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: ['Saber', 'Alter', 'Zhou', 'Altria'],
    },
  })
</script>
```

**对象遍历**

```html
<div id="app">
  <ul>
    <li v-for="(value, key) in info">
      {{key + ': ' + value}}
    </li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in info">
      {{(index+1) + '  ' + key + ': ' + value}}
    </li>
  </ul>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      info:{
        name: 'Zhou',
        age: 18,
        height: 1.70,
      },
    },
  })
</script>
```

对象遍历需要注意一点, 这里的key和value的位置互换了, value在前key在后

#### v-for使用过程中添加key

```html
<div id="app">
  <ul>
    <li v-for="item in letters" :key="item">{{item}}</li>
  </ul>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      letters: ['A', 'B', 'C', 'D', 'E'],
    },
  })
</script>
```

要注意, 这里的`key`最好是绑定`item`, 因为`index(下标)`会随着数组的变动而变得, 但也要注意, key不能相同

#### 响应式数组

```html
<div id="app">
  <ul>
    <li v-for="item in letters">{{item}}</li>
  </ul>
  <button @click="btnClick">按钮</button>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      letters: ['a', 'b', 'c', 'd']
    },
    methods: {
      btnClick(){
        // 1. push方法可以做到响应式
        // this.letters.push('Zhou');
        // 2. 通过索引值修改数组中的元素, 无法响应
        // this.letters[0] = 'Zhou';
        // 3. pop(), 删除数组的最后一个元素
        // this.letters.pop();
        // 4. shift(), 删除数组的第一个元素
        // this.letters.shift();
        // 5. unshift(), 在第一个元素前面添加元素
        // this.letters.unshift('Zhou');
        // 6. splice(), 可以删除元素/插入元素/替换元素
        // 删除, 下标1开始的两个元素, 如果后面的删除元素个数不传入的话, 则下标1后面的元素全部删除
        // this.letters.splice(1, 2)
        // 替换, 将下标为1及后面的两个元素替换成给定的元素, 如果给定的元素多余要替换的元素则插入
        // this.letters.splice(1, 2, 's', 'a', 'Z', '1')
        // 插入, 第二个元素为0, 则不删除元素且在指定位置插入元素
        this.letters.splice(1, 0, 's', 'a')
      },
    },
  })
</script>
```

数组相关的知识, 以及那些是可以响应式的改变数组元素.  

#### 书籍购物车案例

**index.html**

```html
<body>
<div id="app">
  <div v-if="list.length">
    <table>
      <thead>
      <tr>
        <th></th>
        <th>书籍名字</th>
        <th>出版日期</th>
        <th>价格</th>
        <th>购买数量</th>
        <th>操作</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in list">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.date}}</td>
        <td>{{item.price | showPrice}}</td>
        <td>
          <button @click="subClick(index)" :disabled="item.count <= 1">-</button>
          {{item.count}}
          <button @click="addClick(index)">+</button>
        </td>
        <td>
          <button @click="removeList(index)">移除</button>
        </td>
      </tr>
      </tbody>
    </table>
    <h3>总价格: {{totalPrice | showPrice}}</h3>
  </div>
  <h2 v-else>购物车为空</h2>
</div>
<script src="../js/vue.js"></script>
<script src="main.js"></script>
</body>
```

**main.js**

```javascript
const app = new Vue({
  el: '#app',
  data: {
    list: [
      {
        id: 1,
        name: 'java编程思想',
        date: '2019-10',
        price: 120.00,
        count: 1
      },
      {
        id: 2,
        name: 'python',
        date: '2019-1',
        price: 90.00,
        count: 1
      },
      {
        id: 3,
        name: 'PHP',
        date: '2019-3',
        price: 50.00,
        count: 1
      },
      {
        id: 4,
        name: '算法',
        date: '2019-12',
        price: 45.20,
        count: 1
      },
      {
        id: 5,
        name: 'C++',
        date: '2019-2',
        price: 84.50,
        count: 1
      },
      {
        id: 6,
        name: 'C',
        date: '2019-7',
        price: 75.10,
        count: 1
      },
    ]
  },
  computed: {
    totalPrice() {
      let totalPrice = 0;
      for (let item of this.list) {
        totalPrice += item.price * item.count
      }
      return totalPrice;
    },
  },
  methods: {
    addClick(index) {
      this.list[index].count++;
    },
    subClick(index){
      if (this.list[index].count > 1){
        this.list[index].count--;
      }
    },
    removeList(index) {
      this.list.splice(index, 1);
    },
    getfinalPrice(){

    },
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    },
  },
})
```

**style.css**

```css
table{
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th, td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
```

此案例使用了前面所学的知识进行实现, 还新增了过滤器的概念. 

#### Javascript高阶函数的使用

**filter函数**

```javascript
// 需求: 取出小于100的数字
const nums = [10, 30, 100, 99, 101, 60, 200];
// 方法一:
let newNums1 = [];
for (let n of nums) {
    if (n < 100){
      newNums1.push(n)
    }
}
// 方法二:
let newNums2 = nums.filter(function (n){
  return n < 100;
})
console.log("newNums1: " + newNums1);
console.log("newNums2: " + newNums2);
```

遍历`nums`数组并将其传入方法中进行判断, `filter`中的回调函数有一个要求: 必须返回一个`boolean`值

`true:` 当返回值`true`时, 函数内部自动将这次回调的n加入新的数组中

`false`: 当返回值为`false`时, 函数内部会过滤掉这次的n

**map函数**

```javascript
// 需求: 将newNums2中的数字乘以2
// 方法一:
let newNums3 = [];
for (let n of newNums2) {
  newNums3.push(n * 2);
}

// 方法二:
let newNums4 = newNums2.map(function (n) {
  return n * 2;
})
console.log('newNums3: ' + newNums3);
console.log('newNums4: ' + newNums4);
```

遍历`newNums2`并返回值到新的数组中

**reduce函数**

```javascript
// 需求: 将所有nums的数字相加, 得到最终的结果
let total1 = 0;
// 方法一:
for (let n of nums){
  total1 += n
}

// 方法二:
let tobal2 = nums.reduce(function(preValue, n) {
  return preValue + n;
}, 0)
console.log(total1);
console.log(tobal2);
```

`nums.reduce(参数一, 参数二)`

`reduce`函数的参数一为方法体, 参数二为初始值

方法体中, **第一个参数**为该方法上一次返回值, 如果没有返回值则使用初始值, **第二个参数**为当前遍历的值. 

#### 箭头函数初接触

将上面的高阶函数使用箭头函数进行简化

```javascript
// 需求: 将nums中小于100的筛选出来并且乘以2然后相加
let tobal3 = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre + n, 0);
console.log(tobal3);
```

## v-model的使用

#### v-model的基本使用

表单控件在实际开发中是非常常见的, 特别是对于用户信息的提交, 需要大量的表单.

`v-model`指令是用来实现表单元素和数据的双向绑定. 

```html
<div id="app">
  <input type="text" v-model="message">
  <h2>{{message}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
    },
  })
</script>
```

`v-model`其实是一个语法糖, 它背后本质是两个操作:

1. v-bind绑定一个value属性

2. v-on指令给当前元素绑定input事件

#### v-model与radio结合

```html
<div id="app">
  <label for="male">
    <input type="radio" id="male" value="male" v-model="sex">男
  </label>
  <label for="female">
    <input type="radio" id="female" value="female" v-model="sex">女
  </label>
  <h2>{{sex}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
      sex: 'male',
    },
  })
</script>
```

`radio`中的`v-model`绑定是同一个值的时候, `radio`的两个选项是互斥的.  

#### v-model与checkbox的结合

```html
<div id="app">
  <label for="agree">
    <input type="checkbox" id="agree" v-model="isAgree">同一协议
  </label>
  <h2>{{isAgree}}</h2>
  <input type="checkbox" value="篮球" v-model="hobbies">篮球
  <input type="checkbox" value="足球" v-model="hobbies">足球
  <input type="checkbox" value="乒乓球" v-model="hobbies">乒乓球
  <input type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
  <h2>{{hobbies}}</h2>
  <!-- 下面是优化之后的代码 -->
  <label v-for="item in originHobbies">
    <input type="checkbox" :value="item" v-model="hobbies">{{item}}
  </label>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      isAgree: false,
      hobbies: [],
      originHobbies: ['篮球', '足球', '乒乓球', '羽毛球', '排球', '橄榄球'],
    },
  })
</script>
```

在后面使用了`v-for`进行了优化, 与label进行了绑定会提升用户的使用体验.

#### v-model与select的结合

```html
<div id="app">
  <!-- 单选 -->
  <select name="abc" v-model="fruit">
    <option value="苹果">苹果</option>
    <option value="火龙果">火龙果</option>
    <option value="西瓜">西瓜</option>
    <option value="梨子">梨子</option>
  </select>
  <h2>你选择的水果为: {{fruit}}</h2><br>
  <!-- 多选 -->
  <select name="abc" v-model="fruits" multiple>
    <option value="苹果">苹果</option>
    <option value="火龙果">火龙果</option>
    <option value="西瓜">西瓜</option>
    <option value="梨子">梨子</option>
  </select>
  <h2>你选择的水果为: {{fruits}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      fruit: '火龙果',
      fruits: [],
    },
  })
</script>
```

select在后面很少用到, 这里只是留个印象.  

#### v-model的修饰符

**lazy**

```html
<div id="app">
  <input type="text" v-model.lazy="message">
  <h2>{{message}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      message: '你好',
    },
  })
</script>
```

使用`lazy`修饰之后, 会进行懒加载在输入框失去聚焦之后或敲击回车键之后才会将数据进行绑定.

**number**

```html
<div id="app">
  <!-- number的使用 -->
  <input type="number" v-model.number="age">
  <h2>{{age}}->{{typeof age}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      age: 0,
    },
  })
</script>
```

在使用`input`标签的`number`属性时, 与`v-model`进行绑定后, 实际显示的属性类型与预想的不符(0单独出现时除外). 需要使用`number`进行类型转换. 

**trim**

```html
<div id="app">
  <!-- trim的使用 -->
  <input type="text" v-model="name">
  <h2>你的名字: {{name}}</h2>
</div>
<script src="../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      name: 'Saber',
    },
  })
</script>
```

![QQ截图20200101212253](E:\Vuejs\MDImg\QQ截图20200101212253.png)

通常情况下如果不使用`trim`后台会接收输入框中完整的数据, 当然空格也是一样的, 如果不想要前后的空格就可以使`trim`修饰符进行修饰.