/* List a Property page for returning owners who have already completed
 owner setup. They land here directly — no progress bar, no Step 1.

Differences from ListPropertyPage:
No progress bar — breadcrumb instead
Owner navbar (Properties + My Listings + avatar)
No back arrow inside the form heading
 Contact details section visible and pre-filled from their profile */

import { useNavigate, Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ListPropertyForm from "../../components/listing/ListPropertyForm";

function ExistingOwnerList() {
  const navigate = useNavigate();

  // Replace with real auth context when set up
  const role = "owner";

  /*Pre-fill contact details from their saved owner profile
   Will replace with real data from auth context / user store */

  const ownerProfile = {
    phone: "+234 801 234 5678",
    whatsapp: "+234 801 234 5678",
  };

  function handlePublish(formData) {
    // TODO: POST formData to backend, then redirect
    console.log("New listing data:", formData);
    navigate("/my-listings");
  }

  function handleCancel() {
    navigate("/properties");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Owner navbar — shows Properties + My Listings + avatar */}
      <Navbar />

      {/* Breadcrumb — replaces progress bar for returning owners */}
      <div className="px-[150px] pb-[30px] pt-[55px] ">
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => navigate(-1)}
            className="text-[#6B6B6B] hover:text-accent transition-colors"
            aria-label="Go back"
          >
            <RiArrowLeftLine size={16} />
          </button>
          <Link
            to="/properties"
            className="text-[14px] font-rethink text-[#6B6B6B] hover:text-accent transition-colors"
          >
            Properties
          </Link>
          <span className="text-[14px] font-rethink text-[#C6C6C6]">/</span>
          <span className="text-[14px] font-rethink font-medium text-[#1A1A1A]">
            List property
          </span>
        </div>
      </div>

      {/* Form */}
      <main className="flex-1  px-[20px] py-[20px] pb-[120px]">
        <ListPropertyForm
          onPublish={handlePublish}
          onCancel={handleCancel}
          showBackArrow={false}
          showContactDetails={true}
          initialData={{
            phone: ownerProfile.phone,
            whatsapp: ownerProfile.whatsapp,
          }}
        />
      </main>

      <Footer />
    </div>
  );
}

export default ExistingOwnerList;