import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../app/transSlice";

const Create = () => {
  const dispatch = useDispatch();
  const [text, settext] = useState("");
  const [amt, setamt] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && amt) {
      dispatch(
        add({
          id: Math.floor(Math.random() * 9000),
          text,
          amount: parseInt(amt),
        })
      );
      settext("");
      setamt("");
    }
  };

  return (
    <div className="create">
      <h1>Add Transaction: </h1>
      <hr className="create_hr" />

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={text}
          onChange={(e) => settext(e.target.value)}
          placeholder="eg : books,cloth ..."
        />
        <input
          type="number"
          value={amt}
          onChange={(e) => setamt(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Create;
