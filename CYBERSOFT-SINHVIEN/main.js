// lấy danh sách điểm từ layout

var dsTd = document.querySelectorAll(".td-scores");

// tạo array điểm dựa vào danh sách thẻ Td

var arrayDiem = [];

// duyệt dsTd
for (var i = 0; i < dsTd.length; i++) {
  var diem = dsTd[i].innerText * 1;
  arrayDiem.push(diem);
}
function timSvGioiNhat() {
  // tìm phần tử lớn nhất trong array
  var diemLonNhat = arrayDiem[0];

  // duyệt arrayDiem

  for (var i = 0; i < arrayDiem.length; i++) {
    // nếu điểm hiện tại lớn hơn điểm lớn nhất, thì điểm lớn nhất là điểm hiện tại
    if (arrayDiem[i] > diemLonNhat) {
      diemLonNhat = arrayDiem[i];
    }
  }
  var ten = layTenUser(diemLonNhat);
  document.getElementById("svGioiNhat").innerHTML = `${ten} - ${diemLonNhat}`;
}
timSvGioiNhat();

function timSvYeuNhat() {
  // tìm phần tử bé nhất trong array
  var diemNhoNhat = arrayDiem[0];

  // duyệt arrayDiem

  for (var i = 0; i < arrayDiem.length; i++) {
    // nếu điểm hiện tại bé hơn điểm bé nhất, thì điểm bé nhất là điểm hiện tại
    if (arrayDiem[i] < diemNhoNhat) {
      diemNhoNhat = arrayDiem[i];
    }
  }
  document.getElementById("svYeuNhat").innerHTML = diemNhoNhat;
}
timSvYeuNhat();

function timSoSinhVienGioi() {
  var soLuong = 0;
  for (var i = 0; i < arrayDiem.length; i++) {
    if (arrayDiem[i] >= 8) {
      soLuong++;
    }
  }
  document.getElementById("soSVGioi").innerText = soLuong;
}
timSoSinhVienGioi();

// viết 1 function, truyền vào điểm và trả về tên user có điểm đó
// params=>điểm , return về tên user

function layTenUser(diem) {
  // lấy ds thẻ tr
  var dsTr = document.querySelectorAll("#tblBody tr");
  // tìm vị trí của diem trong arrayDiem => indexOf
  var index = arrayDiem.indexOf(diem);
  // từ index tìm ra vị trí thẻ tr chứa điểm tương ứng
  var tr = dsTr[index];
  // lấy ra ds thẻ td nằm trong 1 thẻ tr
  var dsTd = tr.querySelectorAll("td");
  var ten = dsTd[2].innerText;
  return ten;
}
// layTenUser(9.8);
