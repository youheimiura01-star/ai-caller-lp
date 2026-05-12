import type { Stat } from "@/lib/types";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {stat.value}
      </div>
      <div className="text-lg font-semibold text-white mb-1">
        {stat.label}
      </div>
      <div className="text-sm text-white/70">{stat.description}</div>
    </div>
  );
}
