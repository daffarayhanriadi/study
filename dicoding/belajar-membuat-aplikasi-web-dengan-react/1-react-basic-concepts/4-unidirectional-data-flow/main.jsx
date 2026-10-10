/*
  * Sebelum React, Front-End Framework seperti Angular menggunakan pola two-way data binding untuk aliran data 
    * agar ia tetap sinkron dengan DOM (tampilan aplikasi). 
  * Jika model mengubah data, data tersebut secara reaktif akan memperbarui data yang ada di view. 
  * Sebaliknya, jika pengguna mengubah data yang ada di view, data yang ada di model pun secara reaktif akan berubah. 
  * Pola aliran data seperti ini sebenarnya ciamik, tetapi terkadang menyulitkan ketika aplikasi sudah bertambah besar.
  * Karena tak jarang developer bingung dari mana sebetulnya pembaruan data berasal. Dari view-kah? Atau model?
----------------------------------------------------------------------------------------------------------------------
  * Berbeda halnya dengan React, aliran data di React bersifat unidirectional 
    * atau searah dari parent component (komponen induk) ke child component (komponen anak).
  * Di React, data terletak di parent component dan bila child component membutuhkannya, 
    * data tersebut akan dikirim dari parent component. 
  * Ketika terjadi perubahan data, parent component-lah yang dapat memperbarui datanya 
    * karena memang datanya berada di sana. 
  * Child hanya bisa mengirimkan data terbaru atau memberikan sinyal bila data perlu diperbarui oleh parent component.
  * Ingat! Karena React bersifat reaktif, bila terjadi perubahan data di parent component, 
    * child component pun akan memiliki data terbaru.
----------------------------------------------------------------------------------------------------------------------
  * Untuk memantapkan pemahaman, mari tebak kode dibawah ini.
  * Anggaplah, kita memiliki komponen bernama Delivery, di dalamnya terdapat dua child component bernama LocationPicker
    * dan element input bertipe number. 
  * Kemudian di dalam komponen LocationPicker, terdapat dua child component bernama OriginPicker dan DestinationPicker.
  * Dengan begitu strukturnya tampak seperti dibawah ini.
  * Dari kode tersebut, kira-kira komponen apa saja yang bertanggung jawab untuk memperbarui data?
    * Ingat petunjuknya adalah data hanya berada di parent element.
 */


<Delivery>
 
  <LocationPicker>
    <OriginPicker />
    <DestinationPicker />
  </LocationPicker>
 
  <input type="number"/>
</Delivery>


/*
 * Jawabannya adalah komponen Delivery dan LocationPicker. Mengapa? Berikut penjelasannya.
    * Delivery: Karena komponen Delivery merupakan parent dan ia menampung seluruh child component yang membentuk 
      * antarmuka pengiriman maka hanya komponen delivery yang cocok untuk memiliki seluruh data pengiriman dan 
      * juga bertanggung jawab untuk memperbaruinya.
    * LocationPicker:  Walaupun LocationPicker menerima data dari induknya, ternyata ia juga merupakan parent component
      * dan sangat masuk akal bila menampung data yang dibutuhkan oleh kedua child component di dalamnya.
  * Selain kedua komponen tersebut, komponen lain hanyalah child element yang datanya dikirim dari parent. 
  * Jadi, mereka tidak bisa memperbarui datanya.
*/
