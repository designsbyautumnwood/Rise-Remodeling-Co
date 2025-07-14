import hammerLogoImage from "@assets/image_1752452083939.png";

interface HammerLogoProps {
  className?: string;
}

export default function HammerLogo({ className = "w-10 h-10" }: HammerLogoProps) {
  return (
    <img 
      src={hammerLogoImage} 
      alt="Rise Remodeling Co. Hammer Logo" 
      className={className}
    />
  );
}