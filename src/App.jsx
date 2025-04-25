import { Outlet, Router } from "react-router";
import "./App.css";
import { AArrowDownIcon } from "lucide-react";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Header</h1>
      <Outlet></Outlet>
      <button className="btn btn-outline btn-primary">Footer</button>
    </>
  );
}

export default App;
