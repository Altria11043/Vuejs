#v-on使用
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
        如果没有传递参数进去也没有添加小括号, 则Vue会将浏览器产生的Event对象作为参数传入  
三. 当同时需要Event对象和其他参数时. `@click="btn3click('Saber', $event)"` 可以通过$event将Event对象传入  