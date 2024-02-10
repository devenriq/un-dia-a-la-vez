const DownChevron = ({ color = "#000", width = 16, height = 10 }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 16 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <style>
        {`.cls-1 {
            fill: none;
            stroke: ${color};
          }`}
      </style>
      <path
        d="M15 1L8.75258 8.13991C8.35416 8.59524 7.64583 8.59524 7.24742 8.13991L1 1"
        className="cls-1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownChevron;