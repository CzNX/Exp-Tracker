import React from "react";
import { useDispatch } from "react-redux";
import { del } from "../app/transSlice";

const Trans = ({ id, text, amount }) => {
  const dispatch = useDispatch();
  return (
    <div className="each_trans">
      <li>
        <p>{text} : </p>
        <small>{amount}</small>
        <button onClick={() => dispatch(del(id))}>X</button>
      </li>
    </div>
  );
};

export default Trans;
