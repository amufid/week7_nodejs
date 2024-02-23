const rumus = require('./rumus')
const readline = require('node:readline').createInterface({
   input: process.stdin,
   output: process.stdout,
});

readline.question(`Masukkan sisi persegi : `, s => {
   
   console.log(`Luas persegi : ${rumus.luasPersegi(s)}`)
   console.log(`Keliling persegi : ${rumus.kelilingPersegi(s)}`)
   console.log(`========================================`)

   readline.question(`Masukkan panjang persegi panjang : `, p => {
      readline.question(`Masukkan lebar persegi panjang : `, l => {

         console.log(`Luas persegi panjang : ${rumus.luasPersegiPanjang(p, l)}`)
         console.log(`Keliling persegi panjang : ${rumus.kelilingPersegiPanjang(p, l)}`)

         readline.close();
      });
   });
});
