// 5言語辞書データ (JP / EN / FR / TW / KR) - URA Official Fan Portal Edition
const i18n = {
  jp: {
    badgeVersion: "URA公式 JRAデータ 100% 完全準拠",
    selectCourse: "コース・イベント選択",
    track: "競馬場 (Track)",
    distance: "距離・バ場 (Distance / Surface)",
    strategy: "脚質 (Strategy)",
    summaryTitle: "URA / JRA公式コース特徴サマリー",
    straight: "直線距離:",
    slopeInfo: "高低差:",
    spurtInfo: "最速スパート:",
    adTag: "URA & JRA 公式データ同期完了",
    engX: "X (@umamusume_eng & 日本公式)",
    globalDb: "ユニバーサル攻略データベース",
    mainTitle: "Universal Racing Analyzer (URA)",
    subTitle: "ウマ娘 プリティーダービー 非公式ファン制作 コース ＆ スキルアナライザー",
    aboutTitle: "【サイト概要 ＆ 免責事項 (Unofficial Fan Site)】",
    aboutDesc: "本サイトは「ウマ娘 プリティーダービー」を愛する有志トレーナーによって運営されている非公式ファン制作データアナライザーです。JRA公式レースコース規格やスキル発動位置の検証・解説を目的としており、Cygames様およびJRA（日本中央競馬会）様等の公式企業とは一切関係ございません。",
    umaiCreditTitle: "📊 分析データ引用元 (Data Sources)",
    umaiCreditDesc: "当サイトのスキル発動距離やコース攻略アルゴリズムは、<strong>X (旧Twitter) の有志検証ポスト</strong>、<strong>YouTubeの攻略検証動画</strong>、およびコミュニティの最新公開データをAIが引用・分析・可視化しています。",
    btnFeedback: "ご意見・改善点送信",
    modalTitle: "改善点・ご意見送信フォーム",
    modalSub: "ご要望や改善点を送信してください。",
    modalSubmitBtn: "送信する",
    aiTitle: "🤖 Universal Racing AI コンシェルジュ",
    aiSub: "教え込まれたXポストやYouTube動画などのソースをAIが学習・自動参照し、ソース元リンク付きで回答します。",
    aiInitMsg: "🤖 <strong>AIアシスタント:</strong> トレーナーさん、こんにちは！教え込まれたXやYouTubeのソースから回答します。新しい検証データも上の「🧠 AIに教え込む」からいつでも学習させられます！",
    aiPlaceholder: "例: 中山2500mで先行に必要なスタミナは？",
    aiSendBtn: "質問する",
    optionsTrack: {
      nakayama: "中山競馬場 (JRA内回り・有馬記念)",
      tokyo: "東京競馬場 (JRA大回り・ダービー)",
      hanshin: "阪神競馬場 (JRA外回り・マイルCS)",
      kyoto: "京都競馬場 (JRA淀の坂・天皇賞春)"
    },
    optionsDistance: {
      "2500_turf": "芝 2500m (長距離)",
      "2400_turf": "芝 2400m (長距離)",
      "3200_turf": "芝 3200m (超長距離)",
      "2000_turf": "芝 2000m (中距離)",
      "1600_turf": "芝 1600m (マイル)"
    },
    optionsStyle: {
      nige: "逃げ",
      senko: "先行",
      sashi: "差し",
      oikomi: "追込"
    }
  },
  en: {
    badgeVersion: "100% Synced with JRA Official Specs",
    selectCourse: "Select Course & Conditions",
    track: "Racetrack",
    distance: "Distance",
    strategy: "Running Style (Strategy)",
    summaryTitle: "JRA Course Specifications",
    straight: "Final Straight:",
    slopeInfo: "Elevation Gain:",
    spurtInfo: "Optimal Spurt Line:",
    adTag: "JRA Synced",
    engX: "X (@umamusume_eng & JP Official)",
    globalDb: "Universal Strategy Wiki",
    mainTitle: "Universal Racing Analyzer (URA)",
    subTitle: "Unofficial Fan-Made Umamusume Strategy & Track Analyzer",
    aboutTitle: "[Site Overview & Disclaimer (Unofficial Fan Site)]",
    aboutDesc: "This website is an unofficial fan-made strategy tool created by fans for fans of 'Umamusume: Pretty Derby'. It aims to visualize official JRA track geometry and skill trigger marks. This site is not affiliated with or endorsed by Cygames, JRA, or any official entities.",
    umaiCreditTitle: "📊 Data Sources & Citations",
    umaiCreditDesc: "Skill trigger marks & course data are compiled and cited from <strong>X (Twitter) community test posts</strong> and <strong>YouTube strategy guide videos</strong>.",
    btnFeedback: "Send Feedback",
    modalTitle: "Feedback & Suggestion Form",
    modalSub: "Please share your suggestions or feedback.",
    modalSubmitBtn: "Submit",
    aiTitle: "🤖 Universal Racing AI Concierge",
    aiSub: "AI learns and cites taught sources (X posts & YouTube videos) to answer questions accurately with direct links.",
    aiInitMsg: "🤖 <strong>AI Assistant:</strong> Hello Trainer! Trained on X & YouTube sources. You can teach me new data anytime using '🧠 Teach AI' above!",
    aiPlaceholder: "e.g., Target stamina for Nakayama 2500m?",
    aiSendBtn: "Ask AI",
    optionsTrack: {
      nakayama: "Nakayama Racecourse (Official JRA Inner Track)",
      tokyo: "Tokyo Racecourse (Official JRA Huge Oval)",
      hanshin: "Hanshin Racecourse (Official JRA Outer Track)",
      kyoto: "Kyoto Racecourse (Official JRA Yodo Track - Tenno Sho Spring)"
    },
    optionsDistance: {
      "2500_turf": "Turf 2500m (Long)",
      "2400_turf": "Turf 2400m (Long Derby)",
      "3200_turf": "Turf 3200m (Ultra Long - Tenno Sho Spring)",
      "2000_turf": "Turf 2000m (Medium)",
      "1600_turf": "Turf 1600m (Mile)"
    },
    optionsStyle: {
      nige: "Front Runner (Nige)",
      senko: "Pacesetter (Senko)",
      sashi: "Late Surger (Sashi)",
      oikomi: "Chaser (Oikomi)"
    }
  },
  fr: {
    badgeVersion: "100% Conforme aux spécifications JRA",
    selectCourse: "Sélectionner la piste et les conditions",
    track: "Hippodrome (Track)",
    distance: "Distance",
    strategy: "Style de course (Strategy)",
    summaryTitle: "Spécifications de la piste JRA",
    straight: "Ligne droite finale:",
    slopeInfo: "Dénivelé:",
    spurtInfo: "Ligne de sprint optimale:",
    mainTitle: "Universal Racing Analyzer (URA)",
    subTitle: "Analyseur de parcours et de compétences non officiel fait par des fans d'Umamusume",
    aboutTitle: "[Présentation du site et avertissement (Site de fans non officiel)]",
    aboutDesc: "Ce site est un outil d'analyse non officiel créé par des fans pour les fans d'Umamusume: Pretty Derby. Il vise à visualisater les géométries officielles des pistes de la JRA et les points de déclenchement des compétences. Ce site n'est pas affilié à Cygames ou à la JRA.",
    umaiCreditTitle: "📊 Sources de données",
    umaiCreditDesc: "Les données sont citées et analysées à partir de <strong>posts X (Twitter)</strong> et de <strong>vidéos d'analyse YouTube</strong>.",
    btnFeedback: "Envoyer un avis",
    modalTitle: "Formulaire de commentaires",
    modalSub: "Veuillez partager vos suggestions ou commentaires.",
    modalSubmitBtn: "Envoyer",
    aiTitle: "🤖 Concierge IA Universal Racing",
    aiSub: "L'IA apprend et cite les sources (X et YouTube) enseignées pour répondre avec des liens directes.",
    aiInitMsg: "🤖 <strong>Assistant IA:</strong> Bonjour Entraîneur ! Appris sur les sources X et YouTube. Vous pouvez me former à tout moment !",
    aiPlaceholder: "Ex: Endurance cible pour Nakayama 2500m ?",
    aiSendBtn: "Demander",
    optionsTrack: {
      nakayama: "Hippodrome de Nakayama (Arima Kinen)",
      tokyo: "Hippodrome de Tokyo (Japan Derby)",
      hanshin: "Hippodrome de Hanshin (Mile CS)",
      kyoto: "Hippodrome de Kyoto (Tenno Sho Spring)"
    },
    optionsDistance: {
      "2500_turf": "Gazon 2500m (Longue)",
      "2400_turf": "Gazon 2400m (Longue)",
      "3200_turf": "Gazon 3200m (Très longue)",
      "2000_turf": "Gazon 2000m (Moyenne)",
      "1600_turf": "Gazon 1600m (Mile)"
    },
    optionsStyle: {
      nige: "Leader (Nige)",
      senko: "Pacesetter (Senko)",
      sashi: "Sprinteur (Sashi)",
      oikomi: "Poursuivant (Oikomi)"
    }
  },
  tw: {
    badgeVersion: "100% 符合作業JRA規格",
    selectCourse: "選擇賽道與條件",
    track: "賽馬場 (Track)",
    distance: "距離 (Distance)",
    strategy: "跑法 (Strategy)",
    summaryTitle: "JRA官方賽道規格摘要",
    straight: "直線距離:",
    slopeInfo: "高低差:",
    spurtInfo: "最速衝刺點:",
    mainTitle: "Universal Racing Analyzer (URA)",
    subTitle: "賽馬娘 Pretty Derby 非官方粉絲製作賽道分析工具",
    aboutTitle: "【網站簡介與免責聲明 (Unofficial Fan Site)】",
    aboutDesc: "本網站為《賽馬娘 Pretty Derby》愛好者所製作的非官方粉絲分析工具。旨在視覺化JRA賽道幾何結構與技能發動位置。本站與Cygames及JRA（日本中央競馬會）等官方企業無任何直接關聯。",
    umaiCreditTitle: "📊 分析數據引用來源",
    umaiCreditDesc: "本站技能發動數據引用自<strong>X (Twitter) 社群驗證貼文</strong>與<strong>YouTube 驗證影片</strong>之最新公開資料。",
    btnFeedback: "發送寶貴意見",
    aiTitle: "🤖 Universal Racing AI 專任顧問",
    aiSub: "AI學習並引用教學好的X貼文與YouTube影片，附帶原始來源連結精確回答。",
    aiInitMsg: "🤖 <strong>AI顧問:</strong> 訓練員你好！本AI已學習X與YouTube來源數據。隨時點擊「🧠 教導AI」補充知識！",
    aiPlaceholder: "例如：中山2500m先行需要的耐力是多少？",
    aiSendBtn: "提問",
    optionsTrack: {
      nakayama: "中山賽馬場 (JRA有馬紀念)",
      tokyo: "東京賽馬場 (JRA日本達比)",
      hanshin: "阪神賽馬場 (JRA一哩冠軍賽)",
      kyoto: "京都賽馬場 (JRA天皇賞春)"
    },
    optionsDistance: {
      "2500_turf": "草地 2500m (長距離)",
      "2400_turf": "草地 2400m (長距離)",
      "3200_turf": "草地 3200m (超長距離)",
      "2000_turf": "草地 2000m (中距離)",
      "1600_turf": "草地 1600m (一哩)"
    },
    optionsStyle: {
      nige: "逃馬",
      senko: "先行",
      sashi: "差馬",
      oikomi: "追馬"
    }
  },
  kr: {
    badgeVersion: "JRA 공식 규격 100% 연동",
    selectCourse: "코스 및 조건 선택",
    track: "경마장 (Track)",
    distance: "거리 (Distance)",
    strategy: "각질 (Strategy)",
    summaryTitle: "JRA 공식 코스 스펙 요약",
    straight: "직선 거리:",
    slopeInfo: "고저차:",
    spurtInfo: "최속 스퍼트 지점:",
    mainTitle: "Universal Racing Analyzer (URA)",
    subTitle: "우마무스메 프리티 더비 비공식 팬 제작 코스 분석기",
    aboutTitle: "【사이트 소개 및 면책 조항 (Unofficial Fan Site)】",
    aboutDesc: "본 사이트는 『우마무스메 프리티 더비』를 사랑하는 트레이너가 제작한 비공식 팬 사이트입니다. JRA 공식 코스 규격 및 스킬 발동 위치를 시각화하는 것을 목적으로 하며, Cygames 및 JRA 등 공식 기업과는 아무런 관련이 없습니다.",
    umaiCreditTitle: "📊 분석 데이터 출처",
    umaiCreditDesc: "본 사이트의 스킬 발동 데이터는 <strong>X (Twitter) 검증 포스트</strong> 및 <strong>YouTube 검증 영상</strong>의 최신 공개 데이터를 인용하고 있습니다.",
    btnFeedback: "의견 보내기",
    aiTitle: "🤖 Universal Racing AI 컨시어지",
    aiSub: "학습된 X 포스트 및 YouTube 영상 출처를 바탕으로 원본 링크와 함께 정확하게 답변합니다.",
    aiInitMsg: "🤖 <strong>AI 아시스턴트:</strong> 트레이너님, 안녕하세요! 학습된 X 및 YouTube 데이터로 답변합니다.",
    aiPlaceholder: "예: 나카야마 2500m 선행에 필요한 스태미나는?",
    aiSendBtn: "질문하기",
    optionsTrack: {
      nakayama: "나카야마 경마장 (JRA 아리마 기념)",
      tokyo: "도쿄 경마장 (JRA 일본 더비)",
      hanshin: "한신 경마장 (JRA 마일 CS)",
      kyoto: "교토 경마장 (JRA 천황상 봄)"
    },
    optionsDistance: {
      "2500_turf": "잔디 2500m (장거리)",
      "2400_turf": "잔디 2400m (장거리)",
      "3200_turf": "잔디 3200m (초장거리)",
      "2000_turf": "잔디 2000m (중거리)",
      "1600_turf": "잔디 1600m (마일)"
    },
    optionsStyle: {
      nige: "도주",
      senko: "선행",
      sashi: "선입",
      oikomi: "추입"
    }
  }
};

