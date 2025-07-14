import textLogoImage from "@assets/image_1752452104940.png";

interface TextLogoProps {
  className?: string;
}

export default function TextLogo({ className = "h-8" }: TextLogoProps) {
  return (
    <img 
      src={textLogoImage} 
      alt="Rise Remodeling Co." 
      className={className}
    />
  );
}