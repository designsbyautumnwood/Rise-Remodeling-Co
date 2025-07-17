interface RiseLogoSVGProps {
  className?: string;
}

export default function RiseLogoSVG({ className = "w-16 h-16" }: RiseLogoSVGProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hammer - positioned diagonally from bottom-left to top-right */}
      <g transform="rotate(-45 32 32)">
        {/* Hammer handle */}
        <rect x="20" y="30" width="24" height="4" rx="2" fill="currentColor" />
        {/* Hammer head */}
        <rect x="42" y="26" width="12" height="12" rx="2" fill="currentColor" />
        {/* Hammer claw */}
        <path d="M18 28 L22 32 L18 36 L14 32 Z" fill="currentColor" />
      </g>
      
      {/* Chisel - positioned diagonally from top-left to bottom-right */}
      <g transform="rotate(45 32 32)">
        {/* Chisel handle */}
        <rect x="20" y="30" width="24" height="4" rx="2" fill="currentColor" />
        {/* Chisel head/blade */}
        <rect x="42" y="28" width="8" height="8" rx="1" fill="currentColor" />
        {/* Chisel tip */}
        <polygon points="50,30 54,32 50,34" fill="currentColor" />
      </g>
    </svg>
  );
}