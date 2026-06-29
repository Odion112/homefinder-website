import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiCloseLine, RiCheckLine } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ListingProgressBar from "../../components/listing/ListingProgressBar";
import ListPropertyForm from "../../components/listing/ListPropertyForm";
import ConfirmDialog from "../../components/ConfirmDialog";

// Replace with real user email from auth context
const MOCK_USER_EMAIL = "johndoe@email.com";

function ListProperty() {
  const navigate = useNavigate();

  const role = "seeker";

  const [showLeaveDialog, setShowLeaveDialog]   = useState(false);
  const [pendingDestination, setPendingDest]    = useState(null);
  const [showPendingModal, setShowPendingModal] = useState(false);

 
  function requestLeave(destination) {
    setPendingDest(destination);
    setShowLeaveDialog(true);
  }

  function handleLeaveConfirm() {
    setShowLeaveDialog(false);
    navigate(pendingDestination);
  }

  function handleLeaveCancel() {
    setShowLeaveDialog(false);
    setPendingDest(null);
  }


  function handlePublish(formData) {
    console.log("Listing data:", formData);
    setShowPendingModal(true);
  }

  function handlePendingClose() {
    setShowPendingModal(false);
    navigate("/properties");
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <ListingProgressBar
        className="pb-[45px] pt-[55px]"
        currentStep={2}
        totalSteps={2}
        label="Property Details"
      />

      <main className="flex-1 px-[20px] py-[20px] pb-[120px]">
        <ListPropertyForm
          onPublish={handlePublish}
          onCancel={() => requestLeave("/")}
          // Back goes to /list-property — App state restores the filled Step 1 form
          onBack={() => navigate("/list-property")}
          showBackArrow={true}
          showContactDetails={false}
        />
      </main>

      <Footer />

      {/*Leave listing dialog  */}
      {showLeaveDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <ConfirmDialog
            title="Leave listing?"
            message="Your changes won't be saved."
            cancelLabel="Stay"
            confirmLabel="Leave"
            confirmColor="#FE7C0B"
            onCancel={handleLeaveCancel}
            onConfirm={handleLeaveConfirm}
          />
        </div>
      )}

      {/* Pending approval modal */}
      {showPendingModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-[8px] w-[560px] px-[48px] py-[48px] relative">

            {/* Close X */}
            <button
              onClick={handlePendingClose}
              className="absolute top-[16px] right-[16px] text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors"
              aria-label="Close"
            >
              <RiCloseLine size={22} />
            </button>

            {/* Green check icon */}
            <div className="flex justify-center mb-[28px]">
              <div className="w-[88px] h-[88px] rounded-full bg-[#E8F5EE] flex items-center justify-center">
                <div className="w-[56px] h-[56px] rounded-full bg-[#1A7A3C] flex items-center justify-center">
                  <RiCheckLine size={28} color="white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-[20px] font-neue font-medium text-[#1A1A1A] text-center mb-[16px]">
              Listing submitted — pending approval
            </h2>

            {/* Body */}
            <p className="text-[16px] font-neue text-[#1A1A1A] text-center leading-relaxed mb-[16px]">
              Your property has been submitted. Our team will review your owner
              profile and listing before it goes live. This usually takes 24–48 hours.
            </p>

            {/* Email note */}
            <p className="text-[14px] font-neue text-[#6B6B6B] text-center">
              We'll notify you at{" "}
              <span className="text-[#1A1A1A]">{MOCK_USER_EMAIL}</span>{" "}
              once it's approved.
            </p>

          </div>
        </div>
      )}
    </div>
  );
}

export default ListProperty;