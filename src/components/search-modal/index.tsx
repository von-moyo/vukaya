import { SearchIcon, X } from "lucide-react";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useClickOutside } from "../../hooks";

interface SearchProps {
  className?: string;
  placeholder?: string;
}

interface SearchPayload {
  search: string;
}

const searchFormSchema = zod.object({
  search: zod.string().min(1, "Search is required"),
});

const SearchModal: React.FC<SearchProps> = ({
  className = "",
  placeholder = "Find our product",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const {
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm<SearchPayload>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: {
      search: "",
    },
  });

  // Use the click outside hook to close modal
  useClickOutside(modalRef, buttonRef, () => setIsModalOpen(false));

  const handleSearchIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    reset(); // Clear the form when closing
  };

  const handleChange = (val: string) => {
    console.log(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const searchValue = watch("search");
    if (searchValue?.trim()) {
      console.log("Searching for:", searchValue);
      // Add your search logic here
    }
  };

  return (
    <>
      {/* Search Icon Trigger */}
      <button
        ref={buttonRef}
        onClick={handleSearchIconClick}
        className={`rounded-md transition-colors cursor-pointer ${className}`}
        aria-label="Open search"
      >
        <SearchIcon className="h-5 w-5 text-[#808080] ml-auto" />
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60" />
          
          {/* Modal Content */}
          <div
            ref={modalRef}
            className="relative w-full bg-white overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-center p-6 pb-4 pt-20">
              <h2 className="text-2xl font-semibold text-center text-[#333333]">
                What are you looking for?
              </h2>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors absolute top-6 right-6"
                aria-label="Close search"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {/* Search Form */}
            <form onSubmit={handleSubmit} className="px-22 pb-6">
              <div className="relative">
                <div className="flex items-center px-4 py-3 border border-[#8080804D] transition-colors">
                  <input
                    {...register("search")}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder={placeholder}
                    type="search"
                    autoFocus
                    className="w-full bg-transparent text-gray-900 font-light text-base focus:outline-none placeholder-[#6f6f6f]"
                  />
                  <button
                    type="submit"
                    className="ml-3 rounded-md transition-colors"
                  >
                    <SearchIcon className="h-5 w-5 text-[#808080]" />
                  </button>
                </div>
                
                {errors.search && (
                  <p className="text-red-500 text-sm mt-2 px-1">
                    {errors.search.message}
                  </p>
                )}
              </div>

              {/* Quick actions or suggestions could go here */}
              <div className="mt-4 text-sm text-gray-500">
                <p>Press Enter to search or click the search icon</p>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export { SearchModal };