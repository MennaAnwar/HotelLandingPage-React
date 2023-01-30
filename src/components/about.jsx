import "./about.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "./carousel";

export default function About() {
  return (
    <div className="text-center mt-5">
      <h1>About Us</h1>
      <div className="container">
        <div className="row">
          <div className="pt-4 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            volutpat purus. Etiam ac lorem vehicula nunc dignissim hendrerit.
            Suspendisse dictum est id risus molestie, sit amet dignissim neque
            ullamcorper. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vestibulum ac accumsan
            justo. Nullam vehicula mi ut bibendum luctus.
          </div>
        </div>
      </div>
      <div className="container text-center mt-5">
        <Carousel />
      </div>
    </div>
  );
}
