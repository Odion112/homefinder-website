import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ListingProgressBar from "../../components/listing/ListingProgressBar";
import ListPropertyForm from "../../components/listing/ListPropertyForm";

function ListProperty() {
  const navigate = useNavigate();

  // Replace with real auth context when wired up
  const role = "seeker"; // "seeker" | "guest"

  function handlePublish(formData) {
    // TODO: POST formData to backend, then redirect
    console.log("Listing data:", formData);
    navigate("/my-listings");
  }

  function handleCancel() {
    navigate("/");
  }

  function handleBack() {
    navigate("/list-property");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <ListingProgressBar className=" pb-[45px] pt-[55px]"
        currentStep={2}
        totalSteps={2}
        label="Property Details"
      />

      <main className="flex-1 px-[20px] py-[20px] pb-[120px]">
        <ListPropertyForm
          onPublish={handlePublish}
          onCancel={handleCancel}
          onBack={handleBack}
          showBackArrow={true}
          showContactDetails={false}
        />
      </main>

      <Footer />
    </div>
  );
}

export default ListProperty;