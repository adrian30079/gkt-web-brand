import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BrandingNav } from "@/components/branding-nav";

export default function ModernBranding() {
  const colors = [
    { name: "主色", hex: "#E8DCC8", description: "暗米色", row: 1 },
    { name: "輔色", hex: "#F5E6D3", description: "香檳", row: 1 },
    { name: "輔色", hex: "#FFFFFF", description: "純白", row: 1 },
    { name: "強調色", hex: "#800020", description: "勃艮第紅", row: 1 },
    { name: "背景色", hex: "#FAFAFA", description: "淡白", row: 2 },
    { name: "背景色", hex: "#F8F5F0", description: "暖白", row: 2 },
    { name: "背景色", hex: "#F5F5F5", description: "淺灰白", row: 2 },
    { name: "文字色", hex: "#000000", description: "純黑", row: 2 },
    { name: "文字色", hex: "#1C1917", description: "深墨", row: 2 }
  ];

  const fonts = [
    { name: "標題字體", font: "Noto Serif TC", weight: "700", example: "冬蟲夏草", size: "text-3xl sm:text-4xl md:text-5xl" },
    { name: "標題字體2", font: "Noto Serif TC", weight: "600", example: "冬蟲夏草", size: "text-2xl sm:text-3xl md:text-4xl" },
    { name: "內文字體1", font: "Noto Sans TC", weight: "500", example: "國坤堂是專注冬蟲夏草，致力於打造野生冬蟲夏草第一品牌。", size: "text-xl" },
    { name: "內文字體2", font: "Noto Sans TC", weight: "400", example: "冬蟲夏草乃中國傳統名貴中藥材，素有軟黃金之美譽，產自青藏高原海拔三千米以上之高寒地帶，冬為蟲、夏為草，珍稀難得。其性甘平，入肺腎二經，能補肺益腎、止咳化痰、秘精益氣調節體質，歷來與人參、鹿茸並列三大滋補上品。選用優質冬蟲夏草，滋養身心，延年益壽，實為養生首選！", size: "text-lg" }
  ];

  const moodBoardImages = [
    "/img/ref/style-2/027f700622f1b58e4bb1412d6189fe596bc9bd9c8d444c-9YLQsQ_fw1200webp.webp",
    "/img/ref/style-2/0771ae1a52113940554bbd9e7f129db87d7b38f411afc-kpMctu_fw480webp.webp",
    "/img/ref/style-2/2cc78ea56d6f64168936db0a1809dee1baec606e3848a-mUHkwv_fw480webp.webp",
    "/img/ref/style-2/2e19a8e202cad56f6b81554825fc572f913aa5e694ae-awumHl_fw480webp.webp",
    "/img/ref/style-2/3111292a516d6ad3e3e21c74c1a0f20951b3256ea3f83-URRawk_fw480webp.webp",
    "/img/ref/style-2/419b0c51d0f7692a91019ab4191dba2b81025c2594970-qeIMSt_fw480webp.webp",
    "/img/ref/style-2/4c7d1a28db43dbdae52f46bd02dc93ab22214b69a0ea4-OQQoRp_fw480webp.webp",
    "/img/ref/style-2/6fd72aee48583c3d4bea34a637327ec9b264c84b693f7d-QfiYdu_fw480webp.webp",
    "/img/ref/style-2/7f0472623c7d676aaeaec84da6e27979ea92d33e1afc1c-IWGSim_fw480webp.webp",
    "/img/ref/style-2/8000c6744b3675e07dc6ef1e7409d7da9d78a83484d84-T5EZ4o_fw480webp.webp",
    "/img/ref/style-2/804b9a8b4323c4d37ebb30f67c985146f7df715017aa8-UUMzHS_fw480webp.webp",
    "/img/ref/style-2/a3986ceaa338165eb30aae4e8e07032ac28d8befb31e-hLGcnM_fw480webp.webp",
    "/img/ref/style-2/download-1.jpg",
    "/img/ref/style-2/download.jpg",
    "/img/ref/style-2/fe2b6ba8b58a3fb43fbf9a2943d347a32017931d1767f1-67GSiY_fw480webp.webp"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-neutral-100">
      {/* Navigation */}
      <BrandingNav currentBranding="modern" />

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
          {/* <p className="text-lg sm:text-xl text-stone-700 max-w-2xl mx-auto px-4">
            100% 強調真實可驗證的健康承諾：從原料到成品、從產地到消費者，每一步都能被追溯、被核驗。
            國坤堂以<strong className="font-bold text-stone-900">現代養生</strong>空間美學的「留白、秩序、對比」為視覺語言，讓專業與安心感在第一眼就被看見。
          </p> */}
        </section>

        {/* Brand Essence */}
        <Card className="border-stone-200 shadow-lg py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">現代養生
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12 space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-stone-800">理念</h3>
              <p className="text-base sm:text-lg text-stone-950">
                以「可追溯」作為品牌信任的底座：堅持原產地核心區直供與高海拔野生嚴選，並導入權威溯源機制，
                為每一份產品賦予獨特身份標識，讓消費者能查得到來源、看得見證據、驗得出真實。
                在設計上採用現代空間語彙——留白、秩序、對比——把專業資訊轉譯成清楚、可靠、易理解的視覺體驗。
              </p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-stone-800">核心價值</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">現代</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">空間</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">健康</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">專業</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">精美</Badge>
                <Badge variant="secondary" className="text-sm sm:text-base py-1.5 sm:py-2 px-3 sm:px-4">可靠</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Color Palette */}
        <Card className="border-stone-200 shadow-lg py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">色彩系統</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12">
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
        <Card className="border-stone-200 shadow-lg py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">字體系統</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12 space-y-4 sm:space-y-6">
            {fonts.map((font, index) => (
              <div key={index} className="border-b border-stone-200 pb-4 sm:pb-6 last:border-0">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-stone-800">{font.name}</h3>
                    <p className="text-sm sm:text-base text-stone-600">{font.font} · {font.weight}</p>
                  </div>
                </div>
                <p 
                  className={`${font.size} text-stone-900`}
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
        <Card className="border-stone-200 shadow-lg py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">語調風格</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800">溝通調性</h3>
                <ul className="space-y-2 text-base sm:text-lg text-stone-950">
                  <li>• 品質先於修辭</li>
                  <li>• 專業有依據</li>
                  <li>• 透明不含糊</li>
                  <li>• 細節有堅持</li>
                  <li>• 以安心為核心</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg sm:text-xl font-semibold text-stone-800">文案範例</h3>
                <div className="space-y-4 text-sm sm:text-base text-stone-950">
                  <p className="p-3 sm:p-4 bg-stone-50 rounded border border-stone-200">
                    「100% 原產地核心區直供，100% 高海拔嚴選——我們把『好』做成可查證的標準。
                    從來源、批次到檢核資訊，每一步都可追溯、可驗證，讓安心不只是感覺，而是有據可循。」
                  </p>
                  <p className="p-3 sm:p-4 bg-stone-50 rounded border border-stone-200">
                    「國坤堂攜手原產地相關主管部門，建立溯源系統，為每一份產品賦予獨特身份標識。
                    你看到的不只是包裝，而是一條完整的信任鏈：來源清楚、流程透明、結果可核驗。」
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Mood Board */}
        <Card className="border-stone-200 shadow-lg py-8 sm:py-12">
          <CardHeader className="px-6 sm:px-12">
            <CardTitle className="text-2xl sm:text-3xl text-stone-900">Mood Board</CardTitle>
          </CardHeader>
          <CardContent className="px-6 sm:px-12">
            <p className="text-sm sm:text-base text-stone-950 mb-4 sm:mb-6">
              匯集現代空間設計、簡約線條美學、健康生活元素，作為「現代養生」視覺語言的靈感來源。
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
                    alt={`Modern mood board ${index + 1}`}
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
