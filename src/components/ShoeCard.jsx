
const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImage}) => {
  //Handle click checks if the selected shoe is same as the one that is showing currently.
  //If not, it just changes it to the selected shoe.
  const handleClick = () => {
    if(bigShoeImage !== imgURL.bigShoe){
    changeBigShoeImage(imgURL.bigShoe);
  }
  }
  
  
  return (
    <div //Here we are setting the border of the shoecard which is active.
    //Logic is simple if else.
     className={`border-2 rounded-xl 
     ${bigShoeImage === imgURL.bigShoe 
       ? 'border-coral-blue'
       : 'border-transparent'}
      cursor-pointer max-sm:flex-1`} 
      onClick={handleClick}
    >
    <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
      <img 
       src={imgURL.thumbnail}
       alt="shoe collection"
       width={127}
       height={103}
       className="object-contain"
      />
    </div>
    </div>
  )
}

export default ShoeCard