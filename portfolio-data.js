window.PORTFOLIO = {
  profile: {
    name: "Trio Bagus Nugroho",
    email: "triobagusn@gmail.com",
    linkedin: "https://www.linkedin.com/in/trio-bagus-nugroho-60559b205/",
    phone: "+6285136513273",
    whatsapp: "https://wa.me/6285136513273"
  },
  projects: [
    {
      id: "wms-rm",
      category: "inventory",
      accent: "blue",
      icon: "▦",
      title: { id: "Warehouse Raw Material Control", en: "Warehouse Raw Material Control" },
      kicker: { id: "Inventory • FIFO • Service Level", en: "Inventory • FIFO • Service Level" },
      summary: {
        id: "Sistem kontrol bahan baku untuk incoming, outgoing, FIFO, HOLD, STO, kapasitas gudang, dan service level.",
        en: "A raw-material control system covering incoming, outgoing, FIFO, HOLD, STO, warehouse capacity, and service-level monitoring."
      },
      challenge: {
        id: "Data stok, transaksi, dan monitoring operasional tersebar di beberapa sheet sehingga penelusuran batch dan kontrol proses berjalan lambat.",
        en: "Stock, transaction, and operational monitoring data were scattered across multiple sheets, slowing batch traceability and process control."
      },
      solution: {
        id: "Menyatukan master data, transaksi, stock live, FIFO, alert center, kapasitas gudang, dan laporan service level dalam satu alur yang bisa diakses melalui HP maupun desktop.",
        en: "Unified master data, transactions, live stock, FIFO, alert center, warehouse capacity, and service-level reporting in one mobile- and desktop-ready flow."
      },
      contributions: [
        { id: "Menyusun business rules stok, batch, FIFO, HOLD, dan STO", en: "Defined stock, batch, FIFO, HOLD, and STO business rules" },
        { id: "Mendesain struktur data, dashboard, dan role access", en: "Designed the data structure, dashboards, and role access" },
        { id: "Membuat sinkronisasi, validasi, dan export laporan", en: "Built synchronization, validation, and reporting exports" }
      ],
      features: [
        { id: "Stok live per batch", en: "Live stock by batch" },
        { id: "FIFO view dan alert", en: "FIFO views and alerts" },
        { id: "Kapasitas gudang", en: "Warehouse capacity" },
        { id: "Service level dashboard", en: "Service-level dashboard" }
      ],
      stack: ["Google Apps Script", "Supabase", "Google Sheets", "PWA"]
    },
    {
      id: "stock-traceability",
      category: "inventory",
      accent: "violet",
      icon: "⌗",
      title: { id: "Multi-Plant Stock Traceability", en: "Multi-Plant Stock Traceability" },
      kicker: { id: "QR • Batch • Available Stock", en: "QR • Batch • Available Stock" },
      summary: {
        id: "Platform pencarian stok lintas plant untuk menampilkan batch, histori transaksi, stok tersedia, dan pencarian SKU QR.",
        en: "A multi-plant stock-search platform showing batches, transaction history, available stock, and QR/SKU lookup."
      },
      challenge: {
        id: "Pencarian stok antar-file dan antar-sheet memakan waktu, sementara user membutuhkan akses cepat dari HP.",
        en: "Searching stock across files and sheets took too long, while users needed fast mobile access."
      },
      solution: {
        id: "Membangun web/PWA untuk pencarian cepat, detail batch, histori transaksi, QR lookup, mode tampilan KG, dan download Excel.",
        en: "Built a web/PWA for fast lookup, batch details, transaction history, QR search, KG display modes, and Excel downloads."
      },
      contributions: [
        { id: "Merancang UX pencarian cepat lintas plant", en: "Designed fast cross-plant search UX" },
        { id: "Menerapkan aturan stok internal dan tujuan luar", en: "Implemented internal-stock and external-destination rules" },
        { id: "Membuat fitur export dan akses berbasis role", en: "Built export features and role-based access" }
      ],
      features: [
        { id: "Pencarian SKU QR", en: "QR/SKU search" },
        { id: "Histori transaksi", en: "Transaction history" },
        { id: "Stok tersedia per merk", en: "Available stock by brand" },
        { id: "Export Excel", en: "Excel export" }
      ],
      stack: ["Next.js", "PWA", "Apps Script", "Spreadsheet Integration"]
    },
    {
      id: "waste-yield",
      category: "workflow",
      accent: "green",
      icon: "↻",
      title: { id: "Waste Processing & Yield Management", en: "Waste Processing & Yield Management" },
      kicker: { id: "Waste • Yield • Stock", en: "Waste • Yield • Stock" },
      summary: {
        id: "Sistem monitoring waste masuk, proses giling, hasil bersih/kotor, bonan bubuk, opname, dan analisis yield.",
        en: "A system for waste intake, milling, clean/dirty output, powder dispatch, stock opname, and yield analysis."
      },
      challenge: {
        id: "Alur waste memiliki banyak tahap, line, dan shift sehingga sulit dipantau melalui pencatatan manual.",
        en: "The waste flow includes many stages, lines, and shifts, making it difficult to monitor through manual records."
      },
      solution: {
        id: "Membangun workflow terintegrasi dari waste masuk hingga hasil akhir, lengkap dengan dashboard trend, stok, rasio proses, dan alert.",
        en: "Built an integrated workflow from waste intake to final output, with trend dashboards, stock, processing ratios, and alerts."
      },
      contributions: [
        { id: "Menyusun alur waste end-to-end", en: "Structured the end-to-end waste flow" },
        { id: "Merancang dashboard BOD/Level Up", en: "Designed the BOD/Level Up dashboard" },
        { id: "Membuat validasi input per line, shift, dan kategori", en: "Built validation by line, shift, and category" }
      ],
      features: [
        { id: "Waste masuk dan proses giling", en: "Waste intake and milling" },
        { id: "Yield dan rasio proses", en: "Yield and process ratios" },
        { id: "Pengiriman bubuk dan stok", en: "Powder dispatch and stock" },
        { id: "Summary dan alert", en: "Summary and alerts" }
      ],
      stack: ["Google Sheets", "Apps Script", "Operational Analytics", "Dashboard UI"]
    },
    {
      id: "digital-ba",
      category: "workflow",
      accent: "amber",
      icon: "✓",
      title: { id: "Digital Document Approval Workflow", en: "Digital Document Approval Workflow" },
      kicker: { id: "Approval • PDF • Audit Trail", en: "Approval • PDF • Audit Trail" },
      summary: {
        id: "Sistem digital untuk pembuatan, approval, revisi, dan arsip dokumen operasional berbentuk berita acara.",
        en: "A digital system for creating, approving, revising, and archiving operational report documents."
      },
      challenge: {
        id: "Approval manual lambat, status dokumen sulit dipantau, dan arsip tidak terpusat.",
        en: "Manual approval was slow, document status was hard to track, and archives were not centralized."
      },
      solution: {
        id: "Merancang aplikasi approval digital dengan numbering, role approval, lampiran, notifikasi, reject/revisi, dan PDF final.",
        en: "Designed a digital approval app with numbering, approval roles, attachments, notifications, rejection/revision, and final PDF output."
      },
      contributions: [
        { id: "Menyusun alur approval bertingkat", en: "Designed the multi-level approval flow" },
        { id: "Merancang format dokumen dan penomoran", en: "Designed document format and numbering" },
        { id: "Menyiapkan arsitektur Next.js dan Supabase", en: "Prepared the Next.js and Supabase architecture" }
      ],
      features: [
        { id: "Approval bertingkat", en: "Multi-level approval" },
        { id: "Reject dan revisi", en: "Reject and revision" },
        { id: "PDF final", en: "Final PDF" },
        { id: "Audit trail", en: "Audit trail" }
      ],
      stack: ["Next.js", "Supabase", "PDF Workflow", "Notifications"]
    },
    {
      id: "reporting-automation",
      category: "automation",
      accent: "pink",
      icon: "⌁",
      title: { id: "Service Level & Reporting Automation", en: "Service Level & Reporting Automation" },
      kicker: { id: "Reports • Email • Notification", en: "Reports • Email • Notification" },
      summary: {
        id: "Otomatisasi laporan harian, export PDF/XLS, email, dan notifikasi operasional untuk monitoring service level.",
        en: "Automation for daily reports, PDF/XLS exports, email, and operational notifications for service-level monitoring."
      },
      challenge: {
        id: "Pembuatan laporan harian memakan waktu, rawan salah salin, dan tidak selalu konsisten untuk stakeholder.",
        en: "Daily reporting was time-consuming, error-prone, and inconsistent across stakeholders."
      },
      solution: {
        id: "Membangun alur generate laporan, export Excel/PDF, dan pengiriman otomatis dengan format yang lebih rapi.",
        en: "Built an automated flow for report generation, Excel/PDF export, and delivery with cleaner formatting."
      },
      contributions: [
        { id: "Menyusun format laporan otomatis", en: "Designed automated reporting formats" },
        { id: "Membuat export Excel dan PDF", en: "Built Excel and PDF exports" },
        { id: "Menyiapkan email dan notifikasi terjadwal", en: "Prepared scheduled email and notifications" }
      ],
      features: [
        { id: "Export PDF/XLS", en: "PDF/XLS export" },
        { id: "Email otomatis", en: "Automated email" },
        { id: "Laporan harian", en: "Daily reporting" },
        { id: "Format siap manajemen", en: "Management-ready format" }
      ],
      stack: ["Google Apps Script", "Email Automation", "Spreadsheet Reporting"]
    },
    {
      id: "mobile-hub",
      category: "automation",
      accent: "cyan",
      icon: "◫",
      title: { id: "Mobile Operations Hub", en: "Mobile Operations Hub" },
      kicker: { id: "Mobile • PWA • Access", en: "Mobile • PWA • Access" },
      summary: {
        id: "PWA sebagai pintu masuk berbagai aplikasi operasional agar mudah diakses oleh user lapangan melalui HP.",
        en: "A PWA gateway for operational applications, making them easier for field users to access by phone."
      },
      challenge: {
        id: "User lapangan membutuhkan akses yang lebih sederhana dan terasa seperti aplikasi, bukan browser biasa.",
        en: "Field users needed a simpler, app-like access experience rather than a standard browser flow."
      },
      solution: {
        id: "Menyiapkan mobile hub/PWA dengan shortcut sistem, installable mode, dan antarmuka mobile-first.",
        en: "Prepared a mobile hub/PWA with system shortcuts, installable mode, and a mobile-first interface."
      },
      contributions: [
        { id: "Mendesain tampilan mobile-first", en: "Designed a mobile-first interface" },
        { id: "Menyiapkan struktur PWA", en: "Prepared the PWA structure" },
        { id: "Menghubungkan akses ke sistem operasional", en: "Connected access to operational systems" }
      ],
      features: [
        { id: "Installable PWA", en: "Installable PWA" },
        { id: "Shortcut berbagai sistem", en: "Shortcuts to multiple systems" },
        { id: "UI sederhana", en: "Simple UI" },
        { id: "Ramah untuk HP", en: "Mobile friendly" }
      ],
      stack: ["PWA", "Vercel", "Responsive UI", "Web App Shell"]
    }
  ],
  experience: [
    {
      company: "PT. Gudang Garam Tbk",
      location: "Kediri, Indonesia",
      roles: [
        {
          title: { id: "Coordinator Warehouse (Clove)", en: "Coordinator Warehouse (Clove)" },
          period: { id: "Juni 2023 – Agustus 2025", en: "June 2023 – August 2025" },
          highlights: [
            {
              id: "Mengurangi ketergantungan forklift dari 6 menjadi 2 unit atau 66% melalui redesign alur unloading: dari truck-to-pallet menjadi direct truck-to-machine menggunakan loading dock leveler.",
              en: "Reduced forklift dependency from 6 to 2 units, a 66% reduction, by redesigning unloading from truck-to-pallet to direct truck-to-machine loading using dock levelers."
            },
            {
              id: "Memimpin pemasangan mini vibro dan conveyor divider untuk otomatisasi segregasi material SKT dan SKM.",
              en: "Led the installation of a mini vibro and conveyor divider to automate material segregation for SKT and SKM production."
            },
            {
              id: "Membangun sistem pengolahan data berkonsep ERP sederhana menggunakan macro spreadsheet, menghemat 45 menit per proses dan menghasilkan efisiensi 9,3%.",
              en: "Built a simple ERP-concept data-processing system using spreadsheet macros, saving 45 minutes per process and delivering a 9.3% efficiency gain."
            },
            {
              id: "Mengawasi penerimaan bahan baku dari petani berdasarkan batch dan delivery order serta mengelola cleaning, vertical-silo storage, labeling, dan daily management reporting.",
              en: "Supervised farmer-supplied raw-material receipt by batch and delivery order, and managed cleaning, vertical-silo storage, labeling, and daily management reporting."
            }
          ]
        },
        {
          title: { id: "Coordinator Process & Quality Control (Tobacco)", en: "Coordinator Process & Quality Control (Tobacco)" },
          period: { id: "April 2021 – Juni 2023", en: "April 2021 – June 2023" },
          highlights: [
            {
              id: "Melakukan root cause analysis terhadap masalah input data manual menggunakan Fishbone Diagram dengan faktor MAN, METHOD, dan MACHINE.",
              en: "Conducted root-cause analysis on manual data-entry issues using Fishbone Diagrams across MAN, METHOD, and MACHINE factors."
            },
            {
              id: "Mengelola jadwal proses conditioning dan packing tembakau serta memastikan preventive maintenance peralatan berjalan.",
              en: "Managed scheduled tobacco conditioning and packing activities and ensured preventive maintenance was performed."
            },
            {
              id: "Memverifikasi parameter kualitas Moisture Content, Density, PSD, dan NTRM sesuai standar perusahaan.",
              en: "Verified quality parameters including Moisture Content, Density, PSD, and NTRM against company standards."
            }
          ]
        }
      ]
    }
  ],
  translations: {
    id: {
      brandSubtitle: "Operations & Digitalization",
      navAbout: "Profil",
      navExperience: "Pengalaman",
      navProjects: "Project",
      navDashboard: "Dashboard",
      navCapabilities: "Kemampuan",
      navContact: "Kontak",
      heroEyebrow: "WAREHOUSE • SYSTEMS • AUTOMATION",
      heroTitleLine1: "Mengubah proses operasional",
      heroTitleLine2: "menjadi sistem digital yang bisa dipakai.",
      heroLead: "Saya menggabungkan pengalaman warehouse, process improvement, quality control, dan software delivery untuk membangun sistem yang praktis, traceable, serta siap dipakai di lapangan.",
      viewProjects: "Lihat project pilihan",
      contactMe: "Hubungi saya",
      heroRole: "Warehouse Operations & Digitalization",
      metricSystems: "sistem digital terpilih",
      metricExperience: "tahun pengalaman operasional",
      metricEfficiency: "pengurangan forklift",
      profileLabel: "OPERATIONAL BUILDER",
      profileText: "Menghubungkan pemahaman proses lapangan dengan data, automasi, dan pengalaman pengguna yang sederhana.",
      aboutEyebrow: "PROFILE",
      aboutTitle: "Dibangun dari operasional nyata, bukan asumsi.",
      aboutP1: "Saya memulai dari masalah nyata di lapangan: akurasi stok, FIFO, material handling, batch traceability, approval yang lambat, dan laporan manual. Setelah itu, saya menerjemahkannya menjadi business rules, struktur data, interface, dan automasi.",
      aboutP2: "Kekuatan utama saya adalah menjembatani kebutuhan operasional dengan solusi digital. Saya tidak hanya membuat dashboard, tetapi membangun alur kerja yang jelas, terkontrol, dan mudah diaudit.",
      experienceEyebrow: "PROFESSIONAL EXPERIENCE",
      experienceTitle: "Pengalaman memimpin proses, warehouse, dan quality control.",
      experienceIntro: "Pengalaman ini menjadi fondasi cara saya membangun sistem: memahami proses fisik terlebih dahulu, kemudian memperbaiki flow, kontrol, dan data.",
      impactForklift: "pengurangan forklift",
      impactTime: "hemat per proses",
      impactEfficiency: "efisiensi data process",
      projectsEyebrow: "SELECTED SYSTEMS",
      projectsTitle: "Sistem yang dirancang untuk hasil operasional.",
      projectsIntro: "Project ditampilkan menggunakan data sintetis dan identitas yang dianonimkan. Tidak ada koneksi ke sistem produksi perusahaan.",
      filterAll: "Semua",
      filterInventory: "Inventory",
      filterAutomation: "Automation",
      filterWorkflow: "Workflow",
      openCase: "Lihat case study",
      dashboardEyebrow: "DASHBOARD PREVIEW",
      dashboardTitle: "Data operasional yang mudah diterjemahkan.",
      dashboardIntro: "Contoh UI untuk trend mingguan, kapasitas gudang, status material, dan detail batch. Angka di bawah bersifat dummy untuk demonstrasi.",
      weeklyTrend: "Trend Mingguan",
      warehouseCapacity: "Kapasitas Gudang",
      materialStatus: "Status Material",
      stockIn: "Masuk",
      stockOut: "Keluar",
      used: "Terpakai",
      free: "Tersedia",
      material: "Material",
      batch: "Batch",
      status: "Status",
      quantity: "Kuantitas",
      capEyebrow: "CAPABILITIES",
      capTitle: "Dari pemetaan proses sampai aplikasi siap pakai.",
      capIntro: "Saya bekerja pada sisi operasional dan teknis agar requirement tetap nyambung dengan perilaku sistem akhirnya.",
      cap1Title: "Process & Control Design",
      cap1Text: "Mapping alur, role, exception, approval, FIFO, quality control, dan ownership data.",
      cap2Title: "Application & Dashboard UI",
      cap2Text: "Interface responsif untuk operator, supervisor, manajemen, HP, desktop, dan display besar.",
      cap3Title: "Data & Automation",
      cap3Text: "Spreadsheet, Apps Script, database, API, scheduled sync, export, dan reporting otomatis.",
      cap4Title: "Testing & Deployment",
      cap4Text: "Validasi skenario nyata, anti-duplikasi, data validation, deployment web dan PWA.",
      policyEyebrow: "DATA POLICY",
      policyTitle: "Aman untuk kebutuhan portofolio.",
      policyText: "Semua workflow ditampilkan dalam bentuk anonim dan seluruh angka pada dashboard demo menggunakan data sintetis. Portofolio ini tidak menampilkan credential, link produksi, atau data operasional rahasia.",
      contactEyebrow: "OPEN TO OPPORTUNITIES",
      contactTitle: "Mari membangun operasional yang lebih efektif.",
      contactText: "Terbuka untuk kesempatan pada warehouse systems, operational excellence, business process automation, supply chain systems, dan digital transformation.",
      emailMe: "Email",
      linkedinMe: "LinkedIn",
      whatsappMe: "WhatsApp",
      musicOn: "Ambient aktif",
      musicOff: "Putar ambient",
      footerNote: "Portfolio dengan workflow yang dianonimkan dan data demo.",
      modalChallenge: "Tantangan",
      modalSolution: "Solusi",
      modalContribution: "Kontribusi saya",
      modalFeatures: "Fitur utama"
    },
    en: {
      brandSubtitle: "Operations & Digitalization",
      navAbout: "Profile",
      navExperience: "Experience",
      navProjects: "Projects",
      navDashboard: "Dashboard",
      navCapabilities: "Capabilities",
      navContact: "Contact",
      heroEyebrow: "WAREHOUSE • SYSTEMS • AUTOMATION",
      heroTitleLine1: "Turning operational processes",
      heroTitleLine2: "into usable digital systems.",
      heroLead: "I combine warehouse, process-improvement, quality-control, and software-delivery experience to build practical, traceable, field-ready systems.",
      viewProjects: "View selected projects",
      contactMe: "Contact me",
      heroRole: "Warehouse Operations & Digitalization",
      metricSystems: "selected digital systems",
      metricExperience: "years of operations experience",
      metricEfficiency: "forklift reduction",
      profileLabel: "OPERATIONAL BUILDER",
      profileText: "Connecting floor-level process understanding with data, automation, and simple user experiences.",
      aboutEyebrow: "PROFILE",
      aboutTitle: "Built from real operations, not assumptions.",
      aboutP1: "I start from real field problems: stock accuracy, FIFO, material handling, batch traceability, slow approvals, and manual reports. I then translate them into business rules, data structures, interfaces, and automation.",
      aboutP2: "My main strength is bridging operational needs with digital solutions. I do not only create dashboards; I build workflows that are clear, controlled, and auditable.",
      experienceEyebrow: "PROFESSIONAL EXPERIENCE",
      experienceTitle: "Experience leading process, warehouse, and quality control.",
      experienceIntro: "This experience shapes how I build systems: understand the physical process first, then improve the flow, controls, and data.",
      impactForklift: "forklift reduction",
      impactTime: "saved per process",
      impactEfficiency: "data-process efficiency",
      projectsEyebrow: "SELECTED SYSTEMS",
      projectsTitle: "Systems designed around operational outcomes.",
      projectsIntro: "Projects are presented with synthetic data and anonymized identities. No employer production system is connected.",
      filterAll: "All",
      filterInventory: "Inventory",
      filterAutomation: "Automation",
      filterWorkflow: "Workflow",
      openCase: "View case study",
      dashboardEyebrow: "DASHBOARD PREVIEW",
      dashboardTitle: "Operational data that is easy to interpret.",
      dashboardIntro: "Sample UI for weekly trends, warehouse capacity, material status, and batch details. All values below are dummy data for demonstration.",
      weeklyTrend: "Weekly Trend",
      warehouseCapacity: "Warehouse Capacity",
      materialStatus: "Material Status",
      stockIn: "Inbound",
      stockOut: "Outbound",
      used: "Used",
      free: "Free",
      material: "Material",
      batch: "Batch",
      status: "Status",
      quantity: "Quantity",
      capEyebrow: "CAPABILITIES",
      capTitle: "From process discovery to a working application.",
      capIntro: "I work across operational and technical layers so requirements remain connected to final system behavior.",
      cap1Title: "Process & Control Design",
      cap1Text: "Mapping flows, roles, exceptions, approvals, FIFO, quality control, and data ownership.",
      cap2Title: "Application & Dashboard UI",
      cap2Text: "Responsive interfaces for operators, supervisors, management, mobile, desktop, and large displays.",
      cap3Title: "Data & Automation",
      cap3Text: "Spreadsheets, Apps Script, databases, APIs, scheduled sync, exports, and automated reporting.",
      cap4Title: "Testing & Deployment",
      cap4Text: "Real-scenario validation, duplicate prevention, data validation, and web/PWA deployment.",
      policyEyebrow: "DATA POLICY",
      policyTitle: "Safe for portfolio use.",
      policyText: "All workflows are presented anonymously and all dashboard figures use synthetic data. This portfolio does not expose credentials, production links, or confidential operational records.",
      contactEyebrow: "OPEN TO OPPORTUNITIES",
      contactTitle: "Let’s build more effective operations.",
      contactText: "Open to opportunities in warehouse systems, operational excellence, business-process automation, supply-chain systems, and digital transformation.",
      emailMe: "Email",
      linkedinMe: "LinkedIn",
      whatsappMe: "WhatsApp",
      musicOn: "Ambient on",
      musicOff: "Play ambient",
      footerNote: "Portfolio with anonymized workflows and demo data.",
      modalChallenge: "Challenge",
      modalSolution: "Solution",
      modalContribution: "My contribution",
      modalFeatures: "Key capabilities"
    }
  }
};
