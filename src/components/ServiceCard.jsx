
const ServiceCard = ({imgUrl, label, subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">      
      <h3 className="mt-3 font-palanquin text-4xl leading-normal font-bold text-coral-blue">
        {label}
      </h3>
      <p className="mt-5 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  )
}

export default ServiceCard