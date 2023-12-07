import React, { useState } from "react";

const FormHandling = () => {
  //   const [name, setName] = React.useState("");
  //   const [email, setEmail] = React.useState("");
  //   const [message, setMessage] = React.useState("");

  //   better one
  const [input, setinput] = useState({
    username: "",
    useremail: "",
    usermessage: "",
    phone: "",

    // you can add more
  });

  //   handle input
  const handleInput = (event) => {
    // destructuring
    const { name, value } = event.target;

    // check for phone
    if (name === "phone" && value < 0) {
      return;
    }

    // better one
    setinput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    const { phone, useremail, usermessage, username } = input;

   
  };
  return (
    <div className="bg-gray-200">
      {/* <h1>Form Handling</h1> */}

      <div className="flex flex-col justify-start items-start gap-2">
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter user name"
          id="name"
          value={input.name}
          onChange={handleInput}
        />
        <label htmlFor="email">Useremail</label>
        <input
          type="text"
          name="useremail"
          placeholder="Enter user name"
          id="email"
          value={input.email}
          onChange={handleInput}
        />
        <label htmlFor="phone">Useremail</label>
        <input
          type="number"
          name="phone"
          placeholder="Enter user phone no."
          id="phone"
          value={input.phone}
          onChange={handleInput}
        />
        <label htmlFor="message">User Message</label>
        <textarea
          style={{ resize: "none" }}
          name="usermessage"
          id="message"
          placeholder="Enter your message"
          cols="40"
          rows="5"
          value={input.message}
          onChange={handleInput}
        ></textarea>

        <button
          onClick={handleSubmit}
          className="px-2 py-1 bg-orange-400 text-white"
        >
          Send message
        </button>
      </div>
    </div>
  );
};

export default FormHandling;
