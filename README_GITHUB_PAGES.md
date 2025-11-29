# Titik Banjir - Frontend

Website untuk visualisasi titik banjir menggunakan Leaflet Map.

## Setup untuk GitHub Pages

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Fix: Update untuk GitHub Pages deployment"
   git push origin main
   ```

2. **Aktifkan GitHub Pages**
   - Buka repository di GitHub
   - Pergi ke Settings → Pages
   - Pilih "Deploy from a branch"
   - Pilih branch: `main`
   - Pilih folder: `/ (root)`
   - Klik Save

3. **Website akan tersedia di:**
   ```
   https://ZahraDH28.github.io/Frontend_TitikBanjir/
   ```

## Struktur File

- `index.html` - File utama (di root)
- `public/css/style.css` - Styling
- `public/JS/map.js` - Logic peta
- `app.js` - Server Express (opsional, untuk development lokal)

## Menjalankan Lokal

```bash
npm install
npm start
```
Akses di `http://localhost:3000`

## Yang Sudah Diperbaiki

✅ Menghapus dependency fetch ke backend `localhost:4000`
✅ Menggunakan data GeoJSON statis
✅ Path file relatif yang benar untuk GitHub Pages
✅ File `index.html` di root directory
✅ File `.nojekyll` untuk bypass Jekyll
✅ File `_config.yml` untuk konfigurasi GitHub Pages
