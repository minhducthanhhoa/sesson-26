// Khai báo mảng chứa các phần tử bất kỳ
const array = [1, 2, "abc", 3.14, true, 5, "xyz"];

// Biến để kiểm tra xem có số nguyên nào trong mảng hay không
let coSoNguyen = false;

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < array.length; i++) {
  // Kiểm tra xem phần tử có phải là số nguyên hay không
  if (Number.isInteger(array[i])) {
    // Nếu là số nguyên, in ra và đặt coSoNguyen thành true
    console.log(array[i]);
    coSoNguyen = true;
  }
}

// Kiểm tra xem có số nguyên nào trong mảng hay không
if (!coSoNguyen) {
  console.log("Trong mảng không tồn tại số nguyên");
}