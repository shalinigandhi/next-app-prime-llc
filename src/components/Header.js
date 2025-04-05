import ChangeLanguage from "./ChangeLanguage";

export default function Header() {
  return (
    <div className="container">
      <header className="w-full px-4 py-4 bg-black rounded-[145px] flex justify-between items-center ">
        <img
          src="/images/logo.svg"
          alt="Jobwhee Logo"
          className="w-[108px] h-[17px] md:w-auto md:h-auto"
        />
        <div className="hidden sm:block max-w-7xl mx-auto flex justify-between items-center">
          <nav className="space-x-8 text-white text-base font-semibold">
            <a href="#">Post a Job</a>
            <a href="#">Explore Jobs</a>
            <a href="#">How It Works</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ChangeLanguage />
          <button
            className="py-3 px-9 text-white text-[14px] rounded-[39px] border border-solid font-medium mr-[8px] hidden sm:block"
            style={{ borderColor: "rgba(148, 148, 148, 0.5)" }}
          >
            Sign In
          </button>
          <button className="px-[18px] py-[5px] sm:px-9 sm:py-3 bg-white text-[#020202] text-[14px] rounded-[39px] border border-solid border-[#fff] font-medium">
            Sign Up
          </button>
        </div>
      </header>
    </div>
  );
}
