import anime from "animejs";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../App";

interface SpeakerButtonProps {
  link: string;
  handleClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const SpeakerButton: React.FC<SpeakerButtonProps> = ({ link, handleClick = null }) => {
  const theme = useContext(ThemeContext)

  const buttonRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  return (
    <button
      ref={buttonRef}
      className="w-3 md:w-5"
      onClick={(e) => {
        if (handleClick)
          handleClick(e);

        audioRef.current?.play();

        anime({
          targets: buttonRef.current,
          scale: [1.4, 1],
          easing: "spring(1, 200, 20, 10)",
        });
      }}
    >
      <svg viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className={`fill-current ${theme.speakerButton}`} y="24" width="34" height="30" rx="2" />
        <path className={`fill-current ${theme.speakerButton}`} d="M4.62787 41.0473C4.07197 40.6543 4.06268 39.8328 4.60955 39.4274L45.4044 9.18291C46.0644 8.69366 47 9.16472 47 9.98622L47 69.0685C47 69.8796 46.0851 70.3533 45.4228 69.8851L4.62787 41.0473Z" />
        <path className={`stroke-current ${theme.speakerButton}`} d="M53.3244 25.2553C55.6512 26.8846 57.5595 29.0414 58.8931 31.5495C60.2266 34.0576 60.9477 36.8457 60.9973 39.6859C61.0468 42.526 60.4235 45.3376 59.1783 47.8907C57.9331 50.4438 56.1013 52.6659 53.8327 54.3754" stroke-width="4" stroke-linecap="round" />
        <path className={`stroke-current ${theme.speakerButton}`} d="M57.4903 16.4494C61.2068 19.0517 64.2547 22.4967 66.3847 26.5027C68.5148 30.5087 69.6664 34.9619 69.7456 39.4982C69.8248 44.0346 68.8292 48.5253 66.8403 52.6032C64.8514 56.681 61.9256 60.2303 58.3022 62.9608" stroke-width="4.5" stroke-linecap="round" />
        <path className={`stroke-current ${theme.speakerButton}`} d="M64.5091 9.28179C69.3568 12.6761 73.3322 17.1696 76.1105 22.3948C78.8888 27.62 80.391 33.4285 80.4943 39.3455C80.5976 45.2625 79.299 51.1199 76.7048 56.4389C74.1105 61.7579 70.2943 66.3874 65.5681 69.9488" stroke-width="5" stroke-linecap="round" />
      </svg>
      <audio ref={audioRef} src={link}></audio>
    </button>
  );
}
export default SpeakerButton;