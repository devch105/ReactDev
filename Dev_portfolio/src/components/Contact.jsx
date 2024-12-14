import React from "react";
import Card from "./Card.jsx";
function Contact() {
  return (
    <section id="contact" className="contact pt-3 pb-3">
      <div className="place-items-center bg-[#1B1B1A]  drop-shadow-xl border-[1px] border-[#252524] rounded-md p-2 w-full">
        <h2 className="grad text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400 text-center  p-4">
          Contact Me :
        </h2>
        <Card />
      </div>
    </section>
  );
}

export default Contact;
