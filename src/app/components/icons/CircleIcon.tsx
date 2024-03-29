interface CircleProps {
  size: string;
}

export const CircleIcon: React.FC<CircleProps> = ({ size }) => {
  return (
    <>
      <svg
        fill="#ffffff"
        version="1.1"
        className={`w-${size} h-${size}`}
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 330 330"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            id="XMLID_520_"
            d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.982,0,165,0z M165,300 C90.561,300,30,239.44,30,165S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z"
          ></path>{" "}
        </g>
      </svg>
    </>
  );
};
