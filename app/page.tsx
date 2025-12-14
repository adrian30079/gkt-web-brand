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
      description: "濃郁中國風，傳統文化典藏(kind of an anti-example)",
      color: "from-orange-700 to-red-600",
      href: "/branding/luxury"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Image
              src="/img/guokuntang-logo-dark.png"
              alt="國坤堂"
              width={400}
              height={100}
              className="h-24 w-auto"
              priority
            />
          </div>
          <p className="text-2xl text-slate-600 mb-2">品牌設計方案</p>
          <p className="text-lg text-slate-500">探索三種獨特的品牌視覺方向</p>
        </div>

        {/* Branding Options Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {brandingOptions.map((option) => (
            <Link key={option.id} href={option.href}>
              <Card className="overflow-hidden cursor-pointer">
                <div className={`h-48 bg-gradient-to-br ${option.color}`} />
                <CardHeader>
                  <CardTitle className="text-2xl">{option.title}</CardTitle>
                  <CardDescription className="text-base">
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
