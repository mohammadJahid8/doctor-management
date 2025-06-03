"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/lib/context";

// Position-specific configurations
const positionConfig = {
  "after-hero": {
    className: "container py-8",
    adTypes: ["banner"],
    probability: 0.8, // 80% chance to show an ad
  },
  "mid-page": {
    className: "container py-8",
    adTypes: ["banner", "square"],
    probability: 0.7,
  },
  "before-footer": {
    className: "container py-8",
    adTypes: ["banner"],
    probability: 0.9,
  },
  sidebar: {
    className: "w-full max-w-[300px] p-4",
    adTypes: ["sidebar"],
    probability: 0.6,
  },
  floating: {
    className:
      "fixed bottom-4 right-4 z-50 w-[300px] shadow-lg rounded-lg overflow-hidden",
    adTypes: ["sidebar", "square"],
    probability: 0.5,
  },
};

interface AdvertisementProps {
  position: keyof typeof positionConfig;
  className?: string;
}

export function Advertisement({ position, className }: AdvertisementProps) {
  const [showAd, setShowAd] = useState(false);
  const { advertisements } = useAppContext();
  const [selectedAd, setSelectedAd] = useState<
    (typeof advertisements)[0] | null
  >(null);
  // console.log("🚀 ~ Advertisement ~ selectedAd:", selectedAd, advertisements);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Determine if we should show an ad based on probability
    const shouldShowAd = Math.random() < positionConfig[position].probability;

    if (shouldShowAd && !dismissed) {
      // Randomly select an ad from the available advertisements
      if (advertisements.length > 0) {
        const randomIndex = Math.floor(Math.random() * advertisements.length);
        setSelectedAd(advertisements[randomIndex]);
        setShowAd(true);
      }
    }
  }, [position, dismissed, advertisements]);

  if (!showAd || !selectedAd || dismissed) {
    return null;
  }

  return (
    <div className={cn(positionConfig[position].className, className)}>
      <div className="relative overflow-hidden rounded-lg border bg-background">
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-10 h-6 w-6 rounded-full bg-background/80"
          onClick={() => setDismissed(true)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close advertisement</span>
        </Button>
        <div className="block">
          <div className="relative">
            <div className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
              Advertisement
            </div>
            <img
              src={selectedAd.image}
              alt={selectedAd.title}
              className="w-full max-h-[400px] h-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{selectedAd.title}</h3>
              <p className="text-sm text-muted-foreground">
                {selectedAd.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
