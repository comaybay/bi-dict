import DropdownArrow from "../../assets/images/drop-down-arrow.svg"

interface DropdownButtonProps {
  dropped: boolean;
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ handleClick, dropped }) => {
  const rotation = dropped === false ? "-rotate-90" : "rotate-0";
  return (
    <button
      className="w-2 md:w-3"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      <img className={`transform ${rotation}`} src={DropdownArrow} alt="Dropdown button" />
    </button>
  );
}
export default DropdownButton