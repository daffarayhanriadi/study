import React from "react";
import PropTypes from "prop-types";

function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item__image">
      <img src={imageUrl} alt="contact avatar"/>
    </div>
  );
}

// NOTE: Implementasi PropTypes
ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default ContactItemImage;
