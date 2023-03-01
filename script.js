// contoh synchronus
// const getUserSync = (id) => {
//     const nama = id === 1 ? 'fardli' : 'yansah';
//     return { id, nama};
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World!';
// console.log(halo);

// contoh kasus menggunakan synchronus

// 1. memproses data user 1
// 2. menampilkan data user 1
// 3. memproses data user 2
// 4. menampilkan data user 2
// 5. isi variable cetak

// contoh Asynchronus

const getUser = (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id  === 1 ? 'fardli' : 'yansah';
        cb({id, nama});
    }, time);
};

const userSatu = getUser(1, (hasil) => {
console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello World!';
console.log('selesai');

// contoh kasus menggunakan asynchronus (menggunakan call back)
// call back adalah sebuah fungsi yang dijalankan ketika fungsi luarnya selesai dijalankan 
// pada masuk baris 4
// baris ke 4 memanggil fungsi get user (asynchronus)
// karena dia asynchronus dia akan mengecek, lama atau tidak prosesnya..
// ternyata butuh waktu 3 detik
// 1. lalu ia akan memulai proses
// setelah tahu prosesnya lama, ia akan masuk ke baris 8
// setelah masuk ke baris 8 
// 2. mulai proses data user 2
// 3. isi variable dan cetak
// ketika masuk baris 4, ia akan memulai memproses data user
// yang terjadi sebenarnya asynchronus sudah mulai menyiapkan juga
// jadi proses permintaan datanya yang 3 detik tadi sudah mulai dilakukan..
// dan ketika kita mulai memproses data user 2 dibaris 8 
// sebenarnya kita sudah mulai meminta data juga,jadi asynchronus sudah mulai meyiapkan hasilnya juga..
// karena user 2 lebih cepat, mungkin karena datanya lebih sedikit atau karena lain hal..
// maka yang tampil lebih dulu adalah user 2
// dan pada detik ke 3 maka data user 1 akan tampil..

// hal tersebut dinamakan teknik non-blocking


// keduanya bisa dijalankan di dalam node..
