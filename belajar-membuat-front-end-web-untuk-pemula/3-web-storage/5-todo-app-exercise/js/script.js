/**
 * TO-DO APPLICATION WITH LOCAL STORAGE
 * Optimized and Secured Standard Code
 * Kode murni/native menggunakan perulangan dasar untuk pemula
 */

// Deklarasi State Global dan Variabel Konstan di paling atas (Mudah dibaca)
// Wadah utama untuk menyimpan semua data To-Do (Menggunakan array konstan)
const todos = [];

// Nama-nama kejadian (event) kustom untuk memicu aksi tertentu
const RENDER_EVENT = "render-todo"; // Memicu gambar ulang tampilan layar
const SAVED_EVENT = "saved-todo";   // Memicu tanda data berhasil disimpan
const STORAGE_KEY = "TODO_APPS";    // Kunci/Label untuk menyimpan data di browser

// Fungsi Utilitas diletakkan di luar agar bersih dan bisa di-test mandiri
// Fungsi untuk membuat angka ID unik berdasarkan waktu saat ini (Milidetik)
function generateId() {
  return +new Date();
}

// Fungsi untuk menyusun data To-Do menjadi format objek yang rapi
function generateTodoObject(id, task, timestamp, isCompleted) {
  return { id, task, timestamp, isCompleted };
  /*
  Expected Return:
  {
    id: "string",
    task: "string",
    timestamp: "string",
    isCompleted: "boolean"
  }
  */
}

// Fungsi untuk memeriksa apakah browser mendukung fitur Local Storage
function isStorageExist() {
  // return typeof (Storage) !== "undefined";
  if (typeof (Storage) === "undefined") {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

// Fungsi untuk mengubah data array menjadi teks lalu menyimpannya ke browser
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(todos);           // Mengubah array objek menjadi teks string
    localStorage.setItem(STORAGE_KEY, parsed);      // Menyimpan teks ke dalam browser
    document.dispatchEvent(new Event(SAVED_EVENT)); // Memberitahu sistem bahwa data tersimpan
  }
}

// Fungsi untuk mengambil data yang tersimpan di browser saat aplikasi pertama dibuka
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY); // Mengambil teks dari browser
  // const data = JSON.parse(serializedData); // JSON string (text) to object/array

  if (serializedData !== null) {
    // todos.length = 0; // Mengosongkan array global sebelum diisi ulang agar tidak duplikat
    // for (const todo of data) {
    //   todos.push(todo);
    // }
    
    // (alternative way)
    try {
      const data = JSON.parse(serializedData); // JSON string (text) to object/array
      if (Array.isArray(data)) {
        todos.splice(0, todos.length); // Membersihkan array 'const' tanpa melakukan re-assign (=)
        // todos.push(...data); // Memasukkan data baru menggunakan Spread Operator ke array konstan

        // (alternative way) memasukkan data dari browser satu per satu ke dalam wadah utama
        for (const todo of data) {
          todos.push(todo);
        }
      }
    } catch (error) {
      console.error("Gagal memuat data dari storage karena format rusak:", error);
      todos.splice(0, todos.length); // Jika data rusak, kosongkan wadah demi keamanan
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT)); // Gambar ulang tampilan layar setelah data dimuat
}

// Fungsi mencocokkan ID secara manual untuk mencari data To-Do secara utuh
function findTodo(todoId) {
  // return todos.find((todoItem) => todoItem.id === todoId) || null;

  // (alternative way) mencari objek To-Do secara manual menggunakan perulangan dasar (pengganti .find)
  // Ambil satu per satu data dari wadah 'todos'
  for (const todoItem of todos) {
    // Jika ID data tersebut sama dengan ID yang kita cari
    if (todoItem.id === todoId) {
      return todoItem; // Langsung ambil dan keluarkan data tersebut
    }
  }
  return null; // Jika dicari sampai habis tidak ketemu, kembalikan kosong (null)
}

