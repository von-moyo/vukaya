import { SearchIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

interface SearchProps {
  className?: string;
  placeholder: string;
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
        flex items-center bg-[#f7f7f7] px-3.5 py-2 h-[50px]
        ${className}
      `}
      >
        <input
          onChange={(e) => handleChange(e.target.value)}
          value={watch("search")}
          placeholder={placeholder}
          type="search"
          className="
          w-full h-full border-none bg-transparent text-gray-600 font-light text-sm
          focus:outline-none placeholder-[#6f6f6f] placeholder:text-xs sm:placeholder:text-[15px]
        "
        />
        <SearchIcon className="ml-2 h-5 w-5 min-w-[18px] text-[#808080]" />
        {errors.search && <p className="text-red-500 text-sm">{errors.search.message}</p>}
      </div>
    </>

  );
};

export { Search };
