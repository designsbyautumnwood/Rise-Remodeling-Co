interface RiseLogoSVGProps {
  className?: string;
}

export default function RiseLogoSVG({ className = "w-16 h-16" }: RiseLogoSVGProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hammer handle */}
      <rect
        x="15"
        y="45"
        width="40"
        height="8"
        rx="4"
        transform="rotate(-45 35 49)"
        fill="currentColor"
      />
      
      {/* Hammer head */}
      <rect
        x="48"
        y="20"
        width="20"
        height="8"
        rx="4"
        transform="rotate(-45 58 24)"
        fill="currentColor"
      />
      
      {/* Chisel handle */}
      <rect
        x="45"
        y="15"
        width="40"
        height="8"
        rx="4"
        transform="rotate(45 65 19)"
        fill="currentColor"
      />
      
      {/* Chisel head */}
      <rect
        x="72"
        y="48"
        width="20"
        height="8"
        rx="4"
        transform="rotate(45 82 52)"
        fill="currentColor"
      />
      
      {/* Company name */}
      <text
        x="50"
        y="75"
        textAnchor="middle"
        fontSize="14"
        fontWeight="bold"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        RISE
      </text>
      
      <text
        x="50"
        y="88"
        textAnchor="middle"
        fontSize="8"
        fill="currentColor"
        fontFamily="Arial, sans-serif"
      >
        REMODELING CO.
      </text>
    </svg>
  );
}