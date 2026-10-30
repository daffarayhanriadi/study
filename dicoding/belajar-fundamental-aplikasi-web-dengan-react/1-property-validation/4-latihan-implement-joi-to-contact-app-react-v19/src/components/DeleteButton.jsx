import React from "react";
import Joi from "joi";
import { validateProps } from "../utils/validation";

const deleteButtonPropsSchema = Joi.object({
  id: Joi.number().required(),
  onDelete: Joi.func().required(),
});

// Properti id digunakan sebagai referensi id kontak yang hendak dihapus,
// sedangkan onDelete merupakan handler yang akan dikirim secara drilling sebagai aksi dalam menghapus kontak.
function DeleteButton(props) {
  const validatedProps = validateProps(deleteButtonPropsSchema, props, "DeleteButton");
  const { id, onDelete } = validatedProps;

  return <button className="contact-item__delete" onClick={() => onDelete(id)}>X</button>
}

export default DeleteButton;
