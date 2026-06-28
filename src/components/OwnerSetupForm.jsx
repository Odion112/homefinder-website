import { useState, useRef } from "react";
import { RiUploadCloud2Line, RiDeleteBinLine, RiShieldCheckLine, RiFileTextLine } from "react-icons/ri";

function OwnerSetupForm({ onContinue, onCancel, initialData = {} }) {

  // Photo state
  const [photo, setPhoto] = useState(initialData.photo || null);
  // photo = { name, size, previewUrl } | null
  const photoInputRef = useRef(null);

  //  Phone fields 
  const [phone, setPhone] = useState(initialData.phone || "");
  const [whatsapp, setWhatsapp] = useState(initialData.whatsapp || "");

  //  Gov ID state 
  const [govId, setGovId] = useState(initialData.govId || null);
  // govId = { name, size } | null
  const govIdInputRef = useRef(null);


  const [agreed, setAgreed] = useState(initialData.agreed || false);

  const canContinue = photo && phone.trim() && govId && agreed;

  
  function handlePhotoChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setPhoto({
      name: file.name,
      size: formatFileSize(file.size),
      previewUrl: URL.createObjectURL(file),
    });
  }

  function handleGovIdChange(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setGovId({
      name: file.name,
      size: formatFileSize(file.size),
    });
  }

  function handlePhotoDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setPhoto({
      name: file.name,
      size: formatFileSize(file.size),
      previewUrl: URL.createObjectURL(file),
    });
  }

  function handleGovIdDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    setGovId({
      name: file.name,
      size: formatFileSize(file.size),
    });
  }

  function handleContinue() {
    if (!canContinue) return;
    onContinue?.({ photo, phone, whatsapp, govId, agreed });
  }

  return (
    <div className="bg-white border border-[#C6C6C6]/40 shadow-md rounded-[4px] p-[48px] w-full max-w-[900px] mx-auto">

      {/* Heading */}
      <h1 className="text-[28px] font-neue font-roman text-[#1A1A1A] leading-tight mb-[8px]">
        Let's set up your owner profile
      </h1>
      <p className="text-[15px] font-neue text-[#6B6B6B] mb-[36px]">
        Before listing a property, tell us a little about yourself so people can trust who they're contacting.
      </p>

      {/* PHOTO UPLOAD  */}
      <div className="mb-[28px]">
        <p className="text-[14px] font-neue font-roman text-[#1A1A1A] mb-[12px]">
          Upload a clear photo of yourself{" "}
          <span className="font-neue font-roman text-[#6B6B6B]">
            (This helps property seekers recognise verified owners.)
          </span>
        </p>

        {photo ? (
          /* Filled state — photo preview row */
          <div className="flex items-center gap-[16px] border border-[#E8E8E8] rounded-[6px] px-[20px] py-[16px]">
            <img
              src={photo.previewUrl}
              alt="Profile preview"
              className="w-[56px] h-[56px] rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-neue font-roman text-[#1A1A1A] truncate">
                {photo.name || "John Doe"}
              </p>
              <p className="text-[13px] font-neue font-roman text-[#6B6B6B]">
                Photo uploaded · {photo.size}
              </p>
            </div>
            <button
              onClick={() => setPhoto(null)}
              className="text-[#6B6B6B] hover:text-[#E53E3E] transition-colors"
              aria-label="Remove photo"
            >
              <RiDeleteBinLine size={18} />
            </button>
          </div>
        ) : (
          /* Default state — drop zone */
          <div
            onClick={() => photoInputRef.current?.click()}
            onDrop={handlePhotoDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border border-dashed border-[#C6C6C6] rounded-[6px] py-[32px] flex flex-col items-center gap-[8px] cursor-pointer hover:border-accent transition-colors"
          >
            <RiUploadCloud2Line size={28} className="text-[#6B6B6B]" />
            <p className="text-[14px] font-neue text-[#1A1A1A]">
              <span className="font-roman">Choose file</span> or drag and drop
            </p>
            <p className="text-[12px] font-neue text-[#6B6B6B]">
              PDF, JPG, PNG (Max 5MB)
            </p>
          </div>
        )}

        <input
          ref={photoInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          onChange={handlePhotoChange}
        />
      </div>

      {/* PHONE FIELDS  */}
      <div className="grid grid-cols-2 gap-[16px] mb-[28px]">
        <div>
          <label className="block text-[14px] font-neue font-roman text-[#1A1A1A] mb-[8px]">
            Phone number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number here"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-[48px] border border-[#E8E8E8] rounded-[6px] px-[14px] text-[13px] font-neue text-[#1A1A1A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label className="block text-[14px] font-neue font-roman text-[#1A1A1A] mb-[8px]">
            Whatsapp number
          </label>
          <input
            type="tel"
            placeholder="Same as phone number or different"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
            className="w-full h-[48px] border border-[#E8E8E8] rounded-[6px] px-[14px] text-[13px] font-neue text-[#1A1A1A] placeholder:text-[#B0B0B0] focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/*  GOV ID UPLOAD */}
      <div className="mb-[24px]">
        <p className="text-[14px] font-neue font-roman text-[#1A1A1A] mb-[4px]">
          Upload a government ID
        </p>
        <p className="text-[13px] font-neue text-[#6B6B6B] mb-[8px]">
          Upload one valid government-issued ID to help us confirm your identity and improve trust on the platform.
        </p>
        <ul className="list-disc list-inside mb-[14px] space-y-[2px]">
          {["National ID", "Voter's card", "Driver's license", "International passport"].map((item) => (
            <li key={item} className="text-[13px] font-neue text-[#6B6B6B]">
              {item}
            </li>
          ))}
        </ul>

        {govId ? (
          /* Filled state — file row */
          <div className="flex items-center gap-[14px] border border-[#E8E8E8] rounded-[6px] px-[20px] py-[14px]">
            <div className="w-[36px] h-[36px] rounded-[6px] bg-[#F5F5F5] flex items-center justify-center flex-shrink-0">
              <RiFileTextLine size={18} className="text-[#6B6B6B]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-neue font-roman text-[#1A1A1A] truncate">
                {govId.name}
              </p>
              <p className="text-[12px] font-neue text-[#6B6B6B]">
                Uploaded · {govId.size}
              </p>
            </div>
            <button
              onClick={() => setGovId(null)}
              className="text-[#6B6B6B] hover:text-[#E53E3E] transition-colors"
              aria-label="Remove ID"
            >
              <RiDeleteBinLine size={18} />
            </button>
          </div>
        ) : (
          /* Default state — drop zone */
          <div
            onClick={() => govIdInputRef.current?.click()}
            onDrop={handleGovIdDrop}
            onDragOver={(e) => e.preventDefault()}
            className="border border-dashed border-[#C6C6C6] rounded-[6px] py-[32px] flex flex-col items-center gap-[8px] cursor-pointer hover:border-accent transition-colors"
          >
            <RiUploadCloud2Line size={28} className="text-[#6B6B6B]" />
            <p className="text-[14px] font-neue text-[#1A1A1A]">
              <span className="font-roman">Choose file</span> or drag and drop
            </p>
            <p className="text-[12px] font-neue text-[#6B6B6B]">
              PDF, JPG, PNG (Max 5MB)
            </p>
          </div>
        )}

        <input
          ref={govIdInputRef}
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          className="hidden"
          onChange={handleGovIdChange}
        />
      </div>

     
      <div className="bg-[#0B8A2F]/4 rounded-[6px] px-[20px] py-[14px] mb-[24px]">
        <div className="flex items-start gap-[10px]">
          <RiShieldCheckLine size={18} className="text-[#0B8A2F] mt-[1px] flex-shrink-0" />
          <div>
            <p className="text-[13px] font-neue font-roman text-[#1A1A1A] mb-[4px]">
              Your information is safe with us
            </p>
            <p className="text-[12px] font-neue text-[#6B6B6B] leading-relaxed">
              Your ID is only used for verification and will never be shared publicly. Only your profile photo
              and the contact details you choose to display on your listing will be visible to property seekers.
            </p>
          </div>
        </div>
      </div>

   
      <div className="flex items-start gap-[10px] mb-[36px]">
        <button
          onClick={() => setAgreed((prev) => !prev)}
          className={`w-[18px] h-[18px] rounded-[4px] border flex-shrink-0 mt-[1px] flex items-center justify-center transition-colors ${
            agreed ? "bg-accent border-accent" : "bg-white border-[#C6C6C6]"
          }`}
          aria-checked={agreed}
          role="checkbox"
        >
          {agreed && (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path
                d="M1 4L3.5 6.5L9 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
        <p className="text-[13px] font-neue text-[#4A4A4A] leading-relaxed">
          I understand and agree that my ID will only be used for verification and will not be shared publicly.
          Only my profile photo will be visible to property seekers.
        </p>
      </div>

 <div className="border-t border-[#c6c6c6]/40 mt-4 pt-4 flex gap-3"></div>

      {/*  BUTTONS */}
      <div className="flex items-center justify-end gap-[12px]">
        <button
          onClick={onCancel}
          className="h-[46px] px-[28px] border border-[#E8E8E8] rounded-[6px] text-[14px] font-rethink font-medium text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={handleContinue}
          disabled={!canContinue}
          className={`h-[46px] px-[28px] rounded-[6px] text-[14px] font-rethink font-medium flex items-center gap-[8px] transition-colors ${
            canContinue
              ? "bg-accent text-white hover:bg-[#e56e00]"
              : "bg-[#E8E8E8] text-[#B0B0B0] cursor-not-allowed"
          }`}
        >
          Continue
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 8H13M13 8L9 4M13 8L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

    </div>
  );
}

function formatFileSize(bytes) {
  if (bytes >= 1_000_000) return `${(bytes / 1_000_000).toFixed(1)} MB`;
  if (bytes >= 1_000) return `${Math.round(bytes / 1_000)} KB`;
  return `${bytes} B`;
}

export default OwnerSetupForm;