
const Footer = () => {
  return <div className="w-full p-6 bg-[#041226] text-white rounded-lg shadow-lg flex flex-col items-center h-[100%]">
    <div className="flex flex-wrap justify-center mb-6">
      <span className="cursor-pointer hover:text-blue-400 mx-2">Terms Of Use</span>
      <span className="cursor-pointer hover:text-blue-400 mx-2">Privacy Policy</span>
      <span className="cursor-pointer hover:text-blue-400 mx-2">About</span>
      <span className="cursor-pointer hover:text-blue-400 mx-2">Blog</span>
      <span className="cursor-pointer hover:text-blue-400 mx-2">FAQ</span>
    </div>
    <p className="mb-6 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
    <div className="flex justify-center">
      <i className=" cursor-pointer fa-brands fa-facebook-f text-white hover:text-blue-400 text-xl mx-2"></i>
      <i className=" cursor-pointer fa-brands fa-instagram text-white hover:text-blue-400 text-xl mx-2"></i>
      <i className=" cursor-pointer fa-brands fa-github text-white hover:text-blue-400 text-xl mx-2"></i>
      <i className=" cursor-pointer fa-brands fa-linkedin text-white hover:text-blue-400 text-xl mx-2"></i>
    </div>
  </div>



};

export default Footer;
