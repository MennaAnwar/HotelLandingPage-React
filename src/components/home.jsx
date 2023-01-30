import "./home.css";
import "bootstrap/dist/css/bootstrap.css";
import hotel from "../img/hotel.jfif";

export default function Home() {
  return (
    <div id="home" className="mt-5 md-mb-3 d-flex">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Lorem Ipsum</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            volutpat purus. Etiam ac lorem vehicula nunc dignissim hendrerit.
            Suspendisse dictum est id risus molestie, sit amet dignissim neque
            ullamcorper. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum ac accumsan
            justo. Nullam vehicula mi ut bibendum luctus.
          </div>
          <div className="col-lg-6 order-lg-2 hotel-img text-center justify-content-center align-self-center">
            <img src={hotel} alt="Hotel" />
          </div>
        </div>
      </div>
    </div>
  );
}
