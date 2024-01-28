import { offer } from '../assets/images'
import Button from '../components/Button'
import {arrowRight} from '../assets/icons'
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img 
          src={offer}
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className="flex flex-1 flex-col">
    <h2 className=" font-palanquin text-4xl capitalize font-bold">
        <span className="text-coral-blue">Special</span> Offer
      </h2>
      <p className="mt-4 lg:max-w-lg info-text">
      Step into style with our exclusive Special Offer! Enjoy a 30% discount on select Nike products – a perfect blend of comfort, performance, and savings for the ultimate shopping experience
      </p>
      <p
      className="mt-6 lg:max-w-lg info-text"
      >
      From cutting-edge sneakers to premium athletic apparel, our Special Offer is your gateway to elevated sportswear at an irresistible price. Seize the moment, embrace the style, and gear up for success with Nike's iconic designs now within reach – because exceptional performance deserves exceptional value
      </p>
      <div className="mt-11 flex flex-wrap gap-4">
       <Button label="Shop now" iconUrl={arrowRight} />
       <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer