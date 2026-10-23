import React from "react";

// Properti id digunakan sebagai referensi id kontak yang hendak dihapus,
// sedangkan onDelete merupakan handler yang akan dikirim secara drilling sebagai aksi dalam menghapus kontak.
function DeleteButton({ id, onDelete }) {
  return <button className="contact-item__delete" onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;
