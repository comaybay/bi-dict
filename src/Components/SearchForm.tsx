import React from "react";
import WhiteButton from "./Buttons/WhiteButton"

const SearchForm: React.FC = () => {
  return (
    <div className="flex justify-center bg-gray-100 border-b-1 border-gray-300">
      <div className="w-full max-w-4xl pt-2 pb-2.5">
        <SearchBox />
      </div>
    </div>
  )
}
export default SearchForm;
// class SearchBox extends React.Component {
//   render() {
//     return (
//       <div className="w-full flex">
//         <input type="text" className="pl-3 text-lg flex-grow mx-2 h-11 rounded-sm focus:outline-none border-1.5
//          bg-gray-50 border-gray-300 focus:border-indigo-200"
//           placeholder="Tìm từ gì đây..."
//         />
//         <WhiteButton />
//       </div>
//     )
//   }
// }

const SearchBox: React.FC = () => {
  return (
    <div className="w-full flex">
      <input type="text" className="pl-3 text-lg flex-grow mx-2 h-11 rounded-sm focus:outline-none border-1.5
         bg-gray-50 border-gray-300 focus:border-indigo-200"
        placeholder="Tìm từ gì đây..."
      />
      <WhiteButton />
    </div>
  )
}