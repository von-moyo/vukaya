import React, { useRef, useState, useEffect } from "react";
import { Headphones, Volume2, X } from "lucide-react";
import { useClickOutside } from "../../hooks";

const SoundVibeModal: React.FC = () => {
  const [email, setEmail] = useState("");
  const [selectedVibe, setSelectedVibe] = useState("");
  const [selectedNeed, setSelectedNeed] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailModalOpen, setEmailModalOpen] = useState(true);

  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close modal when clicking outside
  useClickOutside(modalRef, modalRef, () => setEmailModalOpen(false));

  // Close modal on Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEmailModalOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const handleSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        alert("Welcome to your personalized sound experience!");
        setIsSubmitted(false);
        setEmailModalOpen(false);
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-gray/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center">
          <div className="animate-spin w-8 h-8 border-3 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-800">
            Crafting your sound profile...
          </h3>
          <p className="text-gray-600 mt-2">
            Get ready for an amazing audio experience!
          </p>
        </div>
      </div>
    );
  }

  return emailModalOpen ? (
    <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999999]">
      <div className="absolute inset-0 bg-black/60" />
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-md w-full max-h-[600px] overflow-y-auto scrollbar-hidden relative"
      >
        {/* Close button */}
        <button
          onClick={() => setEmailModalOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-t-2xl overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Headphones className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
                <Volume2 className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="sm:text-2xl text-xl font-bold text-gray-900 mb-2">
              Try Out Our Mobile App Demo!
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="italic sm:text-base text-sm">
                Experience different EQs and soundscapes instantly  <br /> We just need your email to get started.
              </span>
            </div>
          </div>


          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-0  outline-none transition-all mb-6"
            required
          />

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-900 cursor-pointer text-white py-4 rounded-lg font-medium sm:text-lg text-base hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Experience Your Sound
          </button>

          {/* Footer */}
          <div className="text-center sm:text-xs text-[10px] text-gray-500 mt-4 space-y-1">
            <p>
              By signing up, you agree to receive updates about new EQ presets.
            </p>
            <p>View our privacy policy and terms of service for more info.</p>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export { SoundVibeModal };
