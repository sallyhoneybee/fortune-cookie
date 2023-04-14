import "./Fortune.css";
import {
  EMOJI_LIST_ONE,
  EMOJI_LIST_TWO,
  EMOJI_LIST_THREE,
  EMOJI_LIST_FOUR,
  EMOJI_LIST_FIVE,
  EMOJI_LIST_SIX,
} from "./Emoji_list";

import { FORTUNE_LIST } from "./Fortune_list";

const Fortune = () => {
  const luckyFortune =
    FORTUNE_LIST[Math.floor(Math.random() * FORTUNE_LIST.length)];

  console.log(luckyFortune);
  return (
    <div className="fortune">
      <p className="fortune-text">{luckyFortune}</p>
      <p className="fortune-emoji">
        Lucky Emojis <span>?, ?, ?</span>
      </p>
    </div>
  );
};

export default Fortune;
