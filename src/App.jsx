import { Router } from "react-router";
import "./App.css";
import { AArrowDownIcon } from "lucide-react";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world! <AArrowDownIcon />
      </h1>
      <button className="btn btn-primary">Btn</button>
      <button className="btn btn-outline btn-primary">Primary</button>
    </>
  );
}

export default App;
