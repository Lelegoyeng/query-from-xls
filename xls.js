const XLSX = require('xlsx');
const path = require('path');

// Ganti 'nama_file.xls' dengan nama file XLS yang ingin dibaca
const filePath = path.join(__dirname, 'script.xls');

// Baca file XLS
const workbook = XLSX.readFile(filePath);

// Pilih sheet yang ingin dibaca (misalnya sheet pertama)
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Ambil data dari kolom A
const columnAData = [];
for (let rowNum = 1; ; rowNum++) {
    const cellAddress = `A${rowNum}`;
    const cell = sheet[cellAddress];

    // Hentikan loop jika tidak ada data lagi di kolom A
    if (!cell || !cell.v) {
        break;
    }

    // Tambahkan nilai dari kolom A ke array
    columnAData.push(cell.v);
}

// Tampilkan data dari kolom A
// console.log('Data dari kolom A:', columnAData);


module.exports = columnAData;
