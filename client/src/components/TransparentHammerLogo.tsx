interface TransparentHammerLogoProps {
  className?: string;
}

export default function TransparentHammerLogo({ className = "w-10 h-10" }: TransparentHammerLogoProps) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hammer 1 - Top left */}
      <path d="M35 20 L50 10 L65 20 L50 35 Z" fill="currentColor"/>
      <path d="M50 35 L65 50 L45 70 L30 55 Z" fill="currentColor"/>
      
      {/* Hammer 2 - Top right */}
      <path d="M85 20 L70 10 L55 20 L70 35 Z" fill="currentColor"/>
      <path d="M70 35 L55 50 L75 70 L90 55 Z" fill="currentColor"/>
      
      {/* Crossing handles */}
      <rect x="25" y="57" width="70" height="8" rx="4" fill="currentColor" transform="rotate(-45 60 61)"/>
      <rect x="25" y="57" width="70" height="8" rx="4" fill="currentColor" transform="rotate(45 60 61)"/>
    </svg>
  );
}