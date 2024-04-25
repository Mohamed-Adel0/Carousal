import React from "react";
import Css from "./Carousal.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import img1 from "././Pictures/img1.jpg";
import img2 from "././Pictures/img2.jpg";
import img3 from "././Pictures/img3.jpg";
import img4 from "././Pictures/img4.jpg";
import img5 from "././Pictures/img5.jpg";
import img6 from "././Pictures/img6.jpg";

const Carousal = () => {
  const next = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").appendChild(items[0]);
  };
  const prev = () => {
    let items = document.querySelectorAll(".item");
    document.querySelector(".slide").prepend(items[items.length - 1]);
  };
  let Clear = setInterval(() => {
    next();
  }, 4500); //Here for timer secondary
  window.addEventListener("click", () => {
    clearInterval(Clear);
  });
  const Products = [
    {
      id: 1,
      title: "Switzerland",
      descrpation:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      info: "See More",
      image: img1,
    },
    {
      id: 2,
      title: "Finland",
      descrpation:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      info: "See More",
      image: img2,
    },
    {
      id: 3,
      title: "Pyramids",
      descrpation:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      info: "See More",
      image: img3,
    },
    {
      id: 5,
      title: "desert egypt",
      descrpation:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      info: "See More",
      image: img5,
    },
    {
      id: 6,
      title: "Egypt",
      descrpation:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      info: "See More",
      image: img6,
    },
    {
      id: 4,
      title: "Australia",
      descrpation:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!",
      info: "See More",
      image: img4,
    },
  ];
  return (
    <div>
      <div className={Css.parent}>
        <div className={Css.container}>
          <div className={`${Css.slide} slide`}>
            {Products?.map((e) => (
              <div className={`${Css.item} item`} key={e.id}>
                <div className={Css.img}>
                  <img src={e.image} alt="Error" />
                </div>
                <div className={Css.content}>
                  <div className={Css.name}>{e.title}</div>
                  <div className={Css.des}>{e.descrpation}</div>
                  <button>{e.info}</button>
                </div>
              </div>
            ))}
          </div>
          <div className={Css.button}>
            <button onClick={prev} className={Css.prev}>
              <FaArrowLeft />
            </button>
            <button onClick={next} className={Css.next}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousal;
