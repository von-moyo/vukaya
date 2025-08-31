import React, { useRef } from "react";
import { useClickOutside } from "../../hooks";

interface ThankYouModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center p-4 z-[9999999]`}>
      <div className="absolute inset-0 bg-black/60" />
      <div ref={modalRef} className={`bg-white rounded-2xl max-w-md w-full max-h-[600px] overflow-y-auto scrollbar-hidden relative py-8 px-6`}>
        <h2 className={`text-gray-900 sm:text-2xl text-xl font-bold mb-2`}>You just felt a hint of what this can do</h2>
        <p className={`text-gray-600 sm:text-base text-sm mb-6`}>
          To unlock every Soundscape Shift, you need two things: the App + The headphones we designed this for
        </p>
        <div className='flex gap-3'>
          <a
            href="https://apps.apple.com/ca/app/vukaya/id6468777028"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { onClose(); }}
            className="bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/80 transition-colors flex items-center w-fit gap-1"
          >
            {/* <IconApple size={16} color="white" /> */}
            <div className="flex flex-col leading-none">
              <span className="">Try the App</span>
            </div>
          </a>
          <a
            href="https://vukaya.com/collections/all"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { onClose(); }}
            className="bg-black text-white px-6 py-4 rounded-lg font-semibold hover:bg-black/80 transition-colors flex items-center w-fit gap-1"
          >
            {/* <Headphones className='w-3.5 h-3.5' /> */}
            <div className="flex flex-col leading-none">
              <span className="">Get the headphones</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export { ThankYouModal };