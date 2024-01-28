import { Tilt } from "react-tilt"
import { star } from "../assets/icons"
import {motion} from 'framer-motion'
import {fadeIn} from '../utils/motion'
const PopularProductCard = ({index,imgURL, name, price,rating}) => {
  return (
        <motion.div variants={fadeIn('right','spring',index*0.5, 0.75)} className="flex flex-1 flex-col w-full max-sm:w-full">
        <Tilt 
     options={{
        max: 45,
        scale: 1,
        speed: 450
       }}
    >
            <img 
             src={imgURL}
             alt="imgurl"
             className="w-[280px] h-[280px]"
            />
            </Tilt>
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" width={24} height={24}/>
                <p className="font-montserrat text-xl leading-normal text-slate-gray">{rating}</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="mt-2 font-semibold font-montserrat text-coral-blue-light text-2xl leading-normal">{price}</p>
        </motion.div>
    
  )
}

export default PopularProductCard