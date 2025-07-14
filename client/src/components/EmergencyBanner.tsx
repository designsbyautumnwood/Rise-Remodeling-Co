import { AlertCircle, Phone } from "lucide-react";

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 border border-blue-500/30 backdrop-blur-sm">
      <div className="container-padding py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-blue-400 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-blue-200">
              Need a Quote? Call for Your Free Estimate
            </span>
          </div>
          <a
            href="tel:8032038664"
            className="inline-flex items-center px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 text-blue-200 rounded-lg transition-all duration-300 text-sm font-medium"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}