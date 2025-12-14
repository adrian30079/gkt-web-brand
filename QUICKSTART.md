# 快速開始指南

## 🚀 立即部署到 Vercel

### 最快方式（3 分鐘完成）

1. **推送到 Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: 國坤堂品牌網站"
   git branch -M main
   # 將 YOUR_REPO_URL 替換為您的 Git 儲存庫 URL
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **連接 Vercel**
   - 前往 https://vercel.com
   - 點擊 "Add New Project"
   - 選擇您剛推送的儲存庫
   - 點擊 "Deploy"
   - 完成！🎉

### 使用 Vercel CLI

```bash
# 安裝 Vercel CLI（如果還沒有）
npm i -g vercel

# 登入
vercel login

# 部署
vercel --prod
```

## 📦 專案概覽

這是一個展示國坤堂三種品牌方向的網站：

- **古典雅韻** (`/branding/classic`) - 琥珀色系，傳統東方風格
- **現代養生** (`/branding/modern`) - 翠綠色系，清新現代風格
- **尊貴典藏** (`/branding/luxury`) - 紫金色系，奢華典雅風格

## 🛠️ 技術架構

- Next.js 15 (App Router) - 全靜態生成
- Tailwind CSS v4 - 樣式框架
- shadcn/ui - UI 組件
- TypeScript - 類型安全
- Noto Sans TC / Noto Serif TC - 繁體中文字體

## 📝 本地開發

```bash
# 安裝依賴
npm install

# 啟動開發服務器
npm run dev

# 構建生產版本
npm run build

# 預覽生產版本
npm start
```

開啟 http://localhost:3000 查看網站

## 📁 檔案結構

```
gkt-brand/
├── app/
│   ├── page.tsx              # 首頁（選擇品牌方向）
│   ├── layout.tsx            # 全域布局
│   ├── globals.css           # 全域樣式
│   └── branding/
│       ├── classic/          # 古典雅韻頁面
│       ├── modern/           # 現代養生頁面
│       └── luxury/           # 尊貴典藏頁面
├── components/ui/            # shadcn/ui 組件
└── lib/                      # 工具函數
```

## ✏️ 自定義內容

### 修改品牌內容

編輯對應的頁面檔案：
- `app/branding/classic/page.tsx` - 古典雅韻
- `app/branding/modern/page.tsx` - 現代養生
- `app/branding/luxury/page.tsx` - 尊貴典藏

### 修改色彩

在各頁面中找到 `colors` 陣列並修改：

```tsx
const colors = [
  { name: "主色", hex: "#78350F", description: "琥珀深棕" },
  // 修改這裡
];
```

### 添加新的品牌方向

1. 在 `app/branding/` 建立新資料夾
2. 新增 `page.tsx`
3. 在 `app/page.tsx` 的 `brandingOptions` 中加入新選項

## 🎨 設計資源

每個品牌方向頁面包含：

- **品牌核心** - 理念和價值觀
- **視覺風格** - 設計元素和特點
- **色彩系統** - 完整色票和說明
- **字體系統** - 字體選擇和範例
- **語調風格** - 溝通調性和文案範例
- **材質紋理** - 視覺紋理建議

## 📱 響應式設計

網站已針對所有裝置優化：
- 📱 手機版 (< 768px)
- 💻 平板版 (768px - 1024px)
- 🖥️ 桌面版 (> 1024px)

## ⚡ 性能特點

- ✅ 全靜態預渲染（SSG）
- ✅ 字體自動優化
- ✅ CSS 自動清除
- ✅ 快速頁面切換
- ✅ SEO 友善

## 🌐 SEO 設定

網站包含：
- 繁體中文 meta 標籤
- 適當的頁面標題
- 語言設定 (zh-TW)

## 🔧 故障排除

### 構建錯誤

```bash
# 清除快取重新安裝
rm -rf node_modules .next
npm install
npm run build
```

### 字體顯示問題

字體由 Next.js 自動優化，如果看不到中文字體：
1. 檢查瀏覽器控制台
2. 確認網路連線
3. 清除瀏覽器快取

## 📚 更多資源

- 詳細部署指南：查看 `DEPLOYMENT.md`
- 完整說明文件：查看 `README.md`
- [Next.js 文檔](https://nextjs.org/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)
- [shadcn/ui 文檔](https://ui.shadcn.com)

## 💬 需要協助？

- Next.js 相關問題：https://nextjs.org/docs
- Vercel 部署問題：https://vercel.com/docs
- Tailwind CSS 問題：https://tailwindcss.com/docs

---

**祝您部署順利！🎉**




