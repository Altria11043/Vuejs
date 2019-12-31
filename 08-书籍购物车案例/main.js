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
      // for的多种使用方法
      // 方法一:
      // for (let i=0; i<this.list.length; i++){
      //   totalPrice += this.list[i].price * this.list[i].count;
      // }

      // 方法二:
      // for (let i in this.list){
      //   totalPrice += this.list[i].price * this.list[i].count
      // }

      // 方法三:
      for (let item of this.list) {
        totalPrice += item.price * item.count
      }

      // 方法四:

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