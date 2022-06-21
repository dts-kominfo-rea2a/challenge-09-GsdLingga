// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  console.log(data);
  return (
    <div class="contact">
      <img class="photo" src={data.photo}></img>
      <div class="profile">
        <p>{data.name}</p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
};

export default Contact;
