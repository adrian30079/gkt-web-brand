import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrandingNav } from "@/components/branding-nav";

export default function ClassicBranding() {
  const colors = [
    { name: "主色", hex: "#D4D4D4", description: "淺灰", row: 1 },
    { name: "輔色", hex: "#F5E6D3", description: "香檳", row: 1 },
    { name: "輔色", hex: "#D4AF37", description: "金色", row: 1 },
    { name: "強調色", hex: "#800020", description: "勃艮第紅", row: 1 },
    { name: "背景色", hex: "#FAFAFA", description: "淡灰白", row: 2 },
    { name: "背景色", hex: "#F8F5F0", description: "米白", row: 2 },
    { name: "背景色", hex: "#FFFFFF", description: "純白", row: 2 },
    { name: "文字色", hex: "#1C1917", description: "深墨", row: 2 },
    { name: "文字色", hex: "#44403C", description: "灰墨", row: 2 }
  ];

  const fonts = [
    { name: "標題字體", font: "Noto Serif TC", weight: "700", example: "自然養生" },
    { name: "標題字體2", font: "var(--font-shan-cha-ya-kai-2)", weight: "400", example: "水墨山水" },
    { name: "內文字體", font: "Noto Sans TC", weight: "400", example: "中國傳統水墨美學" }
  ];

  const moodBoardImages = [
    "/img/ref/style-1/009e0c870e00e85a7b10868ca6e2df1ddc83209ea7fe59-H5MfLJ_fw480webp.webp",
    "/img/ref/style-1/15b4b07aef2a274e2f10551d52b98f600e2cd3239f618-Kvas1O_fw480webp.webp",
    "/img/ref/style-1/2ab5b96562687fbf1de8d5ed1700c0c21cc7db0bef4af9-i0C6Kx_fw480webp.webp",
    "/img/ref/style-1/3b16d90df22f2c1a68e436541bb225162a76313084697-5aIYsA_fw480webp.webp",
    "/img/ref/style-1/50d7ba5a88b3cb43da42c48f5941d1464e4ad74f173210-EFcbXi_fw480webp.webp",
    "/img/ref/style-1/92479ccb59544cfbad29e7f6e05aa16be7228b7b29ac0-xUWDiy_fw480webp.webp",
    "/img/ref/style-1/a3abad8db3a31d3e084794805339ba51.jpg",
    "/img/ref/style-1/db2b4d04ade061a2d5adead7c1d49b3203be3279e22ed-guT9Ie_fw480webp.webp",
    "/img/ref/style-1/download-1.jpg",
    "/img/ref/style-1/download-2.jpg",
    "/img/ref/style-1/download-3.jpg",
    "/img/ref/style-1/download-4.jpg",
    "/img/ref/style-1/download-5.jpg",
    "/img/ref/style-1/download-6.jpg",
    "/img/ref/style-1/download-7.jpg",
    "/img/ref/style-1/download.jpg"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      {/* Navigation */}
      <BrandingNav currentBranding="classic" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10 lg:space-y-12">
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
          {/* <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto px-4">
            國坤堂以「<strong className="font-bold text-stone-900">自然水墨</strong>」為底，以「水墨山水」為形：用不規則的墨韻與留白，刻畫傳統中國的審美與氣韻。
            這份視覺背後，是對品質近乎苛刻的追求——每一次呈現，都必須像一筆落墨般乾淨、準確、經得起反覆凝視。
          </p> */}
        </section>

        {/* Brand Essence */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">自然水墨</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-stone-800">理念</h3>
              <p className="text-base sm:text-lg text-stone-950">
                以中國傳統為骨、水墨山水為魂，建立一套「不規則」的品牌設計語言：墨痕暈染、山勢起伏、雲氣流動皆可成為版面結構。
                國坤堂對品質的追求近乎苛刻——就像曾以「一根可以嚼著吃的冬蟲夏草」開創新品類並獲得市場肯定那樣，
                每一次呈現都必須乾淨、準確、耐看；每一處留白都要經得起反覆推敲，讓信任在細節裡自然累積。
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-stone-800">核心價值</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">自然</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">傳統</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">水墨</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">禪意</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">和諧</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">匠心</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">色彩系統</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {colors.filter(c => c.row === 1).map((color, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      className="h-24 sm:h-28 md:h-32 rounded-lg shadow-lg border-2 border-stone-200"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="font-semibold text-stone-900 text-sm sm:text-base">{color.name}</p>
                      <p className="text-xs sm:text-sm text-stone-700">{color.description}</p>
                      <p className="text-xs text-stone-600 font-mono">{color.hex}</p>
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
                      <p className="font-semibold text-stone-900 text-sm sm:text-base">{color.name}</p>
                      <p className="text-xs sm:text-sm text-stone-700">{color.description}</p>
                      <p className="text-xs text-stone-600 font-mono">{color.hex}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Typography */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">字體系統</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-6">
            {fonts.map((font, index) => (
              <div key={index} className="border-b border-stone-200 pb-4 sm:pb-6 last:border-0">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-800">{font.name}</h3>
                    <p className="text-sm sm:text-base text-stone-600">{font.font} · {font.weight}</p>
                  </div>
                </div>
                <p 
                  className="text-3xl sm:text-4xl md:text-5xl text-stone-900"
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
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">語調風格</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800">溝通調性</h3>
                <ul className="space-y-2 text-base sm:text-lg text-stone-950">
                  <li>• 自信但克制</li>
                  <li>• 品質先於修辭</li>
                  <li>• 專業且真誠</li>
                  <li>• 細節有堅持</li>
                  <li>• 內斂而有分量</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800">文案範例</h3>
                <div className="space-y-4 text-sm sm:text-base text-stone-950">
                  <p className="p-3 sm:p-4 bg-stone-50 rounded border border-stone-200">
                    「國坤堂以『一根可以嚼著吃的冬蟲夏草』開創新品類，背後不是噱頭，而是對品質近乎苛刻的追求。
                    這份堅持，讓每一次被看見的細節都經得起檢視，也讓每一次被選擇都更值得信賴。」
                  </p>
                  <p className="p-3 sm:p-4 bg-stone-50 rounded border border-stone-200">
                    「在水墨山水的留白之間，我們把標準寫得更清楚：該嚴選的絕不妥協，該把關的絕不省略。
                    你看到的『雅』，源自看不見的『嚴』——每一處克制，都是為了讓真正的好自然浮現。」
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mood Board */}
        <Card className="border-stone-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">Mood Board</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm sm:text-base text-stone-950 mb-4 sm:mb-6">
              蒐集水墨山水意境、自然質樸元素、不規則流動造型，作為「自然水墨」視覺語言的靈感泉源。
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
                    alt={`Classic mood board ${index + 1}`}
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
            <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8">
              返回首頁
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
