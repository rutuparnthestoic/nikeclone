import Button from "../components/Button"
import {shoe8} from '../assets/images'
const SuperQuality = () => {
  return (
    <section
    id="about-us" //items-center : centers element vertically, justify-center: centers elements horizontally
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-conatiner"
    >
    <div className="flex flex-1 flex-col">
    <h2 className=" font-palanquin text-4xl capitalize font-bold">
        We provide you <span className="text-coral-blue">Premium quality</span> shoes.
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
        Ensuring premium comfort and style, our footwear is designed to elevate your experience. 
      </p>
      <p
      className="mt-6 lg:max-w-lg info-text"
      >
      Our dedication to detail and excellence ensures your satisfaction.
      </p>
      <div className="mt-11">
       <Button label="View Details" />
      </div>
     
    </div>

    <div className="flex-1 flex justify-center items-center">
      
         <img 
       src={shoe8}
       alt="shoe8"
       width={570}
       height={522}
       className="object-contain"
      />
     
     
    </div>
    
    </section>
  )
}

export default SuperQuality