/* List a Property page for returning owners who have already completed
 owner setup. They land here directly — no progress bar, no Step 1.

Route: /list-property  (when role === "owner" && ownerProfileComplete === true)

Differences from ListPropertyPage:
No progress bar — breadcrumb instead
Owner navbar (Properties + My Listings + avatar)
No back arrow inside the form heading
 Contact details section visible and pre-filled from their profile */

import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ListPropertyForm from "../../components/listing/ListPropertyForm";
import ConfirmDialog from "../../components/ConfirmDialog";

function ExistingOwnerList() {
  const navigate = useNavigate();

  const role = "owner";

  const ownerProfile = {
    phone: "+234 801 234 5678",
    whatsapp: "+234 801 234 5678",
  };

  const [showLeaveDialog, setShowLeaveDialog] = useState(false);
  const [pendingDestination, setPendingDest]  = useState(null);

  // ── Leave guard ──────────────────────────────────────────────────────────
  function requestLeave(destination = "/properties") {
    setPendingDest(destination);
    setShowLeaveDialog(true);
  }

  function handleLeaveConfirm() {
    setShowLeaveDialog(false);
    navigate(pendingDestination || "/properties");
  }

  function handleLeaveCancel() {
    setShowLeaveDialog(false);
    setPendingDest(null);
  }

  // ── Publish ──────────────────────────────────────────────────────────────
  function handlePublish(formData) {
    // TODO: POST formData to backend
    console.log("New listing data:", formData);
    // Pass toast flag to PropertiesPage via router state
    navigate("/properties", { state: { showListingToast: true } });
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-[150px] pb-[30px] pt-[55px]">
        <div className="flex items-center gap-[8px]">
          <button
            onClick={() => requestLeave("/properties")}
            className="text-[#6B6B6B] hover:text-accent transition-colors"
            aria-label="Go back"
          >
            <RiArrowLeftLine size={16} />
          </button>
          {/* Link intercepted — triggers leave guard instead of navigating directly */}
          <button
            onClick={() => requestLeave("/properties")}
            className="text-[14px] font-rethink text-[#6B6B6B] hover:text-accent transition-colors"
          >
            Properties
          </button>
          <span className="text-[14px] font-rethink text-[#C6C6C6]">/</span>
          <span className="text-[14px] font-rethink font-medium text-[#1A1A1A]">
            List property
          </span>
        </div>
      </div>

      <main className="flex-1 px-[20px] py-[20px] pb-[120px]">
        <ListPropertyForm
          onPublish={handlePublish}
          onCancel={() => requestLeave("/properties")}
          showBackArrow={false}
          showContactDetails={true}
          initialData={{
            phone: ownerProfile.phone,
            whatsapp: ownerProfile.whatsapp,
          }}
        />
      </main>

      <Footer />

      {/* ── Leave listing dialog ───────────────────────────────────────── */}
      {showLeaveDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <ConfirmDialog className="!h-90"
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
    </div>
  );
}

export default ExistingOwnerList;