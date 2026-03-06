# TOPSIS Analizi – Veri Tablosu Formatı

TOPSIS analizi için sisteme yükleyeceğiniz Excel dosyasının formatı aşağıdaki gibi olmalıdır.

---

## 1. Genel Kurallar

- **Dosya formatı:** Excel (`.xlsx` veya `.xls`). İlk sayfa kullanılır.
- **İlk satır:** Sütun başlıkları (kriter ve alan adları).
- **Veri satırları:** İkinci satırdan itibaren her satır bir sürücüyü temsil eder.
- **Sayılar:** Ondalık ayırıcı olarak virgül (`,`) veya nokta (`.`) kullanılabilir; sistem ikisini de kabul eder.
- **En az:** 1 başlık satırı + en az 1 veri satırı (toplam en az 2 satır) olmalıdır.

---

## 2. Zorunlu ve Opsiyonel Sütunlar

### 2.1 Zorunlu: Sürücü Kimliği

- **Önerilen başlık:** `Sicil` veya `Sicil No` (veya Sürücü No, Personel No, ID vb.)
- **Açıklama:** Sistemde alternatif (sürücü) adı olarak kullanılır. Tabloda **Sicil** sütunu varsa o kullanılır; yoksa **ilk sütun** sürücü kimliği sayılır.
- **Veri tipi:** Metin veya sayı (sistem metne çevirir).
- **Not:** Sütun sırası için "Sıra" ilk sütunsa, sürücü kimliği olarak **Sicil** sütunu kullanılır (Sicil varsa).

### 2.2 Opsiyonel: Çalışılan Saat / Km (beraberlik kırıcı)

- **Kabul edilen başlıklar:** `Çalışılan Saat/km`, `Çalışılan St/km`, `TOPLAM_CALISMA_SAATI`, `KM`
- **Açıklama:** Sürücünün çalıştığı saat veya km. TOPSIS’te yakınlık katsayıları eşit olduğunda sıralamada **beraberlik kırıcı** olarak kullanılır (yüksek olan üstte).
- **Veri tipi:** Sayı.

### 2.3 Zorunlu: Kriter Sütunları

Aşağıdaki **yaprak kriterler** için her birinden **en az bir sütun** bulunmalıdır. Sütun başlığı, ilgili kriterin **resmi adı** veya **alternatif adlarından (excelAliases) biri** ile birebir veya boşluksuz/normalize eşleşirse sistem sütunu tanır.

Kriter sütunları **sayı** içermelidir (sayı olmayan hücreler 0 kabul edilir).

---

## 3. Kriter Sütun Başlıkları (Kabul Edilen İsimler)

Excel’deki sütun başlığı aşağıdaki tablodaki **Kriter adı** veya **Alternatif başlıklar** sütunlarından biriyle aynı (veya boşluksuz/normalize eşleşen) olmalıdır.

| Kriter (sistem adı) | Alternatif başlıklar (Excel’de kullanılabilir) |
|---------------------|--------------------------------------------------|
| **İşe Devam Durumu** | İşe Devam Durumu, Sağlık Sebebiyle Devamsızlık, Sağlık Sebebiyle Devamsızlık Durumu |
| **Normal Fazla Mesai** | Normal Fazla Mesai |
| **Hafta Tatili Mesaisi** | Hafta Tatili Mesaisi |
| **Resmi Tatil Mesaisi** | Resmi Tatil Mesaisi |
| **Ölümle Sonuçlanan Kaza** | Ölümle Sonuçlanan Kaza |
| **Yaralanmalı Kaza** | Yaralanmalı Kaza |
| **Maddi Hasarlı Kaza** | Maddi Hasarlı Kaza |
| **1. Derece Disiplin İhlali Cezası** | 1. Derece Disiplin İhlali Cezası, 1'nci Derece Disiplin İhlali Cezası |
| **2. Derece Disiplin İhlali Cezası** | 2. Derece Disiplin İhlali Cezası, 2'nci Derece Disiplin İhlali Cezası |
| **3. Derece Disiplin İhlali Cezası** | 3. Derece Disiplin İhlali Cezası, 3'ncü / 3'nci Derece Disiplin İhlali Cezası |
| **4. Derece Disiplin İhlali Cezası** | 4. Derece Disiplin İhlali Cezası, 4'ncü / 4'nci Derece Disiplin İhlali Cezası |
| **Sert Kalkış** | Sert Kalkış, SertKalkış |
| **Gereksiz Hızlanma** | Gereksiz Hızlanma, GereksizHızlanma, Hatalı Hızlanma, HatalıHızlanma |
| **Hız İhlali** | Hız İhlali, Hızİhlali |
| **Kırmızı Lamba Uyarısı** | Kırmızı Lamba Uyarısı, Kırmızı Lamba, KırmızıLambaUyarısı, Motor Arıza Lambası, Motor (Kırmızı Lamba) Uyarısı |
| **Rölanti İhlali** | Rölanti İhlali, Rölantiİhlali |
| **Tehlikeli Viraj** | Tehlikeli Viraj, TehlikeliViraj |
| **Ölümle Sonuçlanan Kaza** | Ölümle Sonuçlanan Kaza, Ölümlü Kaza Sayısı |
| **Yaralanmalı Kaza** | Yaralanmalı Kaza, Yaralanmalı Kaza Sayısı |
| **Maddi Hasarlı Kaza** | Maddi Hasarlı Kaza, Maddi Hasarlı Kaza Sayısı |
| **1.–4. Derece Disiplin İhlali Cezası** | 1. Derece Disiplin İhlali Cezası, 1. Derce Disiplin Cezası (ve 2., 3., 4. aynı mantık) |

