import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/LogoCarousel.css";

const LogoCarousel = () => {
  const logos = [
    { src: "https://covuadaisy.com/wp-content/uploads/2024/04/broad.png", alt: "Broad" },
    { src: "https://covuadaisy.com/wp-content/uploads/2024/04/duy-tan.png", alt: "Duy Tân" },
    { src: "https://covuadaisy.com/wp-content/uploads/2024/04/Nguyen-Binh-Khiem.png", alt: "Nguyễn Bỉnh Khiêm" },
    { src: "https://covuadaisy.com/wp-content/uploads/2024/04/O-re-ca.png", alt: "O-re-ca" },
    { src: "https://covuadaisy.com/wp-content/uploads/2024/04/cung-thieu-nhi.png", alt: "Cung Thiếu Nhi" },
  ];

  const settings = {
    dots: false, // Ẩn dấu chấm chỉ báo
    infinite: true, // Cho phép lặp vô hạn
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 4, // Hiển thị 4 logo trên mỗi slide
    slidesToScroll: 1, // Chỉ cuộn 1 logo mỗi lần
    autoplay: true, // Tự động lướt
    autoplaySpeed: 3000, // Tốc độ lướt tự động
    responsive: [
      {
        breakpoint: 768, // Khi màn hình nhỏ hơn 768px
        settings: {
          slidesToShow: 2, // Hiển thị 2 logo trên mỗi slide
          slidesToScroll: 1, // Cuộn từng logo
        },
      },
      {
        breakpoint: 576, // Khi màn hình nhỏ hơn 576px
        settings: {
          slidesToShow: 1, // Hiển thị 1 logo trên mỗi slide
          slidesToScroll: 1, // Cuộn từng logo
        },
      },
    ],
  };

  return (
    <section className="py-5 bg-light w-100">
      <div className="container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div key={index} className="text-center">
              <img
                src={logo.src}
                alt={logo.alt}
                className="img-fluid logo-image"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LogoCarousel;
