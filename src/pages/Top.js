import { CounterMessage } from "../components/CounterMessage";
import { CounterDigital } from "../components/CounterDigital";
import star_and_me from "../assets/star_and_me.jpg";

export const Top = () => {
  return (
    <div className="Top">
      <div className="CounterDigital">
        <CounterDigital />
      </div>
      <CounterMessage />
      <h1>T.U. のポートフォリオへようこそ</h1>
      <figure>
        <img src={star_and_me} width="75%" />
        <figcaption>
          青森県弘前市りんご公園にて
          <br />
          中央に写っているのは、自分と、青森県最高峰の岩木山です。
        </figcaption>
      </figure>
    </div>
  );
};
