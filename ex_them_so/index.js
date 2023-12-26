function clearInput() {
  document.getElementById("txt-number").value = "";
}
//   tạo array để lưu các giá trị user input
var numberArr = [2, 4, 6, 11, -3, -4];
function submit() {
  var number = document.getElementById("txt-number").value * 1;
  //   xoá input user vừa nhập
  clearInput();
  numberArr.push(number);
  // tạo các biến chứa kết quả
  var tongSoChan = 0;
  var demSoAm = 0;
  var tongSoAm = 0;
  // duyệt qua từng phần tử đang có trong array numberArr
  for (var i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i]);
    if (numberArr[i] % 2 == 0) {
      tongSoChan = tongSoChan + numberArr[i];
    }
    if (numberArr[i] < 0) {
      demSoAm++;
      tongSoAm += numberArr[i];
    }
  }
  // show kết quả
  var content = `
  <h3>${numberArr}</h3>
  <h3>Tổng số chẵn: ${tongSoChan}</h3>
  <h3>Đếm số âm: ${demSoAm}</h3>
  <h3>Tổng số âm  ${tongSoAm}</h3>
  `;
  document.getElementById("result").innerHTML = content;
}
