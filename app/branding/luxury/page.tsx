import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrandingNav } from "@/components/branding-nav";

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
    { name: "標題字體", font: "Noto Serif TC", weight: "900", example: "冬蟲夏草", size: "text-3xl sm:text-4xl md:text-5xl" },
    { name: "內文字體1", font: "Noto Sans TC", weight: "500", example: "國坤堂是專注冬蟲夏草，致力於打造野生冬蟲夏草第一品牌。", size: "text-xl" },
    { name: "內文字體2", font: "Noto Sans TC", weight: "400", example: "冬蟲夏草乃中國傳統名貴中藥材，素有軟黃金之美譽，產自青藏高原海拔三千米以上之高寒地帶，冬為蟲、夏為草，珍稀難得。其性甘平，入肺腎二經，能補肺益腎、止咳化痰、秘精益氣調節體質，歷來與人參、鹿茸並列三大滋補上品。選用優質冬蟲夏草，滋養身心，延年益壽，實為養生首選！", size: "text-lg" }
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
      <BrandingNav currentBranding="luxury" />

      <div className="container xl:max-w-6xl lg:max-w-6xl md:max-w-4xl sm:max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center mb-4 sm:mb-6">
            <Image
              src="/img/guokuntang-logo-dark.png"
              alt="國坤堂"
              width={300}
              height={80}
              className="h-16 sm:h-20 w-auto"
              priority
            />
          </div>
          {/* <p className="text-lg sm:text-xl text-orange-700 max-w-2xl mx-auto px-4">
            傳承中華傳統文化精髓，以濃郁的<strong className="font-bold text-orange-900">中國風韻</strong>色彩語言，
            呈現典藏級的文化底蘊與民族自信，彰顯品牌的獨特魅力與深厚根基。
          </p> */}
        </section>

        {/* Brand Essence */}
        <Card className="border-stone-200 shadow-xl py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900">中國風韻</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-800">理念</h3>
              <p className="text-base sm:text-lg text-orange-950">
                以傳統中國文化元素為設計核心，運用鮮明的色彩對比與經典圖騰，
                展現民族文化自信與歷史傳承的厚重感，為品牌注入濃郁的東方韻味。
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-orange-800">核心價值</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">中國風</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">傳統</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">典藏</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">文化</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">自信</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="border-stone-200 shadow-xl py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900">色彩系統</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12">
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {colors.filter(c => c.row === 1).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      className="h-24 sm:h-28 md:h-32 rounded-lg shadow-lg border-2 border-stone-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-orange-900 text-sm sm:text-base">{color.name}</p>
                      <p className="text-xs sm:text-sm text-orange-700">{color.description}</p>
                      <p className="text-xs text-orange-600 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
                {colors.filter(c => c.row === 2).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      className="h-24 sm:h-28 md:h-32 rounded-lg shadow-lg border-2 border-stone-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-orange-900 text-sm sm:text-base">{color.name}</p>
                      <p className="text-xs sm:text-sm text-orange-700">{color.description}</p>
                      <p className="text-xs text-orange-600 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="border-stone-200 shadow-xl py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900">字體系統</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12 space-y-4 sm:space-y-6">
            {fonts.map((font, index) => (
              <div key={index} className="border-b border-stone-200 pb-4 sm:pb-6 last:border-0">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-orange-800">{font.name}</h3>
                    <p className="text-sm sm:text-base text-orange-600">{font.font} · {font.weight}</p>
                  </div>
                </div>
                <p 
                  className={`${font.size} text-orange-900`}
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
        <Card className="border-stone-200 shadow-xl py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900">語調風格</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-800">溝通調性</h3>
                <ul className="space-y-2 text-base sm:text-lg text-orange-950">
                  <li>• 文化自信</li>
                  <li>• 傳統而不守舊</li>
                  <li>• 熱情且積極</li>
                  <li>• 厚重有底蘊</li>
                  <li>• 典雅而喜慶</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-orange-800">文案範例</h3>
                <div className="space-y-4 text-sm sm:text-base text-orange-950">
                  <p className="p-3 sm:p-4 bg-orange-50 rounded border border-stone-200">
                    「傳承千年中華養生精粹，彰顯東方文化自信」
                  </p>
                  <p className="p-3 sm:p-4 bg-orange-50 rounded border border-stone-200">
                    「以中國風韻，詮釋當代養生的文化底蘊」
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mood Board */}
        <Card className="border-stone-200 shadow-xl py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-orange-900">Mood Board</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12">
            <p className="text-sm sm:text-base text-orange-950 mb-4 sm:mb-6">
              典藏中國傳統文化元素、鮮明色彩對比與經典圖騰，作為「中國風韻」視覺語言的設計基調。
            </p>

            <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4">
              {moodBoardImages.map((src, index) => (
                <div
                  key={src}
                  className="mb-3 sm:mb-4 overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm"
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
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4 pb-4 sm:pb-6">
          <Link href="/">
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 bg-orange-900 hover:bg-orange-800">
              返回首頁
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
