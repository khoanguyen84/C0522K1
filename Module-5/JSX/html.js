// const h1 = document.createElement("h1");
// h1.innerText = "Anh em C5 đang học react";
// h1.className ="heading_1";
// h1.title = "react";

// document.body.appendChild(h1);

const h1 = document.createElement("h1");
h1.innerText = 'HTML CSS từ Zero đến Hero';
h1.id = "heading_1"

const p = document.createElement("p");
p.innerText = "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.";
p.id = "paragraph"

const h2 = document.createElement("h2");
h2.innerText = "Bạn sẽ học được gì?"; 
h1.className = "heading_2";

const ul = document.createElement("ul");
ul.className = "courses";

const li_1 = document.createElement("li");
li_1.innerText = "Biết cách xây dựng giao diện web với HTML, CSS";

const li_2 = document.createElement("li");
li_2.innerText = "Biết cách đặt tên class CSS theo chuẩn BEM";

const li_3 = document.createElement("li");
li_3.innerText = "Làm chủ Flexbox khi dựng bố cục website";

ul.appendChild(li_1);
ul.appendChild(li_2);
ul.appendChild(li_3);

const root = document.querySelector("#root");

root.appendChild(h1);
root.appendChild(p);
root.appendChild(h2);
root.appendChild(ul);