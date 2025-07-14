import { TrendingUp, Users, Clock, MapPin } from "lucide-react";

export default function QuickStats() {
  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 text-green-400" />,
      number: "300+",
      label: "Projects Completed",
      color: "text-green-400"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      number: "20+",
      label: "Years Experience",
      color: "text-blue-400"
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      number: "5 Star",
      label: "Customer Rating",
      color: "text-purple-400"
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-400" />,
      number: "Licensed",
      label: "& Insured",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-slate-900 to-slate-800 border-y border-blue-500/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-3">
              {stat.icon}
            </div>
            <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
              {stat.number}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}