
const a = parseInt(prompt("Nhập số nguyên dương a:"));
const b = parseInt(prompt("Nhập số nguyên dương b:"));


const mang = [];

// Duyệt qua từng số trong khoảng từ 1 đến a
for (let i = 1; i <= a; i++) {
  // Kiểm tra xem số đó có chia hết cho b hay không
  if (i % b === 0) {
    // Nếu chia hết, thêm số đó vào mảng
    mang.push(i);
  }
}

// Duyệt qua từng số trong khoảng từ 1 đến b
for (let i = 1; i <= b; i++) {
  // Kiểm tra xem số đó có chia hết cho a hay không
  if (i % a === 0) {
    // Nếu chia hết, thêm số đó vào mảng
    mang.push(i);
  }
}


console.log("Các số chia hết cho b trong khoảng từ 1 đến a hoặc các số chia hết cho a trong khoảng từ 1 đến b:");
console.log(mang);