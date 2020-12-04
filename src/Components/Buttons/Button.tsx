import React from "react";

interface ButtonProps {
  className?: string;
}

export default class Button extends React.Component<ButtonProps> {
  render() {
    let className = this.props.className;
    if (!className) className = "";

    return (
      <button className={`flex-initial inline-block uppercase text-center px-3 py-1 rounded-sm focus:outline-none ${className}`}>
        Search
      </button>
    )
  }
}
