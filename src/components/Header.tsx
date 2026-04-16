import headerArr from "../assets/icons/header_arrow.svg";

function Header() {
  return (
    <header className="flex items-center h-[48px] px-[24px] bg-base">
      <ul className="flex gap-[8px] mr-[6px]">
        <li className="w-[12px] h--12px] bg-[#ff5f56] rounded-full"></li>
        <li className="w-[12px] h-[12px] bg-[#ffbd2e] rounded-full"></li>
        <li className="w-[12px] h-[12px] bg-[#27c93f] rounded-full"></li>
      </ul>

      <div className="flex gap-[10px] items-center h-[40px] px-[6px] py-[10px] mt-[8px] bg-surface rounded-t-[10px]">
        <img src={headerArr} />
        <h1 className="text-[19.4px] tracking-[-0.52px] font-bold text-main">
          JOARA_PORTFOLIO.dev
        </h1>
      </div>
    </header>
  );
}

export default Header;
