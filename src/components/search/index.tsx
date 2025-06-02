import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

interface SearchProps {
  className?: string;
  placeholder: string;
  transparent?: boolean;
  setIsSearchExpanded: (data: boolean) => void;
}

interface SearchPayload {
  search: string;
}

const searchFormSchema = zod.object({
  search: zod.string().min(1, "Search is required"),
});

const Search: React.FC<SearchProps> = ({
  className,
  placeholder,
  transparent,
  setIsSearchExpanded,
}) => {
  const {
    formState: { errors },
    watch,
  } = useForm<SearchPayload>({
    resolver: zodResolver(searchFormSchema),
  });

  const handleChange = (val: string) => {
    console.log(val);
  };

  return (
    <>
      <div
        className={`
        flex items-center rounded-lg border border-gray-300 px-3.5 py-2
        ${className}
        ${transparent ? "bg-transparent" : "bg-white"}
      `}
      >
        <SearchIcon className="mr-2 h-4.5 w-4.5 min-w-[18px] text-gray-500" />
        <input
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsSearchExpanded(true)}
          onBlur={() => {
            setIsSearchExpanded(false);
          }}
          value={watch("search")}
          placeholder={placeholder}
          type="search"
          className="
          w-full h-full border-none bg-transparent text-gray-600 font-light text-sm
          focus:outline-none placeholder-gray-500 placeholder:text-xs sm:placeholder:text-xs
        "
        />
        {errors.search && <p className="text-red-500 text-sm">{errors.search.message}</p>}
      </div>
    </>

  );
};

export { Search };
