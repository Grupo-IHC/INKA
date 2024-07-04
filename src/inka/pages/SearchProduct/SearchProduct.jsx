import { useEffect, useState } from "react"
import { useInkaStore } from "../../../hooks/useInkaStore"
import { useNavigate, useParams } from "react-router-dom"
import { Loader } from "../../components/Loader"

export const SearchProduct = () => {

  const [getProducts, setGetProducts] = useState([]);
  const [getStatusResponse, setGetStatusResponse] = useState(null);
  const [messageResponse, setMessageResponse] = useState('')

  const {name} = useParams();

  const {getSearchProduct, loading} = useInkaStore();

  const navigate = useNavigate();

  const clickSeeMore = (id) => {
    navigate(`/product/${id}`)
  }

  useEffect(() => {
    const getSearch = async() => {
      const response = await getSearchProduct(name);
      const {data, status, msg = ""} = response;
      setGetProducts(data);
      if(status === 'OK') {
        setGetStatusResponse(true);
      } else {
        setGetStatusResponse(false);
        setGetProducts([]);
        setMessageResponse(msg);
      }
    }
    getSearch();
  }, [name]) 

  return (
    <>
    {loading && <Loader />}
      <div className="mx-auto container grid grid-cols-2 gap-4 p-[15px] md:grid-cols-3 xl:grid-cols-4">
        {
          !getStatusResponse && getProducts.length === 0 ? (
            <div className='col-span-2 md:col-span-3 xl:col-span-4 w-full h-[700px] p-[15px] flex flex-col items-center justify-center gap-y-3'>
              <i className="fa-regular fa-face-frown text-[150px]"></i>
              <p className="text-tertiary font-bold text-[20px] mt-2 text-center">{messageResponse}</p>
            </div>
          ):
            getProducts.map((product, index) => (
              <div key={index} className="col-span-1 rounded-lg p-3 border-2 ">
                <div className="flex justify-center">
                  <img src={product.image} alt={product.name} className="block" />
                </div>
                <span className="text-center font-semibold text-tertiary mt-2">{product.name}</span>
                <small className="block">{product.type_product}</small>
                <div className="flex justify-between mt-2">
                  <span>Precio:</span>
                  <span className="font-semibold">S/ {product.price.toFixed(2)}</span>
                </div>
                <button
                  className="btn-send-2 w-full mt-2 !rounded-lg"
                  type="button"
                >
                  Ver más
                </button>
              </div>
            ))
        }
      </div>
    </>
  )
}