// Fungsi mencocokkan ID secara manual untuk mencari nomor urutan (indeks) data dalam array
function findTodoIndex(todoId) {
  // return todos.findIndex((todoItem) => todoItem.id === todoId);

  // (alternative way) mencari indeks/posisi urutan elemen secara manual (pengganti .findIndex)
  let counterIndex = 0; // Membuat penghitung urutan manual dari angka 0
  for (const todoItem of todos) {
    // Jika ID data cocok dengan ID yang dicari
    if (todoItem.id === todoId) {
      return counterIndex; // Kembalikan posisi angka indeksnya jika cocok
    }
    counterIndex += 1; // Naikkan angka indeks jika belum cocok
  }
  return -1; // Kembalikan angka -1 jika posisi data tidak ditemukan
}

// Fungsi untuk menambah data To-Do baru dari inputan user
function addTodo() {
  const titleInput = document.getElementById("title");
  const dateInput = document.getElementById("date");

  // Jika elemen input tidak ditemukan di HTML, hentikan fungsi
  if (!titleInput || !dateInput) return;

  const textTodo = titleInput.value.trim(); // Ambil teks tugas dan hapus spasi kosong di ujungnya
  const timestamp = dateInput.value;        // Ambil data tanggal

  // Jika kotak input teks kosong, jangan lakukan apa-apa (hentikan fungsi)
  if (!textTodo) return;

  const generateID = generateId(); // Buat ID unik baru
  const todoObject = generateTodoObject(generateID, textTodo, timestamp, false); // Bungkus jadi objek data
  todos.push(todoObject);  // Masukkan objek data baru tersebut ke wadah utama

  document.dispatchEvent(new Event(RENDER_EVENT)); // Perbarui tampilan layar
  saveData(); // Simpan perubahan ke browser
}

// Fungsi untuk mengubah status isCompleted menjadi "true" (tugas selesai)
function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId); // Cari data berdasarkan ID-nya

  if (todoTarget === null) return; // Jika data tidak ketemu, batalkan proses

  todoTarget.isCompleted = true; // Ubah tanda status selesai menjadi TRUE
  document.dispatchEvent(new Event(RENDER_EVENT)); // Perbarui tampilan layar
  saveData(); // Simpan perubahan ke browser
}

// Fungsi untuk menghapus tugas secara permanen
function removeTaskFromCompleted(todoId) {
  const todoTargetIndex = findTodoIndex(todoId); // Cari posisi nomor urutannya di dalam array

  if (todoTargetIndex === -1) return; // Jika nomor posisi tidak valid, batalkan proses

  todos.splice(todoTargetIndex, 1); // Hapus 1 buah data tepat pada nomor posisi tersebut
  document.dispatchEvent(new Event(RENDER_EVENT)); // Perbarui tampilan layar
  saveData(); // Simpan perubahan ke browser
}

// Fungsi untuk membatalkan status tugas selesai (Dikembalikan ke kelompok "Belum Selesai")
function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId); // Cari data berdasarkan ID-nya

  if (todoTarget === null) return; // Jika data tidak ketemu, batalkan proses

  todoTarget.isCompleted = false; // Ubah kembali tanda status selesai menjadi FALSE
  document.dispatchEvent(new Event(RENDER_EVENT)); // Perbarui tampilan layar
  saveData(); // Simpan perubahan ke browser
}

