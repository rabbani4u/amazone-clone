import "./Home.css";
import { useEffect } from "react";
import Products from "../Products/Products";
const Home = () => {
  useEffect(() => Slider(0), []);
  return (
    <>
      <div className="home">
        <div className="home_Container">
          <div className="homeSliderContainer">
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71qid7QFWJL._SX3000_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71dbxIcDioL._SX3000_.jpg"
                alt=""
              />
            </div>

            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71tIrZqybrL._SX3000_.jpg"
                alt=""
              />
            </div>
            <div className="homeSlide">
              <img
                className="homeImg"
                src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/61jovjd+f9L._SX3000_.jpg"
                alt=""
              />
            </div>
          </div>
          {/* Products => product ID, Title, Rating, Price, Img */}
          <div className="home__row">
            <Products
              id="123123"
              title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7"
              price=" 11.25"
              rating={4}
              image="https://images.unsplash.com/photo-1626348651786-f7545e0a5455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            />
            <Products
              id="123123"
              title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7"
              price=" 11.25"
              rating={5}
              image="https://images.unsplash.com/photo-1505740106531-4243f3831c78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div className="home__row">
            <Products
              id="123123"
              title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7"
              price=" 11.25"
              rating={4}
              image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <Products
              id="123123"
              title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7"
              price=" 11.25"
              rating={4}
              image="https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80"
            />
            <Products
              id="123123"
              title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7"
              price=" 11.25"
              rating={4}
              image="https://images.unsplash.com/photo-1515054562254-30a1b0ebe227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            />
          </div>
          <div className="home__row">
            <Products
              id="123123"
              title="Fitbit Charge 5 Advanced Fitness & Health Tracker with Built-in GPS, Stress Management Tools, Sleep Tracking, 24/7"
              price=" 11.25"
              rating={4}
              image="https://images.unsplash.com/photo-1609692814858-f7cd2f0afa4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </div>
      </div>
    </>
  );
};
//For Slide
function Slider(counter) {
  const slides = document.querySelectorAll(".homeImg");
  slides.forEach((slide, index) => {
    if (index != counter) {
      slide.style.visibility = "hidden";
      slide.classList.add(`image-${index}`);
    }
  });
  moveCorousal(counter, slides, slides.length);
}
function moveCorousal(counter, slides, len) {
  if (slides) {
    if (counter >= len - 1) counter = 0;
    else counter += 1;
    slides.forEach((slide, index) => {
      if (index === counter) {
        slide.style.visibility = "visible";
      } else {
        slide.style.visibility = "hidden";
      }
    });
  }
  setTimeout(() => {
    moveCorousal(counter, slides, len);
  }, 4000);
}

export default Home;
