/*
  NOTE:
  * Data merupakan hal yang membuat React component menjadi hidup.
  * Bayangkan saja jika pada proyek contact-app tidak ada array yang menampung data contacts,
    * tentu aplikasi menjadi tidak berguna karena tidak dapat menampilkan apa pun.
  * Selain itu, data di dalam komponen diharapkan dapat berubah.
  * Perubahan biasanya terjadi ketika ada interaksi atau input yang dilakukan pengguna.
  * Interaksi bisa seperti menekan tombol tambah atau hapus kontak.
  * Cara kerja pengelolaan data di dalam React component sangat mirip dengan alat counter.
    * Di dalam React component, kita bisa menyimpan sebuah data yg bila berubah bisa memicu perubahan tampilan pada UI.
    * Kita tidak perlu melacak secara presisi bagian mana yang perlu di-update,
      * biarkan React yang melakukannya berdasarkan state terbaru
    * Proses menentukan apa yang telah berubah di output baru dari output sebelumnya dinamakan dengan Reconciliation.
    * Syaratnya, data tersebut perlu disimpan pada tempat khusus dinamakan state.

  NOTE: PERBEDAAN STATE DAN PROPS
  * Meskipun state dan props dapat menyimpan data, tetapi keduanya hal yang berbeda.
  * Data di dalam props berasal dari luar komponen dan diharapkan tidak berubah,
  * Sedangkan data di dalam state perlu diinisialisasi di dalam komponen itu sendiri dan datanya boleh berubah.

  NOTE: STATE
  * Untuk memanfaatkan state, kita harus membuat class component.
  * State di dlm class component dpt diakses melalui properti this.state dan datanya diinisialisasi di dlm constructor.
  
  NOTE: MENGUBAH DATA STATE
  * Perubahan data yang disimpan di dalam this.state akan memicu pemanggilan fungsi render() pada class component,
    * itulah kunci mengapa UI selalu menampilkan data terbaru.
  * Namun, untuk mencapai tujuan tersebut, data di dalam state harus diubah melalui fungsi this.setState(),
    * bukan melalui properti this.state secara langsung.
  * Fungsi setState() dapat menerima dua tipe parameter, yaitu objek dan fungsi yang mengembalikan objek.
    * Parameter berupa object:
      // reset the count value
      this.setState({
        count: 0
      });
    * Parameter berupa function:
      // increase the count value
      this.setState((previousState) => {
        return {
          count: previousState.count + 1
        }
      });
  * Nilai yang objek diberikan atau yang dikembalikan oleh fungsi akan menjadi nilai state yang
    * baru untuk menggantikan objek state lama.
  * Namun, dalam memperbarui state yang baru, fungsi this.setState() menggunakan
    * teknik "menggabungkan" bukan mengganti keseluruhan nilai state.
  * Jika komponen memiliki state { name: 'john',  surname: 'doe' },
    * ketika kita mengubah state dengan this.setState({ name: 'jane' }),
    * nilai state surname tidak akan hilang dan tetap bernilai 'doe'.

  NOTE: PENGGUNAAN PARAMETER PADA FUNGSI .setState()
  * Kita bisa memberikan parameter berupa objek (cara pertama) ketika
    * ingin menetapkan nilai state tanpa memperhatikan nilai state yang ada sebelumnya.
  * Untuk parameter berupa fungsi (cara kedua), penggunaan ini cocok ketika
    * kita ingin menetapkan nilai state yang bergantung pada nilai state sebelumnya.

  NOTE: PENGGUNAAN FUNGSI .setState()
  * Lalu, kapan dan di mana kita harus memanggil fungsi setState() untuk memperbarui state?
  * Jawabannya ketika terjadi interaksi dari pengguna.
  * Untuk menangkap interaksi pengguna pada React component, kita perlu Event Handling bekerja pada React. 
*/

import React from "react";
import { createRoot } from "react-dom/client";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi data dalam state
    this.state = {
      count: 0,
    };

    // NOTE: Harus mengubah data state dengan cara seperti ini
    this.setState((previousState) => {
      return {
        count: previousState + 1,
      };
    });

    // NOTE: Jangan mengubah data state seperti ini
    // this.state.count = this.state.count + 1;
  }

  render() {
    return (
      <div>
        {/* menampilkan data count */}
        <p>{this.state.count}</p>
      </div>
    );
  }
}

const root = createRoot(document.getElementById("root"));
root.render(
  <Counter />
)