// Fungsi membuat elemen HTML (Visual kotak tugas) berdasarkan data objek To-Do
function makeTodo(todoObject) {
  // Membuat tag judul <h2> dan mengisinya dengan teks tugas
  const textTitle = document.createElement("h2");
  textTitle.innerText = todoObject.task;

  // Membuat tag paragraf <p> dan mengisinya dengan teks tanggal
  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = todoObject.timestamp;

  // Membuat wadah pembungkus teks <div>
  const textContainer = document.createElement("div");
  textContainer.classList.add("inner"); // Beri nama class CSS "inner"
  textContainer.append(textTitle, textTimestamp); // Masukkan judul dan tanggal ke dalam wadah teks

  // Membuat wadah luar utama <div> untuk satu kotak tugas penuh
  const container = document.createElement("div");
  container.classList.add("item", "shadow"); // Beri class CSS untuk tampilan kotak & bayangan
  container.append(textContainer); // Masukkan wadah teks ke dalam wadah luar
  container.setAttribute("id", `todo-${todoObject.id}`); // Beri ID unik pada elemen HTML ini

  // Pengecekan: Apakah tugas ini sudah selesai atau belum?
  if (todoObject.isCompleted) {
    // Jika SUDAH SELESAI, buat 2 tombol: Tombol Undo & Tombol Trash (Hapus)
    const undoButton = document.createElement("button");
    undoButton.classList.add("undo-button");
    undoButton.addEventListener("click", function () {
      undoTaskFromCompleted(todoObject.id); // Jalankan fungsi undo jika tombol diklik
    });

    const trashButton = document.createElement("button");
    trashButton.classList.add("trash-button");
    trashButton.addEventListener("click", function () {
      removeTaskFromCompleted(todoObject.id); // Jalankan fungsi hapus jika tombol diklik
    });

    container.append(undoButton, trashButton); // Tempel kedua tombol ke dalam kotak tugas
  } else {
    // Jika BELUM SELESAI, buat 1 tombol saja: Tombol Check (Selesai)
    const checkButton = document.createElement("button");
    checkButton.classList.add("check-button");
    checkButton.addEventListener("click", function () {
      addTaskToCompleted(todoObject.id); // Jalankan fungsi selesai jika tombol diklik
    });

    container.append(checkButton); // Tempel tombol check ke dalam kotak tugas
  }

  return container; // Kembalikan satu kotak elemen HTML utuh yang sudah jadi
  /*
  Expected Return:
  <div id="todo-<todo_id>" class="item shadow">
    <div class="inner">
      <h2>Tugas Android</h2>
      <p>2021-05-01</p>
    </div>
    <button class="check-button"></button>
    ...
  </div>
  */
}

// Pengatur Utama: Dijalankan otomatis ketika struktur halaman web selesai dimuat
// Event Listener Utama untuk Manajemen DOM
document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form"); // Ambil elemen formulir input

  if (submitForm) {
    // Jika tombol tambah tugas/submit formulir ditekan
    submitForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Cegah halaman web memuat ulang (refresh) otomatis
      addTodo(); // Jalankan fungsi tambah tugas
      submitForm.reset(); // Kosongkan kembali isi kotak input formulir
    });
  }

  // Pengatur Tampilan: Menggambar ulang daftar tugas di layar setiap ada perubahan data
  // Listener untuk menangani perubahan tampilan (render)
  document.addEventListener(RENDER_EVENT, function () {
    // console.log(todos);
    
    // Di sinilah kita menulis logika untuk memanipulasi DOM/HTML text
    const uncompletedTodoList = document.getElementById("todos"); // Wadah kelompok Belum Selesai
    const completedTodoList = document.getElementById("completed-todos"); // Wadah kelompok Selesai

    if (!uncompletedTodoList || !completedTodoList) return;

    // clearing list item
    // uncompletedTodoList.innerHTML = "";
    // completedTodoList.innerHTML = "";

    // Mengosongkan list item aagr tidak terjadi duplikat menggunakan replaceChildren (Sangat cepat & aman dibanding innerHTML)
    uncompletedTodoList.replaceChildren();
    completedTodoList.replaceChildren();

    // Periksa seluruh isi wadah utama 'todos' satu per satu
    for (const todoItem of todos) {
      const todoElement = makeTodo(todoItem); // Ubah data objek menjadi kotak elemen HTML visual

      // Pisahkan penempelan kotak ke layar berdasarkan status selesainya
      if (!todoItem.isCompleted) {
        uncompletedTodoList.append(todoElement); // Masukkan ke daftar "Belum Selesai"
      } else {
        completedTodoList.append(todoElement); // Masukkan ke daftar "Selesai"
      }
    }
  });

  // Menampilkan pesan konfirmasi di jendela log konsol ketika data berhasil disimpan
  document.addEventListener(SAVED_EVENT, function () {
    console.log(localStorage.getItem(STORAGE_KEY));
  });

  // Aturan emas dalam JavaScript: Pasang semua "pendengar" (Event Listener) terlebih dahulu, baru kemudian picu atau jalankan aksinya.
  // Saat aplikasi baru dibuka, cek dan muat data lama jika ada di browser
  // Fungsi ini aman memicu RENDER_EVENT karena pendengarnya sudah siap di atas)
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});
