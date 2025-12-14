# 部署指南

## 部署到 Vercel

### 快速部署 (推薦)

1. **前往 Vercel 網站**
   - 訪問 [vercel.com](https://vercel.com)
   - 使用 GitHub、GitLab 或 Bitbucket 帳號登入

2. **導入專案**
   - 點擊 "Add New Project"
   - 選擇或導入此專案的 Git 儲存庫
   - 如果還沒有推送到 Git，請先執行：
     ```bash
     git init
     git add .
     git commit -m "Initial commit: 國坤堂品牌設計網站"
     git branch -M main
     git remote add origin YOUR_GIT_REPO_URL
     git push -u origin main
     ```

3. **配置專案**
   - Vercel 會自動偵測到這是 Next.js 專案
   - 保持預設設定即可：
     - Framework Preset: Next.js
     - Build Command: `npm run build`
     - Output Directory: `.next`
     - Install Command: `npm install`

4. **部署**
   - 點擊 "Deploy" 按鈕
   - 等待約 1-2 分鐘，部署完成
   - Vercel 會提供一個 URL，例如 `gkt-brand.vercel.app`

5. **自動部署**
   - 之後每次推送到 `main` 分支，Vercel 會自動重新部署
   - 其他分支的推送會創建預覽部署

### 使用 Vercel CLI

如果您偏好使用命令行：

1. **安裝 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登入**
   ```bash
   vercel login
   ```

3. **部署到預覽環境**
   ```bash
   cd /Users/adrianleung/Repo/gkt-brand
   vercel
   ```

4. **部署到生產環境**
   ```bash
   vercel --prod
   ```

### 自定義域名 (選用)

部署後，您可以在 Vercel 專案設定中添加自定義域名：

1. 進入專案設定
2. 點擊 "Domains"
3. 添加您的域名
4. 按照提示配置 DNS 記錄

## 構建驗證

在部署前，您可以在本地驗證構建：

```bash
# 構建專案
npm run build

# 啟動生產服務器
npm start
```

在瀏覽器中訪問 `http://localhost:3000` 查看生產版本。

## 性能優化

此專案已經過優化：

- ✅ 所有頁面都預渲染為靜態內容
- ✅ 使用 Next.js 15 和 Turbopack 進行快速構建
- ✅ 字體優化（使用 next/font 自動優化）
- ✅ 圖片優化（如果添加圖片，使用 next/image）
- ✅ CSS 優化（Tailwind CSS 自動清除未使用的樣式）

## 環境變數

此專案目前不需要任何環境變數。如果未來需要添加，可以在 Vercel 專案設定的 "Environment Variables" 中配置。

## 監控和分析

Vercel 提供以下內建功能：

- **Analytics**: 追蹤頁面訪問和性能
- **Speed Insights**: 實時性能監控
- **Log Drains**: 日誌收集

可以在 Vercel 儀表板中啟用這些功能。

## 故障排除

### 構建失敗

如果構建失敗，請檢查：
1. Node.js 版本（建議 18.x 或更高）
2. 依賴是否正確安裝
3. 查看 Vercel 部署日誌中的錯誤訊息

### 字體顯示問題

如果中文字體無法正確顯示：
1. 確認 `next.config.ts` 沒有禁用字體優化
2. 檢查瀏覽器控制台是否有字體加載錯誤
3. Vercel 會自動優化 Google Fonts，無需額外配置

## 成本

Vercel 的 Hobby 計劃（免費）包含：
- 無限部署
- 100GB 頻寬/月
- HTTPS 支援
- 自動 CI/CD
- 全球 CDN

對於此專案來說，免費計劃完全足夠使用。

## 後續步驟

部署完成後：

1. ✅ 測試所有頁面和功能
2. ✅ 檢查在不同裝置上的顯示效果
3. ✅ 分享專案 URL 給利益相關者
4. ✅ 設置自定義域名（如需要）
5. ✅ 啟用 Vercel Analytics（如需要）

## 聯絡支援

如有問題，請查閱：
- [Next.js 文檔](https://nextjs.org/docs)
- [Vercel 文檔](https://vercel.com/docs)
- [Tailwind CSS 文檔](https://tailwindcss.com/docs)

