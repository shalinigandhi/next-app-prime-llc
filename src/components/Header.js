import ChangeLanguage from "./ChangeLanguage";

export default function Header() {
  const buttonClasses =
    "lg:py-3 lg:px-9 text-white text-[12px] lg:text-[14px] rounded-[39px] border border-solid font-medium mr-[8px] hidden sm:block md:p-0 md:min-w-[100px] md:min-h-[40px] lg:p-auto lg:min-w-0 lg:min-h-0";
  const signUpButtonClasses =
    "py-2 px-4 lg:py-3 lg:px-9 bg-white text-[#020202] text-[12px] lg:text-[14px] rounded-[39px] border border-solid border-[#fff] font-medium md:p-0 md:min-w-[100px] md:min-h-[40px] lg:p-auto lg:min-w-0 lg:min-h-0";
  const menuButtonClasses =
    "w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center md:hidden ml-[8px]";
  const navClasses =
    "md:space-x-4 lg:space-x-8 text-white text-[12px] lg:text-base font-semibold";

  return (
    <div className="container">
      <header className="w-full px-4 py-4 bg-black rounded-[145px] flex justify-between items-center">
        <img
          src="/images/logo.svg"
          alt="Jobwhee Logo"
          className="w-[108px] h-[17px] lg:w-auto lg:h-auto"
        />
        <div className="hidden sm:block max-w-7xl mx-auto flex justify-between items-center">
          <nav className={navClasses}>
            <a href="#">Post a Job</a>
            <a href="#">Explore Jobs</a>
            <a href="#">How It Works</a>
          </nav>
        </div>
        <div className="flex items-center">
          <ChangeLanguage />
          <button
            className={buttonClasses}
            style={{ borderColor: "rgba(148, 148, 148, 0.5)" }}
          >
            Sign In
          </button>
          <button className={signUpButtonClasses}>Sign Up</button>
          <button className={menuButtonClasses}>
            <img src="/images/menu.svg" />
          </button>
        </div>
      </header>
    </div>
  );
}
