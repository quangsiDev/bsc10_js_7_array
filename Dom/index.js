// trả về 1 thẻ đầu tiên hợp lệ
document.querySelector("title").style.color = "red";

document.querySelector(".item").style.color = "green";

// thay đổi tất cả thẻ có class ".item"

var listItem = document.querySelectorAll(".item");
console.log("😀 - listItem", listItem);

var length = listItem.length;
console.log("😀 - length", length);
/**

 * listItem ~ danh sách
 * item ~ phần tử
 * chiều dài của danh sách ~ length
 * truy xuất tới 1 phần tử trong danh sách
 * vị trí của 1 phần tử ~ index
 * index luôn bắt đầu từ 0
 */
listItem[2].style.color = "red";
