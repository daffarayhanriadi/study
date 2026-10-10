// Di bawah ini adalah penerapan konsep komposisi di dalam React Component.
/* 
  * Teknologi: React JS
  * Peran Komposisi: Menggabungkan komponen tampilan
  * Output Akhir: Elemen UI/HTML (<div>, <img>, <a>)
  * Karakteristik: Fokus pada pembentukan elemen Antarmuka Pengguna (UI/HTML) yang bersifat reusable
  Cara Kerja:
  * Konsep logika dari main.js diubah menjadi komponen visual (UI). 
  * Fungsi kecil diubah menjadi komponen kecil yaitu <ProfilePicture /> (menghasilkan elemen <img>) dan 
    * <ProfileLink /> (menghasilkan elemen jangkar <a>).
  * Komponen-komponen kecil ini lalu disatukan (dikomposisikan) di dalam komponen utama yang bernama <GithubInfo />.
*/
function ProfilePicture({ userId }) {
  return (
    <img
      src={"https://avatars.githubusercontent.com/u/" + userId}
      alt="GitHub Profile"
    />
  );
}

function ProfileLink({ username }) {
  return <a href={"https://github.com/" + username}>{username}</a>;
}

function GithubInfo({ username, userId }) {
  return (
    <div className="github-info">
      <ProfilePicture userId={userId} />
      <ProfileLink username={username} />
    </div>
  );
}

export default GithubInfo;
