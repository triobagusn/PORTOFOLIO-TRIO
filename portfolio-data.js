window.PORTFOLIO_CONFIG = {
  profile: {
    name: "Trio Bagus Nugroho",
    email: "triobagusn@gmail.com",
    linkedin: "linkedin.com/in/trio-bagus-nugroho-60559b205",
    phone: "+62 851-3651-3273"
  },
  projects: [
    {
      id: "warehouse-control",
      category: ["inventory", "automation"],
      number: "01",
      accent: "cyan",
      icon: "▦",
      stack: ["Next.js", "Supabase", "Google Apps Script", "PostgreSQL", "PWA"],
      en: {
        title: "Warehouse Raw Material Control",
        subtitle: "Integrated inventory, FIFO, HOLD, STO, capacity, and service-level monitoring.",
        label: "INVENTORY CONTROL",
        challenge: "Operational data was spread across multiple transaction sheets, making stock ownership, batch position, unloading performance, and exceptions difficult to monitor consistently.",
        solution: "An integrated control system combines incoming, outgoing, HOLD, stock transfer, FIFO, warehouse capacity, service-level data, and alert logic into one operational view.",
        contribution: ["Mapped end-to-end warehouse flows and exception rules", "Designed stock, batch, and role-based control logic", "Developed responsive dashboards and operational forms", "Connected spreadsheet operations with Supabase synchronization"],
        features: ["Live stock by batch and plant", "FIFO and near-expiry alerts", "HOLD and transfer visibility", "Warehouse capacity drill-down", "Service-level reporting and export"]
      },
      idn: {
        title: "Kontrol Raw Material Warehouse",
        subtitle: "Integrasi stok, FIFO, HOLD, STO, kapasitas, dan service level.",
        label: "KONTROL INVENTORY",
        challenge: "Data operasional tersebar di beberapa sheet transaksi sehingga kepemilikan stok, posisi batch, kinerja bongkar, dan kondisi pengecualian sulit dipantau secara konsisten.",
        solution: "Sistem kontrol terintegrasi menggabungkan barang masuk, keluar, HOLD, perpindahan stok, FIFO, kapasitas gudang, service level, dan logika alert dalam satu tampilan operasional.",
        contribution: ["Memetakan alur warehouse dan aturan pengecualian", "Mendesain logika stok, batch, dan hak akses", "Membangun dashboard serta form operasional responsif", "Menghubungkan spreadsheet operasional dengan sinkronisasi Supabase"],
        features: ["Stok live per batch dan plant", "Alert FIFO dan near expiry", "Visibilitas HOLD dan perpindahan", "Drill-down kapasitas gudang", "Laporan service level dan export"]
      }
    },
    {
      id: "stock-traceability",
      category: ["inventory"],
      number: "02",
      accent: "violet",
      icon: "⌕",
      stack: ["PWA", "Google Apps Script", "Google Sheets", "REST API", "Vercel"],
      en: {
        title: "Multi-Plant Stock Traceability",
        subtitle: "Fast stock search, QR-level history, available inventory, and batch movement.",
        label: "TRACEABILITY",
        challenge: "Stock records were distributed across many product sheets and plants, slowing down searches and making transaction history difficult to explain from a single interface.",
        solution: "A mobile-friendly traceability platform searches across multiple stock sources, shows available inventory, follows QR/SKU history, and presents batch-level movements with clear ownership logic.",
        contribution: ["Defined stock-reduction rules for internal and external destinations", "Designed global actual-versus-zero KG display behavior", "Built cross-file search and available-stock views", "Prepared export logic grouped by material brand and batch"],
        features: ["Cross-plant search", "QR and batch transaction history", "Available stock view", "Global stock display modes", "Excel export with arrival notes"]
      },
      idn: {
        title: "Traceability Stok Multi-Plant",
        subtitle: "Pencarian cepat, riwayat QR, stok tersedia, dan pergerakan batch.",
        label: "TRACEABILITY",
        challenge: "Catatan stok tersebar di banyak sheet produk dan beberapa plant sehingga pencarian lambat dan riwayat transaksi sulit dijelaskan dari satu antarmuka.",
        solution: "Platform traceability mobile mencari lintas sumber stok, menampilkan stok tersedia, mengikuti riwayat QR/SKU, dan menyajikan pergerakan batch dengan logika kepemilikan yang jelas.",
        contribution: ["Menentukan aturan pengurangan stok untuk tujuan internal dan eksternal", "Mendesain mode global KG aktual versus KG nol", "Membangun pencarian lintas file dan tampilan stok tersedia", "Menyiapkan export berdasarkan merk dan batch"],
        features: ["Pencarian lintas plant", "Riwayat transaksi QR dan batch", "Tampilan stok tersedia", "Mode tampilan stok global", "Export Excel dengan catatan kedatangan"]
      }
    },
    {
      id: "waste-flow",
      category: ["inventory", "workflow", "automation"],
      number: "03",
      accent: "lime",
      icon: "↻",
      stack: ["React", "Supabase", "Recharts", "Apps Script", "Excel/PDF Export"],
      en: {
        title: "Waste Processing & Yield Management",
        subtitle: "Waste intake, grinding, clean output, shipment, stock opname, and yield analytics.",
        label: "PROCESS MANAGEMENT",
        challenge: "Waste intake, processing, clean output, dirty output, shipment, and physical stock needed one connected flow while preserving source detail by area, line, shift, and category.",
        solution: "A process management application connects every stage from waste intake to output and shipment, supported by shift access, yield logic, stock opname, capacity monitoring, and management summaries.",
        contribution: ["Structured the Waste → Grinding → Output → Shipment workflow", "Designed line, shift, area, and category detail", "Built yield, stock, and capacity monitoring logic", "Created management dashboards, filters, and PDF/Excel reporting"],
        features: ["Multi-item waste intake", "Shift PIN access", "Clean and dirty output calculation", "Actual stock-opname snapshot", "Yield, capacity, and trend analysis"]
      },
      idn: {
        title: "Manajemen Proses Waste & Yield",
        subtitle: "Waste masuk, giling, hasil, bon, stok opname, dan analisis yield.",
        label: "MANAJEMEN PROSES",
        challenge: "Waste masuk, proses giling, hasil bersih, hasil kotor, pengiriman, dan stok fisik membutuhkan satu alur terhubung dengan detail sumber berdasarkan area, line, shift, dan kategori.",
        solution: "Aplikasi manajemen proses menghubungkan setiap tahap dari waste masuk sampai hasil dan pengiriman, dilengkapi akses shift, logika yield, stok opname, monitoring kapasitas, dan ringkasan manajemen.",
        contribution: ["Menyusun alur Waste → Giling → Hasil → Pengiriman", "Mendesain detail line, shift, area, dan kategori", "Membangun logika yield, stok, dan kapasitas", "Membuat dashboard, filter, serta laporan PDF/Excel"],
        features: ["Input waste multi-item", "Akses PIN per shift", "Perhitungan hasil bersih dan kotor", "Snapshot stok opname aktual", "Analisis yield, kapasitas, dan tren"]
      }
    },
    {
      id: "digital-approval",
      category: ["workflow", "automation"],
      number: "04",
      accent: "orange",
      icon: "✓",
      stack: ["Next.js", "Supabase", "PostgreSQL", "PDF Generation", "Telegram"],
      en: {
        title: "Digital Document Approval Workflow",
        subtitle: "Structured document creation, multi-level approval, revision, audit trail, and final PDF.",
        label: "APPROVAL WORKFLOW",
        challenge: "Operational documents required consistent numbering, flexible content, multiple approval levels, revision handling, notifications, attachments, and a reliable final archive.",
        solution: "A digital approval workflow standardizes document creation and routing from author to approvers, preserves status history, supports rejection and revision, and generates a controlled final PDF.",
        contribution: ["Mapped document roles and approval hierarchy", "Designed status transitions and revision behavior", "Structured numbering, signatures, attachments, and archive flow", "Planned database, notification, and PDF architecture"],
        features: ["Multi-level approval", "Reject and revision loop", "Pending-signature queue", "Automated numbering", "Final PDF and audit trail"]
      },
      idn: {
        title: "Workflow Persetujuan Dokumen Digital",
        subtitle: "Pembuatan dokumen, approval bertingkat, revisi, audit trail, dan PDF final.",
        label: "WORKFLOW APPROVAL",
        challenge: "Dokumen operasional membutuhkan penomoran konsisten, isi fleksibel, approval bertingkat, revisi, notifikasi, lampiran, dan arsip final yang dapat dipertanggungjawabkan.",
        solution: "Workflow approval digital menstandarkan pembuatan dan alur dokumen dari pembuat ke approver, menyimpan histori status, mendukung reject dan revisi, serta menghasilkan PDF final terkendali.",
        contribution: ["Memetakan role dan hierarki approval", "Mendesain transisi status dan perilaku revisi", "Menyusun penomoran, tanda tangan, lampiran, dan arsip", "Merancang arsitektur database, notifikasi, dan PDF"],
        features: ["Approval bertingkat", "Siklus reject dan revisi", "Daftar pending tanda tangan", "Penomoran otomatis", "PDF final dan audit trail"]
      }
    },
    {
      id: "service-reporting",
      category: ["automation"],
      number: "05",
      accent: "blue",
      icon: "↗",
      stack: ["Google Apps Script", "Google Sheets", "Email", "Telegram", "Excel"],
      en: {
        title: "Service Level & Reporting Automation",
        subtitle: "Consolidated daily operations data with controlled locking, distribution, and exports.",
        label: "REPORTING AUTOMATION",
        challenge: "Daily service-level data came from multiple operational sheets and needed validation, date control, exclusions, locking, transfer, and reliable distribution without disrupting existing scripts.",
        solution: "A controlled automation consolidates data into a review view, keeps the active reporting date until locked, transfers approved results, and produces scheduled email, Telegram, PDF, and Excel outputs.",
        contribution: ["Defined consolidation and exclusion rules", "Designed lock-before-transfer behavior", "Added scheduled and manual report delivery", "Protected compatibility with existing Apps Script workflows"],
        features: ["Multi-source consolidation", "Controlled date locking", "Scheduled daily reports", "Email and Telegram delivery", "Formula-safe Excel export"]
      },
      idn: {
        title: "Otomasi Service Level & Laporan",
        subtitle: "Konsolidasi data harian dengan kontrol kunci, distribusi, dan export.",
        label: "OTOMASI LAPORAN",
        challenge: "Data service level harian berasal dari beberapa sheet operasional dan memerlukan validasi, kontrol tanggal, pengecualian, penguncian, transfer, serta distribusi tanpa mengganggu script yang sudah berjalan.",
        solution: "Otomasi terkendali menggabungkan data ke tampilan review, mempertahankan tanggal laporan sampai dikunci, memindahkan hasil yang disetujui, dan membuat output email, Telegram, PDF, serta Excel.",
        contribution: ["Menentukan aturan konsolidasi dan pengecualian", "Mendesain perilaku kunci sebelum transfer", "Menambahkan pengiriman laporan terjadwal dan manual", "Menjaga kompatibilitas dengan Apps Script yang ada"],
        features: ["Konsolidasi multi-sumber", "Penguncian tanggal terkendali", "Laporan harian terjadwal", "Distribusi email dan Telegram", "Export Excel aman dari error rumus"]
      }
    },
    {
      id: "mobile-hub",
      category: ["workflow"],
      number: "06",
      accent: "pink",
      icon: "◈",
      stack: ["PWA", "Responsive UI", "Service Worker", "Vercel", "Web Manifest"],
      en: {
        title: "Mobile Operations Hub",
        subtitle: "One accessible entry point for warehouse tools, designed for varied field devices.",
        label: "FIELD EXPERIENCE",
        challenge: "Operational tools needed to be accessible across different phones without relying on links that failed on certain devices, while remaining easy to install and navigate.",
        solution: "A lightweight PWA hub provides a normal web address, installable experience, responsive navigation, service-worker caching, and direct access to selected operational modules.",
        contribution: ["Designed the mobile-first navigation concept", "Prepared PWA manifest, icons, and service worker", "Resolved deployment structure and public-asset issues", "Focused on compatibility across field devices"],
        features: ["Installable web app", "Responsive module launcher", "Normal public URL", "Offline-ready shell", "Cross-device accessibility"]
      },
      idn: {
        title: "Mobile Operations Hub",
        subtitle: "Satu pintu akses tool warehouse yang ramah berbagai perangkat lapangan.",
        label: "PENGALAMAN LAPANGAN",
        challenge: "Tool operasional harus dapat diakses dari berbagai jenis HP tanpa bergantung pada link yang gagal di perangkat tertentu, sekaligus mudah dipasang dan dinavigasi.",
        solution: "PWA ringan menyediakan alamat web normal, pengalaman instalasi, navigasi responsif, cache service worker, dan akses langsung ke modul operasional terpilih.",
        contribution: ["Mendesain konsep navigasi mobile-first", "Menyiapkan manifest, ikon, dan service worker PWA", "Menyelesaikan struktur deployment dan aset publik", "Berfokus pada kompatibilitas perangkat lapangan"],
        features: ["Web app yang dapat diinstal", "Launcher modul responsif", "URL publik normal", "Shell siap offline", "Akses lintas perangkat"]
      }
    }
  ]
};
