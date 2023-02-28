// contoh synchronus
const getUserSync = require('./src/getUserSync');

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hello World!';
console.log(halo);


// contoh Asynchronus

const getUser = require ('./src/getUser');

const userSatu = getUser(1, (user) => {
consol.log(user);
});

const userDua = getUser(2, (user) => {
    console.log(user);
});

const halo = 'Hello World!';
console.log(halo);

// keduanya bisa dijalankan di dalam node..
