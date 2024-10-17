"use client";
import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
import "../Banner/banner.css";
import sliderImg from "../../../public/Assets/slide1.jpeg";
import sliderImg1 from "../../../public/Assets/slide2.jpeg";
import sliderImg2 from "../../../public/Assets/slide3.jpeg";
import sliderImg3 from "../../../public/Assets/bg.png";
import AnimatedText from "../Animation/AnimatedText";

const Banner = () => {
  return (
    <section className="slider">
      <Carousel variant="" interval={5000} pause={false}>

      <Carousel.Item className="carousel">
          <Image
            src={sliderImg3}
            alt="First slide"
            className="d-block w-100 img h-100"
            layout="responsive"
            width={1920}
            height={1080}
          />
          <Carousel.Caption>
            <div className="slider_des ">
              <AnimatedText
                text="Book Your Favourite Hotels On MakeMyTrip"
                className="!text-6xl xl:!text-7xl lg:!text-8xl md:!text-6xl !text-[25px] !text-center leading-[120%]"
              />
              <p className="sub_text">
                Book your favorite hotel rooms effortlessly with MakeMyTrip,
                where comfort meets convenience. Whether you're traveling for
                business or leisure, we offer a wide selection of hotels
                tailored to meet your every need.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item className="carousel">
          <Image
            src={sliderImg}
            alt="First slide"
            className="d-block w-100 img h-100"
            layout="responsive"
            width={1920}
            height={1080}
          />
          <Carousel.Caption>
            <div className="slider_des ">
              <AnimatedText
                text="Book Your Favourite Hotels On MakeMyTrip"
                className="!text-6xl xl:!text-7xl lg:!text-8xl md:!text-6xl !text-[25px] !text-center leading-[120%]"
              />
              <p className="sub_text">
                Book your favorite hotel rooms effortlessly with MakeMyTrip,
                where comfort meets convenience. Whether you're traveling for
                business or leisure, we offer a wide selection of hotels
                tailored to meet your every need.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={sliderImg1}
            alt="Second slide"
            className="d-block w-100 img h-100"
            layout="responsive"
            width={1920}
            height={1080}
          />
          <Carousel.Caption>
            <div className="slider_des ">
              <AnimatedText
                text="Book Your Favourite Rooms On MakeMyTrip"
                className="!text-6xl xl:!text-7xl lg:!text-8xl md:!text-6xl !text-[25px] !text-center"
              />
              <p className="sub_text">
                Book your favorite hotel rooms effortlessly with MakeMyTrip,
                where comfort meets convenience. Whether you're traveling for
                business or leisure, we offer a wide selection of hotels
                tailored to meet your every need.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={sliderImg2}
            alt="Third slide"
            className="d-block w-100 img h-100"
            layout="responsive"
            width={1920}
            height={1080}
          />
          <Carousel.Caption>
            <div className="slider_des ">
              <AnimatedText
                text="Book Your Favourite Desination On MakeMyTrip"
                className="!text-6xl xl:!text-7xl lg:!text-8xl md:!text-6xl !text-[25px] !text-center"
              />
              <p className="sub_text">
                Embark on unforgettable adventures and discover breathtaking
                destinations with MakeMyTrip. Whether you're dreaming of a
                serene beach getaway, a thrilling mountain trek, or an immersive
                cultural experience, we have the perfect tour packages tailored
                just for you.
              </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
