
const Button = ({label,iconUrl, backgroundColor, textColor, borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} hover:text-white hover:bg-black rounded-full` : 
     `bg-coral-blue hover:bg-coral-blue-light text-white rounded-full border-coral-blue ${fullWidth && 'w-full'}`} `}>
     {label} 
     {/* If icon url is passed only then it will show the image. */}
     {iconUrl && <img 
        src={iconUrl}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"
     /> }
    </button>
  )
}

export default Button