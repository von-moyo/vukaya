import React, { useRef, useEffect } from "react";
import { X } from "lucide-react";
import { useClickOutside } from "../../hooks";
import { ModalImage } from "../../assets";

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, modalRef, () => onClose());

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999999]">
      <div className="absolute inset-0 bg-black/60" />
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-md w-full max-h-[600px] overflow-y-auto scrollbar-hidden relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="relative h-48 rounded-t-2xl overflow-hidden">
          <img
            src={ModalImage}
            alt="Modal"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="p-6 text-center">
          <h2 className="sm:text-2xl text-xl font-bold text-gray-900 mb-2">
            Welcome to sound designed for elevated minds
          </h2>
          <p className="text-gray-600 italic sm:text-base text-sm mb-6">
            This sound was built for floaters, mood-matchers, and deep feelers
          </p>

          {/* Start Button */}
          <button
            onClick={onClose}
            className="w-full cursor-pointer bg-gray-900 text-white py-4 rounded-lg font-medium sm:text-lg text-base hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Start listening
          </button>
        </div>
      </div>
    </div>
  );
};

export { WelcomeModal };
