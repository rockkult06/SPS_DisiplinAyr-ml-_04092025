// Kriter hiyerarşisi ve yardımcı fonksiyonlar

export interface Criterion {
  id: string
  name: string
  level: number
  parentId?: string
  children: string[]
  isLeaf: boolean
  type: "benefit" | "cost"
  description: string
  excelAliases?: string[] // Excel sütun isimleri için alternatif isimler
}

export const criteriaHierarchy: Record<string, Criterion> = {
  // Ana Kriterler (Seviye 1)
  admin: {
    id: "admin",
    name: "İdari Değerlendirme",
    level: 1,
    children: ["attendance", "overtime", "accident", "discipline_penalty"],
    isLeaf: false,
    type: "benefit",
    description: "Sürücünün idari kurallara ve şirket politikalarına uyumunu ölçer",
  },
  technical: {
    id: "technical",
    name: "Teknik Değerlendirme (Telemetri)",
    level: 1,
    children: ["hard_braking", "faulty_acceleration", "speed_violation", "engine_fault_light", "idle_violation", "dangerous_turn"],
    isLeaf: false,
    type: "cost",
    description: "Sürücünün araç kullanım alışkanlıklarını telemetri verileri ile ölçer",
  },

  // İdari Değerlendirme Alt Kriterleri (Seviye 2)
  attendance: {
    id: "attendance",
    name: "Sağlık Sebebiyle Devamsızlık",
    level: 2,
    parentId: "admin",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Sağlık raporu nedeniyle işe gelmediği gün sayısı",
    excelAliases: ["Sağlık Sebebiyle Devamsızlık", "Sağlık Sebebiyle Devamsızlık Durumu"],
  },
  overtime: {
    id: "overtime",
    name: "Fazla Mesaili Çalışma Gayreti",
    level: 2,
    parentId: "admin",
    children: ["normal_overtime", "weekend_overtime", "holiday_overtime"],
    isLeaf: false,
    type: "benefit",
    description: "Fazla mesaiye kalma istekliliği",
  },
  accident: {
    id: "accident",
    name: "Kaza Durumu",
    level: 2,
    parentId: "admin",
    children: ["fatal_accident", "injury_accident", "material_damage_accident"],
    isLeaf: false,
    type: "cost",
    description: "Çalışılan saate göre kaza sayısı",
  },
  discipline_penalty: {
    id: "discipline_penalty",
    name: "Disiplin Ceza Durumu",
    level: 2,
    parentId: "admin",
    children: ["first_degree_penalty", "second_degree_penalty", "third_degree_penalty", "fourth_degree_penalty"],
    isLeaf: false,
    type: "cost",
    description: "Disiplin ceza durumu",
  },

  // Fazla Mesai Alt Kriterleri (Seviye 3)
  normal_overtime: {
    id: "normal_overtime",
    name: "Normal Fazla Mesai",
    level: 3,
    parentId: "overtime",
    children: [],
    isLeaf: true,
    type: "benefit",
    description: "Hafta içi yapılan normal fazla mesai süresi",
    excelAliases: ["Normal Fazla Mesai"],
  },
  weekend_overtime: {
    id: "weekend_overtime",
    name: "Hafta Tatili Mesaisi",
    level: 3,
    parentId: "overtime",
    children: [],
    isLeaf: true,
    type: "benefit",
    description: "Hafta sonu tatillerinde yapılan mesai süresi",
    excelAliases: ["Hafta Tatili Mesaisi"],
  },
  holiday_overtime: {
    id: "holiday_overtime",
    name: "Resmi Tatil Mesaisi",
    level: 3,
    parentId: "overtime",
    children: [],
    isLeaf: true,
    type: "benefit",
    description: "Resmi tatillerde yapılan mesai süresi",
    excelAliases: ["Resmi Tatil Mesaisi"],
  },

  // Kaza Alt Kriterleri (Seviye 3)
  fatal_accident: {
    id: "fatal_accident",
    name: "Ölümle Sonuçlanan Kaza",
    level: 3,
    parentId: "accident",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Ölümle sonuçlanan kaza sayısı",
    excelAliases: ["Ölümle Sonuçlanan Kaza"],
  },
  injury_accident: {
    id: "injury_accident",
    name: "Yaralanmalı Kaza",
    level: 3,
    parentId: "accident",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Yaralanma ile sonuçlanan kaza sayısı",
    excelAliases: ["Yaralanmalı Kaza"],
  },
  material_damage_accident: {
    id: "material_damage_accident",
    name: "Maddi Hasarlı Kaza",
    level: 3,
    parentId: "accident",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Sadece maddi hasarla sonuçlanan kaza sayısı",
    excelAliases: ["Maddi Hasarlı Kaza"],
  },

  // Disiplin Ceza Alt Kriterleri (Seviye 3)
  first_degree_penalty: {
    id: "first_degree_penalty",
    name: "1. Derece Disiplin İhlali Cezası",
    level: 3,
    parentId: "discipline_penalty",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "En hafif disiplin ihlali cezası sayısı",
    excelAliases: ["1. Derece Disiplin İhlali Cezası", "1'nci Derece Disiplin İhlali Cezası"],
  },
  second_degree_penalty: {
    id: "second_degree_penalty",
    name: "2. Derece Disiplin İhlali Cezası",
    level: 3,
    parentId: "discipline_penalty",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Orta düzey disiplin ihlali cezası sayısı",
    excelAliases: ["2. Derece Disiplin İhlali Cezası", "2'nci Derece Disiplin İhlali Cezası"],
  },
  third_degree_penalty: {
    id: "third_degree_penalty",
    name: "3. Derece Disiplin İhlali Cezası",
    level: 3,
    parentId: "discipline_penalty",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Ciddi disiplin ihlali cezası sayısı",
    excelAliases: [
      "3. Derece Disiplin İhlali Cezası",
      "3'ncü Derece Disiplin İhlali Cezası",
      "3'nci Derece Disiplin İhlali Cezası",
    ],
  },
  fourth_degree_penalty: {
    id: "fourth_degree_penalty",
    name: "4. Derece Disiplin İhlali Cezası",
    level: 3,
    parentId: "discipline_penalty",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "En ağır disiplin ihlali cezası sayısı",
    excelAliases: [
      "4. Derece Disiplin İhlali Cezası",
      "4'ncü Derece Disiplin İhlali Cezası",
      "4'nci Derece Disiplin İhlali Cezası",
    ],
  },

  // Teknik Değerlendirme Alt Kriterleri (Seviye 2) - Telemetri Kriterleri
  hard_braking: {
    id: "hard_braking",
    name: "Sert Kalkış",
    level: 2,
    parentId: "technical",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Otobüs kalkışı sırasında tam gaza basılması durumunun tespitidir. (İhlal Şartları; İlk Hız: 0 km/h, Kontak Açık, Hız Değişimi (saniyede): 5,4 km/h)",
    excelAliases: ["Sert Kalkış", "SertKalkış"],
  },
  faulty_acceleration: {
    id: "faulty_acceleration",
    name: "Hatalı Hızlanma",
    level: 2,
    parentId: "technical",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "120 sn içerisinde sürekli hız artışı gerçekleşen aracın ani fren yapıp 0-5 km/s aralığına düşmesidir. (Senaryo 120 sn de gerçekleşmelidir. Araç hızı >20km/h iken hızlanarak >50km/h üstüne yükselmelidir. Bu yükselik esnasında ani olarak <5 km/s değerine düşmeli, orada 10 sn kalmalı ve tekrar >20 km/s hız artışı yaşanmalıdır.)",
    excelAliases: ["Hatalı Hızlanma", "HatalıHızlanma"],
  },
  speed_violation: {
    id: "speed_violation",
    name: "Hız İhlali",
    level: 2,
    parentId: "technical",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Konum ve rota önemli olmaksızın, aracın, \"60 sn den fazla süre\" ve 80 km/s den büyük bir hızda kullanılmasını ifade etmektedir.",
    excelAliases: ["Hız İhlali", "Hızİhlali"],
  },
  engine_fault_light: {
    id: "engine_fault_light",
    name: "Kırmızı Lamba Uyarısı",
    level: 2,
    parentId: "technical",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Motor Arıza (Kırmızı) Lambası ciddi motor arızasının göstergesidir. Kılavuzlarda \"bu lamba yandığında trafik kontrol edilerek aracın sağ tarafa parkı gerçekleştirilmeli ve servise haber verilmelidir\" deniliyor. (İhlal Şartları; 120 sn boyunca Lamba aktif olacak + en az 250 metre yolculuk yapılmış olacaktır.)",
    excelAliases: ["Kırmızı Lamba Uyarısı", "KırmızıLambaUyarısı", "Motor Arıza Lambası", "MotorArızaLambası", "Motor (Kırmızı Lamba) Uyarısı"],
  },
  idle_violation: {
    id: "idle_violation",
    name: "Rölanti İhlali",
    level: 2,
    parentId: "technical",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "600 sn (10 dk) üstünde rölanti yapan araçlar tespit edilmektedir. (İhlal Şartları; Kontak AÇIK, Motor Devri 400-3000 d/d aralığında, Araç Hızı 0-3 km/s)",
    excelAliases: ["Rölanti İhlali", "Rölantiİhlali"],
  },
  dangerous_turn: {
    id: "dangerous_turn",
    name: "Tehlikeli Viraj",
    level: 2,
    parentId: "technical",
    children: [],
    isLeaf: true,
    type: "cost",
    description: "Aracın savrulma ve yön değişimi sürecinin tehlikeli şekilde gerçekleştirilmesini ifade etmektedir. (Senaryo Şartları; Araç Hızı > 70 km/s, Yön Değişimi > 45 derece, İşlem Süreci =5 sn, gForce> 1,5 g yatay ivme)",
    excelAliases: ["Tehlikeli Viraj", "TehlikeliViraj"],
  },
}

