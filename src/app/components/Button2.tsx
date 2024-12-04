
interface type{
  text:string
  onClick?: () => void;
}

const Button62 = ({text, onClick}: type) => {
  return (
<button
  className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:shadow-gray-600/50 border border-white/20"
  onClick={onClick}
>
  <span className="text-lg">{text}</span>
  <div
    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
  >
    <div className="relative h-full w-10 bg-white/20"></div>
  </div>
</button>

  );
};

export default Button62;