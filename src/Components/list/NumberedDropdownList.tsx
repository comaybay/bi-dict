import DropdownList, { DropdownListProps } from "./DropdownList";

const NumberedDropdownList: React.FC<DropdownListProps> = (props) => {
  return (<DropdownList {...props} ChildrenContainer={Ol} />)
};
export default NumberedDropdownList;

const Ol: React.FC = ({ children }) => <ol className="ml-5">{children}</ol>

