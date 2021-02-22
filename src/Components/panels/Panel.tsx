import React from "react";

const Panel: React.FC<{ extendedClassName?: string }> = ({ children, extendedClassName }) => {
  return (
    <div className={`bg-gray-50 rounded-md ${extendedClassName}`}>
      {children}
    </div>
  )
}
export default Panel;
