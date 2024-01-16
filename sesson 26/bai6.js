
const mang = [-3, 7, -1, 0, 2, -5, 4];

// Sử dụng phương thức sort() để sắp xếp mảng theo thứ tự tăng dần
mang.sort((a, b) => a - b);

// Sử dụng phương thức filter() để lọc các phần tử âm và dương
const mangDuong = mang.filter((x) => x >= 0);
const mangAm = mang.filter((x) => x < 0);

// Ghép mảng các phần tử âm và dương lại với nhau, đặt phần tử âm lên đầu mảng
const ketQua = mangAm.concat(mangDuong);


console.log("Mảng sau khi di chuyển các phần tử âm lên đầu và phần tử dương về cuối:");
console.log(ketQua);