---

## 4. Örnek Tablo Yapısı (Minimal)

Aşağıdaki sütun sırası zorunlu değildir; sadece başlık isimleri önemlidir.

| Sicil No | Çalışılan Saat/km | İşe Devam Durumu | Normal Fazla Mesai | Hafta Tatili Mesaisi | Resmi Tatil Mesaisi | Ölümle Sonuçlanan Kaza | Yaralanmalı Kaza | Maddi Hasarlı Kaza | 1. Derece Disiplin İhlali Cezası | 2. Derece Disiplin İhlali Cezası | 3. Derece Disiplin İhlali Cezası | 4. Derece Disiplin İhlali Cezası | Sert Kalkış | Gereksiz Hızlanma | Hız İhlali | Kırmızı Lamba Uyarısı | Rölanti İhlali | Tehlikeli Viraj |
|----------|-------------------|------------------|--------------------|-----------------------|----------------------|-------------------------|------------------|--------------------|-----------------------------------|-----------------------------------|-----------------------------------|-----------------------------------|-------------|--------------------|------------|------------------------|----------------|------------------|
| 10001    | 12500              | 2                | 45                 | 12                    | 0                    | 0                      | 0                | 1                  | 0                                 | 0                                 | 0                                 | 0                                 | 3           | 2                  | 0          | 0                      | 5              | 1                 |
| 10002    | 11800              | 0                | 52                 | 8                     | 2                    | 0                      | 0                | 0                  | 0                                 | 1                                 | 0                                 | 0                                 | 1           | 0                  | 1          | 0                      | 2              | 0                 |

- **Sicil No:** Sürücü kimliği (ilk sütun).
- **Çalışılan Saat/km:** İsteğe bağlı; beraberlik kırıcı için kullanılır.
- Diğer sütunlar: İlgili kriterin sayısal değeri (adet, saat, gün vb. tanıma uygun).

---

## 5. Önemli Notlar

1. **AHP ağırlıkları:** TOPSIS analizi, **Toplu Ağırlıklar** sayfasında seçtiğiniz değerlendirmelerin ortalama ağırlıklarını kullanır. Excel’de sadece **bu ağırlıklarda karşılığı olan kriterler** kullanılır; diğer sütunlar yoksa o kriter için değer 0 kabul edilir.
2. **Eşleşme:** Sütun başlığı önce **tam eşleşme**, sonra **boşluksuz/normalize eşleşme**, en sonda **kısmi eşleşme** (başlık kriter adını içeriyorsa) ile aranır. Mümkünse tablodaki **Kriter adı** veya **Alternatif başlıklar**dan birini aynen kullanın.
3. **Eksik sütun:** Bir kriterin sütunu yoksa o kriter için tüm sürücüler 0 değer alır.
4. **Fazla sütun:** Excel’de ekstra sütunlar bulunabilir; sistem sadece yukarıdaki kriterlerle eşleşen sütunları kullanır.

---

## 6. Kısa Özet

- **İlk sütun:** Sürücü kimliği (örn. Sicil No).
- **İsteğe bağlı:** Çalışılan Saat/km (beraberlik kırıcı).
- **Diğer sütunlar:** Yukarıdaki tablodaki kriter adlarından biriyle başlık eşleşmeli, değerler sayı olmalı.
- **Dosya:** .xlsx veya .xls, ilk sayfa, en az 2 satır (1 başlık + en az 1 veri).

Bu format TOPSIS analizi için yeterlidir; sütun sırası serbesttir, sadece başlık isimleri doğru olmalıdır.
