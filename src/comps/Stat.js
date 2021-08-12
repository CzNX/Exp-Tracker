import React from "react";
import { useSelector } from "react-redux";
import { selectTrans } from "../app/transSlice";
import { BsGraphUp, BsGraphDown } from "react-icons/bs";

const Stat = () => {
  const trans = useSelector(selectTrans);
  const amt = trans.map((t) => t.amount);

  const total_inc = amt.filter((a) => a > 0).reduce((a, ci) => (a += ci), 0);
  // console.log(total_inc);

  const total_out = amt.filter((a) => a < 0).reduce((a, ci) => (a += ci), 0);

  // const out = trans.map(t=>t.amount).reduce((a,ci)=> a+=ci,0)
  return (
    <div className="stat">
      <div className="inc">
        <BsGraphUp className="icon  green" />
        <p>Income : {total_inc}</p>
      </div>
      <div className="exp">
        <BsGraphDown className="icon red " />
        <p>Expense : {total_out}</p>
      </div>
    </div>
  );
};

export default Stat;
