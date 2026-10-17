/* NOTE:
  * Karena React component merupakan fungsi JavaScript, kita dapat memberikan parameter ketika menggunakannya. 
  * Namun, React component hanya dpt menerima satu parameter (berupa objek) yg biasa kita sebut dgn properties (props)
*/

// SayHello Component
function SayHello(props) {
  const name = props.name;
  const company = props.company;

  return (
    <p>
      Hello, {name} from {company}!
    </p>
  );
}

// Penggunaan SayHello Component
<SayHello name="Bill" company="Microsoft" />; // <p>Hello, Bill from Microsoft!</p>
<SayHello name="Steve" company="Apple" />; // <p>Hello, Steve from Apple!</p>
<SayHello name="Mark" company="Facebook" />; // <p>Hello, Mark from Facebook!</p>
/*
  * Melalui props yang ditunjukkan kode di atas, kita dapat mengirimkan data ketika menggunakannya. 
  * Hal inilah yang membuat component sangat reusable karena 
    * hanya dengan satu component (beserta properti yang terdefinisikan) 
    * kita dapat menampilkan UI serupa dengan data yang berbeda.
*/

// NOTE: BEBERAPA BEST PRACTICE KETIKA MEMBUAT DAN MENGGUNAKAN PROPERTI
/*
  * Hampir seluruh tipe data di JavaScript dapat dikirimkan melalui props.
  * Namun, terdapat best practice dalam menetapkan properti yang penting untuk kita ikuti.
*/

//NOTE: Best practice yg pertama adalah hindari penggunaan JavaScript object ketika mengirimkan data pd properti component.

//NOTE: WORST PRACTICE 2
function InstagramProfile(props) {
  const profile = props.profile;

  const name = profile.name;
  const username = profile.username;
  const bio = profile.bio;
  const isVerified = profile.isVerified;

  return (
    <div className="container">
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>Username: </dt>
        <dd>{username}</dd>
        <dt>Bio: </dt>
        <dd>{bio}</dd>
        <dt>Verified: </dt>
        <dd>{isVerified ? "yes" : "no"}</dd>
      </dl>
    </div>
  );
}

//NOTE: WORST PRACTICE 1
const profile = {
  name: "Dicoding Indonesia",
  username: "dicoding",
  bio: "Bangun Karirmu sebagai Developer Profesional",
  isVerified: true,
};

<InstagramProfile profile={profile} />; //NOTE: sebisa mungkin, hindari praktik seperti ini (worst practice)

/*
  * Oke, mungkin menggunakan objek sebagai “pembungkus” data terlihat lebih mudah karena kita hanya
    * perlu mendefinisikan satu properti saja pada component yaitu profile.
  * Namun, hal ini lah yang menyebabkan kontrak dalam penggunaan component tersebut tidak jelas.
  * Sebab JavaScript merupakan bahasa yang tidak terikat dengan tipe data (weakly typed) sehingga
    * praktik seperti ini sebaiknya dihindari.
  * Alih-alih mengirimkan props dalam bentuk objek, sebaiknya definisikanlah propertinya satu per satu.
  * Sehingga, kita tak lagi mengirimkan objek,
    * melainkan cukup dengan nilai primitif seperti string, number, atau boolean.
*/
//NOTE: BEST PRACTICE 1
<InstagramProfile
  name="Dicoding Indonesia"
  username="dicoding"
  bio="Bangun Karirmu Sebagai Developer Profesional"
  isVerified // pemberian nilai boolean "true" cukup dengan menuliskan nama properti tanpa nilai apa pun
/>;

/*
  * Dengan cara ini, kontrak dalam menggunakan component akan lebih terlihat lebih jelas.
  * Selain itu, secara tidak langsung kita juga sudah menerapkan prinsip least privilege
    * guna menghindari dalam mengirimkan data yang sebenarnya tidak diperlukan.
*/

/* NOTE:
  * Best practice lainnya adalah selalu gunakan fitur ES6 agar sintaksis yang dituliskan lebih bersih, singkat, dan
    * mudah dibaca.
  * Contohnya pada komponen InstagramProfile, kita dapat menggunakan object destructuring dalam
    * mengakses nilai propertinya.
  * Sehingga, kita tidak perlu menuliskan kode satu per satu dalam membuat variabel lokal yang
    * menampung nilai dari props.
*/
//NOTE: BEST PRACTICE 2
function InstagramProfile({ name, username, bio, isVerified }) {
  return (
    <div className="container">
      <dl>
        <dt>Name: </dt>
        <dd>{name}</dd>
        <dt>Username: </dt>
        <dd>{username}</dd>
        <dt>Bio: </dt>
        <dd>{bio}</dd>
        <dt>Verified: </dt>
        <dd>{isVerified ? 'yes' : 'no'}</dd>
      </dl>
    </div>
  );
}

/* NOTE:
  * Terakhir, ketika menggunakan nilai properti, tanamkan di pikiran kita bahwa properti bersifat read-only alias
    * hanya boleh dibaca dan tidak boleh diubah nilainya.
  * React component harus bersifat pure, salah satunya dengan tidak mengubah nilai yang diberikan melalui
    * sebuah parameter atau properti.
  * Hal ini sama seperti prinsip pure function pada functional programming.
  * Jika di dalam component kita menuliskan kode yang mengubah nilai dari properti, silakan evaluasi kode tersebut.
  * Pastikan kita tidak melakukan perubahan pada nilainya.
  * UI aplikasi memang bersifat dinamis dan seringkali berubah seiring terjadinya interaksi oleh pengguna.
  * Namun, data di dalam komponen yang bertugas untuk menampung perubahan bukanlah props, melainkan state.
*/


// NOTE: Children
/*
  * React component memiliki satu properti spesial bernama children.
  * Properti ini spesial karena cara memberikan nilainya berbeda dengan properti biasa.
  * Kita sudah mengetahui bahwa pemberian nilai properti pada component dilakukan sama seperti
    * pemberian nilai atribut HTML.
*/
// Contoh, untuk memberikan properti name pada component SayHello, kita bisa melakukannya dengan seperti ini.
function SayHelllo1({ name }) {
  return <p>Hello, {name}!</p>;
}

<SayHelllo1 name="Dicoding"/>; // <p> Hello, Dicoding!</p>

/*
  * Cara pemberian nilai pada properti children berbeda.
  * Alih-alih menggunakan gaya atribut seperti kode di atas, nilai children ditetapkan di antara 
    * tag pembuka <SayHello> dan tag penutup </SayHello> component. 
*/
function SayHelllo2({ children }) {
  return <p>Hello, {children}!</p>;
}
<SayHelllo2>Dicoding</SayHelllo2>; // Hello, Dicoding!
// Jadi, untuk menggunakan properti children, cara pemanggilan component pun harus menggunakan tag pembuka dan penutup.
