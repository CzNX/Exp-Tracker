import { useSelector } from "react-redux";
import { selectTrans } from "./app/transSlice";
import Create from "./comps/Create";
import Stat from "./comps/Stat";
import Trans from "./comps/Trans";

function App() {
  const trans = useSelector(selectTrans);
  const current_bal = trans
    .map((t) => t.amount)
    .reduce((a, ci) => (a += ci), 0);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <hr className="title_hr" />
      <h4>
        Current Total Balance, Rs :{" "}
        <span style={{ color: "green" }}>{current_bal} </span>
      </h4>

      <Stat />
      <h3 className="his">History</h3>
      <hr className="his_hr" />
      <div className="list_main">
        {trans.map((t) => (
          <Trans key={t.id} {...t} />
        ))}
      </div>
      <Create />
    </div>
  );
}

export default App;
