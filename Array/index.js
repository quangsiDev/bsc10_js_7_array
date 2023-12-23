// array : lưu danh sách các giá trị thuộc 1 nhóm ( danh sách sdt, tên)

var colors = ["red", "blue"];
console.log("😀 - colors", colors);

// thêm 1 phần tử

colors.push("white");
console.log("😀 - colors", colors);

// update 1 phần tử

colors[0] = "supper red";
console.log("😀 - colors", colors);

// tìm vị trí của 1 phần tử => index
// tìm vị trí của "white"

var indexWhite = colors.indexOf("white");
console.log("😀 - indexWhite", indexWhite);

colors[indexWhite] = "supper white";
console.log("😀 - colors", colors);

// slice ~cut  /  splice ~ copy  ( keyword w3chool , keyword mdn)
// xoá 1 phần tử

colors.splice(indexWhite, 1);
console.log("😀 - colors", colors);
