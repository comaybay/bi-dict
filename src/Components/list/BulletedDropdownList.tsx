import DropdownList, { DropdownListProps } from "./DropdownList";

const BulletedDropdownList: React.FC<DropdownListProps> = (props) => {
  return (<DropdownList {...props} ChildrenContainer={Ol} />)
};
export default BulletedDropdownList;

const Ol: React.FC = ({ children }) => <ul className="ml-5 list-disc">{children}</ul>

