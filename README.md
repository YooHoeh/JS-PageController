# JS-PageController
> 自己封装的js分页函数，在继续完善

## 1.在 HTML文件建立列表目标节点和翻页器目标节点
```html
<body>
<!--页面控制器 -->
  <div id="nav"></div>
  <!--列表显示 -->
  <div class="root" id="target"></div>
  <!--导入js-->
  <script src="./test.js"></script>
</body>
```

## 2.导入JS
```html
 <script src="./test.js"></script>
 ```
## 3.编辑列表项渲染函数

```js
function renderGalleryItem(item) {
  const aItem = document.createElement("div");
  const inner = `<div>
                  <p class="card__text"> ${item.desc} </p>
                  <img src=${item.src} />
                </div>`;
  aItem.innerHTML = inner;
  return aItem;
}

## 4.执行分页渲染函数

```js
// 列表渲染目标节点
const listTarget = document.querySelector("#target");
// 导航栏渲染目标节点
const navTarget = document.querySelector("#nav");

/**
 * 
 * @param {列表渲染目标节点} listTarget 
 * @param {页面控制器目标节点} navTarget 
 * @param {列表项渲染函数} renderFunc 
 * @param {每页项数} pageSize 
 * @param {列表数据源} dataSourse 
 */
renderPageNav(listTarget, navTarget, renderItem, 3, dataSourse);
```
