import { useState } from "react";
import { ToggleIcon } from "./ToggleArrow";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start gap-[7px] text-[17px] font=regular text-main group-hover:text-point text-left transition-colors cursor-pointer"
      >
        <ToggleIcon
          className={`w-[12px] h-[16px] mt-[5px] transition-all duration-300 
          ${isOpen ? "rotate-90" : ""} 
          fill-current`}
        />
        {title}
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="text-[14px] font=regular text-main pt-[10px] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
