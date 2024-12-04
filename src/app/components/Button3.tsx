type Button3Props = {
  text: string;
  onClick?: () => void; 
};

function Button3 ({ text, onClick }: Button3Props){
  return (
    <button
      className="px-4 py-2  text-white rounded-xl bg-gradient-to-r from-[#45C287] to-[#3FA4C7] flex"
      onClick={onClick} 
    >
      {text}
      <svg
    className="size-6 mt-0.5"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
    </button>
  );
};

export default Button3;