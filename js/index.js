let ing = document.querySelector('#ing');
let done = document.querySelector('#done');
let titleInput = document.querySelector('#title');

// 监听回车事件
titleInput.addEventListener('keydown', function (target) {
  if (target.code == "Enter") {
    let text = titleInput.value;
    if (text == '') return;
    let li = document.createElement('li');
    addIng(li, text);
    let checkbox = li.querySelector("input");
    checkbox.addEventListener('click', function () {
      checkbox.checked ? donelist(li) : todolist(li);
    });
    li.querySelector('p').addEventListener('click', function () {
      edit(li);
    })
    li.querySelector('a').addEventListener('click', function () {
      remove(li);
    })
  }
})

// 添加到代办
function addIng(e, text) {
  e.innerHTML = `<input type="checkbox"><p>${text}</p><a href="#">-</a>`
  ing.appendChild(e);
  titleInput.value = '';
  count();
}

// 代办列表
function todolist(e) {
  ing.appendChild(e);
  count();
}

// 完成列表
function donelist(e) {
  done.appendChild(e);
  count();
}

// 移除
function remove(e) {
  e.parentNode.removeChild(e);
  count();
}

// 计算代办事项的数量
function count() {
  document.querySelector('#ing-count').innerHTML = ing.childNodes.length
  document.querySelector('#done-count').innerHTML = done.childNodes.length
}

// 编辑
function edit(e) {
  let p = e.querySelector('p')
  let text = p.innerText;
  let input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.value = text;
  e.replaceChild(input, p);
  input.focus();
  input.select();
  input.addEventListener('blur', function () {
    if (input.value == '') return;
    p.innerText = input.value;
    e.replaceChild(p, input);
  })
}