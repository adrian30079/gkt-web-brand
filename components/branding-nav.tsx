"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

interface BrandingNavProps {
  currentBranding: "classic" | "modern" | "luxury";
}

export function BrandingNav({ currentBranding }: BrandingNavProps) {
  const pathname = usePathname();
  
  const brandingOptions = [
    {
      id: "classic",
      title: "自然水墨",
      href: "/branding/classic"
    },
    {
      id: "modern",
      title: "現代養生",
      href: "/branding/modern"
    },
    {
      id: "luxury",
      title: "中國風韻",
      href: "/branding/luxury"
    }
  ];

  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
          {/* Back button - left side on desktop */}
          <div className="flex justify-between sm:block">
            <Link href="/">
              <Button variant="ghost" size="sm" className="sm:size-default">
                ← 返回首頁
              </Button>
            </Link>
          </div>
          
          {/* Tabs - center on desktop, full width on mobile */}
          <div className="flex gap-1 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
            {brandingOptions.map((option) => {
              const isActive = currentBranding === option.id;
              return (
                <Link 
                  key={option.id} 
                  href={option.href}
                  className={isActive ? "pointer-events-none" : ""}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className={`whitespace-nowrap text-sm sm:text-base ${
                      isActive ? "cursor-default" : ""
                    }`}
                    disabled={isActive}
                  >
                    {option.title}
                  </Button>
                </Link>
              );
            })}
          </div>
          
          {/* Spacer for desktop layout balance */}
          <div className="hidden sm:block w-24" />
        </div>
      </div>
    </nav>
  );
}
