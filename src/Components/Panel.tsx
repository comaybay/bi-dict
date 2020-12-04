import React from "react";
import loremText from "../Tests/loremText"

const Panel: React.FC = () => {
  return (
    <div className="bg-gray-50  rounded-md">
      <div className="py-4 px-6">
        <h1 className="text-xl font-bold text-gray-700">Placeholder...</h1>
        <h3 className="text-lg italic font-thin text-gray-500">/ˈplāsˌhōldər/</h3>
        <ol className="pt-2 pl-8 list-decimal">
          <li>a significant zero in the decimal representation of a number.</li>
          <li>an element of a sentence that is required by syntactic constraints but carries little or no semantic information, for example the word it as a subject in it is a pity that she left, where the true subject is that she left.</li>
          <li>{loremText}</li>
        </ol>

      </div>
    </div>
  )
}
export default Panel;

