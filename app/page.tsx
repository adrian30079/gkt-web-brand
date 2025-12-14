import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  const brandingOptions = [
    {
      id: "classic",
      title: "自然水墨",
      description: "中國傳統水墨美學，不規則流動設計",
      color: "from-stone-600 to-stone-400",
      href: "/branding/classic"
    },
    {
      id: "modern",
      title: "現代養生",
      description: "現代空間美學，簡約健康生活",
      color: "from-stone-700 to-stone-500",
      href: "/branding/modern"
    },
    {
      id: "luxury",
      title: "中國風韻",
      description: "濃郁中國風，傳統文化典藏",
      color: "from-orange-700 to-red-600",
      href: "/branding/luxury"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="flex justify-center mb-2 sm:mb-4">
            <Image
              src="/img/guokuntang-logo-dark.png"
              alt="國坤堂"
              width={600}
              height={200}
              className="h-20 sm:h-28 lg:h-32 w-auto"
              priority
            />
          </div>
          <p className="text-xl sm:text-2xl text-slate-600 mb-2 px-4">品牌設計方案</p>
          <p className="text-base sm:text-lg text-slate-500 px-4">探索三種獨特的品牌視覺方向</p>
        </div>

        {/* Branding Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {brandingOptions.map((option) => (
            <Link key={option.id} href={option.href}>
              <Card className="overflow-hidden cursor-pointer transition-transform hover:scale-[1.02]">
                <div className="relative h-48 sm:h-56 md:h-48 lg:h-56">
                  <Image
                    src={`/img/cover/cover-${option.id === 'classic' ? '1-自然水墨' : option.id === 'modern' ? '2-現代養生' : '3-中國風韻'}.png`}
                    alt={option.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">{option.title}</CardTitle>
                  <CardDescription className="text-sm sm:text-base">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" size="lg">
                    查看詳情
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}

      </div>
    </div>
  );
}
