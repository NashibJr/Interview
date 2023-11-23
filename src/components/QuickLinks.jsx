import React from "react";
import QuickLinkComponent from "./QuickLinkComponent";
import { TbDiscount } from "react-icons/tb";
import { FaVirusCovid } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { TbHotelService } from "react-icons/tb";

const QuickLinks = () => {
  return (
    <div className="mt-10 flex w-full overflow-x-scroll hide-scrollbar">
      <QuickLinkComponent
        label="Get Best Prices"
        text="Pay through our application and save thousands and get amazing rewards"
        icon={<TbDiscount size={30} className="mx-auto text-[dodgerblue]" />}
      />
      <QuickLinkComponent
        label="Covide Safe"
        text="We have all the curated hotels that have all the precaution for covid safe envoironment"
        icon={<FaVirusCovid size={30} className="mx-auto text-[dodgerblue]" />}
      />
      <QuickLinkComponent
        label="Flexible Payment"
        text="Enjoy the flexible payment through or app and get rewards on every payment"
        icon={
          <MdOutlinePayment size={30} className="mx-auto text-[dodgerblue]" />
        }
      />
      <QuickLinkComponent
        label="Find the best near you"
        text="Find the best hotels and places near you in a single click"
        icon={
          <TbHotelService size={30} className="mx-auto text-[dodgerblue]" />
        }
      />
    </div>
  );
};

export default QuickLinks;
