import React from "react";

const Panel: React.FC = ({ children }) => {
  return (
    <div>
      <div className="bg-gray-50 rounded-md">
        {children}
      </div>
    </div >

  )
}
export default Panel;
