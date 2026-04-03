<?php
/**
 * PJII - Publikasi Jurnal Ilmiah Indonesia
 * Entry point untuk Hosting PHP (CPanel/Shared Hosting)
 */

// Mengarahkan permintaan ke index.html hasil build React
// Pastikan Anda sudah menjalankan 'npm run build' dan mengunggah isi folder 'dist'
if (file_exists(__DIR__ . '/index.html')) {
    include_once(__DIR__ . '/index.html');
} else {
    echo "
    <div style='font-family: sans-serif; text-align: center; padding: 50px;'>
        <h1>Aplikasi Belum Siap</h1>
        <p>Folder 'dist' belum diunggah atau file index.html tidak ditemukan.</p>
        <p>Silakan jalankan <code>npm run build</code> dan unggah hasilnya ke hosting.</p>
    </div>
    ";
}
?>
