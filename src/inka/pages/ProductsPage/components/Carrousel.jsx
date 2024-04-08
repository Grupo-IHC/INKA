import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevIcon from '../../../../shared/assets/arrowLetfIcon.png';
import nextIcon from '../../../../shared/assets/arrowRigthIcon.png';
import imgSeal from '../../../../shared/assets/sealCarrouselImage.png';


export const Carrousel = () => {

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={nextIcon} alt="" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
      >
        <img src={prevIcon} alt="" />
      </div>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  const seals = [
    {
      id: 1,
      image : imgSeal,
    },
    {
      id: 2,
      image : imgSeal,
    },
    {
      id: 3,
      image : imgSeal,
    },
    {
      id: 4,
      image : imgSeal,
    },
    {
      id: 5,
      image : imgSeal,
    },
    {
      id: 6,
      image : imgSeal,
    },
    
  ]

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          seals.map((seal) => (
            <div key={seal.id} className="slider-item !flex justify-center text-center">
              <img src={seal.image} className="max-w-[250px] 2xl:max-w-[400px] cursor-pointer rounded-2xl"  alt="Seal" />
            </div>
          ))
        }
      </Slider>
    </div>
  )
}