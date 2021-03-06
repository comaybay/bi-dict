import { DropDownList, DropDownListProps } from "./DropDownList";

const NumberedDropDownList: React.FC<DropDownListProps> = (props) => {
  return (<DropDownList {...props} ChildrenContainer={Ol} />)
};
export default NumberedDropDownList;

const Ol: React.FC = ({ children }) => <ol className="ml-5">{children}</ol>

