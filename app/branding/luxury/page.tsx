import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LuxuryBranding() {
  const colors = [
    { name: "主色", hex: "#FF6B35", description: "橙紅", row: 1 },
    { name: "輔色", hex: "#DC143C", description: "中國紅", row: 1 },
    { name: "輔色", hex: "#4A5899", description: "青藍", row: 1 },
    { name: "強調色", hex: "#D4AF37", description: "金色", row: 1 },
    { name: "點綴色", hex: "#8B4513", description: "棕褐", row: 1 },
    { name: "背景色", hex: "#FFF8F0", description: "米白", row: 2 },
    { name: "背景色", hex: "#FAF5EE", description: "暖白", row: 2 },
    { name: "背景色", hex: "#FDF5E6", description: "古絲綢白", row: 2 },
    { name: "文字色", hex: "#1C1917", description: "深墨", row: 2 },
    { name: "文字色", hex: "#44403C", description: "灰墨", row: 2 }
  ];

  const fonts = [
    { name: "標題字體", font: "Noto Serif TC", weight: "900", example: "中國風韻" },
    { name: "副標題字體", font: "Noto Serif TC", weight: "500", example: "典藏尊貴" },
    { name: "內文字體", font: "Noto Sans TC", weight: "400", example: "傳統文化精粹" }
  ];

  const moodBoardImages = [
    "/img/ref/style-3/16358eb4dfa47659746e10dbbe6f63f8f3a181b86a4460-QUbqBw_fw480webp 1.png",
    "/img/ref/style-3/2b9fb083a46d1d406a553d1e8a549d2074c7d94d4d8f6e-8Cz66S_fw480webp 1.png",
    "/img/ref/style-3/3c5bbf2553c6c69e8c5805e84a2f76d1f3343b0f7e6929-8qPRXZ_fw480webp 1.png",
    "/img/ref/style-3/e19d4503abb107aa7873f14548ee01a3b6cd1d889a381-XOAfdK_fw480webp.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Button variant="ghost">← 返回首頁</Button>
          </Link>
          <h2 className="text-xl font-bold text-orange-900">中國風韻</h2>
          <div className="w-24" />
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <div className="flex justify-center mb-6">
            <Image
              src="/img/guokuntang-logo-dark.png"
              alt="國坤堂"
              width={300}
              height={80}
              className="h-20 w-auto"
              priority
            />
          </div>
          <p className="text-xl text-orange-700 max-w-2xl mx-auto">
            傳承中華傳統文化精髓，以濃郁的中國風色彩語言，
            呈現典藏級的文化底蘊與民族自信，彰顯品牌的獨特魅力與深厚根基。
          </p>
        </section>

        {/* Brand Essence */}
        <Card className="border-stone-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-900">品牌核心</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-800">品牌理念</h3>
              <p className="text-lg text-orange-950">
                以傳統中國文化元素為設計核心，運用鮮明的色彩對比與經典圖騰，
                展現民族文化自信與歷史傳承的厚重感，為品牌注入濃郁的東方韻味。
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-orange-800">核心價值</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-base py-2 px-4">中國風</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">傳統</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">典藏</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">文化</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">自信</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="border-stone-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-900">色彩系統</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.filter(c => c.row === 1).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      className="h-32 rounded-lg shadow-lg border-2 border-stone-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-orange-900">{color.name}</p>
                      <p className="text-sm text-orange-700">{color.description}</p>
                      <p className="text-xs text-orange-600 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {colors.filter(c => c.row === 2).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      className="h-32 rounded-lg shadow-lg border-2 border-stone-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-orange-900">{color.name}</p>
                      <p className="text-sm text-orange-700">{color.description}</p>
                      <p className="text-xs text-orange-600 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-stone-200">
              <p className="text-orange-900">
                <strong>色彩意涵：</strong>
                橙紅與中國紅展現熱情與喜慶，青藍作為輔色形成對比平衡，
                金色彰顯尊貴，傳達濃郁的中國傳統文化氣息與民族自豪感。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="border-stone-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-900">字體系統</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {fonts.map((font, index) => (
              <div key={index} className="border-b border-stone-200 pb-6 last:border-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-orange-800">{font.name}</h3>
                    <p className="text-orange-600">{font.font} · {font.weight}</p>
                  </div>
                </div>
                <p 
                  className="text-5xl text-orange-900"
                  style={{ 
                    fontFamily: font.font,
                    fontWeight: font.weight 
                  }}
                >
                  {font.example}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tone & Voice */}
        <Card className="border-stone-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-900">語調風格</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-orange-800">溝通調性</h3>
                <ul className="space-y-2 text-lg text-orange-950">
                  <li>• 文化自信</li>
                  <li>• 傳統而不守舊</li>
                  <li>• 熱情且積極</li>
                  <li>• 厚重有底蘊</li>
                  <li>• 典雅而喜慶</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-orange-800">文案範例</h3>
                <div className="space-y-4 text-orange-950">
                  <p className="p-4 bg-orange-50 rounded border border-stone-200">
                    「傳承千年中華養生精粹，彰顯東方文化自信」
                  </p>
                  <p className="p-4 bg-orange-50 rounded border border-stone-200">
                    「以中國風韻，詮釋當代養生的文化底蘊」
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mood Board */}
        <Card className="border-stone-200 shadow-xl">
          <CardHeader>
            <CardTitle className="text-3xl text-orange-900">Mood Board</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-950 mb-6">
              典藏中國傳統文化元素、鮮明色彩對比與經典圖騰，作為「中國風韻」視覺語言的設計基調。
            </p>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
              {moodBoardImages.map((src, index) => (
                <div
                  key={src}
                  className="mb-4 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
                  style={{ breakInside: "avoid" }}
                >
                  <Image
                    src={encodeURI(src)}
                    alt={`Luxury mood board ${index + 1}`}
                    width={1200}
                    height={1200}
                    className="h-auto w-full"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-stone-200">
              <p className="text-orange-900">
                <strong>使用建議：</strong>
                從情緒板萃取「中國紅」、「傳統圖騰」、「色彩對比」與「文化符號」，
                並融入品牌主視覺、包裝設計與空間陳設，凸顯品牌的民族文化底蘊與東方魅力。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4">
          <Link href="/">
            <Button size="lg" className="text-lg px-8 bg-orange-900 hover:bg-orange-800">
              返回首頁
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
