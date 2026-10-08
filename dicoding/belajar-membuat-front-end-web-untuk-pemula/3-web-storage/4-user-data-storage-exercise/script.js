/* Menyimpan dan Mendapatkan Data Kompleks pada Web Storage:
  * Untuk menyimpan data kompleks seperti objek JavaScript dapat dilakukan dengan mengubah objek menjadi string menggunakan JSON.stringify().
  * Untuk mendapatkan data kompleks seperti objek JavaScript dari Web Storage dapat dilakukan dengan mengubah string objek menjadi objek menggunakan JSON.parse().
  */
const storageKey = 'STORAGE_KEY';
const submitAction = document.getElementById('form-data-user');

// memeriksa apakah fitur web storage didukung oleh browser yang digunakan
function checkForStorage() {
  return typeof (Storage) !== "undefined";
}

// membuat storage & initial value, serta untuk memodifikasi nilai pada item storage
function putUserList(data) {
  if (checkForStorage()) {
    let userData = [];
    if (localStorage.getItem(storageKey) !== null) {
      userData = JSON.parse(localStorage.getItem(storageKey)); // convert string to JSON
    }

    userData.unshift(data);
    if (userData.length > 5) {
      userData.pop();
    }

    localStorage.setItem(storageKey, JSON.stringify(userData)); // convert an array containing JSON into a string
  }
}

// mendapatkan semua data pada item storage yang berisi data user yang sudah di input
function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  } else {
    return [];
  }
}

// merender data user pada tabel HTML
function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector("#user-list-detail");

  userList.innerHTML = "";
  for (let user of userData) {
    let row = document.createElement("tr");
    // row.innerHTML = "<td>" + user.nama + "</td>";
    // row.innerHTML += "<td>" + user.umur + "</td>";
    // row.innerHTML += "<td>" + user.domisili + "</td>";

    // Satukan innerHTML agar struktur elemen tabel tidak rusak (alternative way)
    row.innerHTML = `
      <td>${user.nama}</td>
      <td>${user.umur}</td>
      <td>${user.domisili}</td>
    `;

    userList.appendChild(row);
  }
}

// menambahkan event listener ke tombol submit untuk mengambil semua data yang sudah di-input ke semua field di form
submitAction.addEventListener("submit", function (event) {
  event.preventDefault(); // mencegah halaman reload saat submit

  const inputNama = document.getElementById("nama").value;
  const inputUmur = document.getElementById("umur").value;
  const inputDomisili = document.getElementById("domisili").value;
  const newUserData = {
    nama: inputNama,
    umur: inputUmur,
    domisili: inputDomisili,
  };

  // simpan data nya ke item storage
  putUserList(newUserData);

  // tampilkan data pada tabel HTML
  renderUserList();

  // mengosongkan form kembali setelah input sukses
  submitAction.reset();
});

// menampilkan semua data yang sudah di-input ke dalam item storage
window.addEventListener("load", function () {
  if (checkForStorage()) {
    if (localStorage.getItem(storageKey) !== null) {
      renderUserList();
    }
  } else {
    alert("Browser yang Anda gunakan tidak mendukung Web Storage");
  }
});
