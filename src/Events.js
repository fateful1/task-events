/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let b = document.createElement('button');
    b.innerHTML = 'Удали меня';
    document.body.appendChild(b);
    b.addEventListener('click', () => {
        document.body.removeChild(b);
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let list = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let elem = document.createElement('li');
        elem.innerHTML = arr[i];
        list.append(elem);
    }

    document.body.appendChild(list);
    let arr1 = document.querySelectorAll('li');
    for (let i = 0; i < arr1.length; i++) {
        arr1[i].addEventListener('mouseover', function (event) {
            event.target.setAttribute('title', event.target.innerHTML);
        });
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let l = document.createElement('a');
    l.href = 'https://tensor.ru/';
    l.innerHTML = 'tensor';
    document.body.appendChild(l);
    document.querySelector('a').addEventListener('click', (event) => {
        event.target.innerHTML += ` ${event.target.href}`;
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let list = document.createElement('ul');
    let el = document.createElement('li');
    el.textContent = 'Пункт';
    list.append(el);
    let but = document.createElement('button');
    but.textContent = 'Добавить пункт';
    document.body.appendChild(list);
    document.body.appendChild(but);
    let arr = document.querySelectorAll('li');
    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener('click', () => {
            arr[i].textContent += '!';
        });
    }

    document.querySelector('button').addEventListener('click', () => {
        let elem = document.createElement('li');
        elem.textContent = 'Пункт';
        elem.addEventListener('click', () => {
            elem.textContent += '!';
        });
        document.querySelector('ul').append(elem);
    });
}
