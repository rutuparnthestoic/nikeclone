import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'
const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palaquin text-center text-4xl font-bold">
        What our 
        <span className="text-coral-blue"> Customers </span>
        say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
      Dive into the testimonials of our delighted customers in our Reviews section. Join the chorus of satisfaction as they share their experiences with our top-notch products and unparalleled service.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
      {reviews.map((review) => (
        <ReviewCard 
         key ={review.customerName}
         imgURL={review.imgURL}
         customerName={review.customerName}
         rating={review.rating}
         feedback={review.feedback}
        />
      ))}
      </div>
    </section>
  )
}

export default CustomerReviews