
const fs = require('fs');
import fs from 'fs'
const all_product = require('./all_product');

// Chuyển đổi đối tượng JavaScript thành chuỗi JSON
let json_all_product = JSON.stringify(all_product);

// Đường dẫn tới file JSON mà bạn muốn ghi
let filePath = './output.json';

// Ghi chuỗi JSON vào file
fs.writeFile(filePath, json_all_product, (err) => {
    if (err) {
        console.error('Error writing JSON file:', err);
    } else {
        console.log('JSON file has been written successfully.');
    }
});
