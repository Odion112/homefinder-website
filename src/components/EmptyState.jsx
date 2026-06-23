import emptyStateImage from "../assets/images/empty-state.svg"
import Button from "../components/Button"

function EmptyState({ title, description, buttonText, onButtonClick }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center">


{/*IMAGE*/}
      <div className="mb-8 flex items-center justify-center">
        <img
          src={emptyStateImage}
          alt="No properties"
          className="h-[136px] w-[136px] object-contain"
        />
      </div>


{/*TITLE*/}

      <h2 className="mb-3 text-[34px] font-neue font-roman text-[#0E0D0C]">
        {title}
      </h2>

{/*DESCRIPTION*/}
      <p className="max-w-[600px] font-neue font-roman text-[24px] leading-relaxed text-[#0E0D0C]/60">
        {description}
      </p>



{/*BUTTON*/}
      <Button variant="outline" className="!w-48 !font-medium mt-10 !text-[16px]" onClick={onButtonClick}>
        {"List a property"}
      </Button>

    </div>
  )
}

export default EmptyState

{/* HOW TO USE
    
       <>
  <EmptyState
  imageSrc="/assets/empty-state.svg"
  title="No properties yet"
  description={"  There are no property listings on the platform at the moment. New properties will appear here once they are added.  Be the first to list a property on our platform. "}
  ctaText="List a property"
  onCtaClick={() => navigate('/list')}
/>
    
    
    */}