import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import slide1 from '../assets/slide1.jpeg';
import slide2 from '../assets/slide2.jpeg';
import slide3 from '../assets/slide3.jpeg';
import slide4 from '../assets/slide4.jpeg';
import slide5 from '../assets/pic4.jpeg'

class CitiesSlider extends React.Component {
  constructor(props) {
    super(props);
    this.IMAGE_PARTS = 4;
    this.changeTO = null;
    this.AUTOCHANGE_TIME = 2000;

    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }

  componentWillUnmount() {
    window.clearTimeout(this.changeTO);
  }

  componentDidMount() {
    this.runAutochangeTO();
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }

  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }

  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;

    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;

    this.setState({ activeSlide, prevSlide });
  }

  render() {
    const { activeSlide, sliderReady } = this.state;
    return (
      <div className={classNames(" relative lg:h-[250px] h-[200px] w-[40%] max-md:w-[90%] m-auto max-sm:w-[70%]", { "s--ready": sliderReady })}>
        <div className="slider__slides h-full relative overflow-hidden">
          {this.props.slides.map((slide, index) => (
            <div
              className={classNames(
                "slider__slide absolute inset-0 transition-opacity duration-500",
                { "opacity-100 pointer-events-auto": activeSlide === index, "opacity-0 pointer-events-none": activeSlide !== index }
              )}
              key={index}
            >
              <div className="slider__slide-parts absolute inset-0 overflow-hidden">
                {[...Array(this.IMAGE_PARTS)].map((_, i) => (
                  <div
                    className="slider__slide-part flex-1 h-full relative overflow-hidden"
                    key={i}
                  >
                    <div
                      className="rounded-lg absolute inset-0 bg-cover bg-center bg-no-repeat duration-700"
                      style={{
                        backgroundImage: `url(${slide.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: activeSlide === index
                          ? "translateX(0)"
                          : `translateX(${(i / this.IMAGE_PARTS) * -100}%)`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          className="slider__control absolute text-center  mr-24 left-5 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-30 rounded-full cursor-pointer"
          onClick={() => this.changeSlides(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mt-4 text-white" size="md" />
        </div>
        <div
          className="slider__control slider__control--right  text-center  absolute right-5 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-30 rounded-full cursor-pointer"
          onClick={() => this.changeSlides(1)}
        >
          <FontAwesomeIcon icon={faArrowRight} className="mt-4 text-white" size="md" />
        </div>
      </div>
    );
  }
}

export default function Slidder() {
  const slides = [
    { img: slide1 },
    { img:  slide2},
    { img: slide3 },
    { img: slide4 },
    // { img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg" },
  ];

  return (
    <div id="slider">
      <CitiesSlider slides={slides} />
    </div>
  );
}