// Yardımcı fonksiyonlar
export function getCriteriaById(id: string): Criterion | undefined {
  return criteriaHierarchy[id]
}

export function getMainCriteria(): Criterion[] {
  return Object.values(criteriaHierarchy).filter((c) => c.level === 1)
}

export function getLeafCriteria(): Criterion[] {
  return Object.values(criteriaHierarchy).filter((c) => c.isLeaf)
}

export function getCriteriaPath(criterionId: string): Criterion[] {
  const path: Criterion[] = []
  let current = getCriteriaById(criterionId)

  while (current) {
    path.unshift(current)
    current = current.parentId ? getCriteriaById(current.parentId) : undefined
  }

  return path
}

export function getCriteriaBenefitType(criterionId: string): "benefit" | "cost" {
  const criterion = getCriteriaById(criterionId)
  return criterion?.type || "benefit"
}

export function initializeHierarchyData(): Record<string, number[][]> {
  const hierarchyData: Record<string, number[][]> = {}

  // Ana kriterler için matris
  const mainCriteria = getMainCriteria()
  if (mainCriteria.length > 1) {
    hierarchyData["main"] = Array(mainCriteria.length)
      .fill(null)
      .map(() => Array(mainCriteria.length).fill(1))
  }

  // Her ana kriter için alt kriterler matrisi
  Object.values(criteriaHierarchy).forEach((criterion) => {
    if (!criterion.isLeaf && criterion.children.length > 1) {
      hierarchyData[criterion.id] = Array(criterion.children.length)
        .fill(null)
        .map(() => Array(criterion.children.length).fill(1))
    }
  })

  return hierarchyData
}

