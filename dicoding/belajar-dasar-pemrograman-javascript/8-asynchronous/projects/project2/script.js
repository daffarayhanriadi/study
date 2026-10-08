// UTILITY: Fungsi untuk mencetak teks log ke layar monitor HTML
function writeLog(text, category = 'system') {
    const logScreen = document.getElementById('log-screen');
    const p = document.createElement('p');
    p.className = `log-item log-${category}`;
    p.textContent = text;
    logScreen.appendChild(p);
    logScreen.scrollTop = logScreen.scrollHeight; // Auto-scroll ke bawah
}

// ==========================================
// A. ASYNCHRONOUS DENGAN CALLBACK
// ==========================================
function terimaPesanan(namaMenu, callbackSelesai) {
    writeLog(`[Callback] 📥 Menerima pesanan: ${namaMenu}...`, 'cb');
    setTimeout(() => {
        writeLog(`[Callback] ✅ Pesanan ${namaMenu} berhasil dicatat di sistem dapur.`, 'cb');
        callbackSelesai(namaMenu);
    }, 1000);
}

// ==========================================
// B. RAW PROMISE
// ==========================================
function prosesPembayaran(namaMenu, saldoUser) {
    writeLog(`[Promise] 💳 Memproses gerbang pembayaran digital untuk ${namaMenu}...`, 'promise');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const harga = 50000;
            if (saldoUser >= harga) {
                resolve(`Pembayaran ${namaMenu} (Rp${harga}) BERHASIL.`);
            } else {
                reject(`Pembayaran GAGAL! Saldo kurang Rp${harga - saldoUser}.`);
            }
        }, 1200);
    });
}

// ==========================================
// C. PROMISE CHAINING COMPONENTS
// ==========================================
function potongBahan(menu) {
    return new Promise((resolve) => {
        setTimeout(() => {
            writeLog(`[Chaining] 🔪 Bahan makanan untuk ${menu} selesai dipotong.`, 'chain');
            resolve(`${menu} (Bahan Siap)`);
        }, 1000);
    });
}

function masakMakanan(bahan) {
    return new Promise((resolve) => {
        setTimeout(() => {
            writeLog(`[Chaining] 🔥 Kompor dinyalakan. Memasak ${bahan}...`, 'chain');
            resolve(`Matang: ${bahan.replace(' (Bahan Siap)', '')}`);
        }, 1800);
    });
}

function siapSaji(makanan) {
    return new Promise((resolve) => {
        setTimeout(() => {
            writeLog(`[Chaining] 🍽️ Melakukan plating & QC pada ${makanan}.`, 'chain');
            resolve(`📦 ${makanan} Siap Dikirim!`);
        }, 800);
    });
}

// ==========================================
// D. CONCURRENCY (Promise.all)
// ==========================================
function kirimKurir(namaPaket, durasi) {
    return new Promise((resolve) => {
        setTimeout(() => {
            writeLog(`[Concurrency] 🛵 Kurir sukses mengantar ke target: ${namaPaket}`, 'concurrent');
            resolve(`Terkirim: ${namaPaket}`);
        }, durasi);
    });
}

function jalankanPengirimanSerentak() {
    writeLog(`\n--- 🚀 MEMULAI CONCURRENCY PENGIRIMAN PARALEL (Promise.all) ---`, 'concurrent');
    return Promise.all([
        kirimKurir("Paket Utama ke Rumah Pelanggan", 2000),
        kirimKurir("Bonus Minuman ke Driver Ojol", 1000),
        kirimKurir("Nota Pembayaran ke Sistem Cloud", 500)
    ]);
}


// =============================================================
// E. ORCHESTRATOR PATH 1: MENGGUNAKAN PURE PROMISE CHAINING
// =============================================================
function jalankanPipelineChaining(menu, saldo) {
    writeLog("=== MEMULAI ALUR PROMISE CHAINING ===", 'system');
    
    terimaPesanan(menu, (menuDiterima) => {
        // Mulai rantai Promise (.then beruntun)
        prosesPembayaran(menuDiterima, saldo)
            .then((hasilBayar) => {
                writeLog(`[Result] ${hasilBayar}`, 'promise');
                return potongBahan(menuDiterima);
            })
            .then((bahanSiap) => masakMakanan(bahanSiap))
            .then((makananMatang) => siapSaji(makananMatang))
            .then((statusFinal) => {
                writeLog(statusFinal, 'chain');
                return jalankanPengirimanSerentak();
            })
            .then((hasilSemuaKurir) => {
                writeLog(`[Result Promise.all] Selesai: ${hasilSemuaKurir.length} tugas logistik rampung bersamaan!`, 'concurrent');
                writeLog("=== ALUR PROMISE CHAINING SELESAI ===", 'system');
            })
            .catch((error) => {
                writeLog(`🚨 ERROR PADA PIPELINE: ${error}`, 'system');
            });
    });
}


// =============================================================
// F. ORCHESTRATOR PATH 2: MENGGUNAKAN MODERN ASYNC / AWAIT
// =============================================================
function jalankanPipelineAsyncAwait(menu, saldo) {
    writeLog("=== MEMULAI ALUR MODERN ASYNC / AWAIT ===", 'system');
    
    // Callback tetap membungkus di layer terluar pencatatan pesanan
    terimaPesanan(menu, async (menuDiterima) => {
        try {
            // Menggunakan sintaks linear await yang jauh lebih mudah dibaca
            const hasilBayar = await prosesPembayaran(menuDiterima, saldo);
            writeLog(`[Result] ${hasilBayar}`, 'async');
            
            const bahanSiap = await potongBahan(menuDiterima);
            const makananMatang = await masakMakanan(bahanSiap);
            const statusFinal = await siapSaji(makananMatang);
            writeLog(statusFinal, 'async');
            
            // Menunggu eksekusi concurrency selesai
            const hasilKurir = await jalankanPengirimanSerentak();
            
            writeLog(`[Result Promise.all via Await] ${hasilKurir.length} logistik sukses.`, 'concurrent');
            writeLog("=== ALUR ASYNC / AWAIT SELESAI ===", 'system');
            
        } catch (error) {
            writeLog(`🚨 ERROR PADA PIPELINE: ${error}`, 'system');
        }
    });
}


// ==========================================
// G. BINDING TOMBOL UI
// ==========================================
document.getElementById('btn-chaining').addEventListener('click', () => {
    const menu = document.getElementById('menu-select').value;
    const saldo = Number(document.getElementById('user-wallet').value);
    jalankanPipelineChaining(menu, saldo);
});

document.getElementById('btn-async').addEventListener('click', () => {
    const menu = document.getElementById('menu-select').value;
    const saldo = Number(document.getElementById('user-wallet').value);
    jalankanPipelineAsyncAwait(menu, saldo);
});

document.getElementById('btn-clear').addEventListener('click', () => {
    document.getElementById('log-screen').innerHTML = '<p class="system-msg">// Log dibersihkan. Menunggu pesanan...</p>';
});

