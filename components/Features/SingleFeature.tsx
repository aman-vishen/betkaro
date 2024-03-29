import { Feature } from "@/types/feature";
import Image from "next/image";


const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, image } = feature;
  return (
    <div className="w-full">
    
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* <div className="mb-10 flex h-[170px] w-[170px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"> */}
        <div className="mb-6 flex h-[200px] w-[250px] items-center justify-center">
          {/* {icon} */}
          <Image src={image} alt="online betting id" width={250} height={200} style={{position:"absolute"}} />
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