export function getExcelColumnMappings(): Record<string, string> {
  const leafCriteria = getLeafCriteria()
  const mappings: Record<string, string> = {}

  leafCriteria.forEach((criterion) => {
    mappings[criterion.name] = criterion.id
    // Excel aliases'ları da ekle
    if (criterion.excelAliases) {
      criterion.excelAliases.forEach((alias) => {
        mappings[alias] = criterion.id
      })
    }
  })

  return mappings
}

// Excel sütun ismi ile kriter ID'sini eşleştir
export function matchExcelColumnToCriteria(columnName: string): string | null {
  const leafCriteria = getLeafCriteria()

  // Önce tam eşleşme ara
  for (const criterion of leafCriteria) {
    if (criterion.excelAliases?.includes(columnName)) {
      return criterion.id
    }
  }

  // Sonra benzer isim ara (normalize edilmiş)
  const normalizedColumn = normalizeString(columnName)

  for (const criterion of leafCriteria) {
    // Kriter adı ile karşılaştır
    if (normalizeString(criterion.name) === normalizedColumn) {
      return criterion.id
    }

    // Excel aliases ile karşılaştır
    if (criterion.excelAliases) {
      for (const alias of criterion.excelAliases) {
        if (normalizeString(alias) === normalizedColumn) {
          return criterion.id
        }
      }
    }
  }

  return null
}

// String'i normalize et (boşlukları kaldır, küçük harfe çevir, özel karakterleri temizle)
function normalizeString(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+/g, "") // Boşlukları kaldır
    .replace(/['"]/g, "") // Tırnak işaretlerini kaldır
    .replace(/[()]/g, "") // Parantezleri kaldır
    .trim()
}
