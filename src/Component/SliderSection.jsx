import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../css/SliderSection.css"

const SliderSection = () => {
  const sliderItems = [
    {
      title: "Sicilian Defense",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/08/Banner-2.png",
      link: "#",
    },
    {
      title: "Vienna",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/09/banner-2.png",
      link: "https://covuadaisy.com/courses/chinh-phuc-vienna-khai-cuoc-doc-dao-nhat-trong-co-vua/",
    },
    {
      title: "100 cách chống Mg5",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/08/banner.png",
      link: "https://covuadaisy.com/courses/100-cach-chong-lai-phuong-an-mg5-trong-khai-cuoc-italia/",
    },
    {
      title: "Khoá đội tuyển",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/07/Banner-5.png",
      link: "https://covuadaisy.com/courses/khoa-doi-tuyen-daisy-master-class-all-in-one/",
    },
    {
      title: "Step 5 Plus",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/07/Banner-4.png",
      link: "https://covuadaisy.com/courses/step-5-plus-khoa-hoc-co-vua-online-nang-cao/",
    },
    {
      title: "Gambit hậu",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/04/Banner.png",
      link: "https://covuadaisy.com/courses/khai-cuoc-gambit-hau-queen-gambit-master-class/",
    },
    {
      title: "Italia",
      imageUrl: "https://covuadaisy.com/wp-content/uploads/2024/04/banner-1.png",
      link: "https://covuadaisy.com/courses/hoc-chuyen-sau-khai-cuoc-italia-master-class/",
    },
  ];

  // Chia sliderItems thành các nhóm 4 ảnh
  const groupedItems = [];
  for (let i = 0; i < sliderItems.length; i += 4) {
    groupedItems.push(sliderItems.slice(i, i + 4));
  }

  return (
    <section className="pb-2 bg-light w-100">
      <div className="container">
        <Carousel interval={3000} indicators={true} controls={true}>
          {groupedItems.map((group, index) => (
            <Carousel.Item key={index}>
              <div className="row">
                {group.map((item, idx) => (
                  <div className="col-6 col-md-3 text-center mb-4" key={idx}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.imageUrl}
                        
                       
                        className=" slider-image"
                      />
                   
                    </a>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default SliderSection;
