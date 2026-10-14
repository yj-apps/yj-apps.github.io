// App catalog. To add an app, append an entry here; the homepage renders from this list.
//   platform: "android" | "pc"
//   category: "app" | "game"
//   url:      store / download link. Leave "" to show "coming soon".
//   privacy:  privacy policy URL (shown on the card and on /privacy.html)
//   langs:    languages the app itself supports
//   icon:     path like "assets/icons/name.png", or an emoji for a generated tile (uses `color`)
window.YJ_APPS = [
  {
    id: "simple-saju",
    platform: "android",
    category: "app",
    icon: "assets/icons/simple-saju.png",
    url: "https://play.google.com/store/apps/details?id=com.yjapps.saju2",
    privacy: "https://sites.google.com/view/yjapps3-saju",
    langs: ["ko"],
    name: { ko: "심플 사주", en: "Simple Saju" },
    desc: {
      ko: "여덟 글자로 읽는 우리의 인생. 원국, 해설, 대운·세운, 일진까지 오프라인으로 보는 사주 앱.",
      en: "Your life in eight characters — natal chart, readings, luck cycles and daily fortune, all offline.",
      ja: "8つの文字で読み解く人生。命式、解説、大運・歳運、日運まで、オフラインで見られる四柱推命アプリ（韓国語）。",
      zh: "用八個字讀懂人生。命盤、解說、大運流年、每日運勢，離線即可查看的八字應用程式（韓文）。"
    }
  },
  {
    id: "chakchak-budget",
    platform: "android",
    category: "app",
    icon: "assets/icons/chakchak-budget.png",
    url: "https://play.google.com/store/apps/details?id=com.yjapps.money",
    privacy: "https://sites.google.com/view/yjapps3-money",
    langs: ["ko"],
    name: { ko: "착착 가계부", en: "ChakChak Budget" },
    desc: {
      ko: "수입·지출을 빠르게 적고, 예산과 통계로 한눈에 돌아보는 간편 가계부.",
      en: "Log income and expenses in a few taps, then review them with budgets and stats.",
      ja: "収入と支出をすばやく記録し、予算と統計でひと目で振り返れる家計簿（韓国語）。",
      zh: "快速記下收入與支出，用預算和統計一目了然的簡易記帳本（韓文）。"
    }
  },
  {
    id: "simple-mytype",
    platform: "android",
    category: "app",
    icon: "assets/icons/simple-mytype.png",
    url: "https://play.google.com/store/apps/details?id=com.yjapps.mytype",
    privacy: "https://sites.google.com/view/yjapps3-mytype",
    langs: ["ko"],
    name: { ko: "심플 나의유형", en: "Simple My Type" },
    desc: {
      ko: "나는 어떤 사람일까? 성격유형부터 닮은 동물, 진로 흥미까지 다섯 가지 검사로 알아봐요.",
      en: "Who am I? Five quick tests — from personality type to spirit animal and career interests.",
      ja: "わたしってどんな人？性格タイプから似ている動物、進路の興味まで、5つのテストでわかります（韓国語）。",
      zh: "我是什麼樣的人？從性格類型到相似的動物、職涯興趣，用五種測驗了解自己（韓文）。"
    }
  },
  {
    id: "skate-360",
    platform: "android",
    category: "game",
    icon: "assets/icons/skate-360.png",
    pixel: true,
    // In review on Google Play — set to "https://play.google.com/store/apps/details?id=com.yjapps.games.skate360" once live
    url: "",
    privacy: "https://sites.google.com/view/yjapps3-skate360",
    langs: ["ko", "en", "ja", "zh"],
    name: { ko: "스케이트 360", en: "Skate 360", ja: "スケート360", zh: "滑板 360" },
    desc: {
      ko: "점프하고, 레일 타고, 메뉴얼로 이어서! 픽셀 스케이트보드 콤보 러너.",
      en: "Jump, grind and manual your way to huge combos in this pixel skateboard runner!",
      ja: "ジャンプ、グラインド、マニュアルでコンボをつなげ！ドット絵スケボーランナー",
      zh: "跳躍、滑欄杆、用平衡滑串起連招！像素風滑板跑酷遊戲"
    }
  },
  {
    id: "retro-dungeon",
    platform: "android",
    category: "game",
    icon: "assets/icons/retro-dungeon.png",
    pixel: true,
    // Not live on Google Play yet — set to "https://play.google.com/store/apps/details?id=com.yjapps.games.retrodungeongogo" once live
    url: "",
    privacy: "https://sites.google.com/view/yjapps3-retrodungeongogo",
    langs: ["ko", "en", "ja", "zh"],
    name: { ko: "레트로 던전 고고!", en: "Retro Dungeon Go Go!", ja: "レトロダンジョン ゴーゴー!", zh: "復古地城 GO GO！" },
    desc: {
      ko: "도트 감성 핵앤슬래시! 영웅을 골라 9층 심연의 군주를 쓰러뜨려라.",
      en: "Pixel-art hack and slash! Pick a hero and slay the Abyss Lord on floor 9.",
      ja: "ドット絵ハクスラ!英雄を選び、9階に潜む深淵の君主を倒せ。",
      zh: "像素風砍殺RPG！選擇英雄，擊敗第9層的深淵領主。"
    }
  },
  {
    id: "retro-memo",
    platform: "android",
    category: "app",
    icon: "assets/icons/retro-memo.png",
    pixel: true,
    url: "https://play.google.com/store/apps/details?id=com.yjapps.retromemo2",
    privacy: "https://sites.google.com/view/yjapps3-retromemo2",
    langs: ["ko", "en", "ja"],
    name: { ko: "레트로 메모", en: "Retro Memo", ja: "レトロメモ", zh: "復古記事本" },
    desc: {
      ko: "파란 화면, 픽셀 글꼴, 깜빡이는 커서. 도스 시절 그대로의 메모장.",
      en: "A notepad straight out of DOS: blue screen, pixel font and a blinking cursor.",
      ja: "青い画面、ドット文字、点滅するカーソル。DOS時代そのままのメモ帳",
      zh: "藍色畫面、像素字型、閃爍的游標。重現 DOS 時代的記事本。"
    }
  },
  {
    id: "baro-barcode",
    platform: "android",
    category: "app",
    icon: "▦",
    color: ["#0f172a", "#334155"],
    // TODO: package id, icon, privacy URL and store description
    url: "",
    langs: ["ko"],
    name: { ko: "바로 바코드", en: "Baro Barcode" },
    desc: {
      ko: "바코드와 QR 코드를 카메라로 바로 스캔하는 간편 스캐너.",
      en: "Scan barcodes and QR codes instantly with your camera.",
      ja: "バーコードやQRコードをカメラですぐに読み取れるシンプルなスキャナー。",
      zh: "用相機即時掃描條碼與 QR Code 的簡易掃描器。"
    }
  },
  {
    id: "litecad",
    platform: "pc",
    category: "app",
    icon: "📐",
    color: ["#0f766e", "#0ea5e9"],
    url: "",
    langs: ["ko", "en"],
    name: { ko: "LiteCAD", en: "LiteCAD" },
    desc: {
      ko: "빠르고 가벼운 Windows용 CAD 프로그램.",
      en: "A fast, lightweight CAD program for Windows.",
      ja: "高速で軽量な Windows 用 CAD ソフト。",
      zh: "快速、輕巧的 Windows CAD 軟體。"
    }
  },
  {
    id: "portradar",
    platform: "pc",
    category: "app",
    icon: "📡",
    color: ["#1e40af", "#7c3aed"],
    url: "",
    langs: ["ko", "en"],
    name: { ko: "PortRadar", en: "PortRadar" },
    desc: {
      ko: "열린 TCP/UDP 포트와 그 포트를 쓰는 프로세스를 실시간으로 보여주고 위험도를 알려주는 Windows 보안 도구.",
      en: "See open TCP/UDP ports and the processes behind them in real time, with risk ratings — for Windows.",
      ja: "開いている TCP/UDP ポートと、それを使うプロセスをリアルタイムで表示し、危険度を知らせる Windows 用セキュリティツール。",
      zh: "即時顯示開啟的 TCP/UDP 連接埠及使用它們的程序，並標示風險等級的 Windows 安全工具。"
    }
  }
];
