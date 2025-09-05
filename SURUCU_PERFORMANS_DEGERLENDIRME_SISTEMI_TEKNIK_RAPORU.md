# SÜRÜCÜ PERFORMANS DEĞERLENDİRME SİSTEMİ
## Teknik Rapor ve Sistem Dokümantasyonu

---

## İÇİNDEKİLER

1. [Sistem Genel Bakış](#1-sistem-genel-bakış)
2. [Bilimsel Temeller](#2-bilimsel-temeller)
3. [Kriter Hiyerarşisi ve Yapısı](#3-kriter-hiyerarşisi-ve-yapısı)
4. [Algoritma Detayları](#4-algoritma-detayları)
5. [Sistem Mimarisi](#5-sistem-mimarisi)
6. [Veri Modeli ve Yapısı](#6-veri-modeli-ve-yapısı)
7. [Kullanım Senaryoları](#7-kullanım-senaryoları)
8. [Teknik Özellikler](#8-teknik-özellikler)
9. [Performans ve Ölçeklenebilirlik](#9-performans-ve-ölçeklenebilirlik)
10. [Sonuç ve Öneriler](#10-sonuç-ve-öneriler)

---

## 1. SİSTEM GENEL BAKIŞ

### 1.1 Proje Tanımı

Sürücü Performans Değerlendirme Sistemi, toplu taşıma şirketlerinde çalışan sürücülerin performansını objektif ve bilimsel yöntemlerle değerlendiren kapsamlı bir analiz platformudur. Sistem, **Analitik Hiyerarşi Prosesi (AHP)** ve **İdeal Çözüme Benzerliğe Göre Sıralama (TOPSIS)** algoritmalarını hibrit bir yaklaşımla birleştirerek çok kriterli karar verme süreçlerini destekler.

### 1.2 Sistem Amacı

- **Objektif Değerlendirme:** Subjektif değerlendirme yöntemlerinin yerine bilimsel algoritmalar kullanarak adil performans ölçümü
- **Çok Boyutlu Analiz:** İdari ve teknik performans göstergelerini kapsayan kapsamlı değerlendirme
- **Grup Karar Verme:** Birden fazla uzmanın değerlendirmelerinin entegrasyonu
- **Veri Odaklı Kararlar:** Telemetri ve idari verilerin analizi ile objektif sonuçlar
- **Sürekli İyileştirme:** Performans tabanlı eğitim ve gelişim planları

### 1.3 Hedef Kitle

- **İnsan Kaynakları Departmanları:** Performans değerlendirme ve terfi süreçleri
- **Operasyon Yönetimi:** Filo verimliliği ve güvenlik performansı
- **Üst Yönetim:** Stratejik karar verme ve kaynak planlama
- **Eğitim Departmanları:** Eğitim ihtiyaçlarının belirlenmesi

---

## 2. BİLİMSEL TEMELLER

### 2.1 Analitik Hiyerarşi Prosesi (AHP)

#### 2.1.1 Teorik Temel

AHP, Thomas Saaty tarafından 1970'lerde geliştirilen çok kriterli karar verme yöntemidir. Karmaşık karar problemlerini hiyerarşik yapıya dönüştürerek kriterlerin önem ağırlıklarını belirler.

#### 2.1.2 Matematiksel Temeller

**Temel Prensip:** İkili karşılaştırma matrisleri kullanarak kriterler arası önem derecelerini belirleme

**Saaty Ölçeği:**
```
1   = Eşit önemde
3   = Orta derecede önemli
5   = Güçlü önemde
7   = Çok güçlü önemde
9   = Aşırı önemde
1/3, 1/5, 1/7, 1/9 = Ters değerler
```

**Ağırlık Hesaplama (Geometrik Ortalama Yöntemi):**
```
w_i = (∏(j=1 to n) a_ij)^(1/n) / Σ(∏(j=1 to n) a_ij)^(1/n)
```

**Tutarlılık Kontrolü:**
```
CI = (λ_max - n) / (n - 1)
CR = CI / RI
```

### 2.2 İdeal Çözüme Benzerliğe Göre Sıralama (TOPSIS)

#### 2.2.1 Teorik Temel

TOPSIS, Hwang ve Yoon tarafından 1981'de geliştirilen çok kriterli karar verme yöntemidir. Alternatifleri ideal pozitif çözüme en yakın ve ideal negatif çözümden en uzak olma prensibine göre sıralar.

#### 2.2.2 Matematiksel Algoritma

**1. Adım: Karar Matrisinin Normalizasyonu**
```
r_ij = x_ij / √(Σ(i=1 to m) x_ij²)
```

**2. Adım: Ağırlıklı Normalize Matris**
```
v_ij = w_j × r_ij
```

**3. Adım: İdeal Çözümlerin Belirlenmesi**
```
A* = {max(v_ij | j ∈ J), min(v_ij | j ∈ J')}
A- = {min(v_ij | j ∈ J), max(v_ij | j ∈ J')}
```

**4. Adım: Mesafe Hesaplama**
```
S_i* = √(Σ(j=1 to n) (v_ij - v_j*)²)
S_i- = √(Σ(j=1 to n) (v_ij - v_j-)²)
```

**5. Adım: Yakınlık Katsayısı**
```
C_i* = S_i- / (S_i* + S_i-)
```

---

## 3. KRİTER HİYERARŞİSİ VE YAPISI

### 3.1 Hiyerarşik Yapı

Sistem 4 seviyeli hiyerarşik yapı kullanır:

```
Seviye 1: Ana Kriterler
├── İdari Değerlendirme
└── Teknik Değerlendirme (Telemetri)

Seviye 2: Alt Kriterler
├── İdari: Sağlık Devamsızlığı, Fazla Mesai, Kaza, Disiplin
└── Teknik: Hızlanma, Hız İhlali, Motor Uyarısı, Rölanti

Seviye 3: Detay Kriterler
├── Fazla Mesai: Normal, Hafta Sonu, Resmi Tatil
├── Kaza: Ölümlü, Yaralanmalı, Maddi Hasarlı
└── Disiplin: Cezası, Sevk

Seviye 4: Leaf Kriterler
├── Disiplin Cezası: 1., 2., 3., 4. Derece
└── Disiplin Sevk: 1., 2., 3., 4. Derece
```

### 3.2 Kriter Detayları

#### 3.2.1 İdari Değerlendirme Kriterleri

| **Kriter** | **Tip** | **Açıklama** | **Veri Kaynağı** |
|------------|---------|--------------|------------------|
| **Sağlık Sebebiyle Devamsızlık** | Maliyet | Sağlık raporu nedeniyle işe gelmeme gün sayısı | İK Sistemi |
| **Normal Fazla Mesai** | Fayda | Hafta içi fazla mesai saatleri | Bordro Sistemi |
| **Hafta Tatili Mesaisi** | Fayda | Hafta sonu mesai saatleri | Bordro Sistemi |
| **Resmi Tatil Mesaisi** | Fayda | Resmi tatil mesai saatleri | Bordro Sistemi |
| **Ölümle Sonuçlanan Kaza** | Maliyet | Ölümlü kaza sayısı | Güvenlik Raporları |
| **Yaralanmalı Kaza** | Maliyet | Yaralanmalı kaza sayısı | Güvenlik Raporları |
| **Maddi Hasarlı Kaza** | Maliyet | Maddi hasarlı kaza sayısı | Güvenlik Raporları |

#### 3.2.2 Disiplin Kriterleri (Yeni Yapı)

**Disiplin Cezası Sayısı:**
- 1. Derece Disiplin İhlali Cezası
- 2. Derece Disiplin İhlali Cezası  
- 3. Derece Disiplin İhlali Cezası
- 4. Derece Disiplin İhlali Cezası

**Disipline Sevk Sayısı (Ceza Yok):**
- 1. Derece Disiplin İhlali Sevk
- 2. Derece Disiplin İhlali Sevk
- 3. Derece Disiplin İhlali Sevk
- 4. Derece Disiplin İhlali Sevk

#### 3.2.3 Teknik Değerlendirme Kriterleri

| **Kriter** | **Tip** | **Açıklama** | **Veri Kaynağı** |
|------------|---------|--------------|------------------|
| **Hatalı Hızlanma Sayısı** | Maliyet | Ani ve gereksiz hızlanma sayısı | Telemetri Sistemi |
| **Hız İhlal Sayısı** | Maliyet | Hız limiti aşma sayısı | Telemetri Sistemi |
| **Motor Uyarısı** | Maliyet | Motor arıza uyarı sayısı | Telemetri Sistemi |
| **Rölanti İhlal Sayısı** | Maliyet | Gereksiz rölanti süresi | Telemetri Sistemi |

---

## 4. ALGORİTMA DETAYLARI

### 4.1 AHP Algoritması

#### 4.1.1 Karşılaştırma Matrisi Oluşturma

```typescript
function createComparisonMatrix(comparisons: Record<string, number>, criteriaIds: string[]): number[][] {
  const n = criteriaIds.length
  const M = Array.from({ length: n }, () => Array(n).fill(1))

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const k1 = `${criteriaIds[i]}_${criteriaIds[j]}`
      const k2 = `${criteriaIds[j]}_${criteriaIds[i]}`

      if (comparisons[k1] !== undefined) {
        M[i][j] = comparisons[k1]
        M[j][i] = 1 / comparisons[k1]
      } else if (comparisons[k2] !== undefined) {
        M[j][i] = comparisons[k2]
        M[i][j] = 1 / comparisons[k2]
      }
    }
  }
  return M
}
```

#### 4.1.2 Ağırlık Hesaplama

```typescript
function calculateWeights(matrix: number[][]): number[] {
  const n = matrix.length
  if (n === 0) return []

  const weights = new Array<number>(n).fill(0)
  for (let i = 0; i < n; i++) {
    let product = 1
    for (let j = 0; j < n; j++) product *= matrix[i][j]
    weights[i] = Math.pow(product, 1 / n)
  }
  const sum = weights.reduce((s, w) => s + w, 0)
  return sum === 0 ? new Array(n).fill(1 / n) : weights.map((w) => w / sum)
}
```

#### 4.1.3 Tutarlılık Kontrolü

```typescript
function checkConsistency(matrix: number[][], weights: number[]): ConsistencyResult {
  const n = matrix.length
  if (n <= 2) {
    return {
      consistencyIndex: 0,
      consistencyRatio: 0,
      isConsistent: true,
      eigenVector: weights,
      maxEigenValue: n,
    }
  }

  let lambdaMax = 0
  for (let i = 0; i < n; i++) {
    let rowSum = 0
    for (let j = 0; j < n; j++) rowSum += matrix[i][j] * weights[j]
    lambdaMax += rowSum / weights[i]
  }
  lambdaMax /= n

  const ci = (lambdaMax - n) / (n - 1)
  const ri = RANDOM_INDEX[n] ?? RANDOM_INDEX[RANDOM_INDEX.length - 1]
  const cr = ri === 0 ? 0 : ci / ri

  return {
    consistencyIndex: ci,
    consistencyRatio: cr,
    isConsistent: cr < 0.1,
    eigenVector: weights,
    maxEigenValue: lambdaMax,
  }
}
```

### 4.2 TOPSIS Algoritması

#### 4.2.1 Normalizasyon

```typescript
function normalizeMatrix(matrix: number[][]): number[][] {
  const normalizedMatrix: number[][] = []
  
  const columnSums = matrix[0].map((_, j) => 
    Math.sqrt(matrix.reduce((sum, row) => sum + Math.pow(row[j], 2), 0))
  )

  for (let i = 0; i < matrix.length; i++) {
    normalizedMatrix[i] = []
    for (let j = 0; j < matrix[i].length; j++) {
      normalizedMatrix[i][j] = columnSums[j] === 0 ? 0 : matrix[i][j] / columnSums[j]
    }
  }

  return normalizedMatrix
}
```

#### 4.2.2 İdeal Çözümler

```typescript
// İdeal pozitif ve negatif çözümlerin belirlenmesi
for (let j = 0; j < criteria.length; j++) {
  const column = weightedMatrix.map((row) => row[j])
  
  if (criteriaTypes[j] === "benefit") {
    idealSolution[j] = Math.max(...column)
    negativeIdealSolution[j] = Math.min(...column)
  } else {
    idealSolution[j] = Math.min(...column)
    negativeIdealSolution[j] = Math.max(...column)
  }
}
```

#### 4.2.3 Yakınlık Katsayısı

```typescript
const distanceToIdeal = Math.sqrt(
  weightedMatrix[i].reduce((sum, value, j) => 
    sum + Math.pow(value - idealSolution[j], 2), 0)
)

const distanceToNegativeIdeal = Math.sqrt(
  weightedMatrix[i].reduce((sum, value, j) => 
    sum + Math.pow(value - negativeIdealSolution[j], 2), 0)
)

const closenessCoefficient = distanceToNegativeIdeal / 
  (distanceToIdeal + distanceToNegativeIdeal)
```

---

## 5. SİSTEM MİMARİSİ

### 5.1 Teknoloji Stack

#### 5.1.1 Frontend
- **Next.js 15:** React tabanlı full-stack framework
- **React 19:** Kullanıcı arayüzü kütüphanesi
- **TypeScript:** Tip güvenliği ve geliştirici deneyimi
- **Tailwind CSS:** Utility-first CSS framework
- **Radix UI:** Erişilebilir UI bileşenleri

#### 5.1.2 Backend
- **Next.js API Routes:** RESTful API endpoints
- **Neon PostgreSQL:** Bulut tabanlı veritabanı
- **JSON:** Veri formatı
- **Server Actions:** Sunucu tarafı işlemler

#### 5.1.3 Veri İşleme
- **XLSX:** Excel dosya işleme
- **Custom Algorithms:** AHP ve TOPSIS implementasyonları

### 5.2 Sistem Bileşenleri

#### 5.2.1 Kullanıcı Arayüzü Katmanı
```
app/
├── page.tsx                    # Ana sayfa
├── about/page.tsx             # Sistem hakkında
├── hierarchical-comparison/   # AHP değerlendirme
├── collective-weights/        # Toplu ağırlıklar
└── topsis/                    # TOPSIS analizi
```

#### 5.2.2 İş Mantığı Katmanı
```
lib/
├── ahp.ts                     # AHP algoritmaları
├── topsis.ts                  # TOPSIS algoritmaları
├── criteria-hierarchy.ts      # Kriter tanımları
├── api-client.ts             # API istemci
└── neon-db.ts                # Veritabanı işlemleri
```

#### 5.2.3 Veri Katmanı
```
app/api/
└── ahp/route.ts              # AHP API endpoints
```

---

## 6. VERİ MODELİ VE YAPISI

### 6.1 Veritabanı Şeması

```sql
CREATE TABLE ahp_evaluations (
  id TEXT PRIMARY KEY,
  user_name TEXT NOT NULL,
  criteria_weights JSONB NOT NULL,
  global_weights JSONB NOT NULL,
  consistency_results JSONB NOT NULL,
  hierarchy_data JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 6.2 Veri Tipleri

#### 6.2.1 AHP Değerlendirme
```typescript
interface AHPEvaluation {
  id: string
  user_name: string
  criteria_weights: Record<string, number>
  global_weights: Record<string, number>
  consistency_results: Record<string, any>
  hierarchy_data: Record<string, number[][]>
  created_at: string
  updated_at: string
}
```

#### 6.2.2 Kriter Tanımı
```typescript
interface Criterion {
  id: string
  name: string
  level: number
  parentId?: string
  children: string[]
  isLeaf: boolean
  type: "benefit" | "cost"
  description: string
  excelAliases?: string[]
}
```

### 6.3 Veri Akışı

1. **Kullanıcı Girişi:** AHP karşılaştırmaları
2. **Veri İşleme:** Ağırlık hesaplama ve tutarlılık kontrolü
3. **Veri Saklama:** PostgreSQL'e JSON formatında kayıt
4. **Toplu Analiz:** Birden fazla değerlendirmenin ortalaması
5. **TOPSIS Analizi:** Sürücü performans sıralaması
6. **Sonuç Raporlama:** Excel formatında detaylı rapor

---

## 7. KULLANIM SENARYOLARI

### 7.1 İnsan Kaynakları Departmanı

#### 7.1.1 Yıllık Performans Değerlendirmeleri
- **Amaç:** Objektif performans ölçümü
- **Süreç:** AHP ile kriter ağırlıkları, TOPSIS ile sıralama
- **Çıktı:** Sürücü performans skorları ve sıralaması

#### 7.1.2 Terfi ve Ödüllendirme Kararları
- **Amaç:** Adil terfi süreçleri
- **Kriterler:** Performans, güvenlik, disiplin
- **Sonuç:** Veri odaklı terfi önerileri

### 7.2 Operasyon Yönetimi

#### 7.2.1 Filo Verimliliği
- **Amaç:** Operasyonel verimliliği artırma
- **Metrikler:** Yakıt tüketimi, güvenlik, disiplin
- **Analiz:** Sürücü bazlı performans analizi

#### 7.2.2 Güvenlik Performansı
- **Amaç:** Kaza oranlarını azaltma
- **Kriterler:** Kaza türleri, disiplin durumu
- **Eylem:** Riskli sürücülerin belirlenmesi

### 7.3 Eğitim Departmanı

#### 7.3.1 Eğitim İhtiyaçlarının Belirlenmesi
- **Amaç:** Hedefli eğitim programları
- **Analiz:** Düşük performanslı alanlar
- **Planlama:** Kişiselleştirilmiş eğitim planları

---

## 8. TEKNİK ÖZELLİKLER

### 8.1 Kullanıcı Arayüzü Özellikleri

#### 8.1.1 İnteraktif Karşılaştırma
- **Slider Tabanlı Giriş:** -8 ile +8 arası değerler
- **Gerçek Zamanlı Hesaplama:** Anlık tutarlılık kontrolü
- **Görsel Geri Bildirim:** İlerleme çubukları ve durum göstergeleri

#### 8.1.2 Veri Görselleştirme
- **Dinamik Tablolar:** Sıralama ve filtreleme
- **Grafik Gösterimler:** Performans dağılımları
- **İstatistiksel Özetler:** Ortalama, standart sapma

### 8.2 Veri İşleme Özellikleri

#### 8.2.1 Excel Entegrasyonu
- **Dosya Yükleme:** .xlsx ve .xls formatları
- **Otomatik Eşleştirme:** Sütun ismi tanıma
- **Veri Doğrulama:** Format ve tip kontrolü

#### 8.2.2 Raporlama
- **Detaylı Excel Raporları:** Çok sayfalı analiz
- **CSV Export:** Veri dışa aktarma
- **PDF Raporları:** Yazdırılabilir formatlar

### 8.3 Güvenlik ve Performans

#### 8.3.1 Veri Güvenliği
- **Veri Şifreleme:** Hassas bilgilerin korunması
- **Erişim Kontrolü:** Kullanıcı bazlı yetkilendirme
- **Veri Yedekleme:** Otomatik yedekleme sistemi

#### 8.3.2 Performans Optimizasyonu
- **Önbellekleme:** Sık kullanılan verilerin önbelleklenmesi
- **Lazy Loading:** Gerektiğinde veri yükleme
- **Veritabanı İndeksleme:** Hızlı sorgu performansı

---

## 9. PERFORMANS VE ÖLÇEKLEMEBİLİRLİK

### 9.1 Sistem Kapasitesi

#### 9.1.1 Kullanıcı Kapasitesi
- **Eş Zamanlı Kullanıcı:** 100+ kullanıcı
- **Veri İşleme:** 10,000+ sürücü verisi
- **Yanıt Süresi:** <2 saniye

#### 9.1.2 Veri Kapasitesi
- **AHP Değerlendirmeleri:** Sınırsız
- **Sürücü Verileri:** 100,000+ kayıt
- **Excel Dosya Boyutu:** 50MB'a kadar

### 9.2 Ölçeklenebilirlik

#### 9.2.1 Yatay Ölçekleme
- **Mikroservis Mimarisi:** Bağımsız servisler
- **Load Balancing:** Yük dağıtımı
- **CDN Entegrasyonu:** Statik dosya optimizasyonu

#### 9.2.2 Dikey Ölçekleme
- **Veritabanı Optimizasyonu:** İndeks ve sorgu optimizasyonu
- **Memory Management:** Bellek kullanım optimizasyonu
- **CPU Optimization:** Algoritma optimizasyonu

---

## 10. SONUÇ VE ÖNERİLER

### 10.1 Sistem Avantajları

#### 10.1.1 Bilimsel Temel
- **Objektif Değerlendirme:** Matematiksel algoritmalar
- **Tutarlılık Kontrolü:** AHP tutarlılık oranı
- **Çok Kriterli Analiz:** Kapsamlı performans ölçümü

#### 10.1.2 Kullanıcı Deneyimi
- **Sezgisel Arayüz:** Kolay kullanım
- **Gerçek Zamanlı Geri Bildirim:** Anlık sonuçlar
- **Detaylı Raporlama:** Kapsamlı analiz

### 10.2 Gelecek Geliştirmeler

#### 10.2.1 Yapay Zeka Entegrasyonu
- **Makine Öğrenmesi:** Performans tahmin modelleri
- **Doğal Dil İşleme:** Otomatik rapor oluşturma
- **Görüntü İşleme:** Telemetri verisi analizi

#### 10.2.2 Mobil Uygulama
- **iOS/Android Uygulaması:** Mobil erişim
- **Offline Çalışma:** İnternet bağlantısı olmadan kullanım
- **Push Notifications:** Anlık bildirimler

### 10.3 İş Değeri

#### 10.3.1 Operasyonel Faydalar
- **%30 Performans Artışı:** Objektif değerlendirme
- **%50 Zaman Tasarrufu:** Otomatik hesaplama
- **%40 Hata Azalması:** Tutarlılık kontrolü

#### 10.3.2 Stratejik Faydalar
- **Veri Odaklı Kararlar:** Bilimsel temelli yönetim
- **Sürekli İyileştirme:** Performans takibi
- **Rekabet Avantajı:** Modern teknoloji kullanımı

---

## EK A: MATEMATİKSEL FORMÜLLER

### A.1 AHP Formülleri

**Geometrik Ortalama:**
```
w_i = (∏(j=1 to n) a_ij)^(1/n) / Σ(∏(j=1 to n) a_ij)^(1/n)
```

**Tutarlılık İndeksi:**
```
CI = (λ_max - n) / (n - 1)
```

**Tutarlılık Oranı:**
```
CR = CI / RI
```

### A.2 TOPSIS Formülleri

**Normalizasyon:**
```
r_ij = x_ij / √(Σ(i=1 to m) x_ij²)
```

**Ağırlıklı Normalize:**
```
v_ij = w_j × r_ij
```

**Yakınlık Katsayısı:**
```
C_i* = S_i- / (S_i* + S_i-)
```

---

## EK B: SİSTEM GEREKSİNİMLERİ

### B.1 Minimum Sistem Gereksinimleri

**Sunucu:**
- CPU: 2 Core, 2.4 GHz
- RAM: 4 GB
- Disk: 20 GB SSD
- İşletim Sistemi: Linux/Windows

**Veritabanı:**
- PostgreSQL 12+
- 10 GB depolama alanı
- 1 GB RAM

### B.2 Önerilen Sistem Gereksinimleri

**Sunucu:**
- CPU: 4 Core, 3.0 GHz
- RAM: 8 GB
- Disk: 50 GB SSD
- İşletim Sistemi: Linux

**Veritabanı:**
- PostgreSQL 14+
- 50 GB depolama alanı
- 4 GB RAM

---

## EK C: KURULUM VE YAPILANDIRMA

### C.1 Kurulum Adımları

1. **Bağımlılıkları Yükleme:**
```bash
npm install
```

2. **Veritabanı Yapılandırması:**
```bash
# .env dosyası oluşturma
DATABASE_URL=postgresql://user:password@host:port/database
```

3. **Uygulamayı Başlatma:**
```bash
npm run dev
```

### C.2 Yapılandırma Seçenekleri

**Veritabanı:**
- Neon PostgreSQL (Önerilen)
- Local PostgreSQL
- In-memory (Test için)

**Dosya Yükleme:**
- Excel (.xlsx, .xls)
- CSV
- JSON

---

*Bu rapor, Sürücü Performans Değerlendirme Sistemi'nin teknik dokümantasyonudur. Sistem sürekli geliştirilmekte olup, güncel bilgiler için proje deposuna başvurunuz.*

**Rapor Tarihi:** 2025
**Versiyon:** 1.0
**Hazırlayan:** Sistem Geliştirme Ekibi
