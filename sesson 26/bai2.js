
const mang = [3, 6, 9, 12, 15, 18];
const giaTri = prompt("Nhập giá trị cần tìm kiếm trong mảng:");

// Biến để kiểm tra xem phần tử có tồn tại trong mảng hay không
let tonTai = false;

// Duyệt qua từng phần tử trong mảng
for (let i = 0; i < mang.length; i++) {
  // Kiểm tra xem phần tử có trùng khớp với giá trị nhập vào hay không
  if (mang[i] === giaTri) {
    // Nếu tìm thấy, in ra vị trí của phần tử và đặt tonTai thành true
    console.log(`Vị trí của phần tử ${giaTri} trong mảng là ${i}`);
    tonTai = true;
    
    break;
  }
}

// Kiểm tra xem phần tử có tồn tại trong mảng hay không
if (!tonTai) {
  console.log("Phần tử không tồn tại");
}