/**
 *
 * @param {列表渲染目标节点} listTarget
 * @param {页面控制器目标节点} navTarget
 * @param {列表项渲染函数} renderFunc
 * @param {每页项数} pageSize
 * @param {列表数据源} dataSourse
 */
function PageController(
  listTarget,
  navTarget,
  renderFunc,
  pageSize,
  dataSourse
) {
  // 总页数
  const pageLength = Math.ceil(dataSourse.length / pageSize);

  //页面控制器
  const controller = {
    cur: 0,
    toPage: function(index) {
      listTarget.innerHTML = "";
      for (let i = (index - 1) * pageSize; i < index * pageSize; i++) {
        if (dataSourse[i]) {
          listTarget.appendChild(renderFunc(dataSourse[i]));
        } else {
          break;
        }
      }
      this.cur = index;
      console.log(this.cur);
    },
    next: function() {
      this.toPage(this.cur + 1);
    },
    prev: function() {
      this.toPage(this.cur - 1);
    },
    start: function() {
      this.toPage(1);
    },
    end: function() {
      this.toPage(pageLength);
    }
  };
  // 页码按钮渲染
  const pageBTN = index => {
    const btn = document.createElement("b");
    btn.innerHTML = index;
    btn.onclick = () => controller.toPage(index);
    return btn;
  };

  // 第一页按钮
  const startBTN = document.createElement("b");
  startBTN.innerHTML = "《";
  startBTN.onclick = () => {
    controller.start();
  };
  navTarget.appendChild(startBTN);

  // 上一页按钮
  const prevBTN = document.createElement("b");
  prevBTN.innerHTML = "<";
  prevBTN.onclick = () => {
    if (controller.cur != 1) controller.prev();
  };
  navTarget.appendChild(prevBTN);

  // 页面跳转按钮
  const page = document.createElement("span");
  for (let i = 1; i <= pageLength; i++) {
    page.appendChild(pageBTN(i));
  }

  navTarget.appendChild(page);

  // 下一页按钮
  const nextBTN = document.createElement("b");
  nextBTN.innerHTML = ">";
  nextBTN.onclick = () => {
    if (controller.cur != pageLength) {
      controller.next();
    }
  };
  navTarget.appendChild(nextBTN);
  // 尾页按钮
  const endBTN = document.createElement("b");
  endBTN.innerHTML = "》";
  endBTN.onclick = () => {
    if (controller.cur != pageLength) {
      controller.end();
    }
  };
  navTarget.appendChild(endBTN);
}
// 列表渲染目标节点
const listTarget = document.querySelector(".root");
// 导航栏渲染目标节点
const navTarget = document.querySelector(".nav");

//渲染单个Item
function renderItem(item) {
  const aItem = document.createElement("div");
  const inner = `<div class='card'>
  <p class="card__text"> ${item.desc} </p>
  </div>`;
  aItem.innerHTML = inner;
  return aItem;
}

// 这里存后台发来的数据
var data = [
  {
    desc: "11111"
  },
  {
    desc: "22222"
  },
  {
    desc: "3333"
  },
  {
    desc: "44444"
  },
  {
    desc: "55555"
  },
  {
    desc: "66666"
  },
  {
    desc: "77777"
  },
  {
    desc: "8888"
  },
  {
    desc: "9999"
  },
  {
    desc: "aaaaa"
  }
];

PageController(listTarget, navTarget, renderItem, 3, data);
