exports.luasPersegi = (s) => {
   return s * s
}

exports.kelilingPersegi = (s) => {
   return s * 4
}

exports.luasPersegiPanjang = (p, l) => {
   return p * l
}

exports.kelilingPersegiPanjang = (p, l) => {
   const panjang = parseInt(p)
   const lebar = parseInt(l)
   return 2 * (panjang + lebar)
}
