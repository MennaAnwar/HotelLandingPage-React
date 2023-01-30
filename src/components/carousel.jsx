import "./carousel.css";
import Card from "./cards";

import bedroom from "../img/bedroom.jfif";
import bedroom4 from "../img/bedroom 4.jfif";
import bakeries from "../img/bakeries.jfif";
import bedroom2 from "../img/bedroom2.jfif";
import bedroom5 from "../img/bedroom5.jfif";
import bar from "../img/bar.jfif";
import food from "../img/food.jfif";
import food2 from "../img/food2.jfif";
import food3 from "../img/food3.jfif";
import pool from "../img/pool.jfif";
import outside_pool from "../img/outside_pool.jfif";
import Restaurant from "../img/Restaurant.jfif";
import restaurant from "../img/restaurant2.jfif";
import undersea_room from "../img/undersea_room.jfif";

const Gallary = [
  bedroom,
  bedroom2,
  bedroom4,
  bedroom5,
  undersea_room,
  pool,
  outside_pool,
  Restaurant,
  restaurant,
  bakeries,
  food,
  food2,
  food3,
  bar,
];

export default function Carousel() {
  return (
    <div className="container">
      <div className="faders">
        <div className="left"></div>
        <div className="right"></div>
      </div>

      <div className="items">
        {Gallary.map((imgs) => {
          return <Card img={imgs} />;
        })}
      </div>
    </div>
  );
}
