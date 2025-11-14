import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";

const home = () => {
  return (
    <div>
      <Header />
      <div className="px-5 space-y-4">
        <SearchInput />
        <Image
          src={banner}
          alt="Banner"
          sizes="100vw"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};
export default home;
