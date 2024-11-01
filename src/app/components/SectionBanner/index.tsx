import Prato from "../../../../public/prato.svg";
import Image from "next/image";

export const SectionBanner = () => {
  return (
    <div className="grid grid-cols-subgrid col-span-full">
      <h1 className="text-[64px] col-start-1 col-end-6 font-bold">
        Cooking Made Fun And Easy: Unleash Your Inner Chef
      </h1>
      <p className="row-span-2 col-start-1 col-end-5 text-[#7F7D7D]">
        Discover more than<span className="text-tertiary"> 10,000 recipes</span>
        in your hand with the best recipe. Help you to find the easiest way to
        cook.
      </p>
      <button className="mt-14 p-6 rounded-lg bg-tertiary row-span-1 col-start-1 col-end-3  text-white font-semibold text-">
        Explore Recipes
      </button>

      <Image
        src={Prato}
        width={658}
        height={590}
        content="fill"
        alt={"teste"}
        className="col-start-7 col-end-12 row-span-full"
      />
    </div>
  );
};
