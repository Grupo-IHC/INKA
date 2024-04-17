import { useParams } from "react-router-dom";
import { useInkaStore } from "../../../../hooks/useInkaStore"
import { useEffect, useCallback, useState } from "react";
import {useDropzone} from 'react-dropzone'
import { Loader } from "../../../components/Loader";
import { useForm } from "../../../../hooks/useForm";

import noSelected from "../../../../shared/assets/noSelectedIcon.png";
import whiteColor from "../../../../shared/assets/whiteColorIcon.png";
import fucsiaColor from "../../../../shared/assets/fucsiaColorIcon.png";
import redColor from "../../../../shared/assets/redColorIcon.png";
import blackColor from "../../../../shared/assets/blackColorIcon.png";
import blueColor from "../../../../shared/assets/blueColorIcon.png";
import grayColor from "../../../../shared/assets/grayColorIcon.png";
import blackTinta from "../../../../shared/assets/blackTintaIcon.png";
import blueTinta from "../../../../shared/assets/blueTintaIcon.png";
import redTinta from "../../../../shared/assets/redTintaIcon.png";
import greenTinta from "../../../../shared/assets/greenTintaIcon.png";
import purpleTinta from "../../../../shared/assets/purpleTintaIcon.png";
import lessIcon from '../../../../shared/assets/lessIcon.svg';
import plusIcon from '../../../../shared/assets/plusIcon.svg';


const colors = [
  {id: 1, color: redColor, name: 'Rojo'},
  {id: 2, color: blackColor, name: 'Negro'},
  {id: 3, color: blueColor, name: 'Azul'},
  {id: 4, color: grayColor, name: 'Gris'},
  {id: 5, color: whiteColor, name: 'Blanco'},
  {id: 6, color: fucsiaColor, name: 'Fucsia'},
]

const tintas = [
  {id: 1, tinta: blackTinta, name: 'black'},
  {id: 2, tinta: blueTinta, name: 'blue'},
  {id: 3, tinta: redTinta, name: 'red'},
  {id: 4, tinta: greenTinta, name: 'green'},
  {id: 5, tinta: purpleTinta, name: 'purple'}
]

