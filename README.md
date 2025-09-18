# Sürücü Performans Değerlendirme Sistemi

Bu proje, AHP (Analytic Hierarchy Process) ve TOPSIS yöntemlerini kullanarak sürücü performansını değerlendiren bir web uygulamasıdır.

## Özellikler

- **AHP Analizi**: Hiyerarşik karar verme süreci
- **TOPSIS Analizi**: Alternatiflerin sıralanması
- **Veritabanı Desteği**: Neon Database ile kalıcı veri saklama
- **Modern UI**: Next.js 15 ve Tailwind CSS ile responsive tasarım

## Kurulum

### 1. Bağımlılıkları Yükleyin

```bash
npm install
# veya
pnpm install
```

### 2. Veritabanı Kurulumu

**ÖNEMLİ**: Verilerin kalıcı olması için veritabanı bağlantısı gereklidir.

#### Seçenek A: Neon Database (Önerilen)
1. [Neon Database](https://neon.tech) hesabı oluşturun
2. Yeni bir proje oluşturun
3. Connection string'i kopyalayın

#### Seçenek B: Yerel PostgreSQL
1. PostgreSQL kurulumu yapın
2. Yeni bir veritabanı oluşturun

### 3. Environment Variables

Proje kök dizininde `.env` dosyası oluşturun:

```env
# Veritabanı Bağlantı URL'si
DATABASE_URL=postgresql://username:password@hostname:port/database

# Next.js Environment
NODE_ENV=development
```

**Örnek Neon Database URL:**
```
DATABASE_URL=postgresql://username:password@ep-xxx-xxx.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### 4. Uygulamayı Çalıştırın

```bash
npm run dev
# veya
pnpm dev
```

Uygulama `http://localhost:3000` adresinde çalışacaktır.

## Veritabanı Olmadan Çalıştırma

Eğer `.env` dosyası oluşturmazsanız, uygulama in-memory (bellek) modunda çalışır. Bu durumda:

- ✅ Uygulama çalışır
- ❌ Veriler geçici olarak saklanır
- ❌ Uygulama yeniden başlatıldığında veriler kaybolur
- ❌ Farklı makinede veriler görünmez

## Sorun Giderme

### Veriler Kayboluyor
- `.env` dosyasının doğru oluşturulduğundan emin olun
- `DATABASE_URL` değerinin doğru olduğunu kontrol edin
- Veritabanı bağlantısını test edin

### Veritabanı Bağlantı Hatası
- Connection string formatını kontrol edin
- Veritabanı sunucusunun çalıştığından emin olun
- Firewall ayarlarını kontrol edin

## Teknik Detaylar

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Database**: Neon Database (PostgreSQL)
- **ORM**: Neon Serverless Driver

## Lisans

Bu proje özel kullanım içindir.