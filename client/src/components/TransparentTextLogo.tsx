interface TransparentTextLogoProps {
  className?: string;
}

export default function TransparentTextLogo({ className = "h-8" }: TransparentTextLogoProps) {
  return (
    <svg className={className} viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* RISE text */}
      <text x="0" y="35" fontFamily="Inter, Arial, sans-serif" fontSize="28" fontWeight="700" fill="currentColor" letterSpacing="1px">
        RISE
      </text>
      
      {/* REMODELING CO. text */}
      <text x="0" y="55" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="500" fill="currentColor" letterSpacing="3px">
        REMODELING CO.
      </text>
    </svg>
  );
}