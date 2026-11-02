# Laundry Suarni Express

Website landing page untuk **Laundry Suarni Express** yang berlokasi di Ngroto, Pujon, Kabupaten Malang.

## Struktur Folder

```
laundry-suarni-express/
├── public/                  # File yang diakses publik
│   ├── index.html
│   ├── styles.css
│   ├── script.js
│   └── assets/
│       └── laundry-suarni-logo.jpg
├── server.js                # Server Node.js sederhana
├── package.json
├── .gitignore
└── README.md
```

## Cara Menjalankan di Lokal

1. Install dependency:
   ```bash
   npm install
   ```

2. Jalankan server:
   ```bash
   npm start
   ```

3. Buka browser di:
   ```
   http://localhost:3001
   ```

> Catatan: port default diubah ke `3001` agar tidak bentrok dengan project app-kasir yang menggunakan port `3000`.

## Deploy ke Render (Contoh)

1. Push project ini ke repository GitHub/GitLab.
2. Buat akun di [Render](https://render.com/).
3. Pilih **New Web Service** → connect repository.
4. Isi:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Klik **Deploy**.
6. Setelah deploy, Render memberikan URL gratis (misal: `https://laundry-suarni.onrender.com`).

## Deploy ke Hostinger (Shared Hosting)

Karena ini website statis, cara termudah adalah upload file ke folder `public_html`.

1. Beli hosting + domain di [Hostinger](https://www.hostinger.co.id/).
2. Login ke **hPanel** atau **cPanel**.
3. Buka **File Manager** → masuk ke folder `public_html`.
4. Upload dan extract file `hostinger-upload.zip` yang sudah saya siapkan.
5. Struktur di `public_html` harus seperti ini:
   ```
   public_html/
   ├── index.html
   ├── styles.css
   ├── script.js
   └── assets/
       └── laundry-suarni-logo.jpg
   ```
6. Akses domainmu, website sudah online.

### Keunggulan Hostinger untuk project ini:
- Domain + hosting sekaligus
- SSL gratis
- Email profesional dengan domain sendiri
- Bisa upgrade ke Node.js/PHP nanti kalau butuh backend

## Menghubungkan Custom Domain

1. Beli domain di registrar (Niagahoster, Namecheap, Cloudflare, Hostinger, dll).
2. Di dashboard Render/Netlify/Vercel/Hostinger, pilih opsi **Custom Domain**.
3. Tambahkan DNS record yang diminta (biasanya CNAME atau A record).
4. Tunggu propagasi DNS (biasanya 1–24 jam).

## Kontak

WhatsApp: [0813 5742 6883](https://wa.me/6281357426883)
