import { useContext } from "react";
import { ThemeContext } from "../App";

const Footer: React.FC = () => {
  const { footer } = useContext(ThemeContext);

  return (
    <footer className={`px-2 py-1 font-light flex justify-between ${footer.container} ${footer.text}`}>
      <span className="text-right">
        @2020-2021
      </span>
      <p>
        Bi-dict by <a className={footer.link} href="https://github.com/comaybay">CMB</a>
      </p>
    </footer>
  );
}
export default Footer;