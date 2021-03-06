import { DropDownList, DropDownListProps } from "./DropDownList";

const BulletedDropDownList: React.FC<DropDownListProps> = (props) => {
  return (<DropDownList {...props} ChildrenContainer={Ol} />)
};
export default BulletedDropDownList;

const Ol: React.FC = ({ children }) => <ul className="ml-5 list-disc">{children}</ul>

