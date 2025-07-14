interface HammerLogoProps {
  className?: string;
}

export default function HammerLogo({ className = "w-10 h-10" }: HammerLogoProps) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hammer 1 - Top Left */}
      <path d="M8 6 L14 2 L18 6 L12 10 Z" fill="currentColor"/>
      <path d="M12 10 L16 14 L10 18 L6 14 Z" fill="currentColor"/>
      
      {/* Hammer 2 - Top Right */}
      <path d="M32 6 L26 2 L22 6 L28 10 Z" fill="currentColor"/>
      <path d="M28 10 L24 14 L30 18 L34 14 Z" fill="currentColor"/>
      
      {/* Crossing handles */}
      <rect x="8" y="18" width="24" height="4" rx="2" fill="currentColor" transform="rotate(-45 20 20)"/>
      <rect x="8" y="18" width="24" height="4" rx="2" fill="currentColor" transform="rotate(45 20 20)"/>
    </svg>
  );
}