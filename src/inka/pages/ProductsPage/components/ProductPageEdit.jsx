import { useParams } from "react-router-dom";
import { useInkaStore } from "../../../../hooks/useInkaStore"
import { useEffect } from "react";

export const ProductPageEdit = () => {

  const {id} = useParams();

  const {getInfoProduct, loading} = useInkaStore();

  useEffect(() => {
    const getProduct = async() => {
      await getInfoProduct(id);
    }
    getProduct();
  },[])
  return (
    <h1>Hola mundo</h1>
  ) 
}