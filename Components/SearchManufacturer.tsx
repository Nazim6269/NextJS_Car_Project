import { SearchManufacturerProps } from "@/types";
import { Combobox } from "@headlessui/react";
import Image from "next/image";

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px] ">
            <Image src="/car-logo.svg" alt="car-logo" width={20} height={20} />
          </Combobox.Button>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
