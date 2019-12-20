# 轮播插件
使用原生JavaScript来写一个轮播组件
#### 主要实现功能
1. 通过点击 [上一页]、[下一页]按钮，切换图片
2. 点击图片的底部小圆点，切换图片，选中的圆点改变样式
3. 自动轮播功能，当鼠标移到图片上时，自动轮播停止，鼠标离开图片区域后，自动轮播恢复
#### 主要用到的函数和方法
1. 使用 ES6 中的类`class`来生成实例对象
2. 使用 ES6 中数组`Array.from`方法用于将类似数组的对象 DOM 操作返回的 NodeList 集合转化为真正数组，便于使用数组的方法
3. 使用 getter 语法`get [函数名]() { ... }`, get语法将对象属性绑定到查询该属性时将被调用的函数。
4. 通过改变 css 中 `z-index`的值来达到图片切换的效果
5. 箭头函数 `() => { }`的使用
6. `setInterval()` 和 `clearInterval()`的使用
7. 数组方法`indexof(element)`，查找数组内指定元素位置，查找到第一个后返回其索引，没有查找到返回-1
8. DOM 中 Element 的`mouseleave` 和 `mouseenter`事件