const mang = [2, 5, 9, 2, 3, 5, 2, 4, 7, 1];
const soNguyen = parseInt(prompt("Nhập một số nguyên:"));

// Biến đếm số lần xuất hiện
let soLanXuatHien = 0;

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < mang.length; i++) {
  // Kiểm tra xem phần tử có trùng khớp với số nguyên nhập vào hay không
  if (mang[i] === soNguyen) {
    // Nếu trùng khớp, tăng biến đếm lên
    soLanXuatHien++;
  }
}

// In ra số lần xuất hiện của số nguyên
console.log(`Số ${soNguyen} xuất hiện ${soLanXuatHien} lần trong mảng.`);