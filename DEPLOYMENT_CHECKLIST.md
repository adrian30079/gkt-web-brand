# 🚀 部署檢查清單

## 部署前確認

- [x] ✅ 專案構建成功
- [x] ✅ 無 linter 錯誤
- [x] ✅ 所有頁面正常運作
- [x] ✅ 響應式設計完成
- [x] ✅ 中文字體配置完成
- [x] ✅ 文件齊全

## 📋 快速部署步驟

### 步驟 1: 初始化 Git (如果還沒有)

```bash
cd /Users/adrianleung/Repo/gkt-brand
git init
git add .
git commit -m "Initial commit: 國坤堂品牌設計網站"
git branch -M main
```

### 步驟 2: 推送到 Git 儲存庫

選擇以下任一平台：

#### GitHub
```bash
# 在 GitHub 建立新儲存庫後
git remote add origin https://github.com/YOUR_USERNAME/gkt-brand.git
git push -u origin main
```

#### GitLab
```bash
# 在 GitLab 建立新專案後
git remote add origin https://gitlab.com/YOUR_USERNAME/gkt-brand.git
git push -u origin main
```

#### Bitbucket
```bash
# 在 Bitbucket 建立新儲存庫後
git remote add origin https://bitbucket.org/YOUR_USERNAME/gkt-brand.git
git push -u origin main
```

### 步驟 3: 部署到 Vercel

#### 方法 A: 使用網頁介面 (推薦)

1. 前往 https://vercel.com
2. 使用 GitHub/GitLab/Bitbucket 登入
3. 點擊 "Add New Project"
4. 選擇 `gkt-brand` 儲存庫
5. 保持預設設定
6. 點擊 "Deploy"
7. 等待 1-2 分鐘
8. ✅ 完成！獲得網址

#### 方法 B: 使用 CLI

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 登入
vercel login

# 部署到生產環境
vercel --prod
```

## 🎯 部署後檢查

訪問您的網站並確認：

- [ ] 首頁正常顯示
- [ ] 三個品牌方向頁面都能正常訪問
  - [ ] `/branding/classic` - 古典雅韻
  - [ ] `/branding/modern` - 現代養生
  - [ ] `/branding/luxury` - 尊貴典藏
- [ ] 中文字體正確顯示
- [ ] 色彩正確顯示
- [ ] 導航按鈕正常運作
- [ ] 手機版顯示正常
- [ ] 平板版顯示正常
- [ ] 桌面版顯示正常

## 📱 測試裝置

建議在以下裝置/瀏覽器測試：

### 桌面
- [ ] Chrome
- [ ] Safari
- [ ] Firefox
- [ ] Edge

### 手機
- [ ] iPhone Safari
- [ ] Android Chrome

### 平板
- [ ] iPad Safari
- [ ] Android 平板

## 🔗 獲取網址

部署完成後，Vercel 會提供：

1. **生產網址**: `https://gkt-brand.vercel.app`
2. **預覽網址**: 每個推送都會生成
3. **自訂域名**: 可在設定中添加

## 📊 效能檢查

部署後可以檢查：

- [ ] 頁面載入速度 < 2秒
- [ ] Lighthouse 分數 > 90
- [ ] 無控制台錯誤
- [ ] 字體正確載入
- [ ] 圖片正常顯示

## 🎨 品牌方向確認

### 古典雅韻
- [ ] 琥珀色系正確
- [ ] 思源宋體顯示正確
- [ ] 傳統元素清晰

### 現代養生
- [ ] 翠綠色系正確
- [ ] 簡約風格呈現
- [ ] 清新感覺到位

### 尊貴典藏
- [ ] 紫金色系正確
- [ ] 奢華感覺強烈
- [ ] 精緻度足夠

## 🔄 持續部署

設定完成後：

- ✅ 每次推送到 `main` 分支會自動部署
- ✅ 其他分支會創建預覽部署
- ✅ Pull Request 會顯示預覽連結

## 📈 監控設定 (選用)

在 Vercel 控制台可以啟用：

- [ ] Vercel Analytics - 訪問統計
- [ ] Speed Insights - 效能監控
- [ ] Log Drains - 日誌記錄

## 🎯 下一步

- [ ] 分享網址給利益相關者
- [ ] 收集反饋意見
- [ ] 記錄改進建議
- [ ] 規劃下一版本

## 📝 部署資訊記錄

完成後請記錄：

- **部署日期**: _______________
- **Vercel 網址**: _______________
- **自訂域名**: _______________
- **部署者**: _______________

## 🆘 遇到問題？

### 常見問題

**Q: 字體沒有顯示？**
A: 清除瀏覽器快取，重新整理頁面

**Q: 顏色顯示不正確？**
A: 檢查瀏覽器是否支援現代 CSS

**Q: 頁面載入很慢？**
A: 檢查網路連線，Vercel CDN 應該很快

**Q: 部署失敗？**
A: 查看 Vercel 部署日誌，檢查錯誤訊息

### 獲取幫助

- 查看 `DEPLOYMENT.md` 詳細說明
- 訪問 Vercel 文檔
- 檢查 Next.js 文檔

## ✅ 完成確認

當所有項目都勾選完成時，恭喜您！
網站已成功部署並可供使用 🎉

---

**記住**: 
- 每次修改後推送，Vercel 會自動重新部署
- 保留這份檢查清單作為未來參考
- 定期檢查網站運作狀況

**祝部署順利！** 🚀





