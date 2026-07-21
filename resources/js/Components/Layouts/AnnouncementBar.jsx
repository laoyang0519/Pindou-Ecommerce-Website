import React from 'react';
import { Sparkles, Truck, Heart } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="bg-brand-oilGreen text-white text-xs py-2.5 px-4 font-semibold shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-pinkSalt animate-pulse" />
          <span>Welcome to 呼啦の小铺 – 满RM30半包邮！满RM50全马包邮！🎁</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-brand-pinkSalt-100">
          <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5" /> Fast Dispatch in 24h</span>
          <span>•</span>
          <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5 text-brand-pinkSalt" /> 100% Non-Toxic EVA Beads</span>
        </div>
      </div>
    </div>
  );
}
