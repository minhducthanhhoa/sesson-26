const mang = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];

const target = parseInt(prompt("Nhập vào một số:"));

let mangCon = [];


let tong = 0;


for (let i = 0; i < mang.length; i++) {
  // Thêm phần tử vào mảng con
  mangCon.push(mang[i]);
  // Cộng giá trị phần tử vào tổng
  tong += mang[i];

  // Kiểm tra nếu tổng bằng số nhập vào
  if (tong === target) {
    // Kết thúc vòng lặp nếu tìm thấy mảng con thỏa mãn
    break;
  }

  // Nếu tổng vượt quá số nhập vào, loại bỏ phần tử cuối cùng
  while (tong > target) {
    tong -= mangCon[0];
    mangCon.shift();
  }
}


if (tong === target) {
  console.log("Mảng con thỏa mãn:");
  console.log(mangCon);
} else {
  console.log("Không có mảng con thỏa mãn.");
}