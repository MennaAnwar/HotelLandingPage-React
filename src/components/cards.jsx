import "bootstrap/dist/css/bootstrap.css";
import "./cards.css";

export default function Card({ img }) {
  return (
    <div className="flip">
      <div className="front" style={{ backgroundImage: `url("${img}")` }}></div>
      <div className="d-flex card-content back">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
          volutpat purus.
        </p>
      </div>
    </div>
  );
}
