
export const Toggle: React.FC<{ isOn: boolean; setIsOn: (value: boolean) => void }> = ({ isOn, setIsOn }) => {
  return (
    <div className="flex items-center justify-center cursor-pointer">
      <button
        onClick={() => setIsOn(!isOn)}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full
          transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer
          ${isOn ? 'bg-purple-500' : 'bg-gray-300'}
        `}
      >
        <span
          className={`
            inline-block h-[19px] w-[19px] transform rounded-full bg-white cursor-pointer
            transition-transform duration-200 ease-in-out
            ${isOn ? 'translate-x-[23px]' : 'translate-x-[2px]'}
          `}
        />
      </button>
    </div>
  );
}