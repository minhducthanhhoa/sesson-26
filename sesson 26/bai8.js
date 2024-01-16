const mang = [1, 2, 3, 2, 4, 5, 3, 6, 7, 4, 8, 9, 5, 2];


const demPhanTu = {};


for (let i = 0; i < mang.length; i++) {
  const phanTu = mang[i];
  // Nếu phần tử đã xuất hiện trước đó, tăng số lần xuất hiện lên 1
  if (demPhanTu[phanTu]) {
    demPhanTu[phanTu]++;
  } else {
    // Nếu phần tử chưa xuất hiện trước đó, đặt số lần xuất hiện là 1
    demPhanTu[phanTu] = 1;
  }
}


console.log("Các phần tử xuất hiện từ hai lần trở lên:");
for (const phanTu in demPhanTu) {
  if (demPhanTu[phanTu] >= 2) {
    console.log(phanTu);
  }
}