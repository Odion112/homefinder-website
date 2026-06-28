import { IoCheckmarkCircle } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function NotificationPopup({ message, onClose }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3 rounded-xm bg-[#0E0D0C] w-fit max-w-sm">
      <div className="flex items-center gap-2">
        <IoCheckmarkCircle size={18} color="#0B8A2F" />
        <span className="text-[13px] text-white font-rethink font-regular whitespace-nowrap">
          {message}
        </span>
      </div>
      <button onClick={onClose} className="text-white opacity-60 hover:opacity-100 transition-opacity ml-2">
        <RxCross2 size={14} />
      </button>
    </div>
  );
}