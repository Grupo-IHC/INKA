import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prevIcon from '../../../../shared/assets/arrowLetfIcon.png';
import nextIcon from '../../../../shared/assets/arrowRigthIcon.png';
import arrowRigth from '../../../../shared/assets/arrowProductCarrousel.svg';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useInkaStore } from "../../../../hooks/useInkaStore";
import stamp from '../../../../shared/assets/stamp.svg';

export const Carrousel = ({typeProduct, category}) => {

  const {loading, getProductFilterByCategory} = useInkaStore();

  const navigate = useNavigate();

  const [product, setProduct] = useState([])

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
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const skeleton = () => {
    return (
    <div className="loader-container h-[400px] flex items-center justify-center w-full bg-[#fff] relative">
      <span className='loader !relative !top-0'></span>
      <img className='stamp !abosolute !top-[30%]' src={stamp} alt="" />
    </div>
    )
  }


  useEffect(() => {
    const getProducts = async() => {
      const products = await getProductFilterByCategory(typeProduct, category);
      setProduct(products);
    }
    getProducts();
  }, [category])
  

  return (
    <>
      {loading ? skeleton():
        <div className="slider-container">
          <Slider {...settings}>
            {
              product.map((product) => (
                <div key={product.name} className="slider-item !flex justify-center">
                  <div className="relative">
                    <h3 className="absolute bottom-2 left-2 text-white font-bold text-[18px] cursor-pointer">{product.name}</h3>
                    <img src={arrowRigth} alt="arrowRight" className="absolute bottom-2 right-2 cursor-pointer" />
                    <img 
                      src={product.image} 
                      className="max-w-[250px] 2xl:max-w-[400px] cursor-pointer rounded-2xl bg-[#D1C8C1]"  
                      alt={product.name} 
                      onClick={() => navigate(`/productos/${product.code}`)}
                    />
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      }
    </>
  )
}