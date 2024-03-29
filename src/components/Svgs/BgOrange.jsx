
const BgOrange = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={1440}
    height={256}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      fillRule="evenodd"
      d="M1440 167.207C1224.62 223.655 980.573 255.5 722 255.5c-260.175 0-505.644-32.241-722-89.345V0h1440v167.207Z"
      clipRule="evenodd"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0}
        x2={1048.73}
        y1={0}
        y2={787.836}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF6D38" />
        <stop offset={1} stopColor="#DB7A21" />
      </linearGradient>
    </defs>
  </svg>
);
export default BgOrange;
