import { useContext, useEffect } from "react";
import { ThemeContext } from "../App"
import randomf from "../utils/randomf"
import anime from "animejs";

const Logo: React.FC = () => {
  const { text } = useContext(ThemeContext);

  useEffect(() => {
    anime({
      targets: "#logo",
      duration: 5000,
      easing: "spring(1, 30, 20, 0)"
    });

    for (let i = 1; i <= 6; i++) {
      anime({
        targets: `#symbol${i}`,
        scale: [randomf(1, 1.7), 1],
        rotate: [anime.random(-75, 75), anime.random(-25, 25), 0],
        translateY: [-100, 0],
        easing: "easeOutElastic(1, 0.6)",
        delay: 300,
        duration: anime.random(1000, 1400),
      });
    }
  }, []);

  return (
    <div id="logo" className={`md:text-2xl whitespace-nowrap ml-3 mr-2 font-semibold ${text.header}`}>
      <span className="inline-block" id="symbol1">&#66512;</span>
      <span className="inline-block" id="symbol2">Bi</span>
      <span className="inline-block" id="symbol3">&#1418;</span>
      <span className="inline-block" id="symbol4">Dict</span>
      <span className="inline-block" id="symbol5">&#1418;</span>
      <span className="inline-block" id="symbol6">&#10148;</span>
    </div>
  );
}
export default Logo;