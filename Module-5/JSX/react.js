// React.createElement(type, props, childrens)
// type:
//     + element
//     + component
// props: thuộc tính của reactElement
// children(s)
//      + Text
//      + reactElement con  
// Khi sử dụng React.createElement thì chị tạo ra trong DOM ảo

// const h1 = React.createElement("h1", {
//     id: "heading_1",
//     className: "heading",
//     title : "reactjs"
// }, "Anh em C5 đang học react");

// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(h1);

// ReactDOM.render(h1, document.querySelector("#root"));

const h1 = React.createElement("h1", {className: "heading_1"}, 'HTML CSS từ Zero đến Hero');

const p = React.createElement("p", {
    className:"para",
    style: {
        backgroundColor: "green",
        color: "white"
    }
}, "Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.");

const ul = React.createElement("ul", null,
                React.createElement("li", null, "Biết cách xây dựng giao diện web với HTML, CSS"),
                React.createElement("li", null, "Biết cách đặt tên class CSS theo chuẩn BEM"))

const container = React.createElement(React.Fragment, null, h1, p, ul)
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);