import React from "react";
import Panel from "./Components/Panel";
import SearchForm from "./Components/SearchForm";

const App: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="shadow-md z-0 fixed w-full">
        <SearchForm />
      </div>
      <div className="flex padding-top-navbar">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>
  )
}
export default App;

const LeftPanel: React.FC = () => {
  return (
    <div className="pl-2 pr-0.5 py-2">
      <Panel />
    </div>
  )
}

const RightPanel: React.FC = () => {
  return (
    <div className="pl-0.5 pr-2 py-2">
      <Panel />
    </div>
  )
}