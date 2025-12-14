# 國坤堂品牌設計方案

這是一個展示國坤堂三種品牌視覺方向的網站，使用 Next.js、shadcn/ui 和 Tailwind CSS 構建。

## 品牌方向

1. **古典雅韻** - 傳承千年中醫智慧，融合現代簡約美學
2. **現代養生** - 清新自然，注重健康生活方式
3. **尊貴典藏** - 高端奢華，彰顯品牌價值

## 技術棧

- **框架**: Next.js 15 (App Router)
- **樣式**: Tailwind CSS
- **UI 組件**: shadcn/ui
- **字體**: Noto Sans TC, Noto Serif TC
- **語言**: TypeScript
- **部署**: Vercel

## 本地開發

### 安裝依賴

```bash
npm install
```

### 啟動開發服務器

```bash
npm run dev
```

在瀏覽器中打開 [http://localhost:3000](http://localhost:3000) 查看網站。

### 構建生產版本

```bash
npm run build
```

### 啟動生產服務器

```bash
npm start
```

## 部署到 Vercel

### 方法一：使用 Vercel CLI

1. 安裝 Vercel CLI

```bash
npm i -g vercel
```

2. 登入 Vercel

```bash
vercel login
```

3. 部署專案

```bash
vercel
```

4. 部署到生產環境

```bash
vercel --prod
```

### 方法二：使用 Vercel 網站

1. 前往 [vercel.com](https://vercel.com)
2. 使用 GitHub、GitLab 或 Bitbucket 登入
3. 點擊 "Add New Project"
4. 導入此專案的 Git 儲存庫
5. Vercel 會自動偵測 Next.js 專案並配置構建設定
6. 點擊 "Deploy" 開始部署

部署完成後，Vercel 會提供一個 URL，您可以透過該 URL 訪問您的網站。

### 環境變數

此專案不需要額外的環境變數。

## 專案結構

```
gkt-brand/
├── app/
│   ├── branding/
│   │   ├── classic/      # 古典雅韻頁面
│   │   ├── modern/       # 現代養生頁面
│   │   └── luxury/       # 尊貴典藏頁面
│   ├── globals.css       # 全域樣式
│   ├── layout.tsx        # 根布局
│   └── page.tsx          # 首頁
├── components/
│   └── ui/               # shadcn/ui 組件
├── lib/
│   └── utils.ts          # 工具函數
└── public/               # 靜態資源
```

## 頁面說明

### 首頁 (`/`)

展示三種品牌方向的概覽，每個卡片可點擊進入詳細頁面。

### 古典雅韻 (`/branding/classic`)

- 色彩系統：琥珀色系
- 設計風格：傳統東方元素、書法水墨
- 適用場景：重視傳統與專業形象的品牌定位

### 現代養生 (`/branding/modern`)

- 色彩系統：翠綠色系
- 設計風格：簡約現代、自然清新
- 適用場景：面向年輕都市族群的健康品牌

### 尊貴典藏 (`/branding/luxury`)

- 色彩系統：皇家紫配金色
- 設計風格：奢華精緻、高端典雅
- 適用場景：高端市場定位的品牌形象

## 自定義

### 修改品牌內容

編輯對應的頁面文件：
- `app/branding/classic/page.tsx`
- `app/branding/modern/page.tsx`
- `app/branding/luxury/page.tsx`

### 修改色彩

在各頁面的 `colors` 陣列中修改色彩定義。

### 添加更多品牌方向

1. 在 `app/branding/` 下創建新的資料夾
2. 添加 `page.tsx` 文件
3. 在首頁 `app/page.tsx` 的 `brandingOptions` 陣列中添加新選項

## 授權

© 2025 國坤堂品牌設計專案
