var nama = 'Tigor';
var peran = 'Tabib';

if (nama === '') {
    console.log('"Nama harus diisi!"');
} else if (peran === '') {
    console.log('"Halo, ' + nama + ', Pilih peranmu untuk memulai game!"');
    console.log('"Pilihan peran tersedia adalah:"');
    console.log('1. Ksatria');
    console.log('2. Tabib');
    console.log('3. Penyihir');
} else if (peran === 'Ksatria') {
    console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"');
    console.log('"Halo ' + peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!"');
} else if (peran === 'Tabib') {
    console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"');
    console.log('"Halo ' + peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka."');
} else if (peran === 'Penyihir') {
    console.log('"Selamat datang di Dunia Proxytia, ' + nama + '"');
    console.log('"Halo ' + peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu"');
} else {
    console.log('"Peran yang kamu pilih tidak tersedia, mohon pilih salah satu peran di bawah ini:"');
    console.log('1. Ksatria');
    console.log('2. Tabib');
    console.log('3. Penyihir');
}