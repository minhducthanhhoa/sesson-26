const mang = [1, 2, 5, 7];

// Tạo một mảng mới chỉ chứa các phần tử lớn hơn 0
const mangDuong = mang.filter((x) => x > 0);

// Sắp xếp mảng mới theo thứ tự tăng dần
mangDuong.sort((a, b) => a - b);

// Biến lưu phần tử lớn nhất chưa xuất hiện trong mảng
let phanTuNhoNhat = 1;

// Duyệt qua từng phần tử trong mảng mới
for (let i = 0; i < mangDuong.length; i++) {
  // Nếu phần tử hiện tại bằng phần tử nhỏ nhất chưa xuất hiện, tăng phần tử nhỏ nhất lên 1
  if (mangDuong[i] === phanTuNhoNhat) {
    phanTuNhoNhat++;
  } else {
    // Nếu không tìm thấy phần tử nhỏ nhất chưa xuất hiện, kết thúc vòng lặp
    break;
  }
}


console.log("Phần tử lớn hơn 0 nhỏ nhất chưa xuất hiện trong mảng:");
console.log(phanTuNhoNhat);