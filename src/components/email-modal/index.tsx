import React, { useRef, useState, useEffect } from "react";
import { X } from "lucide-react";
import { useClickOutside } from "../../hooks";
import { ModalImage } from '../../assets';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

interface SoundVibeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormValues {
  email: string;
}

// ✅ Yup validation schema
const schema = z.object({
  email: z.string().email("Please enter a valid email"),
});

const SoundVibeModal: React.FC<SoundVibeModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });


  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, modalRef, () => onClose());

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const onSubmit = (data: FormValues) => {
    setIsSubmitted(true);
    setTimeout(() => {
      toast.success(`Welcome, ${data.email}! Your personalized sound experience awaits.`);
      setIsSubmitted(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

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

        {/* Header */}
        <div className="relative h-48 rounded-t-2xl overflow-hidden">
          <img src={ModalImage} alt="Modal" className="absolute inset-0 w-full h-full object-cover" />
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="sm:text-2xl text-xl font-bold text-gray-900 mb-2">
              One Thing before the Vibes Begin
            </h2>
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <span className="italic sm:text-base text-sm">
                Before we drop you into the sound, we need one thing, <b className="text-black">your email.</b> We’ll send you exclusive sound drops and unlock deeper vibes as they arrive. Enter your email to start the experience
              </span>
            </div>
          </div>


          {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className={`w-full px-4 py-3 border rounded-lg outline-none transition-all mb-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mb-4">{errors.email.message}</p>
            )}

          {/* Submit */}
          <button
            onClick={handleSubmit(onSubmit)}
            className="w-full bg-gray-900 cursor-pointer text-white py-4 rounded-lg font-medium sm:text-lg text-base hover:bg-gray-800 transition-colors transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Enter your email to start the experience
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
  );
};

export { SoundVibeModal };
