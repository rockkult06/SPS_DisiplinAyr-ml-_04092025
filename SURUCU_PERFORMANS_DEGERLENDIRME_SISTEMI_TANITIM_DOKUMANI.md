# SÜRÜCÜ PERFORMANS DEĞERLENDİRME SİSTEMİ
## Sistem Tanıtım Dokümanı

Bu doküman, toplu taşıma kuruluşlarında çalışan sürücülerin performansını objektif ve bilimsel yöntemlerle değerlendiren **Sürücü Performans Değerlendirme Sistemi**nin amacını, bilimsel yaklaşımını, kullanılan yöntemleri, verileri ve kriterleri ayrıntılı biçimde açıklamaktadır.

---

## İçindekiler

1. [Sistemin Amacı ve Kapsamı](#1-sistemin-amacı-ve-kapsamı)
2. [Neden Bu Sistem?](#2-neden-bu-sistem)
3. [Bilimsel Yaklaşım](#3-bilimsel-yaklaşım)
4. [Kullanılan Yöntemler](#4-kullanılan-yöntemler)
5. [Kullanılan Veriler ve Kaynakları](#5-kullanılan-veriler-ve-kaynakları)
6. [Değerlendirme Kriterleri](#6-değerlendirme-kriterleri)
7. [Sistem Nasıl Çalışır?](#7-sistem-nasıl-çalışır)
8. [Hedef Kitle ve Kullanım Alanları](#8-hedef-kitle-ve-kullanım-alanları)
9. [Sistemin Sağladığı Faydalar](#9-sistemin-sağladığı-faydalar)

---

## 1. Sistemin Amacı ve Kapsamı

### 1.1 Ana Amaç

**Sürücü Performans Değerlendirme Sistemi**, toplu taşıma kuruluşlarında çalışan sürücülerin performansını **objektif** ve **bilimsel** yöntemlerle değerlendiren kapsamlı bir analiz platformudur. Geleneksel, subjektif değerlendirme yöntemlerinin yerine **çok kriterli karar verme** tekniklerini kullanarak adil, tutarlı ve şeffaf bir performans ölçümü sunar.

### 1.2 Kapsam

- **Hedef grup:** Toplu taşıma (otobüs, metrobüs vb.) şirketlerinde çalışan sürücüler  
- **Değerlendirme boyutları:** İdari performans (devam, fazla mesai, kaza, disiplin) ve teknik performans (araç kullanımı, telemetri verileri)  
- **Çıktılar:** Sürücü bazlı performans skorları, sıralama, raporlama ve karar destek bilgisi  

### 1.3 Temel İlkeler

| İlke | Açıklama |
|------|----------|
| **Objektiflik** | Sayısal veri ve matematiksel algoritmalarla ölçüm; kişisel yargıyı azaltma |
| **Şeffaflık** | Kriterlerin ve ağırlıkların açık tanımı; sonuçların izlenebilir olması |
| **Tutarlılık** | Aynı veri ve ağırlıklarla aynı sonuçların üretilmesi |
| **Çok boyutluluk** | Hem idari hem teknik göstergelerin tek bir çerçevede birleştirilmesi |

---

## 2. Neden Bu Sistem?

### 2.1 Geleneksel Değerlendirmenin Sınırları

- **Subjektiflik:** Farklı değerlendiriciler farklı sonuçlara varabilir; “göreceli” notlar tartışma yaratır.  
- **Tutarsızlık:** Aynı sürücü farklı dönemlerde veya farklı birimlerde farklı puan alabilir.  
- **Eksik veri kullanımı:** İdari kayıtlar ve telemetri verileri birlikte, ağırlıklı biçimde kullanılmaz.  
- **Güven sorunu:** Sürücüler ve sendikalar, “haksız” veya “keyfi” değerlendirme endişesi taşıyabilir.

### 2.2 Bu Sistemin Getirdiği Yaklaşım

- **Bilimsel yöntem:** Uluslararası literatürde kabul görmüş AHP ve TOPSIS yöntemleri kullanılır.  
- **Veri odaklılık:** Karar, tanımlı kriterler ve gerçek veriler üzerinden üretilir.  
- **Grup kararı:** Birden fazla uzmanın AHP değerlendirmesi alınabilir; ağırlıklar ortalaması ile konsensüs oluşturulur.  
- **İzlenebilirlik:** Hangi kriter, hangi ağırlıkla kullanıldığı ve nasıl sıralama elde edildiği raporlanabilir.

---

## 3. Bilimsel Yaklaşım

Sistem, **Çok Kriterli Karar Verme (ÇKKV / MCDM)** alanındaki iki yöntemi birleştirir:

1. **AHP (Analitik Hiyerarşi Prosesi):** Kriterlerin önem ağırlıklarının belirlenmesi.  
2. **TOPSIS (İdeal Çözüme Benzerliğe Göre Sıralama):** Sürücülerin (alternatiflerin) bu ağırlıklara göre sıralanması.

Bu hibrit yapı sayede:

- Önce “hangi kriter ne kadar önemli?” sorusu AHP ile yanıtlanır.  
- Sonra “hangi sürücü bu kriterlere göre daha iyi?” sorusu TOPSIS ile yanıtlanır.  
- Tüm süreç sayısal ve tekrarlanabilir olduğu için bilimsel ve denetlenebilir kabul edilir.

---

## 4. Kullanılan Yöntemler

### 4.1 Analitik Hiyerarşi Prosesi (AHP)

#### 4.1.1 Ne İşe Yarar?

AHP, kriterlerin **göreli önem ağırlıklarını** belirlemek için kullanılır. Örneğin: “Güvenlik (kaza) mi daha önemli, yoksa disiplin cezası mı?” gibi kararlar, ikili karşılaştırmalarla sayısal ağırlığa dönüştürülür.

#### 4.1.2 Temel Kavramlar

- **Hiyerarşi:** Hedef (sürücü performansı) → Ana kriterler (İdari / Teknik) → Alt kriterler (devam, kaza, hız ihlali vb.) → En alt düzeydeki “yaprak” kriterler.  
- **İkili karşılaştırma:** Her bir kriter çifti için “A, B’den ne kadar önemli?” sorusu **Saaty ölçeği** (1–9) ile yanıtlanır.  
- **Tutarlılık:** Verilen yanıtların matematiksel olarak tutarlı olup olmadığı kontrol edilir (CR ≤ 0,10 kabul edilir).

#### 4.1.3 Saaty Ölçeği (Özet)

| Değer | Anlamı |
|-------|--------|
| 1 | İki kriter eşit önemde |
| 3 | Biri diğerine göre orta derecede önemli |
| 5 | Biri diğerine göre güçlü önemde |
| 7 | Biri diğerine göre çok güçlü önemde |
| 9 | Biri diğerine göre aşırı önemde |
| 1/3, 1/5, 1/7, 1/9 | Ters yönde önem (diğer kriter daha önemliyse) |

Sistemde bu karşılaştırmalar **kaydırıcı (slider)** ile yapılır; arka planda Saaty değerine çevrilir ve ağırlıklar geometrik ortalama ile hesaplanır.

#### 4.1.4 Çıktı

- Her **yaprak kriter** için bir **global ağırlık** (yüzde).  
- Tüm yaprak kriterlerin ağırlıkları toplamı 1’e (veya %100’e) eşittir.  
- Bu ağırlıklar TOPSIS aşamasında kriter önemi olarak kullanılır.

---

### 4.2 TOPSIS (İdeal Çözüme Benzerliğe Göre Sıralama)

#### 4.2.1 Ne İşe Yarar?

TOPSIS, birden fazla kriterde sayısal verisi olan **alternatifleri** (bu sistemde sürücüleri) **tek bir sıralama** altında toplar. “En iyi” sürücü, tüm kriterler dikkate alınarak **ideal çözüme en yakın**, **negatif ideal çözümden en uzak** olan alternatif olarak tanımlanır.

#### 4.2.2 Temel Adımlar (Özet)

1. **Karar matrisi:** Satırlar = sürücüler, sütunlar = kriterler; hücreler = ham veri (örn. kaza sayısı, fazla mesai saati).  
2. **Normalizasyon:** Farklı birimlerdeki veriler aynı ölçeğe çekilir.  
3. **Ağırlıklı matris:** AHP’den gelen ağırlıklar uygulanır.  
4. **İdeal ve negatif ideal noktaları:** Her kriter için “en iyi” ve “en kötü” değerler belirlenir (fayda kriterinde yüksek iyi, maliyet kriterinde düşük iyi).  
5. **Uzaklıklar:** Her sürücünün ideal noktaya ve negatif ideal noktaya uzaklığı hesaplanır.  
6. **Yakınlık katsayısı:** Her sürücü için \( C_i^* = S_i^- / (S_i^* + S_i^-) \) formülüyle 0–1 arası bir skor elde edilir. Skor **yüksek** olan sürücü **daha iyi** performansa sahiptir.  
7. **Sıralama:** Yakınlık katsayısına göre sürücüler 1., 2., 3. … şeklinde sıralanır. Beraberlik durumunda (isteğe bağlı) çalışılan saat/km gibi ek bir veri kullanılabilir.

#### 4.2.3 Fayda ve Maliyet Kriterleri

- **Fayda kriteri:** Yüksek değer = daha iyi (örn. fazla mesai saati).  
- **Maliyet kriteri:** Düşük değer = daha iyi (örn. kaza sayısı, disiplin cezası, hız ihlali).  

Sistemde her kriter “fayda” veya “maliyet” olarak tanımlıdır; TOPSIS bu ayrıma göre ideal/negatif ideal noktalarını doğru hesaplar.

---

## 5. Kullanılan Veriler ve Kaynakları

Sistem iki tür veri kullanır:

### 5.1 Uzman Girişi (AHP için)

- **Kim:** İnsan kaynakları, operasyon veya üst yönetimden yetkili kişiler (bir veya birden fazla).  
- **Ne:** Kriterler arasında ikili karşılaştırma yanıtları (slider ile).  
- **Nerede:** AHP Hiyerarşik Karşılaştırma sayfası.  
- **Nasıl saklanır:** Kullanıcı adı ve karşılaştırma matrisleri veritabanında tutulur; Toplu Ağırlıklar sayfasında birden fazla değerlendirmenin ortalaması alınabilir.

### 5.2 Sürücü Performans Verisi (TOPSIS için)

- **Kim:** Sürücüler (her satır bir sürücü).  
- **Ne:** Her yaprak kriter için sayısal değer (devamsızlık günü, fazla mesai saati, kaza sayısı, disiplin cezası sayısı, telemetri ihlal sayıları vb.). İsteğe bağlı: çalışılan saat veya km (beraberlik kırıcı).  
- **Nereden:** İK, bordro, güvenlik ve telemetri sistemlerinden derlenen tablo.  
- **Format:** Excel (.xlsx / .xls); ilk satır sütun başlıkları, sonraki satırlar sürücü verisi. Sütun isimleri sistemde tanımlı kriter adları veya kabul edilen alternatif isimlerle eşleşmelidir (ör. “Sicil”, “İşe Devam Durumu”, “Hız İhlali”, “1. Derce Disiplin Cezası”).  
- **Detay:** Veri formatı için proje içindeki **TOPSIS_VERI_TABLOSU_FORMATI.md** dokümanına bakılabilir.

### 5.3 Veri Kaynağı – Kriter Eşlemesi (Özet)

| Veri türü | Örnek kaynak | Sistemdeki kullanım |
|-----------|----------------|----------------------|
| Devamsızlık | İK / personel sistemi | İşe Devam Durumu (maliyet) |
| Fazla mesai | Bordro | Normal / Hafta Tatili / Resmi Tatil Mesaisi (fayda) |
| Kaza kayıtları | Güvenlik / risk | Ölümlü / Yaralanmalı / Maddi Hasarlı Kaza (maliyet) |
| Disiplin cezaları | İdari kayıtlar | 1.–4. Derece Disiplin Cezası (maliyet) |
| Sürüş davranışı | Telemetri / araç takip | Sert Kalkış, Gereksiz Hızlanma, Hız İhlali, Kırmızı Lamba, Rölanti İhlali, Tehlikeli Viraj (maliyet) |
| Çalışma miktarı | Bordro / operasyon | Çalışılan Saat/km veya TOPLAM_CALISMA_SAATI (beraberlik kırıcı) |

---

## 6. Değerlendirme Kriterleri

Kriterler **hiyerarşik** yapıdadır: önce iki ana kriter, onların altında alt kriterler, gerektiğinde bir alt seviye daha. TOPSIS’te kullanılan “yaprak” kriterler en alt seviyedeki, doğrudan sayısal veri girilen kriterlerdir.

### 6.1 Hiyerarşi Özeti

```
Sürücü Performansı (hedef)
│
├── İdari Değerlendirme
│   ├── İşe Devam Durumu                    [yaprak – maliyet]
│   ├── Fazla Mesaili Çalışma Gayreti
│   │   ├── Normal Fazla Mesai             [yaprak – fayda]
│   │   ├── Hafta Tatili Mesaisi           [yaprak – fayda]
│   │   └── Resmi Tatil Mesaisi            [yaprak – fayda]
│   ├── Kaza Durumu
│   │   ├── Ölümle Sonuçlanan Kaza         [yaprak – maliyet]
│   │   ├── Yaralanmalı Kaza               [yaprak – maliyet]
│   │   └── Maddi Hasarlı Kaza             [yaprak – maliyet]
│   └── Disiplin Ceza Durumu
│       ├── 1. Derece Disiplin İhlali Cezası [yaprak – maliyet]
│       ├── 2. Derece Disiplin İhlali Cezası [yaprak – maliyet]
│       ├── 3. Derece Disiplin İhlali Cezası [yaprak – maliyet]
│       └── 4. Derece Disiplin İhlali Cezası [yaprak – maliyet]
│
└── Teknik Değerlendirme (Telemetri)
    ├── Sert Kalkış                         [yaprak – maliyet]
    ├── Gereksiz Hızlanma                   [yaprak – maliyet]
    ├── Hız İhlali                          [yaprak – maliyet]
    ├── Kırmızı Lamba Uyarısı              [yaprak – maliyet]
    ├── Rölanti İhlali                      [yaprak – maliyet]
    └── Tehlikeli Viraj                    [yaprak – maliyet]
```

### 6.2 İdari Kriterler (Kısa Açıklama)

| Kriter | Tip | Kısa açıklama | Veri örneği |
|--------|-----|----------------|-------------|
| İşe Devam Durumu | Maliyet | Yasal izin hariç devamsız gün sayısı | Gün (sayı) |
| Normal Fazla Mesai | Fayda | Hafta içi fazla mesai saati | Saat |
| Hafta Tatili Mesaisi | Fayda | Hafta sonu mesai saati | Saat |
| Resmi Tatil Mesaisi | Fayda | Resmi tatil mesai saati | Saat |
| Ölümle Sonuçlanan Kaza | Maliyet | Ölümlü kaza sayısı | Adet |
| Yaralanmalı Kaza | Maliyet | Yaralanmalı kaza sayısı | Adet |
| Maddi Hasarlı Kaza | Maliyet | Maddi hasarlı kaza sayısı | Adet |
| 1.–4. Derece Disiplin Cezası | Maliyet | İlgili derece disiplin cezası sayısı | Adet |

### 6.3 Teknik (Telemetri) Kriterler (Kısa Açıklama)

| Kriter | Tip | Kısa açıklama |
|--------|-----|----------------|
| Sert Kalkış | Maliyet | Kalkışta tam gaz (tanımlı eşik aşımı) tespiti |
| Gereksiz Hızlanma | Maliyet | Belirli sürede hız artışı + ani fren senaryosu |
| Hız İhlali | Maliyet | Uzun süre yüksek hız (örn. 60 sn üzeri, 80 km/s üzeri) |
| Kırmızı Lamba Uyarısı | Maliyet | Motor arıza (kırmızı) lambası uyarı süresi/koşulu |
| Rölanti İhlali | Maliyet | Uzun süre rölanti (örn. 10 dk üzeri, tanımlı koşullarda) |
| Tehlikeli Viraj | Maliyet | Yüksek hızda tehlikeli yön değişimi (tanımlı g-force eşiği) |

Tüm bu kriterler sayısal (adet, süre vb.) olarak TOPSIS matrisine girilir; sistemde “maliyet” olarak işaretli oldukları için düşük değer daha iyi performans anlamına gelir.

---

## 7. Sistem Nasıl Çalışır?

### 7.1 Genel Akış

1. **AHP aşaması**  
   - Uzman(lar) AHP Hiyerarşik Karşılaştırma sayfasında kriterleri ikili karşılaştırır.  
   - Sistem ağırlıkları hesaplar, tutarlılık kontrolü yapar (CR ≤ 0,10).  
   - Sonuç kaydedilir; istenirse birden fazla uzman değerlendirmesi alınır.

2. **Toplu Ağırlıklar**  
   - Kayıtlı AHP değerlendirmeleri listelenir.  
   - TOPSIS’te kullanılacak değerlendirmeler seçilir; seçilenlerin **ortalama ağırlıkları** hesaplanır.  
   - Kriter hiyerarşisi ağacında bu ağırlıklar görüntülenir.

3. **TOPSIS aşaması**  
   - Sürücü verilerini içeren Excel dosyası yüklenir (sütun isimleri sistemde tanımlı kriterlerle eşleşmeli).  
   - Seçilen (veya ortalama) AHP ağırlıkları TOPSIS’e aktarılır.  
   - TOPSIS analizi çalıştırılır; her sürücü için yakınlık katsayısı ve sıra numarası hesaplanır.  
   - Sonuçlar ekranda gösterilir; istenirse dışa aktarım (Excel/CSV) yapılır.

### 7.2 Sayfa ve Modüller (Özet)

| Sayfa / modül | İşlevi |
|---------------|--------|
| Ana sayfa | Sistem tanıtımı ve AHP / Toplu Ağırlıklar / TOPSIS sayfalarına giriş |
| AHP Hiyerarşik Karşılaştırma | Kriter ikili karşılaştırmaları, ağırlık hesaplama, tutarlılık, kaydetme |
| Toplu Ağırlıklar | Kayıtlı AHP değerlendirmelerini listeleme, seçme, ortalama ağırlık, kriter ağacı, TOPSIS’e geçiş |
| TOPSIS Analizi | Excel yükleme, ağırlık seçimi, TOPSIS çalıştırma, sıralama ve sonuç tablosu |
| Hakkında | Yöntemler, kriterler ve kullanım hakkında bilgi |

---

## 8. Hedef Kitle ve Kullanım Alanları

### 8.1 Hedef Kitle

- **İnsan Kaynakları:** Performans değerlendirme, terfi, ödül, disiplin süreçlerinde veri destekli karar.  
- **Operasyon / Filo Yönetimi:** Sürücü bazlı performans takibi, güvenlik ve verimlilik analizi.  
- **Üst Yönetim:** Stratejik raporlama, kaynak planlama, hedef koyma.  
- **Eğitim Birimleri:** Düşük performanslı alanların tespiti, hedefli eğitim programları.

### 8.2 Örnek Kullanım Senaryoları

- Yıllık / dönemsel performans değerlendirmesi ve sıralama.  
- Terfi veya ödül için objektif kıstas olarak skor/sıra kullanımı.  
- Kaza veya disiplin odaklı risk analizi ve eğitim ihtiyacı belirleme.  
- Telemetri verilerine göre sürüş davranışı iyileştirme ve eğitim önceliklendirme.  
- Farklı bölge veya hatlar arası performans karşılaştırması (aynı kriter ve ağırlıklarla).

---

## 9. Sistemin Sağladığı Faydalar

| Fayda | Açıklama |
|-------|----------|
| **Objektiflik** | Sonuçlar veri ve algoritmaya dayanır; kişisel önyargı azaltılır. |
| **Tutarlılık** | Aynı veri ve ağırlıklarla tekrarlanabilir sonuçlar. |
| **Şeffaflık** | Kriterler ve ağırlıklar açık; sürücü ve birimler sonucu anlayabilir. |
| **Çok boyutluluk** | İdari ve teknik göstergeler tek çatı altında, ağırlıklı biçimde kullanılır. |
| **Grup kararı** | Birden fazla uzmanın AHP girişi ile konsensüs ağırlıkları oluşturulabilir. |
| **Veri odaklı karar** | Terfi, ödül, eğitim planı gibi kararlar sayısal çıktılarla desteklenir. |
| **Denetlenebilirlik** | Hangi kriter, hangi ağırlıkla kullanıldığı ve sıralamanın nasıl elde edildiği raporlanabilir. |

---

## Ek: İlgili Dokümanlar

- **SURUCU_PERFORMANS_DEGERLENDIRME_SISTEMI_TEKNIK_RAPORU.md** – Teknik detaylar, algoritma açıklamaları, mimari.  
- **TOPSIS_VERI_TABLOSU_FORMATI.md** – TOPSIS için Excel tablosu formatı ve kabul edilen sütun isimleri.

---

*Bu tanıtım dokümanı, Sürücü Performans Değerlendirme Sistemi’nin amacını, bilimsel yaklaşımını, yöntemleri, verileri, kriterleri ve kullanımını özetlemektedir. Güncel teknik detaylar için teknik rapora ve veri formatı için TOPSIS veri tablosu formatı dokümanına başvurunuz.*