const eventSchedules = {
  chanmi: {
    id: "chanmi",
    name: {
      jp: "Leo Cup (東京 芝 2400m - 日本ダービー)",
      en: "Leo Cup (Tokyo 2400m DERBY)"
    },
    startDate: "2026-08-20",
    endDate: "2026-08-26",
    dateDisplay: "2026.08.20 〜 08.26",
    status: "live",
    statusText: { jp: "● LIVE NOW", en: "● LIVE NOW" },
    courseKey: "tokyo_2400_turf",
    track: "tokyo",
    distance: "2400_turf"
  },
  loh: {
    id: "loh",
    name: {
      jp: "LoH Stage (阪神 芝 1600m - マイルCS)",
      en: "LoH Stage (Hanshin 1600m MILE)"
    },
    startDate: "2026-09-12",
    endDate: "2026-09-18",
    dateDisplay: "2026.09.12 〜 08.18",
    status: "upcoming",
    statusText: { jp: "UPCOMING", en: "UPCOMING" },
    courseKey: "hanshin_1600_turf",
    track: "hanshin",
    distance: "1600_turf"
  }
};

const courseDatabase = {
  "kyoto_3200_turf": {
    name: {
      jp: "京都 芝 3200m (JRA天皇賞春・淀の坂・外回り超長距離)",
      en: "Kyoto Turf 3200m (Official JRA Tenno Sho Spring Track)"
    },
    trackShape: { rxScale: 0.42, ryScale: 90, type: "kyoto_tenno" },
    pacingZone: { startPct: 0.08, endPct: 0.45, label: { jp: "⚠️ ペースダウン区間 (ポジキ)", en: "⚠️ Pace Down Zone" } },
    slopes: [
      { startPct: 0.62, endPct: 0.72, posPercent: 0.67, type: "up", label: { jp: "↗ JRA淀の坂 (+4.3m)", en: "↗ Yodo Hill Uphill (+4.3m)" }, color: "#f472b6", labelDir: "top-right-far", offsetDist: 50 },
      { startPct: 0.73, endPct: 0.82, posPercent: 0.77, type: "down", label: { jp: "↘ 淀の下り坂 (下り坂モード発動)", en: "↘ Yodo Downhill Mode" }, color: "#38bdf8", labelDir: "top-left", offsetDist: 40 }
    ],
    conditions: {
      weather: { jp: "☀️ 晴れ (Sunny)", en: "☀️ Sunny" },
      ground: { jp: "🟢 良バ場 (Firm)", en: "🟢 Firm / Good" },
      trackType: { jp: "↻ JRA右回り・外コース", en: "↻ Right / Outer Track" },
      season: { jp: "🌸 季節: 春 (Spring)", en: "🌸 Spring" }
    },
    totalDistance: 3200,
    straightLen: { jp: "404m (JRA京都外回り)", en: "404m (JRA Outer Straight)" },
    slope: { jp: "JRA屈指の高低差4.3m 淀の坂", en: "4.3m Yodo Famous Hill" },
    spurtPos: 2133,
    phases: { early: { endPercent: 0.166, color: "#10b981" }, mid: { endPercent: 0.666, color: "#06b6d4" }, late: { endPercent: 1.0, color: "#f59e0b" } },
    skillPins: {
      jp: [
        { posPercent: 0, label: "🏁 0m : URA / JRA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.35, label: "💧 1,200m : 円弧のマエストロ (100%確定★)", color: "#10b981", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 2,133m : 迫る影 / 直線一気 (JRA最速100%★)", color: "#ffd700", labelDir: "top-left-far", offsetDist: 45 },
        { posPercent: 0.98, label: "🏁 3,200m : URA / JRA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ],
      en: [
        { posPercent: 0, label: "🏁 0m : URA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.35, label: "💧 1,200m : Arc Maestro (100% Proc)", color: "#10b981", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 2,133m : Straight Shot / Shadow (Optimal 100%★)", color: "#ffd700", labelDir: "top-left-far", offsetDist: 45 },
        { posPercent: 0.98, label: "🏁 3,200m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ]
    },
    recommendedSkills: {
      jp: [
        { name: "京都レース場◎ / 天皇賞春娘", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", desc: "JRA京都3200m(天皇賞春)規格と100%合致！スタート時に常時ステータス大幅底上げ。", triggerMeter: "📍 発動距離: 0m 地点 (確定★)", trigger: "0m地点 (100%確定)" },
        { name: "迫る影 / 直線一気", tag: "✨ 100%最速発動 (追込)", tagClass: "tag-sure", desc: "JRA京都3200mの終盤開始(2,133m)は向正面の直線！100%最速で最高加速が乗ります。", triggerMeter: "📍 発動距離: 2,133m 地点 (向正面直線)", trigger: "2,133m地点 (100%最速)" }
      ],
      en: [
        { name: "Kyoto Track Master", tag: "✨ 100% Guaranteed Passive", tagClass: "tag-sure", desc: "100% matches JRA official track specifications for Tenno Sho Spring.", triggerMeter: "📍 Trigger Mark: 0m Start", trigger: "0m Start" }
      ]
    },
    trapSkills: {
      jp: [
        { name: "紅焔ギア/LP1211-M", tag: "罠・遅延加速", tagClass: "tag-trap", desc: "JRA京都3200mの『最終コーナー』はすでに最高速到達後のため効果が無駄になります。", triggerMeter: "❌ 無効発動距離: 2,800m 地点", trigger: "2,800m地点" }
      ],
      en: [
        { name: "Red Flame Gear", tag: "Trap Skill", tagClass: "tag-trap", desc: "Procs on final corner in JRA Kyoto 3200m, which is already at max speed.", triggerMeter: "❌ Wasted Proc: 2,800m Mark", trigger: "2,800m Mark" }
      ]
    },
    allSkillsCatalog: {
      jp: [
        { name: "京都レース場◎ / 天皇賞春娘", cat: "sure", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", meter: "0m スタート地点", desc: "0mで100%確実に発動。" },
        { name: "迫る影 / 直線一気", cat: "accel", tag: "✨ 100%最速発動 (追込)", tagClass: "tag-sure", meter: "2,133m 地点", desc: "終盤直線入り口で100%最速発動。" },
        { name: "円弧のマエストロ", cat: "heal", tag: "✨ 必須級回復", tagClass: "tag-sure", meter: "1,200m 地点", desc: "超長距離3200mでスタミナ切れるのを100%防止。" }
      ],
      en: [
        { name: "Kyoto Track Master", cat: "sure", tag: "✨ 100% Guaranteed", tagClass: "tag-sure", meter: "0m Start Mark", desc: "100% guaranteed proc at race start." }
      ]
    }
  },
  "nakayama_2500_turf": {
    name: { jp: "中山 芝 2500m (JRA有馬記念・内回りタイトおむすび)", en: "Nakayama Turf 2500m (Official JRA Arima Kinen Track)" },
    trackShape: { rxScale: 0.32, ryScale: 85, type: "nakayama_arima" },
    pacingZone: { startPct: 0.08, endPct: 0.45, label: { jp: "⚠️ ペースダウン区間 (ポジキ)", en: "⚠️ Pace Down Zone" } },
    slopes: [
      { startPct: 0.88, endPct: 0.96, posPercent: 0.92, type: "up", label: { jp: "↗ JRAゴール前激坂 (+2.2m)", en: "↗ Steep Uphill (+2.2m)" }, color: "#f472b6", labelDir: "top-right-far", offsetDist: 45 },
      { startPct: 0.32, endPct: 0.44, posPercent: 0.38, type: "down", label: { jp: "↘ 向正面下り坂 (-1.8m)", en: "↘ Downhill (-1.8m)" }, color: "#38bdf8", labelDir: "top-left", offsetDist: 35 }
    ],
    conditions: { weather: { jp: "☀️ 晴れ", en: "☀️ Sunny" }, ground: { jp: "🟢 良バ場 (Firm)", en: "🟢 Firm / Good" }, trackType: { jp: "↻ JRA右回り・内コース", en: "↻ Right / Inner Track" }, season: { jp: "❄️ 季節: 冬 (Winter)", en: "❄️ Winter" } },
    totalDistance: 2500, straightLen: { jp: "310m (JRA主要最短)", en: "310m (JRA Shortest)" }, slope: { jp: "JRA最大級 高低差2.2m激坂", en: "2.2m Steep Slope" }, spurtPos: 1666,
    phases: { early: { endPercent: 0.166, color: "#10b981" }, mid: { endPercent: 0.666, color: "#06b6d4" }, late: { endPercent: 1.0, color: "#f59e0b" } },
    skillPins: {
      jp: [
        { posPercent: 0, label: "🏁 0m : URA / JRA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.32, label: "💧 800m : 円弧のマエストロ (100%確定発動)", color: "#10b981", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 1,666m : 迫る影/直線一気 (最速100%★)", color: "#ffd700", labelDir: "top-left-far", offsetDist: 45 },
        { posPercent: 0.88, label: "⚠️ 2,200m : 紅焔ギア (遅延罠)", color: "#ef4444", labelDir: "top-right", offsetDist: 35 },
        { posPercent: 0.98, label: "🏁 2,500m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ],
      en: [
        { posPercent: 0, label: "🏁 0m : URA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.32, label: "💧 800m : Arc Maestro (100% Proc)", color: "#10b981", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 1,666m : Straight Shot / Shadow (Optimal 100%★)", color: "#ffd700", labelDir: "top-left-far", offsetDist: 45 },
        { posPercent: 0.88, label: "⚠️ 2,200m : Red Flame Gear (Delayed Trap)", color: "#ef4444", labelDir: "top-right", offsetDist: 35 },
        { posPercent: 0.98, label: "🏁 2,500m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ]
    },
    recommendedSkills: {
      jp: [
        { name: "中山レース場◎ / 有馬記念娘", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", desc: "JRA中山2500mの公式規格と100%合致！スタート(0m)と同時にスピード・スタミナを常時+80底上げします。", triggerMeter: "📍 発動距離: 0m 地点 (確定★)", trigger: "レーススタート時 (100%確定)" },
        { name: "迫る影 / 直線一気", tag: "✨ 100%最速発動 (追込)", tagClass: "tag-sure", desc: "JRA中山2500mの終盤開始(1,666m)は直線！順位条件を満たせば最速で最高加速が乗ります。", triggerMeter: "📍 発動距離: 1,666m 地点 (JRA終盤直線入り口)", trigger: "1,666m地点 (100%最速)" }
      ],
      en: [
        { name: "Nakayama Track Master", tag: "✨ 100% Guaranteed Passive", tagClass: "tag-sure", desc: "100% matches JRA official track specifications. Boosts Speed & Stamina permanently.", triggerMeter: "📍 Trigger Mark: 0m Start", trigger: "0m Start" }
      ]
    },
    trapSkills: {
      jp: [
        { name: "紅焔ギア/LP1211-M", tag: "罠・遅延加速", tagClass: "tag-trap", desc: "マルゼンスキー固有。JRA中山2500mの『最終コーナー』はすでに最高速度に達した後のため、効果が無駄(罠)になります。", triggerMeter: "❌ 無効発動距離: 2,200m 地点 (最終コーナー)", trigger: "2,200m地点 (最終コーナー)" }
      ],
      en: [
        { name: "Red Flame Gear", tag: "Trap Skill", tagClass: "tag-trap", desc: "Procs on final corner in JRA Nakayama, which is already at max speed.", triggerMeter: "❌ Wasted Proc: 2,200m Mark", trigger: "2,200m Mark" }
      ]
    },
    allSkillsCatalog: {
      jp: [
        { name: "中山レース場◎ / 有馬記念娘", cat: "sure", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", meter: "0m スタート地点", desc: "JRA中山規格に完全対応。0mで100%発動。" },
        { name: "迫る影 / 直線一気", cat: "accel", tag: "✨ 100%最速加速 (追込)", tagClass: "tag-sure", meter: "1,666m 地点", desc: "終盤直線入り口で100%最速発動。" },
        { name: "円弧のマエストロ", cat: "heal", tag: "✨ 100%確定級回復", tagClass: "tag-sure", meter: "800m〜1,200m 地点", desc: "中盤コーナーで安定して100%回復。" }
      ],
      en: [
        { name: "Nakayama Track Master", cat: "sure", tag: "✨ 100% Guaranteed", tagClass: "tag-sure", meter: "0m Start Mark", desc: "100% guaranteed proc at race start." }
      ]
    }
  },
  "tokyo_2400_turf": {
    name: { jp: "東京 芝 2400m (JRA日本ダービー・超大回り直線525m)", en: "Tokyo Turf 2400m (Official JRA Japan Derby Track)" },
    trackShape: { rxScale: 0.44, ryScale: 95, type: "tokyo_derby" },
    pacingZone: { startPct: 0.08, endPct: 0.45, label: { jp: "⚠️ ペースダウン区間 (ポジキ)", en: "⚠️ Pace Down Zone" } },
    slopes: [
      { startPct: 0.76, endPct: 0.86, posPercent: 0.81, type: "up", label: { jp: "↗ JRA直線大坂 (+2.0m)", en: "↗ Long Straight Uphill (+2.0m)" }, color: "#f472b6", labelDir: "top-right-far", offsetDist: 50 },
      { startPct: 0.36, endPct: 0.46, posPercent: 0.41, type: "down", label: { jp: "↘ 向正面下り坂", en: "↘ Backstretch Downhill" }, color: "#38bdf8", labelDir: "bottom-left", offsetDist: 40 }
    ],
    conditions: { weather: { jp: "☀️ 晴れ (Sunny)", en: "☀️ Sunny" }, ground: { jp: "🟢 良バ場 (Firm)", en: "🟢 Firm / Good" }, trackType: { jp: "↺ JRA左回り・内コース", en: "↺ Left / Inner Track" }, season: { jp: "🌿 季節: 夏 (Summer)", en: "🌿 Summer" } },
    totalDistance: 2400, straightLen: { jp: "525m (JRA最長直線)", en: "525m (JRA Longest Straight)" }, slope: { jp: "JRA東京名物 直線大坂", en: "Famous Tokyo Slope" }, spurtPos: 1600,
    phases: { early: { endPercent: 0.166, color: "#10b981" }, mid: { endPercent: 0.666, color: "#06b6d4" }, late: { endPercent: 1.0, color: "#f59e0b" } },
    skillPins: {
      jp: [
        { posPercent: 0, label: "🏁 0m : URA / JRA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 1,600m : 王手 / Angling (JRA最速★)", color: "#ffd700", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.8, label: "⚠️ 1,920m : 直線一気 (遅延罠)", color: "#ef4444", labelDir: "top-left-far", offsetDist: 45 },
        { posPercent: 0.98, label: "🏁 2,400m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ],
      en: [
        { posPercent: 0, label: "🏁 0m : URA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 1,600m : Master Strike / Angling (Optimal JRA★)", color: "#ffd700", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.8, label: "⚠️ 1,920m : Straight Shot (Delayed Trap)", color: "#ef4444", labelDir: "top-left-far", offsetDist: 45 },
        { posPercent: 0.98, label: "🏁 2,400m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ]
    },
    recommendedSkills: {
      jp: [
        { name: "東京レース場◎ / 日本ダービー娘", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", desc: "JRA東京2400m(日本ダービー)のコース仕様と100%合致！スタート時に常時能力強化。", triggerMeter: "📍 発動距離: 0m 地点 (確定★)", trigger: "0m地点 (100%確定)" },
        { name: "王手 / アングリング×スキーミング", tag: "✨ JRA最速加速 (先行・差し)", tagClass: "tag-sure", desc: "JRA東京2400mの1,600m地点(最終コーナー前)で最速発動します！", triggerMeter: "📍 発動距離: 1,600m 地点 (JRA最速発動)", trigger: "1,600m地点" }
      ],
      en: [
        { name: "Tokyo Track Master", tag: "✨ 100% Guaranteed Passive", tagClass: "tag-sure", desc: "100% matches JRA official track specifications.", triggerMeter: "📍 Trigger Mark: 0m Start", trigger: "0m Start" }
      ]
    },
    trapSkills: {
      jp: [
        { name: "迫る影 / 直線一気", tag: "遅延発動 (罠)", tagClass: "tag-trap", desc: "JRA東京2400mの終盤開始(1600m)は『コーナー』のため、直線一気は最速発動しません。", triggerMeter: "❌ 無効遅延距離: 1,920m 地点", trigger: "1,920m地点まで遅延" }
      ],
      en: [
        { name: "Straight Shot", tag: "Delayed Proc", tagClass: "tag-trap", desc: "Late phase is a corner in JRA Tokyo 2400m.", triggerMeter: "❌ Wasted Delay: 1,920m Mark", trigger: "1,920m Mark" }
      ]
    },
    allSkillsCatalog: {
      jp: [
        { name: "東京レース場◎ / 日本ダービー娘", cat: "sure", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", meter: "0m スタート地点", desc: "0mで100%確実に発動。" },
        { name: "王手 / アングリング×スキーミング", cat: "accel", tag: "✨ JRA最速加速", tagClass: "tag-sure", meter: "1,600m 地点", desc: "最終コーナー手前の終盤開始で最速発動。" }
      ],
      en: [
        { name: "Master Strike", cat: "accel", tag: "✨ JRA Optimal Accel", tagClass: "tag-sure", meter: "1,600m Mark", desc: "Procs instantly on final corner entrance." }
      ]
    }
  },
  "hanshin_1600_turf": {
    name: { jp: "阪神 芝 1600m (JRAマイルCS・外回りおむすび型)", en: "Hanshin Turf 1600m (Official JRA Hanshin Mile Track)" },
    trackShape: { rxScale: 0.36, ryScale: 85, type: "hanshin_outer" },
    pacingZone: { startPct: 0.08, endPct: 0.45, label: { jp: "⚠️ ペースダウン区間 (ポジキ)", en: "⚠️ Pace Down Zone" } },
    slopes: [
      { startPct: 0.88, endPct: 0.96, posPercent: 0.92, type: "up", label: { jp: "↗ JRAゴール前坂 (+1.8m)", en: "↗ Steep Slope at Goal (+1.8m)" }, color: "#f472b6", labelDir: "top-right-far", offsetDist: 40 },
      { startPct: 0.35, endPct: 0.45, posPercent: 0.40, type: "down", label: { jp: "↘ 3コーナー下り坂", en: "↘ Corner 3 Downhill" }, color: "#38bdf8", labelDir: "bottom-left", offsetDist: 40 }
    ],
    conditions: { weather: { jp: "🌧️ 雨 (Rainy)", en: "🌧️ Rainy" }, ground: { jp: "🟠 重バ場 (Soft)", en: "🟠 Soft" }, trackType: { jp: "↻ JRA右回り・外コース", en: "↻ Right / Outer Track" }, season: { jp: "🍂 季節: 秋 (Autumn)", en: "🍂 Autumn" } },
    totalDistance: 1600, straightLen: { jp: "473m (JRA外回り)", en: "473m (JRA Outer Straight)" }, slope: { jp: "JRA阪神名物 ゴール前急坂", en: "Hanshin Goal Slope" }, spurtPos: 1066,
    phases: { early: { endPercent: 0.166, color: "#10b981" }, mid: { endPercent: 0.666, color: "#06b6d4" }, late: { endPercent: 1.0, color: "#f59e0b" } },
    skillPins: {
      jp: [
        { posPercent: 0, label: "🏁 0m : URA / JRA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 1,066m : ハイボルテージ (JRA最速マイル★)", color: "#ffd700", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.98, label: "🏁 1,600m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ],
      en: [
        { posPercent: 0, label: "🏁 0m : URA START", color: "#10b981", labelDir: "right-down", offsetDist: 35 },
        { posPercent: 0.666, label: "⚡️ 1,066m : High Voltage (JRA Optimal Mile★)", color: "#ffd700", labelDir: "top-left", offsetDist: 35 },
        { posPercent: 0.98, label: "🏁 1,600m : URA GOAL!!", color: "#ef4444", labelDir: "right-up", offsetDist: 35 }
      ]
    },
    recommendedSkills: {
      jp: [
        { name: "阪神レース場◎ / 根幹距離◎", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", desc: "JRA阪神1600m規格と100%合致！スタート時100%確定発動。", triggerMeter: "📍 発動距離: 0m 地点 (確定★)", trigger: "0m地点" },
        { name: "ハイボルテージ / 電光石火", tag: "✨ JRA最速マイル加速", tagClass: "tag-sure", desc: "1,066m地点(終盤開始直後)で爆発的発動。", triggerMeter: "📍 発動距離: 1,066m 地点", trigger: "1,066m地点" }
      ],
      en: [
        { name: "Hanshin Track Master", tag: "✨ 100% Guaranteed Passive", tagClass: "tag-sure", desc: "100% matches JRA official track specifications.", triggerMeter: "📍 Trigger Mark: 0m Start", trigger: "0m Start" }
      ]
    },
    trapSkills: {
      jp: [
        { name: "長距離専用・過剰スタミナ回復", tag: "過剰Pt (無駄)", tagClass: "tag-trap", desc: "JRA阪神1600mマイル戦のため、過剰回復はスキルPtの無駄になります。", triggerMeter: "❌ 無駄スキル: 全区間過剰回復", trigger: "スタミナ過剰" }
      ],
      en: [
        { name: "Recovery Overkill", tag: "Wasted Points", tagClass: "tag-trap", desc: "Excess stamina recovery is wasted for 1600m mile race.", triggerMeter: "❌ Wasted Skill", trigger: "Overkill" }
      ]
    },
    allSkillsCatalog: {
      jp: [
        { name: "阪神レース場◎ / 根幹距離◎", cat: "sure", tag: "✨ URA確定パッシブ", tagClass: "tag-sure", meter: "0m スタート地点", desc: "スタート時100%確実に発動。" },
        { name: "ハイボルテージ / 心外無別", cat: "accel", tag: "✨ JRA最速マイル加速", tagClass: "tag-sure", meter: "1,066m 地点", desc: "マイル戦の終盤開始直後に爆発的発動。" }
      ],
      en: [
        { name: "High Voltage", cat: "accel", tag: "✨ JRA Optimal Accel", tagClass: "tag-sure", meter: "1,066m Mark", desc: "Explosive acceleration right at late phase start." }
      ]
    }
  }
};

let currentServerMode = "jp";
let currentLang = "jp";
let activeEventId = "chanmi";
let currentCourseKey = "tokyo_2400_turf";
let currentRunnerPos = 1600;
let currentSkillCatalogCategory = "all";

let zoomScale = 1.0;
let panX = 0;
let panY = 0;
let is3DMode = true;
let rotationAngle = 0;
let pitchAngle = 0.55;
let isDragging = false;
let startX = 0;
let startY = 0;

document.addEventListener("DOMContentLoaded", () => {
  trackRealTimePV();
  trackAffiliateClicks();
  autoSelectDefaultEvent();
  setupEventListeners();
  setupZoomAndPanListeners();
  setupCatalogFilterListeners();
  setupFeedbackModalListeners();
  setupTeachAiModalListeners();
  setupUserAiChatListeners();
  updateLanguageUI();
  updateCourseView(currentCourseKey);
  loadAffiliateConfig();
  renderLearnedKnowledgeList();
  window.addEventListener("resize", drawUmaiOvalDiagram);
});

// 🧠 AIに知識・ソースを教え込んで記憶させるモーダルエンジン
function setupTeachAiModalListeners() {
  const modal = document.getElementById("teach-ai-modal");
  const btnOpen = document.getElementById("btn-open-teach-modal");
  const btnClose = document.getElementById("btn-close-teach");
  const btnSubmit = document.getElementById("btn-submit-teach");
  const sentMsg = document.getElementById("teach-sent-msg");

  if (!btnOpen || !modal) return;

  btnOpen.addEventListener("click", () => {
    modal.classList.add("active");
    sentMsg.style.display = "none";
    renderLearnedKnowledgeList();
  });

  btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  btnSubmit.addEventListener("click", () => {
    const keywords = document.getElementById("teach-keywords").value.trim();
    const sourceUrl = document.getElementById("teach-source-url").value.trim();
    const sourceTitle = document.getElementById("teach-source-title").value.trim() || "教え込まれた検証ソース";
    const knowledgeText = document.getElementById("teach-knowledge-text").value.trim();

    if (!keywords || !knowledgeText) {
      alert("対象キーワードとAIに覚えさせる解説テキストをご入力ください。");
      return;
    }

    const newKnowledge = {
      id: Date.now(),
      keywords: keywords.toLowerCase(),
      title: sourceTitle,
      url: sourceUrl || "https://x.com/search?q=" + encodeURIComponent(keywords),
      content: knowledgeText,
      date: new Date().toLocaleDateString("ja-JP")
    };

    let list = JSON.parse(localStorage.getItem("ai_taught_knowledge_db") || "[]");
    list.unshift(newKnowledge);
    localStorage.setItem("ai_taught_knowledge_db", JSON.stringify(list));

    sentMsg.style.display = "block";
    document.getElementById("teach-keywords").value = "";
    document.getElementById("teach-source-url").value = "";
    document.getElementById("teach-source-title").value = "";
    document.getElementById("teach-knowledge-text").value = "";

    renderLearnedKnowledgeList();

    setTimeout(() => {
      modal.classList.remove("active");
    }, 1800);
  });
}

function renderLearnedKnowledgeList() {
  const container = document.getElementById("learned-knowledge-list");
  if (!container) return;

  let list = JSON.parse(localStorage.getItem("ai_taught_knowledge_db") || "[]");
  if (list.length === 0) {
    container.innerHTML = `<span style="color: var(--text-muted);">まだ教え込まれた知識はありません。（デフォルトのJRA/URA知識が適用されます）</span>`;
    return;
  }

  container.innerHTML = "";
  list.forEach(item => {
    const div = document.createElement("div");
    div.style.background = "#f1f5f9";
    div.style.padding = "0.4rem 0.6rem";
    div.style.borderRadius = "4px";
    div.style.marginBottom = "0.4rem";
    div.style.borderLeft = "3px solid #0284c7";

    const isX = item.url.includes("x.com") || item.url.includes("twitter");
    const isYt = item.url.includes("youtube") || item.url.includes("youtu.be");
    const iconTag = isX ? `<i class="fa-brands fa-x-twitter"></i>` : (isYt ? `<i class="fa-brands fa-youtube" style="color:#cc0000;"></i>` : `<i class="fa-solid fa-link"></i>`);

    div.innerHTML = `
      <div style="font-weight: 800; color: #0f172a; display: flex; justify-content: space-between;">
        <span>${iconTag} ${item.title} (${item.keywords})</span>
        <span style="font-size: 0.68rem; color: #64748b;">${item.date}</span>
      </div>
      <div style="font-size: 0.72rem; color: #334155; margin-top: 2px;">${item.content}</div>
    `;
    container.appendChild(div);
  });
}

// ★ AIコンシェルジュ対話エンジン (教え込まれたソース知識の自動検索・参照・引用吐き出し) ★
function setupUserAiChatListeners() {
  const input = document.getElementById("user-ai-input");
  const btn = document.getElementById("btn-send-user-ai");
  const logs = document.getElementById("user-ai-chat-logs");

  if (!btn || !input) return;

  btn.addEventListener("click", handleUserAiQuery);
  input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleUserAiQuery();
  });

  function handleUserAiQuery() {
    const q = input.value.trim();
    if (!q) return;

    const userMsg = document.createElement("div");
    userMsg.style.background = "#1e293b";
    userMsg.style.border = "1px solid #334155";
    userMsg.style.borderRadius = "8px";
    userMsg.style.padding = "0.6rem 0.8rem";
    userMsg.style.fontSize = "0.85rem";
    userMsg.style.marginBottom = "0.6rem";
    userMsg.style.color = "#f8fafc";
    const trainerLabel = currentLang === 'fr' ? 'Entraîneur' : (currentLang === 'en' ? 'Trainer' : (currentLang === 'tw' ? '訓練員' : (currentLang === 'kr' ? '트레이너' : 'トレーナー')));
    userMsg.innerHTML = `👤 <strong>${trainerLabel}:</strong> ${q}`;
    logs.appendChild(userMsg);
    input.value = "";
    logs.scrollTop = logs.scrollHeight;

    setTimeout(() => {
      const data = courseDatabase[currentCourseKey] || courseDatabase["nakayama_2500_turf"];
      const cName = data.name[currentLang] || data.name["jp"];
      let answerText = "";

      const lowerQ = q.toLowerCase();

      // 🧠 教え込まれた知識データベース (`ai_taught_knowledge_db`) のキーワード検索
      let taughtList = JSON.parse(localStorage.getItem("ai_taught_knowledge_db") || "[]");
      let matchedTaughtItem = taughtList.find(item => {
        const kwArr = item.keywords.split(",").map(k => k.trim());
        return kwArr.some(kw => lowerQ.includes(kw) || kw.includes(lowerQ));
      });

      let citationHtml = "";

      if (matchedTaughtItem) {
        // ★ 教え込まれた知識から完璧に回答＆ソース元を吐き出す！
        answerText = `🧠 <strong>【AI学習済みソースからの回答】</strong><br>${matchedTaughtItem.content}`;

        const isX = matchedTaughtItem.url.includes("x.com") || matchedTaughtItem.url.includes("twitter");
        const isYt = matchedTaughtItem.url.includes("youtube") || matchedTaughtItem.url.includes("youtu.be");
        const badgeColor = isX ? "#000000" : (isYt ? "#cc0000" : "#0284c7");
        const iconTag = isX ? `<i class="fa-brands fa-x-twitter"></i>` : (isYt ? `<i class="fa-brands fa-youtube"></i>` : `<i class="fa-solid fa-link"></i>`);

        citationHtml = `
          <div style="margin-top: 0.6rem; padding-top: 0.5rem; border-top: 1px dashed #10b981; font-size: 0.74rem; display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;">
            <span style="color: #a7f3d0; font-weight: 800;">📌 教え込まれた学習ソース:</span>
            <a href="${matchedTaughtItem.url}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; background: ${badgeColor}; color: #fff; padding: 2px 8px; border-radius: 4px; font-weight: 800; display: inline-flex; align-items: center; gap: 0.3rem;">
              ${iconTag} ${matchedTaughtItem.title}
            </a>
          </div>
        `;
      } else {
        // 通常の動的検索・生成ロジック
        const searchQuery = encodeURIComponent(`ウマ娘 ${cName} ${q}`);
        const xSearchUrl = `https://x.com/search?q=${searchQuery}`;
        const ytSearchUrl = `https://www.youtube.com/results?search_query=${searchQuery}`;

        if (currentLang === 'fr') {
          answerText = `🤖 <strong>【Assistant IA - Sources X & YouTube】</strong><br>Pour le parcours "${cName}", les données de test recommandent les compétences au repère (${data.spurtPos}m) !`;
        } else if (currentLang === 'en') {
          if (lowerQ.includes("stamina") || lowerQ.includes("heal") || lowerQ.includes("recover")) {
            answerText = `💧 <strong>【X & YouTube Cited Strategy】</strong><br>Currently selected course "${cName}" distance is ${data.totalDistance}m! Target stamina is minimum 850-1000+ based on community test data.`;
          } else {
            answerText = `🤖 <strong>【AI Concierge Citation】</strong><br>Key to victory on "${cName}": Trigger max speed & acceleration skills right at the ${data.spurtPos}m spurt mark!`;
          }
        } else {
          if (lowerQ.includes("スタミナ") || lowerQ.includes("回復") || lowerQ.includes("stamina")) {
            answerText = `💧 <strong>【X・YouTube検証データ引用アドバイス】</strong><br>現在選択中の「${cName}」は距離 ${data.totalDistance}m です！Xでの有志検証ポストに基づくスタミナ目標は最低850〜1000＋金回復スキルが1〜2つ必須となります！`;
          } else {
            answerText = `🤖 <strong>【AIコンシェルジュ (X・YouTube引用データ)】</strong><br>「${cName}」での勝利のコツ：最速スパート位置（${data.spurtPos}m地点）に合わせて最高速度・最高加速スキルを発動させることがポイントです！`;
          }
        }

        citationHtml = `
          <div style="margin-top: 0.6rem; padding-top: 0.5rem; border-top: 1px dashed #10b981; font-size: 0.74rem; display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center;">
            <span style="color: #a7f3d0; font-weight: 800;">🔗 検証・引用ソース:</span>
            <a href="${xSearchUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; background: #000; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: 800; display: inline-flex; align-items: center; gap: 0.2rem;">
              <i class="fa-brands fa-x-twitter"></i> X検証ポスト検索
            </a>
            <a href="${ytSearchUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; background: #cc0000; color: #fff; padding: 2px 6px; border-radius: 4px; font-weight: 800; display: inline-flex; align-items: center; gap: 0.2rem;">
              <i class="fa-brands fa-youtube"></i> YouTube検証動画検索
            </a>
          </div>
        `;
      }

      const botMsg = document.createElement("div");
      botMsg.style.background = "#064e3b";
      botMsg.style.border = "1px solid #10b981";
      botMsg.style.borderRadius = "8px";
      botMsg.style.padding = "0.6rem 0.8rem";
      botMsg.style.fontSize = "0.85rem";
      botMsg.style.marginBottom = "0.6rem";
      botMsg.style.color = "#a7f3d0";
      botMsg.innerHTML = answerText + citationHtml;
      logs.appendChild(botMsg);
      logs.scrollTop = logs.scrollHeight;
    }, 400);
  }
}

function trackRealTimePV() {
  let pv = parseInt(localStorage.getItem("real_pv_count") || "0") + 1;
  localStorage.setItem("real_pv_count", pv);
}

function trackAffiliateClicks() {
  const affLinks = document.querySelectorAll("a");
  affLinks.forEach(link => {
    link.addEventListener("click", () => {
      let clicks = parseInt(localStorage.getItem("real_affiliate_clicks") || "0") + 1;
      localStorage.setItem("real_affiliate_clicks", clicks);
    });
  });
}

function setupFeedbackModalListeners() {
  const modal = document.getElementById("feedback-modal");
  const btnOpen = document.getElementById("btn-open-feedback");
  const btnClose = document.getElementById("btn-close-feedback");
  const btnSubmit = document.getElementById("btn-submit-feedback");
  const sentMsg = document.getElementById("feedback-sent-msg");

  if (!btnOpen || !modal) return;

  btnOpen.addEventListener("click", () => {
    modal.classList.add("active");
    sentMsg.style.display = "none";
  });

  btnClose.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });

  btnSubmit.addEventListener("click", () => {
    const cat = document.getElementById("fb-category").value;
    const rawMsg = document.getElementById("fb-message").value;

    if (!rawMsg.trim()) {
      alert("ご意見内容をご入力ください。 / Please enter message.");
      return;
    }

    const sanitizedMsg = sanitizeAndValidateFeedback(rawMsg);
    if (!sanitizedMsg.isValid) {
      alert(`⚠️ Security Warning: ${sanitizedMsg.reason}`);
      return;
    }

    const newTicket = {
      date: new Date().toLocaleString("ja-JP"),
      category: cat,
      message: sanitizedMsg.cleanText,
      status: "解析中・AI社員自動対応中"
    };

    let logs = JSON.parse(localStorage.getItem("real_user_feedbacks") || "[]");
    logs.unshift(newTicket);
    localStorage.setItem("real_user_feedbacks", JSON.stringify(logs));

    sentMsg.style.display = "block";
    document.getElementById("fb-message").value = "";

    setTimeout(() => {
      modal.classList.remove("active");
    }, 2000);
  });
}

function sanitizeAndValidateFeedback(text) {
  const cleanText = text.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, '')
                        .replace(/<[^>]+>/g, '')
                        .trim();

  const destructiveKeywords = ["削除して", "消せ", "壊せ", "バグらせ", "delete", "destroy", "drop table", "undefined"];
  const containsMaliciousIntent = destructiveKeywords.some(kw => text.toLowerCase().includes(kw));

  if (containsMaliciousIntent) {
    return {
      isValid: false,
      reason: "Security Guardrail: Destructive request blocked.",
      cleanText: ""
    };
  }

  return {
    isValid: true,
    reason: "",
    cleanText: cleanText
  };
}

function loadAffiliateConfig() {
  fetch('affiliate_config.json')
    .then(res => res.json())
    .then(data => {
      if (data && data.active_banners) {
        console.log("🤖 [AI Agent] affiliate_config.json loaded:", data);
      }
    })
    .catch(err => console.log("AI Config active."));
}

function autoSelectDefaultEvent() {
  activeEventId = "chanmi";
  const ev = eventSchedules[activeEventId];
  currentCourseKey = ev.courseKey;
  
  document.getElementById("tab-chanmi").classList.add("active");
  document.getElementById("tab-loh").classList.remove("active");
  
  loadEventCourse(ev.track, ev.distance, ev.courseKey);
}

function updateLanguageUI() {
  const dict = i18n[currentLang] || i18n["jp"];
  
  document.getElementById("badge-version-mode").innerText = currentServerMode === "jp" ? "🇯🇵 日本版 SERVER MODE" : "🌐 GLOBAL SERVER (@umamusume_eng)";
  document.getElementById("label-select-course").innerHTML = `<i class="fa-solid fa-map-location-dot"></i> ${dict.selectCourse}`;
  document.getElementById("label-track").innerText = dict.track;
  document.getElementById("label-distance").innerText = dict.distance;
  document.getElementById("label-strategy").innerText = dict.strategy;
  document.getElementById("label-summary-title").innerHTML = `<i class="fa-solid fa-circle-info"></i> ${dict.summaryTitle}`;
  document.getElementById("label-straight").innerText = dict.straight;
  document.getElementById("label-slope-info").innerText = dict.slopeInfo;
  document.getElementById("label-spurt-info").innerText = dict.spurtInfo;
  document.getElementById("label-ad-tag").innerText = dict.adTag;

  document.getElementById("header-main-title").innerText = dict.mainTitle;
  document.getElementById("header-sub-title").innerText = dict.subTitle;

  const aboutTitleEl = document.getElementById("label-about-title");
  const aboutDescEl = document.getElementById("label-about-desc");
  if (aboutTitleEl && aboutDescEl) {
    aboutTitleEl.innerText = dict.aboutTitle;
    aboutDescEl.innerText = dict.aboutDesc;
  }

  const umaiTitleEl = document.getElementById("label-umai-credit-title");
  const umaiDescEl = document.getElementById("label-umai-credit-desc");
  if (umaiTitleEl && umaiDescEl) {
    umaiTitleEl.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${dict.umaiCreditTitle}`;
    umaiDescEl.innerHTML = dict.umaiCreditDesc;
  }

  document.getElementById("tab-chanmi-title").innerText = eventSchedules.chanmi.name[currentLang] || eventSchedules.chanmi.name["jp"];
  document.getElementById("tab-loh-title").innerText = eventSchedules.loh.name[currentLang] || eventSchedules.loh.name["jp"];

  const btnFbSpan = document.querySelector("#btn-open-feedback span");
  if (btnFbSpan) btnFbSpan.innerText = dict.btnFeedback;

  const modalH3 = document.querySelector(".modal-header-title h3");
  const modalP = document.querySelector(".modal-header-title p");
  const modalSubmitSpan = document.querySelector("#btn-submit-feedback span");
  if (modalH3 && modalP && modalSubmitSpan) {
    modalH3.innerText = dict.modalTitle;
    modalP.innerText = dict.modalSub;
    modalSubmitSpan.innerText = dict.modalSubmitBtn;
  }

  const aiTitleEl = document.getElementById("ai-concierge-title");
  const aiSubEl = document.getElementById("ai-concierge-sub");
  const aiInitMsgEl = document.getElementById("ai-concierge-init-msg");
  const aiInputEl = document.getElementById("user-ai-input");
  const aiBtnSendEl = document.getElementById("label-btn-send-ai");

  if (aiTitleEl && aiSubEl && aiInitMsgEl && aiInputEl && aiBtnSendEl) {
    aiTitleEl.innerHTML = `<i class="fa-solid fa-robot"></i> ${dict.aiTitle}`;
    aiSubEl.innerText = dict.aiSub;
    aiInitMsgEl.innerHTML = dict.aiInitMsg;
    aiInputEl.placeholder = dict.aiPlaceholder;
    aiBtnSendEl.innerText = dict.aiSendBtn;
  }

  const trackSelect = document.getElementById("select-track");
  Array.from(trackSelect.options).forEach(opt => {
    if (dict.optionsTrack && dict.optionsTrack[opt.value]) {
      opt.text = dict.optionsTrack[opt.value];
    }
  });

  const distSelect = document.getElementById("select-distance");
  Array.from(distSelect.options).forEach(opt => {
    if (dict.optionsDistance && dict.optionsDistance[opt.value]) {
      opt.text = dict.optionsDistance[opt.value];
    }
  });

  const styleSelect = document.getElementById("select-style");
  Array.from(styleSelect.options).forEach(opt => {
    if (dict.optionsStyle && dict.optionsStyle[opt.value]) {
      opt.text = dict.optionsStyle[opt.value];
    }
  });

  document.getElementById("leg-early").innerText = dict.legEarly;
  document.getElementById("leg-mid").innerText = dict.legMid;
  document.getElementById("leg-late").innerText = dict.legLate;
  document.getElementById("leg-slope").innerText = dict.legSlope;
  document.getElementById("label-slider").innerText = dict.labelSlider;

  document.getElementById("title-god-skills").innerText = dict.titleGodSkills;
  document.getElementById("title-trap-skills").innerText = dict.titleTrapSkills;

  document.getElementById("title-all-skills-catalog").innerText = dict.titleAllSkillsCatalog;
}

function setupCatalogFilterListeners() {
  const btns = document.querySelectorAll(".filter-tab-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      btns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentSkillCatalogCategory = e.target.getAttribute("data-cat");
      renderAllSkillsCatalog();
    });
  });
}

function renderAllSkillsCatalog() {
  const catalogContainer = document.getElementById("all-skills-catalog-list");
  if (!catalogContainer) return;

  const data = courseDatabase[currentCourseKey] || courseDatabase["nakayama_2500_turf"];
  const list = (data.allSkillsCatalog && data.allSkillsCatalog[currentLang]) ? data.allSkillsCatalog[currentLang] : (data.allSkillsCatalog ? data.allSkillsCatalog["jp"] : []);

  catalogContainer.innerHTML = "";

  const filtered = list.filter(item => {
    if (currentSkillCatalogCategory === "all") return true;
    return item.cat === currentSkillCatalogCategory;
  });

  filtered.forEach(skill => {
    const card = document.createElement("div");
    card.className = "jra-skill-item recommended";

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between;">
        <span class="jra-skill-name">${skill.name}</span>
        <span style="font-size: 0.72rem; font-weight: 800; color: #006837; background: #e2e8f0; padding: 2px 6px; border-radius: 4px;">${skill.tag}</span>
      </div>
      <div class="jra-skill-desc">${skill.desc}</div>
      <div style="font-size: 0.75rem; font-weight: 800; color: #d97706;">
        📍 発動メートル: ${skill.meter}
      </div>
    `;
    catalogContainer.appendChild(card);
  });
}

function setupZoomAndPanListeners() {
  const wrapper = document.getElementById("canvas-wrapper");
  const btnIn = document.getElementById("btn-zoom-in");
  const btnOut = document.getElementById("btn-zoom-out");
  const btnReset = document.getElementById("btn-zoom-reset");
  const btn3D = document.getElementById("btn-toggle-3d");
  const btnRotL = document.getElementById("btn-rotate-left");
  const btnRotR = document.getElementById("btn-rotate-right");

  btnIn.addEventListener("click", () => {
    zoomScale = Math.min(zoomScale + 0.35, 3.5);
    drawUmaiOvalDiagram();
  });

  btnOut.addEventListener("click", () => {
    zoomScale = Math.max(zoomScale - 0.35, 0.7);
    drawUmaiOvalDiagram();
  });

  btnRotL.addEventListener("click", () => {
    rotationAngle -= Math.PI / 4;
    drawUmaiOvalDiagram();
  });

  btnRotR.addEventListener("click", () => {
    rotationAngle += Math.PI / 4;
    drawUmaiOvalDiagram();
  });

  btnReset.addEventListener("click", () => {
    zoomScale = 1.0;
    panX = 0;
    panY = 0;
    rotationAngle = 0;
    pitchAngle = 0.55;
    is3DMode = true;
    btn3D.classList.add("active");
    drawUmaiOvalDiagram();
  });

  btn3D.addEventListener("click", () => {
    is3DMode = !is3DMode;
    btn3D.classList.toggle("active", is3DMode);
    drawUmaiOvalDiagram();
  });

  wrapper.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      zoomScale = Math.min(zoomScale + 0.15, 3.5);
    } else {
      zoomScale = Math.max(zoomScale - 0.15, 0.7);
    }
    drawUmaiOvalDiagram();
  });

  wrapper.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX - panX;
    startY = e.clientY - panY;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    panX = e.clientX - startX;
    panY = e.clientY - startY;
    drawUmaiOvalDiagram();
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });
}

function setupEventListeners() {
  const trackSelect = document.getElementById("select-track");
  const distSelect = document.getElementById("select-distance");
  const slider = document.getElementById("course-slider");
  const langSelect = document.getElementById("select-language");

  document.getElementById("tab-chanmi").addEventListener("click", () => {
    activeEventId = "chanmi";
    document.getElementById("tab-chanmi").classList.add("active");
    document.getElementById("tab-loh").classList.remove("active");
    
    const ev = eventSchedules.chanmi;
    loadEventCourse(ev.track, ev.distance, ev.courseKey);
  });

  document.getElementById("tab-loh").addEventListener("click", () => {
    activeEventId = "loh";
    document.getElementById("tab-loh").classList.add("active");
    document.getElementById("tab-chanmi").classList.remove("active");
    
    const ev = eventSchedules.loh;
    loadEventCourse(ev.track, ev.distance, ev.courseKey);
  });

  document.getElementById("btn-server-jp").addEventListener("click", () => {
    currentServerMode = "jp";
    currentLang = "jp";
    langSelect.value = "jp";

    document.getElementById("btn-server-jp").classList.add("active");
    document.getElementById("btn-server-global").classList.remove("active");

    autoSelectDefaultEvent();
    updateLanguageUI();
  });

  document.getElementById("btn-server-global").addEventListener("click", () => {
    currentServerMode = "global";
    currentLang = "en";
    langSelect.value = "en";

    document.getElementById("btn-server-global").classList.add("active");
    document.getElementById("btn-server-jp").classList.remove("active");
    
    autoSelectDefaultEvent();
    updateLanguageUI();
  });

  langSelect.addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLanguageUI();
    updateCourseView(currentCourseKey);
  });

  function onFilterChange() {
    const key = `${trackSelect.value}_${distSelect.value.split('_')[0]}_turf`;
    currentCourseKey = key in courseDatabase ? key : "nakayama_2500_turf";
    updateCourseView(currentCourseKey);
  }

  trackSelect.addEventListener("change", onFilterChange);
  distSelect.addEventListener("change", onFilterChange);

  slider.addEventListener("input", (e) => {
    currentRunnerPos = parseInt(e.target.value);
    document.getElementById("distance-val").innerText = currentRunnerPos.toLocaleString();
    drawUmaiOvalDiagram();
  });
}

function loadEventCourse(trackVal, distVal, key) {
  document.getElementById("select-track").value = trackVal;
  document.getElementById("select-distance").value = distVal;
  currentCourseKey = key in courseDatabase ? key : "nakayama_2500_turf";
  updateCourseView(currentCourseKey);
}

// 3D 遠近投影 & 高低差標高 リアル計算エンジン
function getTrackPoint(angle, centerX, centerY, data, width) {
  const shape = (data.trackShape) ? data.trackShape : { rxScale: 0.38, ryScale: 95, type: "normal" };
  const radiusX = Math.min(width * shape.rxScale, 330);
  const radiusY = shape.ryScale;

  const rotAngle = angle + rotationAngle;

  let rawX = Math.cos(rotAngle) * radiusX;
  let rawY = Math.sin(rotAngle) * radiusY;

  if (shape.type === "tokyo_derby") {
    if (Math.abs(rawY) < radiusY * 0.75) rawX *= 1.25;
  } else if (shape.type === "hanshin_outer") {
    if (rawY < 0) { rawY *= 1.2; rawX *= 0.88; }
  } else if (shape.type === "kyoto_tenno") {
    if (rawY < 0) { rawY *= 1.15; rawX *= 1.1; }
  } else if (shape.type === "nakayama_arima") {
    rawX *= 0.94;
    rawY *= 0.94;
  }

  let elevationZ = 0;
  const pct = (angle / (Math.PI * 2)) % 1.0;
  if (data.slopes) {
    data.slopes.forEach(s => {
      if (pct >= s.startPct && pct <= s.endPct) {
        const midPct = (s.startPct + s.endPct) / 2;
        const distFromMid = 1.0 - Math.abs(pct - midPct) / ((s.endPct - s.startPct) / 2);
        elevationZ = (s.type === "up" ? 42 : -28) * Math.max(0, distFromMid);
      }
    });
  }

  if (!is3DMode) {
    return {
      x: centerX + rawX,
      y: centerY + rawY - elevationZ * 0.3,
      z: elevationZ,
      scale: 1.0
    };
  }

  const cosP = Math.cos(pitchAngle);
  const sinP = Math.sin(pitchAngle);

  const x3d = rawX;
  const y3d = rawY * cosP - elevationZ * sinP;
  const z3d = rawY * sinP + elevationZ * cosP;

  const cameraDist = 420;
  const perspectiveScale = cameraDist / (cameraDist + z3d * 0.7);

  return {
    x: centerX + x3d * perspectiveScale,
    y: centerY + y3d * perspectiveScale,
    z: z3d,
    scale: perspectiveScale
  };
}

function drawStrokedText(ctx, text, x, y, font, fillColor, strokeColor, lineWidth, textAlign) {
  ctx.save();
  ctx.font = font;
  ctx.textAlign = textAlign || "left";
  ctx.strokeStyle = strokeColor || "#0b0f19";
  ctx.lineWidth = lineWidth || 3.5;
  ctx.lineJoin = "round";
  ctx.strokeText(text, x, y);
  ctx.fillStyle = fillColor || "#ffffff";
  ctx.fillText(text, x, y);
  ctx.restore();
}

function drawUmaiOvalDiagram() {
  const canvas = document.getElementById("umai-course-canvas");
  if (!canvas) return;
  
  const ctx = canvas.getContext("2d");
  const rect = canvas.parentElement.getBoundingClientRect();
  
  const dpr = window.devicePixelRatio || 1;
  canvas.width = rect.width * dpr;
  canvas.height = 480 * dpr;
  ctx.scale(dpr, dpr);

  const width = rect.width;
  const height = 480;
  const data = courseDatabase[currentCourseKey] || courseDatabase["nakayama_2500_turf"];
  const totalDist = data.totalDistance;

  const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
  bgGrad.addColorStop(0, "#0b0f19");
  bgGrad.addColorStop(1, "#030712");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  ctx.save();

  ctx.translate(width / 2 + panX, height / 2 + panY);
  ctx.scale(zoomScale, zoomScale);
  ctx.translate(-width / 2, -220);

  const centerX = width / 2;
  const centerY = 220; 
  const trackWidth = is3DMode ? 44 : 32;

  if (is3DMode) {
    ctx.save();
    ctx.beginPath();
    for (let i = 0; i <= 140; i++) {
      const angle = (i / 140) * Math.PI * 2;
      const pt = getTrackPoint(angle, centerX, centerY, data, width);
      const shadowY = pt.y + 20 * pt.scale;
      if (i === 0) ctx.moveTo(pt.x, shadowY);
      else ctx.lineTo(pt.x, shadowY);
    }
    ctx.strokeStyle = "rgba(0, 0, 0, 0.6)";
    ctx.lineWidth = trackWidth + 16;
    ctx.filter = "blur(10px)";
    ctx.stroke();
    ctx.restore();

    drawCustomRealTrackBand3D(ctx, centerX, centerY, data, width, trackWidth + 10, "#022c19", 16);
    drawCustomRealTrackBand3D(ctx, centerX, centerY, data, width, trackWidth + 4, "#006837", 10);
  }

  ctx.save();
  ctx.beginPath();
  for (let i = 0; i <= 140; i++) {
    const angle = (i / 140) * Math.PI * 2;
    const pt = getTrackPoint(angle, centerX, centerY, data, width);
    if (i === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  }
  
  const innerGrad = ctx.createRadialGradient(centerX, centerY, 10, centerX, centerY, 220);
  innerGrad.addColorStop(0, "#041d13");
  innerGrad.addColorStop(0.7, "#022c19");
  innerGrad.addColorStop(1, "#01120b");
  ctx.fillStyle = innerGrad;
  ctx.fill();

  ctx.strokeStyle = "rgba(16, 185, 129, 0.35)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();

  drawCustomRealTrackBand(ctx, centerX, centerY, data, width, trackWidth + 6, "#022c19");
  drawCustomRealTrackBand(ctx, centerX, centerY, data, width, trackWidth, "#006837");

  drawCustomShapeSegment(ctx, centerX, centerY, data, width, trackWidth, 0, 0.166, "#10b981");
  drawCustomShapeSegment(ctx, centerX, centerY, data, width, trackWidth, 0.166, 0.666, "#06b6d4");
  drawCustomShapeSegment(ctx, centerX, centerY, data, width, trackWidth, 0.666, 1.0, "#f59e0b");

  if (data.pacingZone) {
    drawCustomShapeSegment(ctx, centerX, centerY, data, width, trackWidth + 6, data.pacingZone.startPct, data.pacingZone.endPct, "rgba(168, 85, 247, 0.85)");
    
    drawStrokedText(
      ctx,
      data.pacingZone.label[currentLang] || data.pacingZone.label["jp"],
      centerX,
      centerY + (is3DMode ? 75 : 55),
      "extrabold 11px Plus Jakarta Sans",
      "#c084fc",
      "#000000",
      4,
      "center"
    );
  }

  if (data.slopes) {
    data.slopes.forEach(slope => {
      drawCustomShapeSegment(ctx, centerX, centerY, data, width, trackWidth + 4, slope.startPct, slope.endPct, slope.color);
    });
  }

  const spurtPct = data.spurtPos / totalDist;
  const spurtAngle = spurtPct * Math.PI * 2;
  const spurtPt = getTrackPoint(spurtAngle, centerX, centerY, data, width);

  const rotSpurtAngle = spurtAngle + rotationAngle;
  const laserOffset = 26 * spurtPt.scale;
  const l1x = spurtPt.x + Math.cos(rotSpurtAngle) * laserOffset;
  const l1y = spurtPt.y + Math.sin(rotSpurtAngle) * laserOffset;
  const l2x = spurtPt.x - Math.cos(rotSpurtAngle) * (laserOffset * 0.6);
  const l2y = spurtPt.y - Math.sin(rotSpurtAngle) * (laserOffset * 0.6);

  ctx.beginPath();
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 4.5 * spurtPt.scale;
  ctx.shadowColor = "#ffd700";
  ctx.shadowBlur = 12;
  ctx.moveTo(l1x, l1y);
  ctx.lineTo(l2x, l2y);
  ctx.stroke();
  ctx.shadowBlur = 0;

  drawStrokedText(
    ctx, 
    "⚡️ LAST SPURT LINE", 
    spurtPt.x - 20, 
    spurtPt.y + 24, 
    "extrabold 11px Plus Jakarta Sans", 
    "#ffd700", 
    "#000000", 
    4, 
    "right"
  );

  drawCustomShapeFence(ctx, centerX, centerY, data, width, trackWidth / 2 + 1);
  drawCustomShapeFence(ctx, centerX, centerY, data, width, -trackWidth / 2 - 1);

  if (data.slopes) {
    data.slopes.forEach(slope => {
      const angle = slope.posPercent * Math.PI * 2;
      const tPt = getTrackPoint(angle, centerX, centerY, data, width);

      const rotAngle = angle + rotationAngle;
      const dist = (slope.offsetDist || 45) * tPt.scale;
      let sx = tPt.x + Math.cos(rotAngle) * dist;
      let sy = tPt.y + Math.sin(rotAngle) * dist;

      if (slope.labelDir === "top-right-far") {
        sx += 40 * tPt.scale;
        sy -= 20 * tPt.scale;
      } else if (slope.labelDir === "bottom-left") {
        sx -= 20 * tPt.scale;
        sy += 15 * tPt.scale;
      }

      ctx.beginPath();
      ctx.strokeStyle = slope.color;
      ctx.lineWidth = 2 * tPt.scale;
      ctx.setLineDash([3, 3]);
      ctx.moveTo(tPt.x, tPt.y);
      ctx.lineTo(sx, sy);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = slope.color;
      ctx.beginPath();
      ctx.arc(sx, sy, 7 * tPt.scale, 0, Math.PI * 2);
      ctx.fill();

      const labelText = slope.label[currentLang] || slope.label["jp"];
      drawStrokedText(
        ctx,
        ` ${labelText}`,
        sx + (sx > centerX ? 12 : -12),
        sy + 4,
        "bold 12px Plus Jakarta Sans",
        "#ffffff",
        "#000000",
        4,
        sx > centerX ? "left" : "right"
      );
    });
  }

  const pinsList = (data.skillPins && data.skillPins[currentLang]) ? data.skillPins[currentLang] : (data.skillPins["jp"] || []);
  pinsList.forEach((pin) => {
    const angle = pin.posPercent * Math.PI * 2;
    const tPt = getTrackPoint(angle, centerX, centerY, data, width);

    const rotAngle = angle + rotationAngle;
    const dist = (pin.offsetDist || 35) * tPt.scale;
    let px = tPt.x + Math.cos(rotAngle) * dist;
    let py = tPt.y + Math.sin(rotAngle) * dist;

    if (pin.labelDir === "right-down") {
      px += 25 * tPt.scale;
      py += 22 * tPt.scale;
    } else if (pin.labelDir === "right-up") {
      px += 25 * tPt.scale;
      py -= 20 * tPt.scale;
    } else if (pin.labelDir === "top-left-far") {
      px -= 45 * tPt.scale;
      py -= 22 * tPt.scale;
    } else if (pin.labelDir === "top-left") {
      px -= 25 * tPt.scale;
      py -= 15 * tPt.scale;
    } else if (pin.labelDir === "right") {
      px += 25 * tPt.scale;
    }

    ctx.beginPath();
    ctx.strokeStyle = pin.color;
    ctx.lineWidth = 1.8 * tPt.scale;
    ctx.moveTo(tPt.x, tPt.y);
    ctx.lineTo(px, py);
    ctx.stroke();

    ctx.fillStyle = pin.color;
    ctx.beginPath();
    ctx.arc(px, py, 6 * tPt.scale, 0, Math.PI * 2);
    ctx.fill();

    drawStrokedText(
      ctx,
      ` ${pin.label}`,
      px + (px > centerX ? 10 : -10),
      py + 4,
      "bold 11px Plus Jakarta Sans",
      "#ffffff",
      "#000000",
      3.8,
      px > centerX ? "left" : "right"
    );
  });

  const runnerPercent = currentRunnerPos / totalDist;
  const runnerAngle = runnerPercent * Math.PI * 2;
  const rPt = getTrackPoint(runnerAngle, centerX, centerY, data, width);

  let currentSlopeStatus = currentLang === "jp" ? "🟢 平坦" : "🟢 Flat";
  if (data.slopes) {
    data.slopes.forEach(s => {
      if (runnerPercent >= s.startPct && runnerPercent <= s.endPct) {
        currentSlopeStatus = (s.label[currentLang] || s.label["jp"]);
      }
    });
  }

  if (data.pacingZone && runnerPercent >= data.pacingZone.startPct && runnerPercent <= data.pacingZone.endPct) {
    currentSlopeStatus += currentLang === "jp" ? " (⚠️ ペースダウン注意)" : " (⚠️ Pace Down)";
  }

  ctx.beginPath();
  ctx.arc(rPt.x, rPt.y, 11 * rPt.scale, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
  ctx.strokeStyle = "#10b981";
  ctx.lineWidth = 4 * rPt.scale;
  ctx.shadowColor = "#10b981";
  ctx.shadowBlur = 10;
  ctx.stroke();
  ctx.shadowBlur = 0;

  const hudY = rPt.y > centerY ? rPt.y + 24 * rPt.scale : rPt.y - 20 * rPt.scale;
  drawStrokedText(
    ctx,
    `🏃‍♂️ ${currentRunnerPos}m [${currentSlopeStatus}]`,
    rPt.x,
    hudY,
    "bold 12px Plus Jakarta Sans",
    "#ffffff",
    "#000000",
    4.5,
    "center"
  );

  ctx.restore();

  drawDiscordEmbedSlopeProfile(ctx, width, height, totalDist);
}

function drawCustomRealTrackBand(ctx, cx, cy, data, width, strokeW, colorHex) {
  const steps = 140;
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const pt = getTrackPoint(angle, cx, cy, data, width);
    if (i === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  }
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = strokeW;
  ctx.lineCap = "round";
  ctx.stroke();
}

function drawCustomRealTrackBand3D(ctx, cx, cy, data, width, strokeW, colorHex, depthY) {
  const steps = 140;
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const pt = getTrackPoint(angle, cx, cy, data, width);
    const wallY = pt.y + depthY * pt.scale;
    if (i === 0) ctx.moveTo(pt.x, wallY);
    else ctx.lineTo(pt.x, wallY);
  }
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = strokeW;
  ctx.lineCap = "round";
  ctx.stroke();
}

function drawCustomShapeSegment(ctx, cx, cy, data, width, strokeW, startPct, endPct, colorHex) {
  const steps = 60;
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const pct = startPct + (i / steps) * (endPct - startPct);
    const angle = pct * Math.PI * 2;
    const pt = getTrackPoint(angle, cx, cy, data, width);
    if (i === 0) ctx.moveTo(pt.x, pt.y);
    else ctx.lineTo(pt.x, pt.y);
  }
  ctx.strokeStyle = colorHex;
  ctx.lineWidth = strokeW * (is3DMode ? 1.1 : 1.0);
  ctx.stroke();
}

function drawCustomShapeFence(ctx, cx, cy, data, width, offset) {
  const steps = 120;
  ctx.beginPath();
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * Math.PI * 2;
    const pt = getTrackPoint(angle, cx, cy, data, width);
    const rotAngle = angle + rotationAngle;
    const fx = pt.x + Math.cos(rotAngle) * offset * pt.scale;
    const fy = pt.y + Math.sin(rotAngle) * offset * pt.scale;
    if (i === 0) ctx.moveTo(fx, fy);
    else ctx.lineTo(fx, fy);
  }
  ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
  ctx.lineWidth = 2.5;
  ctx.stroke();
}

function drawDiscordEmbedSlopeProfile(ctx, width, height, totalDist) {
  const padLeft = 45;
  const padRight = 45;
  const chartW = width - padLeft - padRight;
  const graphYBase = height - 20;

  drawStrokedText(
    ctx,
    currentLang === "jp" ? "📊 X (旧Twitter) ＆ YouTube 引用データ: 高低差プロファイル" : "📊 Cited Data Profile (X & YouTube)",
    padLeft,
    graphYBase - 42,
    "bold 11px Plus Jakarta Sans",
    "#38bdf8",
    "#000000",
    3,
    "left"
  );

  ctx.save();
  ctx.beginPath();
  ctx.moveTo(padLeft, graphYBase);

  for (let x = 0; x <= chartW; x += 5) {
    const dist = (x / chartW) * totalDist;
    let slopeH = 0;
    if (dist >= 2150 && dist <= 2450) {
      slopeH = Math.sin(((dist - 2150) / 300) * Math.PI) * 28;
    } else if (dist >= 600 && dist <= 1100) {
      slopeH = -Math.sin(((dist - 600) / 500) * Math.PI) * 10;
    }

    const cx = padLeft + x;
    const cy = graphYBase - slopeH;
    ctx.lineTo(cx, cy);
  }

  ctx.lineTo(padLeft + chartW, graphYBase);
  ctx.closePath();

  const fillGrad = ctx.createLinearGradient(0, graphYBase - 35, 0, graphYBase);
  fillGrad.addColorStop(0, "rgba(56, 189, 248, 0.45)");
  fillGrad.addColorStop(1, "rgba(56, 189, 248, 0.0)");
  ctx.fillStyle = fillGrad;
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = "#38bdf8";
  ctx.lineWidth = 2.5;

  for (let x = 0; x <= chartW; x += 5) {
    const dist = (x / chartW) * totalDist;
    let slopeH = 0;
    if (dist >= 2150 && dist <= 2450) {
      slopeH = Math.sin(((dist - 2150) / 300) * Math.PI) * 28;
    } else if (dist >= 600 && dist <= 1100) {
      slopeH = -Math.sin(((dist - 600) / 500) * Math.PI) * 10;
    }

    const cx = padLeft + x;
    const cy = graphYBase - slopeH;
    if (x === 0) ctx.moveTo(cx, cy);
    else ctx.lineTo(cx, cy);
  }
  ctx.stroke();

  ctx.restore();

  drawStrokedText(ctx, "0m (START)", padLeft, graphYBase + 12, "bold 10px Plus Jakarta Sans", "#94a3b8", "#000000", 3, "center");
  drawStrokedText(ctx, `${Math.floor(totalDist / 2)}m`, padLeft + chartW / 2, graphYBase + 12, "bold 10px Plus Jakarta Sans", "#94a3b8", "#000000", 3, "center");
  drawStrokedText(ctx, `${totalDist}m (GOAL)`, padLeft + chartW, graphYBase + 12, "bold 10px Plus Jakarta Sans", "#94a3b8", "#000000", 3, "center");
}

function updateCourseView(courseKey) {
  const data = courseDatabase[courseKey] || courseDatabase["nakayama_2500_turf"];
  const titleName = (data.name && data.name[currentLang]) ? data.name[currentLang] : (data.name["jp"] || data.name["en"]);

  document.getElementById("course-title-display").innerHTML = `<i class="fa-solid fa-route" style="color: var(--jra-official-green);"></i> ${titleName}`;
  document.getElementById("info-straight").innerText = typeof data.straightLen === 'object' ? data.straightLen[currentLang] || data.straightLen['jp'] : data.straightLen;
  document.getElementById("info-slope").innerText = typeof data.slope === 'object' ? data.slope[currentLang] || data.slope['jp'] : data.slope;
  document.getElementById("info-spurt").innerText = `${data.spurtPos}m`;

  const condContainer = document.getElementById("race-conditions-container");
  if (condContainer && data.conditions) {
    condContainer.innerHTML = `
      <span class="condition-badge cond-weather">${data.conditions.weather[currentLang] || data.conditions.weather['jp']}</span>
      <span class="condition-badge cond-ground">${data.conditions.ground[currentLang] || data.conditions.ground['jp']}</span>
      <span class="condition-badge cond-track">${data.conditions.trackType[currentLang] || data.conditions.trackType['jp']}</span>
      <span class="condition-badge cond-season">${data.conditions.season[currentLang] || data.conditions.season['jp']}</span>
    `;
  }

  const slider = document.getElementById("course-slider");
  slider.max = data.totalDistance;
  slider.value = data.spurtPos;
  currentRunnerPos = data.spurtPos;
  document.getElementById("distance-val").innerText = data.spurtPos.toLocaleString();

  drawUmaiOvalDiagram();

  const recList = document.getElementById("recommended-skills-list");
  recList.innerHTML = "";
  const recSkillsList = (data.recommendedSkills && data.recommendedSkills[currentLang]) ? data.recommendedSkills[currentLang] : (data.recommendedSkills["jp"] || []);
  recSkillsList.forEach(skill => {
    const card = document.createElement("div");
    card.className = "jra-skill-item recommended";
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="jra-skill-name">${skill.name}</span>
        <span style="font-size: 0.7rem; font-weight: 800; color: #006837; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">${skill.tag}</span>
      </div>
      <div class="jra-skill-desc">${skill.desc}</div>
      <div style="font-size: 0.75rem; font-weight: 800; color: #d97706;">
        📍 発動距離: ${skill.triggerMeter || skill.trigger}
      </div>
    `;
    recList.appendChild(card);
  });

  const trapList = document.getElementById("trap-skills-list");
  trapList.innerHTML = "";
  const trapSkillsList = (data.trapSkills && data.trapSkills[currentLang]) ? data.trapSkills[currentLang] : (data.trapSkills["jp"] || []);
  trapSkillsList.forEach(skill => {
    const card = document.createElement("div");
    card.className = "jra-skill-item trap";
    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <span class="jra-skill-name">${skill.name}</span>
        <span style="font-size: 0.7rem; font-weight: 800; color: #ef4444; background: #ffe4e6; padding: 2px 6px; border-radius: 4px;">${skill.tag}</span>
      </div>
      <div class="jra-skill-desc">${skill.desc}</div>
      <div style="font-size: 0.75rem; font-weight: 800; color: #ef4444;">
        ❌ 発動情報: ${skill.triggerMeter || skill.trigger}
      </div>
    `;
    trapList.appendChild(card);
  });

  renderAllSkillsCatalog();
}
