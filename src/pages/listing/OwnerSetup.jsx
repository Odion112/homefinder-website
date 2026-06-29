import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ListingProgressBar from "../../components/listing/ListingProgressBar";
import OwnerSetupForm from "../../components/listing/OwnerSetupForm";

function OwnerSetupPage() {
  const navigate = useNavigate();

  
  const role = "seeker"; // "guest" | "seeker" | "owner"

  function handleContinue(formData) {
    // TODO: persist formData to context / backend before navigating
    console.log("Step 1 data:", formData);
    navigate("/list-property/details");
  }

  function handleCancel() {
    navigate(-1);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

 
      <ListingProgressBar className=" pb-[45px] pt-[55px]"
        currentStep={1}
        totalSteps={2}
        label="Property Owner Setup"
      />

   
      <main className="flex-1 px-[20px] py-[20px] pb-[120px] ">
        <OwnerSetupForm
          onContinue={handleContinue}
          onCancel={handleCancel}
        />
      </main>

      <Footer />
    </div>
  );
}

export default OwnerSetupPage;