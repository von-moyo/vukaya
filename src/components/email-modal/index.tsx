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
        className="bg-white rounded-2xl max-w-md w-full max-h-[500px] overflow-y-auto scrollbar-hidden relative"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              What's your Sound Vibe?
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Headphones className="w-5 h-5" />
              <span className="italic">
                Discover EQ soundscapes that match your mood in under 3 secs
              </span>
            </div>
          </div>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all mb-6"
            required
          />

          {/* Vibe */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What's your current vibe?
          </h3>
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="vibe"
                value="calm"
                checked={selectedVibe === "calm"}
                onChange={(e) => setSelectedVibe(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-2xl">🌿</span>
              <span className="text-gray-700">Calm & grounded</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="vibe"
                value="energized"
                checked={selectedVibe === "energized"}
                onChange={(e) => setSelectedVibe(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-2xl">🔥</span>
              <span className="text-gray-700">Energized & upbeat</span>
            </label>
          </div>

          {/* Need */}
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            What do you need most from your sound today?
          </h3>
          <div className="space-y-3 mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="need"
                value="focus"
                checked={selectedNeed === "focus"}
                onChange={(e) => setSelectedNeed(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-2xl">🎯</span>
              <span className="text-gray-700">Focus & clarity</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="need"
                value="rest"
                checked={selectedNeed === "rest"}
                onChange={(e) => setSelectedNeed(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-2xl">🌙</span>
              <span className="text-gray-700">Rest & recovery</span>
            </label>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full bg-gray-900 text-white py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Experience Your Sound
          </button>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-4 space-y-1">
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