export const ProductPageEdit = () => {

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0])
  }, [])
  const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({onDrop})

  const {id} = useParams();

  const {getInfoProduct, loading} = useInkaStore();

  const {onInputChange, aumentQuantity, quantity, isEmpty, decrementQuantity, setFormState} = useForm({quantity:1, isEmpty:false});
  const [productInfo, setProductInfo] = useState([]);
  const [indexColor, setIndexColor] = useState(0);
  const [indexTinta, setIndexTinta] = useState(0);

  useEffect(() => {
    const getProduct = async() => {
      const {data} = await getInfoProduct(id);
      console.log(data[0])
      setProductInfo(data[0]);
    }
    getProduct();
  },[])  

  const onBlur = () => {
    if(isEmpty){
      setFormState({quantity:1})
    }
  }

  return (
    <>
      {loading && <Loader />}
      <section className="Product">
        <div className="container mx-auto px-[30px] py-[15px] grid gap-y-[30px] xl:grid-cols-3 xl:gap-y-[0px] xl:gap-x-[100px] xl:py-[30px]">
          <div className="flex flex-col xl:justify-between gap-y-[30px]">
            <div className="flex flex-col gap-y-[15px]">
              <h1 className="font-bold text-[#2B1E0C] text-[20px] text-center xl:text-start xl:text-[35px]">Sello {productInfo.name}</h1>
              <p className="text-[16px] text-justify xl:text-[18px]">{productInfo.description}</p>
            </div>
            <div className="flex justify-center xl:hidden">
              <img src={productInfo.image} alt="imgPrueba" />
            </div>
            <div className="content-colors">
              <h3 className="font-bold xl:text-[20px]">COLORES</h3>
              <div className="paletaColores flex gap-x-[15px] mt-[10px]">
                {
                  productInfo.color && productInfo.color.map( (color,index) => (
                    <div 
                      key={index}
                      className={`${index === indexColor ? 'border rounded-lg border-[#2B1E0C]' : ''} p-[10px] w-[12%] cursor-pointer`}
                      onClick={() => setIndexColor(index)}
                    >
                      <img src={colors.find(c => c.name === color)?.color} alt={color.name} />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="content-tintas">
              <h3 className="font-bold xl:text-[20px]">COLOR DE TINTA</h3>
              <div className="paletaTintas flex gap-x-[15px] mt-[10px]">
                <div 
                  className={`p-[10px] cursor-pointer ${indexTinta===0 ? 'border rounded-lg border-[#2B1E0C]' : ''}`}
                  onClick={() => setIndexTinta(0)}
                >
                  <img src={noSelected} alt="noSelected" />
                </div>
                {
                  tintas.map(tinta => (
                    <div 
                      key={tinta.id} 
                      className={`tinta-${tinta.id} ${indexTinta === tinta.id ? 'border rounded-lg border-[#2B1E0C]' : ''} p-[10px] w-[12%] cursor-pointer`}
                      onClick={() => setIndexTinta(tinta.id)}
                    >
                      <img src={tinta.tinta} alt={tinta.name} />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="hidden xl:flex xl:flex-col xl:justify-end">
            <div className="flex justify-center">
              <img src={productInfo.image} alt="imgPrueba" className="2xl:w-[85%]" />
            </div>
            <div className="content-precio flex justify-between items-center xl:mt-[60px] xl:mb-[40px]">
              <h3 className="font-bold xl:text-[20px]">CANTIDAD</h3>
              <div className="flex items-center justify-center gap-x-3">
                <img src={lessIcon} 
                  className='w-4/12 cursor-pointer 2xl:w-auto' 
                  alt="less" 
                  onClick={decrementQuantity}
                />
                <input 
                  name="quantity"
                  className='max-w-[70px] border-2 border-black rounded-lg text-center' 
                  type="number" 
                  inputMode="numeric" 
                  maxLength="3" 
                  value={quantity}
                  onChange={onInputChange}
                  onBlur={onBlur}
                />
                <img src={plusIcon} 
                  className='w-4/12 cursor-pointer 2xl:w-auto' 
                  alt="less" 
                  onClick={aumentQuantity}
                />
              </div>
            </div>
            <button className="btn-send">
              AGREGAR AL CARRITO
            </button>
          </div>
          <div className="flex flex-col gap-y-[30px] xl:justify-end">
            <div className="content-medida">
              <h3 className="font-bold xl:text-[20px]">MEDIDA</h3>
              <div className="flex justify-center">
                <div className={`bg-[#F2EEEE] ${productInfo.category_product === "Circular" ? "rounded-full w-[150px] h-[150px]" : "h-[100px] w-[250px] xl:w-[350px]"} flex items-center justify-center p-[15px] mt-[10px]`}>
                  <p className="font-bold">{productInfo.measure}</p>
                </div>
              </div>
            </div>
            <div className="content-plantilla">
              <h3 className="font-bold xl:text-[20px]">TU PLANTILLA</h3>
              <div {...getRootProps()} className="cursor-pointer p-[15px] w-full h-[300px] rounded-lg flex flex-col items-center   justify-center  border-2 border-dashed border-black mt-[10px]">
                {
                  acceptedFiles[0] && (
                    <img src={URL.createObjectURL(acceptedFiles[0])} className="max-h-[163px] max-w-[309px]" alt="" />
                  )
                }
                <input {...getInputProps()} />
                {
                  isDragActive ?
                  <p>Drop the files here ...</p> :
                  <p className="font-bold text-center mt-[10px]">ARRASTRA/SELECCIONA TU DISEÑO</p>
                }
              </div>
            </div>
            <div className="content-precio flex justify-between items-end">
              <h3 className="font-bold xl:text-[20px]">PRECIO</h3>
              <h3 className="font-bold text-[20px]">S/ {(quantity * productInfo.price).toFixed(2)}</h3>
            </div>
          </div>
          <div className="content-precio flex justify-between items-center xl:hidden">
            <h3 className="font-bold">CANTIDAD</h3>
            <div className="flex items-center justify-center gap-x-3">
              <img src={lessIcon} 
                className='w-4/12 cursor-pointer 2xl:w-auto' 
                alt="less" 
                onClick={decrementQuantity}
              />
              <input 
                name="quantity"
                className='max-w-[70px] border-2 border-black rounded-lg text-center' 
                type="number" 
                inputMode="numeric" 
                maxLength="3" 
                value={quantity}
                onChange={onInputChange}
              />
              <img src={plusIcon} 
                className='w-4/12 cursor-pointer 2xl:w-auto' 
                alt="less" 
                onClick={() => aumentQuantity(quantity)}
              />
            </div>
          </div>
          <button className="btn-send mt-[20px ] xl:hidden">
            AGREGAR AL CARRITO
          </button>
        </div>
      </section>
    </>
  ) 
}