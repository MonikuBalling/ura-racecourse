/* ==========================================================================
   Universal Racing Analyzer (URA) - Complete Rebuild Engine (2026.08.16)
   ========================================================================== */

// 🏆 5言語 完全動的多言語翻訳辞書 (i18n)
const i18n = {
  jp: {
    headerSub: "ウマ娘 プリティーダービー 非公式ファン制作 コース ＆ スキルアナライザー",
    ticker: "【2026年9月決定チャンミ対応】東京 芝 1800m (毎日王冠) コースデータ＆有力スキル評価エンジンを同期適用しました。",
    aboutTitle: "【非公式ファン制作ポータル声明 (Unofficial Fan Site)】",
    aboutDesc: "本サイトは「ウマ娘 プリティーダービー」を愛する有志トレーナーによって制作・運営されている非公式データアナライザーです。JRA公式コース規格やスキル発動位置の検証・解説を目的としており、Cygames様およびJRA様等の公式企業とは一切関係ございません。",
    selectCourse: "コース ＆ 条件選択",
    trackLabel: "競馬場 (Track)",
    distanceLabel: "距離 ＆ コース種別 (Distance)",
    specTitle: "JRA公式コーススペック",
    straightLabel: "直線距離:",
    slopeLabel: "高低差:",
    spurtLabel: "最速スパート:",
    btnFeedback: "ご意見・改善点送信"
  },
  en: {
    headerSub: "Umamusume Pretty Derby Unofficial Fan Course & Skill Analyzer",
    ticker: "[Sep 2026 CM Ready] Tokyo Turf 1800m (Mainichi Okan) dataset & skill evaluation engine updated.",
    aboutTitle: "[Unofficial Fan Site Statement]",
    aboutDesc: "This website is an unofficial fan-made dataset created for Umamusume Pretty Derby players. Not affiliated with Cygames or JRA.",
    selectCourse: "Course & Track Selection",
    trackLabel: "Track",
    distanceLabel: "Distance",
    specTitle: "JRA Official Track Spec",
    straightLabel: "Final Straight:",
    slopeLabel: "Elevation Diff:",
    spurtLabel: "Optimal Spurt:",
    btnFeedback: "Send Feedback"
  },
  fr: {
    headerSub: "Analyseur non-officiel de parcours et compétences pour Umamusume",
    ticker: "[CM Sep 2026 Prêt] Tokyo Gazon 1800m mis à jour avec évaluation des compétences.",
    aboutTitle: "[Déclaration du site de fans non officiel]",
    aboutDesc: "Ce site est un outil non officiel créé par des fans pour Umamusume Pretty Derby. Non affilié à Cygames ni à la JRA.",
    selectCourse: "Sélection du Parcours",
    trackLabel: "Hippodrome",
    distanceLabel: "Distance",
    specTitle: "Spécifications Officiel JRA",
    straightLabel: "Ligne droite:",
    slopeLabel: "Dénivelé:",
    spurtLabel: "Sprint Optimal:",
    btnFeedback: "Envoyer des commentaires"
  },
  tw: {
    headerSub: "賽馬娘 Pretty Derby 非官方粉絲製作 賽道與技能分析器",
    ticker: "【2026年9月冠軍會對應】東京 草地 1800m (每日王冠) 賽道數據與技能評估引擎已同步更新。",
    aboutTitle: "【非官方粉絲製作聲明】",
    aboutDesc: "本網站是由熱愛賽馬娘 Pretty Derby 的玩家製作的非官方分析器。與 Cygames 及 JRA 等官方公司無關。",
    selectCourse: "賽道與條件選擇",
    trackLabel: "賽馬場",
    distanceLabel: "距離與種類",
    specTitle: "JRA官方賽道規格",
    straightLabel: "直線距離:",
    slopeLabel: "高低差:",
    spurtLabel: "最快沖刺:",
    btnFeedback: "發送意見與建議"
  },
  kr: {
    headerSub: "우마무스메 프리티 더비 비공식 팬 제작 코스 & 스킬 분석기",
    ticker: "【2026년 9월 챔미 대응】도쿄 잔디 1800m (매일 왕관) 코스 데이터 및 스킬 평가 엔진 동기화 완료.",
    aboutTitle: "【비공식 팬 제작 포털 성명】",
    aboutDesc: "본 사이트는 우마무스메 프리티 더비를 사랑하는 팬에 의해 제작된 비공식 분석기입니다. Cygames 및 JRA와 무관합니다.",
    selectCourse: "코스 및 조건 선택",
    trackLabel: "경마장",
    distanceLabel: "거리 및 종목",
    specTitle: "JRA 공식 코스 스펙",
    straightLabel: "직선 거리:",
    slopeLabel: "고저차:",
    spurtLabel: "최속 스퍼트:",
    btnFeedback: "의견 및 개선점 전송"
  }
};

// 🏇 コースデータベース
const courseDatabase = {
  "tokyo_2400_turf": {
    name: { jp: "東京 芝 2400m (JRA日本ダービー・ジャパンC)", en: "Tokyo Turf 2400m (Japan Derby)", fr: "Tokyo Gazon 2400m", tw: "東京 草地 2400m (日本德比)", kr: "도쿄 잔디 2400m (일본 더비)" },
    straightLen: { jp: "525m (JRA最長クラス)", en: "525m (JRA Longest)", fr: "525m", tw: "525m (最長直線)", kr: "525m" },
    slope: { jp: "2.0m (東京名物大坂)", en: "2.0m Tokyo Slope", fr: "2.0m Pente Tokyo", tw: "2.0m 直線大坡", kr: "2.0m 대 경사" },
    totalDistance: 2400,
    spurtPos: 1600,
    recommendedSkills: [
      { name: "王手 (金加速)", tag: "🔥 100%最速加速 (神効果)", desc: "東京2400mの1600m地点(終盤開始コーナー)で100%最速発動！先行・差し必須の爆発的加速度。", trigger: "1,600m地点", styles: ["senko", "sashi"] },
      { name: "アングリング×スキーミング", tag: "🔥 逃げ1位最速加速", desc: "セイウンスカイ固有。逃げ脚質で終盤コーナー1位時に100%最速発動。", trigger: "1,600m地点", styles: ["nige"] },
      { name: "つぼみ、ほころぶ時 (ニシノフラワー)", tag: "✨ 先行3〜4位最速加速", desc: "先行脚質で3〜4位時に最終コーナー後半で最速加速を発揮。", trigger: "1,600m地点", styles: ["senko"] },
      { name: "彼方、その先へ (メジロドーベル)", tag: "✨ 差し追込5〜6位加速", desc: "差し・追込脚質で5〜6位時に終盤コーナーで高い加速効果を発揮。", trigger: "1,600m地点", styles: ["sashi", "oikomi"] },
      { name: "東京レース場◎ / 日本ダービー娘", tag: "✨ パッシブ (スピード+80)", desc: "東京2400m公式規格と合致！0m地点でスピード+80が常時乗る実質ステ超え。", trigger: "0m地点 (確定★)", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
      { name: "円弧のマエストロ / 好転一息", tag: "💧 金回復 (+5.5%)", desc: "中盤で確定発動。完走に必要なスタミナ165相当を確実に補給。", trigger: "800m〜1,200m地点", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ],
    trapSkills: [
      { name: "迫る影 / 直線一気", tag: "⚠️ 無駄・遅延発動 (罠)", desc: "東京2400mの終盤開始(1600m)はコーナーのため、直線一気は最速発動せず1920mまで遅延して効果が無駄になります。", trigger: "1,920m地点まで無効", styles: ["oikomi"] },
      { name: "紅焔ギア / LP1211-M", tag: "⚠️ 最終コーナー遅延 (罠)", desc: "マルゼンスキー固有。最終コーナー後半で発動するが、最高速到達後のため効果が無駄になります。", trigger: "最終コーナー後半", styles: ["senko", "sashi", "oikomi"] },
      { name: "登山家 (坂加速)", tag: "⚠️ 序盤発動無効 (罠)", desc: "向正面の坂で序盤早々に発動してしまい、終盤の加速にまったく寄与しない罠スキル。", trigger: "序盤無効発動", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ]
  },
  "tokyo_1800_turf": {
    name: { jp: "東京 芝 1800m (2026年9月決定チャンミ・毎日王冠)", en: "Tokyo Turf 1800m (Sep 2026 CM)", fr: "Tokyo Gazon 1800m", tw: "東京 草地 1800m (2026年9月每日王冠)", kr: "도쿄 잔디 1800m (2026년 9월 매일 왕관)" },
    straightLen: { jp: "525m (JRA最長クラス)", en: "525m", fr: "525m", tw: "525m", kr: "525m" },
    slope: { jp: "2.0m (東京名物大坂)", en: "2.0m Slope", fr: "2.0m Pente", tw: "2.0m 大坡", kr: "2.0m 경사" },
    totalDistance: 1800,
    spurtPos: 1200,
    recommendedSkills: [
      { name: "王手 (金加速)", tag: "🔥 2026年9月チャンミ最速加速", desc: "東京1800m(毎日王冠)で1,200m地点から100%最速発動！先行・差し必須。", trigger: "1,200m地点 (最速★)", styles: ["senko", "sashi"] },
      { name: "ハイボルテージ / 心外無別", tag: "🔥 マイル中距離前加速", desc: "終盤前半で発動し、東京の長い直線で前脚質に強力加速を提供。", trigger: "1,200m地点", styles: ["nige", "senko"] },
      { name: "アングリング×スキーミング", tag: "🔥 逃げ1位最速加速", desc: "逃げ脚質で1,200m地点1位時に100%最速発動。", trigger: "1,200m地点", styles: ["nige"] },
      { name: "東京レース場◎ / 非根幹距離◎", tag: "✨ パッシブ (スピード+80)", desc: "2026年9月チャンミ東京1800m条件で0mから確定発動。", trigger: "0m地点", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ],
    trapSkills: [
      { name: "迫る影 / 直線一気", tag: "⚠️ 最終コーナー遅延無効 (罠)", desc: "東京1800mの終盤開始(1200m)はコーナーのため最速発動しません。", trigger: "1,275m地点まで無効", styles: ["oikomi"] }
    ]
  },
  "nakayama_2500_turf": {
    name: { jp: "中山 芝 2500m (JRA有馬記念・内回り)", en: "Nakayama Turf 2500m (Arima Kinen)", fr: "Nakayama Gazon 2500m", tw: "中山 草地 2500m (有馬紀念)", kr: "나카야마 잔디 2500m (아리마 기념)" },
    straightLen: { jp: "310m (JRA主要最短)", en: "310m (Shortest)", fr: "310m", tw: "310m (最短)", kr: "310m" },
    slope: { jp: "2.2m (ゴール前激坂)", en: "2.2m Steep Slope", fr: "2.2m Pente", tw: "2.2m 陡坡", kr: "2.2m 경사" },
    totalDistance: 2500,
    spurtPos: 1666,
    recommendedSkills: [
      { name: "迫る影 / 直線一気", tag: "🔥 100%最速加速 (有馬・長距離神効果)", desc: "有馬記念2500m終盤開始(1666m)は向正面の直線！最高加速+0.40m/s²が100%最速着火。", trigger: "1,666m地点 (最速★)", styles: ["oikomi"] },
      { name: "中山レース場◎ / 有馬記念娘", tag: "✨ パッシブ (スピード/スタミナ+80)", desc: "JRA中山2500m公式規格と合致。0m地点で能力を常時+80(確定)底上げします。", trigger: "0m地点 (常時+80★)", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
      { name: "円弧のマエストロ / 好転一息", tag: "💧 金回復 (+5.5%)", desc: "有馬記念のタフなスタミナ勝負で必須。中盤コーナーで安定発動。", trigger: "800m地点", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ],
    trapSkills: [
      { name: "紅焔ギア/LP1211-M", tag: "⚠️ 最終コーナー遅延 (罠)", desc: "マルゼンスキー固有。最終コーナー(2200m)は最高速到達後のため効果が無駄になります。", trigger: "2,200m地点", styles: ["senko", "sashi", "oikomi"] }
    ]
  },
  "hanshin_1600_turf": {
    name: { jp: "阪神 芝 1600m (JRAマイルCS・外回り)", en: "Hanshin Turf 1600m (Mile CS)", fr: "Hanshin Gazon 1600m", tw: "阪神 草地 1600m", kr: "한신 잔디 1600m" },
    straightLen: { jp: "473m (JRA外回り)", en: "473m", fr: "473m", tw: "473m", kr: "473m" },
    slope: { jp: "1.8m (阪神急坂)", en: "1.8m Slope", fr: "1.8m Pente", tw: "1.8m 陡坡", kr: "1.8m 경사" },
    totalDistance: 1600,
    spurtPos: 1066,
    recommendedSkills: [
      { name: "ハイボルテージ / 電光石火", tag: "🔥 マイル必須加速", desc: "1,066m地点(終盤開始直後)で加速度+0.40m/s²が爆発的発動。", trigger: "1,066m地点", styles: ["nige", "senko", "sashi", "oikomi"] },
      { name: "阪神レース場◎ / 根幹距離◎", tag: "✨ パッシブ (スピード+80)", desc: "JRA阪神1600m規格と合致！0m地点で能力+80常時底上げ。", trigger: "0m地点", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ],
    trapSkills: [
      { name: "長距離専用・過剰スタミナ回復", tag: "⚠️ Pt無駄使い", desc: "マイル戦で過剰回復を積むと攻撃スキルPtが不足します。", trigger: "全区間過剰", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ]
  },
  "kyoto_3200_turf": {
    name: { jp: "京都 芝 3200m (JRA天皇賞春・淀の坂)", en: "Kyoto Turf 3200m (Tenno Sho Spring)", fr: "Kyoto Gazon 3200m", tw: "京都 草地 3200m (天皇賞春)", kr: "교토 잔디 3200m (텐노상 봄)" },
    straightLen: { jp: "404m (JRA京都外回り)", en: "404m", fr: "404m", tw: "404m", kr: "404m" },
    slope: { jp: "4.3m (淀の坂高低差)", en: "4.3m Yodo Hill", fr: "4.3m Pente Yodo", tw: "4.3m 淀之坂", kr: "4.3m 요도의 언덕" },
    totalDistance: 3200,
    spurtPos: 2133,
    recommendedSkills: [
      { name: "迫る影 / 直線一気", tag: "🔥 長距離最速加速", desc: "2,133m地点(向正面直線)で100%最速加速度+0.40m/s²発動。", trigger: "2,133m地点 (最速★)", styles: ["oikomi"] },
      { name: "京都レース場◎ / 天皇賞春娘", tag: "✨ パッシブ (スピード/スタミナ+80)", desc: "0m地点でスピード・スタミナを確定で+80常時底上げ。", trigger: "0m地点", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
    ],
    trapSkills: [
      { name: "紅焔ギア/LP1211-M", tag: "⚠️ 最終コーナー遅延無効", desc: "最終コーナー(2800m)は最高速到達後のため効果が無駄になります。", trigger: "2,800m地点", styles: ["senko", "sashi", "oikomi"] }
    ]
  }
};

// 🏆 全主要実戦スキル 50選マスターデータベース
const masterSkillsCatalog = [
  // ⚡️ 最速・金加速 (Sランク)
  { name: "王手 (金加速)", cat: "accel", rank: "S", score: 99, effect: "加速度 +0.40 m/s²", cost: "Pt 140 (超神コスパ)", tag: "🔥 先行・差し最速加速", meter: "終盤開始 最終コーナー手前", desc: "先行・差し必須！東京2400mなどの終盤開始がコーナーのコースで100%最速発動。", styles: ["senko", "sashi"] },
  { name: "迫る影 / 直線一気", cat: "accel", rank: "S", score: 98, effect: "加速度 +0.40 m/s²", cost: "Pt 140 (追込必須)", tag: "🔥 追込最速加速", meter: "終盤開始 直線区間", desc: "追込必須！有馬記念や長距離など終盤開始が直線のコースで100%最速着火。", styles: ["oikomi"] },
  { name: "アングリング×スキーミング", cat: "accel", rank: "S", score: 97, effect: "加速度 +0.40 m/s²", cost: "Pt 120 (逃げ1位固有)", tag: "🔥 逃げ1位確定加速", meter: "終盤開始 コーナー", desc: "セイウンスカイ固有。逃げ脚質で1位時に100%最速で爆発的加速度が得られる。", styles: ["nige"] },
  { name: "ハイボルテージ / 心外無別", cat: "accel", rank: "S", score: 95, effect: "加速度 +0.40 m/s²", cost: "Pt 160 (マイル神スキル)", tag: "🔥 マイル必須前加速", meter: "マイル戦 終盤前半", desc: "マイル戦で100%推奨。終盤前半で発動し前脚質の勝率を爆発的に引き上げる。", styles: ["nige", "senko"] },
  { name: "つぼみ、ほころぶ時 (ニシノフラワー)", cat: "accel", rank: "A", score: 93, effect: "加速度 +0.40 m/s²", cost: "Pt 120 (先行・マイル固有)", tag: "✨ 先行3〜4位加速", meter: "最終コーナー後半", desc: "短距離・マイルの最終コーナー後半で3〜4位時に100%最速加速。", styles: ["senko"] },
  { name: "彼方、その先へ (メジロドーベル)", cat: "accel", rank: "A", score: 92, effect: "加速度 +0.35 m/s²", cost: "Pt 120 (差し追込固有)", tag: "✨ 後方脚質加速", meter: "終盤コーナー (5〜6位)", desc: "差し・追込で5〜6位時に発動。終盤コーナーで高い加速補助効果を発揮。", styles: ["sashi", "oikomi"] },
  { name: "電光石火 (金加速)", cat: "accel", rank: "A", score: 91, effect: "加速度 +0.40 m/s²", cost: "Pt 180 (追い越し条件)", tag: "✨ 後方一発加速", meter: "終盤 追い越し体制時", desc: "追い越し体制に入った瞬間に発動する超強力加速。短距離・マイルで真価を発揮。", styles: ["sashi", "oikomi"] },

  // 💧 金回復 (S〜Aランク)
  { name: "円弧のマエストロ", cat: "heal", rank: "S", score: 94, effect: "+5.5% (スタミナ165相当)", cost: "Pt 170 (確定高効率)", tag: "💧 金回復王道", meter: "中盤コーナー区間", desc: "全脚質で使える王道金回復。中盤コーナーで安定して発動し完走を確実化。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "好転一息 (金回復)", cat: "heal", rank: "A", score: 89, effect: "+5.5% (スタミナ165相当)", cost: "Pt 160 (直線発動)", tag: "✨ 直線確定回復", meter: "中盤 直線区間", desc: "中盤の直線で発動する汎用金回復。長距離・中距離でのスタミナ切れを防止。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "神速 (金速度＆回復)", cat: "heal", rank: "A", score: 91, effect: "速度+0.35m/s ＆ 回復1.5%", cost: "Pt 180 (ハイブリッド)", tag: "✨ 速度＋回復両立", meter: "後半区間", desc: "速度アップと体力回復が同時に乗る超優秀ハイブリッドスキル。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },

  // ✨ 速度・立ち回り
  { name: "アガってきた！ / ペースアップ", cat: "sure", rank: "A", score: 88, effect: "目標速度 +0.35 m/s", cost: "Pt 150 (中盤押し上げ)", tag: "✨ 中盤強力速度", meter: "中盤 ランダム位置", desc: "中盤で追い抜くと発動。位置取りを押し上げて終盤への接続を有利にする。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "弧線のプロフェッサー", cat: "sure", rank: "A", score: 87, effect: "目標速度 +0.35 m/s", cost: "Pt 160 (コーナースピード)", tag: "✨ 汎用金速度", meter: "コーナー区間", desc: "コーナーで速度アップ。2回発動することもあり全コースで高水準のパフォーマンス。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "ウマ娘好み / 寄り寄り", cat: "sure", rank: "A", score: 89, effect: "目標速度 +0.15 m/s (速効)", cost: "Pt 100 (超神コスパ白)", tag: "✨ 神コスパ白速度", meter: "序盤 周囲にウマ娘3人", desc: "序盤早々に周囲にウマ娘がいるだけで確定発動。位置取り争いを大優位に進める。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "スリップストリーム", cat: "sure", rank: "B", score: 84, effect: "目標速度 +0.15 m/s", cost: "Pt 100 (コスパ白)", tag: "⚡️ レーン追従速度", meter: "前方にウマ娘3秒", desc: "前のウマ娘の背後につくと発動。安いPtで確実に速度アップ。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },

  // 🌸 常時確定パッシブ
  { name: "東京/中山/阪神/京都 レース場◎", cat: "sure", rank: "S", score: 93, effect: "スピード +80 (常時底上げ)", cost: "Pt 90 (神コスパ)", tag: "🔥 常時確定ステ+80", meter: "0m スタート地点", desc: "スタート直後に100%発動。0mからスピード+80が常時乗るため実質ステータス超越。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "根幹距離◎ / 非根幹距離◎", cat: "sure", rank: "A", score: 86, effect: "スタミナ/スピード +60", cost: "Pt 90 (高コスパ)", tag: "✨ 距離確定パッシブ", meter: "0m スタート地点", desc: "該当コース距離で100%確定発動する優秀なステータス底上げスキル。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },
  { name: "左回り◎ / 右回り◎", cat: "sure", rank: "A", score: 86, effect: "スピード +60", cost: "Pt 90 (高コスパ)", tag: "✨ 回り確定パッシブ", meter: "0m スタート地点", desc: "旋回方向に応じて0mから常時スピード+60底上げ。", styles: ["all", "nige", "senko", "sashi", "oikomi"] },

  // ⚠️ 罠・注意
  { name: "紅焔ギア / LP1211-M (注意)", cat: "trap", rank: "C", score: 40, effect: "遅延/無効リスクあり", cost: "Pt無駄 (罠注意)", tag: "⚠️ Cランク/条件限定", meter: "最終コーナー後半", desc: "コースによっては最高速到達後の発動となり、加速度効果が無駄（罠）になるため注意。", styles: ["senko", "sashi", "oikomi"] },
  { name: "過剰スタミナ回復 (短距離・マイル時)", cat: "trap", rank: "C", score: 35, effect: "スタミナ溢れ無効", cost: "Pt浪費 (罠注意)", tag: "⚠️ 距離不適合", meter: "全区間", desc: "短距離やマイル戦で金の回復スキルを積みすぎると、余剰分が無駄になり攻撃スキルPtが不足。", styles: ["all", "nige", "senko", "sashi", "oikomi"] }
];

let currentServerMode = "jp";
let currentLang = "jp";
let currentCourseKey = "tokyo_2400_turf";
let currentRunnerPos = 1600;
let currentSkillCatalogCategory = "all";

// DOMロード初期化
document.addEventListener("DOMContentLoaded", () => {
  console.log("URA Analyzer Engine Initialized: Clean JRA Style x UMAI Data Integration (Vercel Auto-Deploy Verified)");
  setupEventListeners();
  updateLanguageUI();
  updateCourseView(currentCourseKey);
  renderAllSkillsCatalog();

  // 💬 多言語リアルタイム翻訳動画チャットの初期化
  initSubtitlePlayer();

  window.addEventListener("resize", () => {
    drawCourseCanvas();
  });
});




/* ==========================================================================
  },
  {
    start: 6,
    end: 10,
    speaker: "👑 メジロマックイーン (Mejiro McQueen)",
    text: {
      ja: "メジロ家の誇りにかけて…あきらめない覚悟、見せていただきましょう。",
      en: "For the pride of the Mejiro family... Show me your unwavering resolve.",
      kr: "메지로 가문의 자존심을 걸고... 포기하지 않는 각오를 보여주시죠.",
      tw: "賭上目白家的榮耀…就讓我見識一下你絕不放棄的決心吧。",
      fr: "Pour la fierté de la famille Mejiro... Montrez-moi votre détermination inébranlable.",
      ph: "Para sa karangalan ng pamilyang Mejiro... Ipakita mo sa akin ang iyong matatag na determinasyon."
    }
  },
  {
    start: 10,
    end: 15,
    speaker: "🌸 スペシャルウィーク (Special Week)",
    text: {
      ja: "お母ちゃん！私、日本一のウマ娘になるって、約束したんです！",
      en: "Mom! I promised that I would become the number one Horse Girl in Japan!",
      kr: "엄마! 나, 일본 최고의 우마무스메가 되겠다고 약속했거든요!",
      tw: "媽媽！我答應過你，我一定要成為日本第一的賽馬娘！",
      fr: "Maman ! J'ai promis que je deviendrais la fille-cheval numéro un du Japon !",
      ph: "Nanay! Nangako ako na ako ang magiging number one na Umamusume sa buong Hapon!"
    }
  },
  {
    start: 15,
    end: 20,
    speaker: "💫 サイレンススズカ (Silence Suzuka)",
    text: {
      ja: "誰にも追いつけない、あの景色の先へ…誰も見たことのない先頭を走りたい。",
      en: "To the view ahead where no one can catch up... I want to run in the lead that no one has ever seen.",
      kr: "누구도 따라잡을 수 없는, 저 풍경 너머로... 아무도 본 적 없는 선두를 달리고 싶어.",
      tw: "奔向誰也追不上的景色彼方…我想奔跑在誰也未曾見過的的最前線。",
      fr: "Vers ce paysage où personne ne peut me rattraper... Je veux courir en tête comme personne ne l'a jamais fait.",
      ph: "Tungo sa tanawin kung saan walang makakahabol... Gusto kong tumakbo sa pangunahin na hindi pa nakikita ng sinoman."
    }
  },
  {
    start: 20,
    end: 26,
    speaker: "🔥 UMAI AIアシスタント (AI Voice)",
    text: {
      ja: "【AI補正】2026年9月決定チャンミ(東京1800m)スパート位置1,200m通過！最速加速『王手』発動準備完了！",
      en: "[AI Auto-Correction] Passing 1,200m spurt mark for Sep 2026 CM! Optimal Accel 'Ote' ready for trigger!",
      kr: "[AI 자동보정] 2026년 9월 챔미 스퍼트지점 1,200m 통과! 최속 가속 '왕수(王手)' 발동 준비 완료!",
      tw: "[AI自動校正] 突破2026年9月冠軍會1,200m沖刺點！最快加速『王手』準備發動！",
      fr: "[Correction AI] Passage du repère de sprint 1 200 m ! Accélération optimale 'Ote' prête à se déclencher !",
      ph: "[AI Auto-Correction] Lumampas sa 1,200m spurt mark! Ang optimal na Accel 'Ote' ay handa nang mag-trigger!"
    }
  }
];

let currentSubLang = "ja";
let ytPlayer = null;
let subtitleSyncTimer = null;

function initSubtitlePlayer() {
  // 言語ピルボタンイベントの登録
  const langPills = document.querySelectorAll(".sub-lang-btn");
  langPills.forEach(btn => {
    btn.addEventListener("click", (e) => {
      langPills.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentSubLang = e.target.getAttribute("data-lang");
      updateSubtitleOverlayDisplay();
      renderTranscriptList();
    });
  });

  // タイムコードトランスクリプト初期描画
  renderTranscriptList();

  // YouTube IFrame APIの動的読み込み
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
  }
}

// YouTube IFrame API Readyコールバック
window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player("youtube-player", {
    videoId: "g_g58U7m_eI", // ウマ娘 公式PV / 関連サンプル動画ID
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0
    },
    events: {
      onStateChange: onPlayerStateChange
    }
  });
};

// プレイヤー状態変更時の同期タイマー制御
function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (!subtitleSyncTimer) {
      subtitleSyncTimer = setInterval(syncSubtitlesWithVideo, 200);
    }
  } else {
    if (subtitleSyncTimer) {
      clearInterval(subtitleSyncTimer);
      subtitleSyncTimer = null;
    }
  }
}

// 動画の再生時間(currentTime)とテロップ字幕のリアルタイムミリ秒同期
function syncSubtitlesWithVideo() {
  if (!ytPlayer || typeof ytPlayer.getCurrentTime !== "function") return;
  const currentTime = ytPlayer.getCurrentTime();

  // 現在の時間に該当する字幕を検索
  const sub = sampleSubtitleData.find(item => currentTime >= item.start && currentTime <= item.end);

  const speakerEl = document.getElementById("sub-speaker-name");
  const textEl = document.getElementById("sub-text-display");
  const overlayBox = document.getElementById("subtitle-overlay");

  if (sub) {
    speakerEl.innerText = sub.speaker;
    textEl.innerText = sub.text[currentSubLang] || sub.text["ja"];
    overlayBox.style.opacity = "1";
    overlayBox.style.transform = "translateX(-50%) translateY(0)";

    // トランスクリプトハイライト
    highlightActiveTranscript(sub.start);
  } else {
    // 該当するセリフがない時間帯
    speakerEl.innerText = "🌐 AI Multi-Lang Subtitle Sync";
    textEl.innerText = "再生中のセリフを自動検索中… (言語を上部ボタンでいつでも切り替えられます)";
    overlayBox.style.opacity = "0.85";
  }
}

// 言語切替時のオーバーレイ即時更新
function updateSubtitleOverlayDisplay() {
  syncSubtitlesWithVideo();
}

// タイムコード字幕トランスクリプトの描画 ＆ クリックジャンプ機能
function renderTranscriptList() {
  const container = document.getElementById("transcript-list");
  if (!container) return;

  container.innerHTML = "";

  sampleSubtitleData.forEach(sub => {
    const item = document.createElement("div");
    item.className = "transcript-item";
    item.setAttribute("data-start", sub.start);

    const min = Math.floor(sub.start / 60);
    const sec = Math.floor(sub.start % 60).toString().padStart(2, '0');
    const timeStr = `${min}:${sec}`;

    item.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem;">
        <span class="time-tag">▶ ${timeStr}</span>
        <strong style="color: #0f172a; font-size: 0.76rem;">${sub.speaker}</strong>
      </div>
      <div style="color: #334155; font-size: 0.78rem; text-align: right; flex: 1; margin-left: 0.5rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        ${sub.text[currentSubLang] || sub.text["ja"]}
      </div>
    `;

    // クリックで動画の時間にジャンプ
    item.addEventListener("click", () => {
      if (ytPlayer && typeof ytPlayer.seekTo === "function") {
        ytPlayer.seekTo(sub.start, true);
        ytPlayer.playVideo();
      }
    });

    container.appendChild(item);
  });
}

// アクティブなトランスクリプトのハイライト表示
function highlightActiveTranscript(activeStart) {
  const items = document.querySelectorAll(".transcript-item");
  items.forEach(item => {
    const start = parseFloat(item.getAttribute("data-start"));
    if (start === activeStart) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}


// イベントリスナー設定
function setupEventListeners() {
  // 🧭 メイン機能ナビゲーションタブ切り替え (ALL / 多言語動画Wiki / コースアナライザー)
  const navTabBtns = document.querySelectorAll(".nav-tab-btn");
  navTabBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      navTabBtns.forEach(b => b.classList.remove("active"));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add("active");

      const targetView = targetBtn.getAttribute("data-target");
      const communitySec = document.getElementById("view-section-community");
      const analyzerSec = document.getElementById("view-section-analyzer");

      if (targetView === "all") {
        if (communitySec) communitySec.classList.remove("hidden");
        if (analyzerSec) analyzerSec.classList.remove("hidden");
      } else if (targetView === "community") {
        if (communitySec) communitySec.classList.remove("hidden");
        if (analyzerSec) analyzerSec.classList.add("hidden");
      } else if (targetView === "analyzer") {
        if (communitySec) communitySec.classList.add("hidden");
        if (analyzerSec) analyzerSec.classList.remove("hidden");
      }
    });
  });

  // サーバー切り替え
  document.getElementById("btn-server-jp").addEventListener("click", () => {

    currentServerMode = "jp";
    currentLang = "jp";
    document.getElementById("select-language").value = "jp";
    document.getElementById("btn-server-jp").classList.add("active");
    document.getElementById("btn-server-global").classList.remove("active");

    currentCourseKey = "tokyo_2400_turf";
    updateCourseView("tokyo_2400_turf");
    updateLanguageUI();
  });

  document.getElementById("btn-server-global").addEventListener("click", () => {
    currentServerMode = "global";
    currentLang = "en";
    document.getElementById("select-language").value = "en";
    document.getElementById("btn-server-global").classList.add("active");
    document.getElementById("btn-server-jp").classList.remove("active");

    currentCourseKey = "hanshin_1600_turf";
    updateCourseView("hanshin_1600_turf");
    updateLanguageUI();
  });

  // 言語切り替え
  document.getElementById("select-language").addEventListener("change", (e) => {
    currentLang = e.target.value;
    updateLanguageUI();
    updateCourseView(currentCourseKey);
  });

  // 競馬場切り替え
  document.getElementById("select-track").addEventListener("change", (e) => {
    const track = e.target.value;
    const distSelect = document.getElementById("select-distance");
    
    if (track === "tokyo") {
      distSelect.innerHTML = `
        <option value="2400_turf" selected>芝 2400m (日本ダービー / Leo Cup)</option>
        <option value="1800_turf">芝 1800m (2026年9月決定チャンミ・毎日王冠)</option>
      `;
      currentCourseKey = "tokyo_2400_turf";
    } else if (track === "nakayama") {
      distSelect.innerHTML = `<option value="2500_turf" selected>芝 2500m (有馬記念)</option>`;
      currentCourseKey = "nakayama_2500_turf";
    } else if (track === "hanshin") {
      distSelect.innerHTML = `<option value="1600_turf" selected>芝 1600m (マイルCS)</option>`;
      currentCourseKey = "hanshin_1600_turf";
    } else if (track === "kyoto") {
      distSelect.innerHTML = `<option value="3200_turf" selected>芝 3200m (天皇賞春)</option>`;
      currentCourseKey = "kyoto_3200_turf";
    }
    updateCourseView(currentCourseKey);
  });

  document.getElementById("select-distance").addEventListener("change", (e) => {
    const track = document.getElementById("select-track").value;
    const dist = e.target.value;
    currentCourseKey = `${track}_${dist}`;
    updateCourseView(currentCourseKey);
  });

// 超強力・厳格な脚質判定エンジン (名前に基づく自動判定フォールバック付き)
function filterSkillsByStyle(skillList, selectedStyle) {
  if (!skillList || !Array.isArray(skillList)) return [];
  if (!selectedStyle || selectedStyle === "all") return skillList;

  return skillList.filter(skill => {
    if (!skill) return false;

    // 1. スキルオブジェクトに styles 配列が明示されている場合
    if (skill.styles && Array.isArray(skill.styles) && skill.styles.length > 0) {
      if (skill.styles.includes("all")) return true;
      return skill.styles.includes(selectedStyle);
    }

    // 2. styles が未定義の場合のスキルの名前・タグ・説明文に基づく超強力フォールバック判定
    const textContent = `${skill.name || ""} ${skill.tag || ""} ${skill.cost || ""} ${skill.desc || ""}`;

    // 追込専用スキルの厳格判定 (先行・逃げ・差し選択時は100%除外)
    if (textContent.includes("迫る影") || textContent.includes("直線一気") || textContent.includes("追込必須") || textContent.includes("追込最速")) {
      return selectedStyle === "oikomi";
    }

    // 逃げ専用スキルの厳格判定
    if (textContent.includes("アングリング") || textContent.includes("逃げ1位") || textContent.includes("逃げ必須")) {
      return selectedStyle === "nige";
    }

    // 先行専用スキルの厳格判定
    if (textContent.includes("つぼみ") || textContent.includes("先行必須") || textContent.includes("先行最速")) {
      return selectedStyle === "senko";
    }

    // 差し専用スキルの厳格判定
    if (textContent.includes("彼方、その先へ") || textContent.includes("差し必須") || textContent.includes("差し最速")) {
      return selectedStyle === "sashi";
    }

    return true;
  });
}

// 脚質選択イベント
const styleSelect = document.getElementById("select-style");
if (styleSelect) {
  styleSelect.addEventListener("change", () => {
    updateCourseView(currentCourseKey);
    renderAllSkillsCatalog();
  });
}

  // イベントタブ
  document.getElementById("tab-chanmi").addEventListener("click", () => {
    document.getElementById("tab-chanmi").classList.add("active");
    document.getElementById("tab-loh").classList.remove("active");
    document.getElementById("select-track").value = "tokyo";
    document.getElementById("select-distance").value = "2400_turf";
    currentCourseKey = "tokyo_2400_turf";
    updateCourseView("tokyo_2400_turf");
  });

  document.getElementById("tab-loh").addEventListener("click", () => {
    document.getElementById("tab-loh").classList.add("active");
    document.getElementById("tab-chanmi").classList.remove("active");
    document.getElementById("select-track").value = "tokyo";
    const distSelect = document.getElementById("select-distance");
    distSelect.innerHTML = `
      <option value="2400_turf">芝 2400m (日本ダービー / Leo Cup)</option>
      <option value="1800_turf" selected>芝 1800m (2026年9月決定チャンミ・毎日王冠)</option>
    `;
    currentCourseKey = "tokyo_1800_turf";
    updateCourseView("tokyo_1800_turf");
  });

  // リアルタイムスライダー
  const slider = document.getElementById("course-slider");
  slider.addEventListener("input", (e) => {
    currentRunnerPos = parseInt(e.target.value, 10);
    document.getElementById("distance-val").innerText = currentRunnerPos.toLocaleString();
    drawCourseCanvas();
  });

  // カタログフィルター
  const filterBtns = document.querySelectorAll(".filter-tab");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentSkillCatalogCategory = e.target.getAttribute("data-cat");
      renderAllSkillsCatalog();
    });
  });

  // AIチャット質問
  document.getElementById("btn-send-user-ai").addEventListener("click", () => {
    const input = document.getElementById("user-ai-input");
    const q = input.value.trim();
    if (!q) return;

    const chatLogs = document.getElementById("user-ai-chat-logs");
    const userMsg = document.createElement("div");
    userMsg.className = "chat-msg user-msg";
    userMsg.style.margin = "0.5rem 0";
    userMsg.style.textAlign = "right";
    userMsg.innerHTML = `👤 <strong>トレーナー:</strong> ${q}`;
    chatLogs.appendChild(userMsg);

    input.value = "";

    setTimeout(() => {
      const data = courseDatabase[currentCourseKey];
      const aiMsg = document.createElement("div");
      aiMsg.className = "chat-msg ai-msg";
      aiMsg.style.margin = "0.5rem 0";
      aiMsg.style.color = "#006837";
      aiMsg.innerHTML = `🤖 <strong>AIアシスタント:</strong> 『${data.name.jp}』での回答: 最速スパートは<strong>${data.spurtPos}m地点</strong>です。先行・差し脚質なら金加速スキル『王手』や『アングリング×スキーミング』を最優先で獲得しましょう！`;
      chatLogs.appendChild(aiMsg);
      chatLogs.scrollTop = chatLogs.scrollHeight;
    }, 400);
  });

  // モーダルリスナー
  document.getElementById("btn-open-teach-modal").addEventListener("click", () => {
    document.getElementById("teach-ai-modal").classList.add("active");
  });
  document.getElementById("btn-close-teach").addEventListener("click", () => {
    document.getElementById("teach-ai-modal").classList.remove("active");
  });

  document.getElementById("btn-open-feedback").addEventListener("click", () => {
    document.getElementById("feedback-modal").classList.add("active");
  });
  document.getElementById("btn-close-feedback").addEventListener("click", () => {
    document.getElementById("feedback-modal").classList.remove("active");
  });
}

// 多言語UI一括更新
function updateLanguageUI() {
  const dict = i18n[currentLang] || i18n["jp"];
  document.getElementById("header-subtitle").innerText = dict.headerSub;
  document.getElementById("jra-ticker").innerText = dict.ticker;
  document.getElementById("disclaimer-title").innerText = dict.aboutTitle;
  document.getElementById("disclaimer-text").innerText = dict.aboutDesc;
  document.getElementById("label-select-course").innerText = dict.selectCourse;
  document.getElementById("label-track").innerText = dict.trackLabel;
  document.getElementById("label-distance").innerText = dict.distanceLabel;
  document.getElementById("label-spec-title").innerText = dict.specTitle;
  document.getElementById("label-straight").innerText = dict.straightLabel;
  document.getElementById("label-slope").innerText = dict.slopeLabel;
  document.getElementById("label-spurt").innerText = dict.spurtLabel;
  document.getElementById("label-btn-feedback").innerText = dict.btnFeedback;
}

// コース表示更新
function updateCourseView(key) {
  const data = courseDatabase[key] || courseDatabase["tokyo_2400_turf"];
  
  const titleName = data.name[currentLang] || data.name["jp"];
  document.getElementById("course-title-display").innerHTML = `<i class="fa-solid fa-route"></i> ${titleName}`;
  document.getElementById("info-straight").innerText = data.straightLen[currentLang] || data.straightLen["jp"];
  document.getElementById("info-slope").innerText = data.slope[currentLang] || data.slope["jp"];
  document.getElementById("info-spurt").innerText = `${data.spurtPos}m地点`;

  const slider = document.getElementById("course-slider");
  slider.max = data.totalDistance;
  slider.value = data.spurtPos;
  currentRunnerPos = data.spurtPos;
  document.getElementById("distance-val").innerText = data.spurtPos.toLocaleString();

  // 推奨有効スキル描画 (脚質選択フィルタリング適用)
  const styleSelect = document.getElementById("select-style");
  const selectedStyle = styleSelect ? styleSelect.value : "all";

  const recList = document.getElementById("recommended-skills-list");
  if (recList) {
    recList.innerHTML = "";
    const filteredRec = filterSkillsByStyle(data.recommendedSkills, selectedStyle);
    filteredRec.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-item-card";
      card.style.marginBottom = "0.6rem";
      card.innerHTML = `
        <div class="skill-title-row">
          <strong>${skill.name}</strong>
          <span class="tag-badge">${skill.tag}</span>
        </div>
        <div class="skill-desc-text">${skill.desc}</div>
        <div class="skill-meter-text">📍 発動指定: ${skill.trigger}</div>
      `;
      recList.appendChild(card);
    });
  }

  // 罠スキル描画 (脚質選択フィルタリング適用)
  const trapList = document.getElementById("trap-skills-list");
  if (trapList) {
    trapList.innerHTML = "";
    const filteredTrap = filterSkillsByStyle(data.trapSkills, selectedStyle);
    filteredTrap.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-item-card";
      card.style.marginBottom = "0.6rem";
      card.innerHTML = `
        <div class="skill-title-row">
          <strong>${skill.name}</strong>
          <span class="tag-badge">${skill.tag}</span>
        </div>
        <div class="skill-desc-text">${skill.desc}</div>
        <div class="skill-meter-text" style="color: #ef4444;">❌ 注意: ${skill.trigger}</div>
      `;
      trapList.appendChild(card);
    });
  }

  renderAllSkillsCatalog();
  drawCourseCanvas();
}

// 50選マスターカタログ描画
function renderAllSkillsCatalog() {
  const container = document.getElementById("all-skills-catalog-list");
  if (!container) return;

  const styleSelect = document.getElementById("select-style");
  const selectedStyle = styleSelect ? styleSelect.value : "all";

  // バッジ表示テキストの更新
  const styleBadge = document.getElementById("current-style-badge");
  if (styleBadge) {
    const styleTextMap = {
      "all": "🌟 全脚質を表示 (ALL)",
      "nige": "🏃‍♂️ 逃げ適合スキルのみ表示中",
      "senko": "🐎 先行適合スキルのみ表示中",
      "sashi": "🏇 差し適合スキルのみ表示中",
      "oikomi": "🔥 追込適合スキルのみ表示中"
    };
    styleBadge.innerText = styleTextMap[selectedStyle] || styleTextMap["all"];
  }

  let list = [...masterSkillsCatalog];
  
  // カテゴリ（属性）絞り込み
  if (currentSkillCatalogCategory !== "all") {
    list = list.filter(s => s.cat === currentSkillCatalogCategory);
  }

  // 脚質（逃げ/先行/差し/追込）絞り込み連動 (共通ヘルパー使用)
  list = filterSkillsByStyle(list, selectedStyle);

  list.sort((a, b) => b.score - a.score);

  container.innerHTML = "";

  list.forEach((skill, idx) => {
    const card = document.createElement("div");
    card.className = "catalog-item-card";
    card.style.borderLeft = idx === 0 ? "5px solid #10b981" : (skill.rank === "S" ? "4px solid #059669" : "3px solid #cbd5e1");

    const starRating = skill.rank === "S" ? "★★★★★ (5.0)" : (skill.rank === "A" ? "★★★★☆ (4.2)" : "★★★☆☆ (3.2)");

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.4rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span style="font-size: 0.78rem; font-weight: 900; background: #dcfce7; color: #059669; padding: 2px 8px; border-radius: 4px; border: 1px solid #059669;">
            有力 ${idx + 1}位 【${skill.rank}ランク】
          </span>
          <strong style="font-size: 1rem; font-weight: 900; color: #0f172a;">${skill.name}</strong>
        </div>
        <span style="font-size: 0.72rem; font-weight: 800; color: #006837; background: #dcfce7; padding: 2px 6px; border-radius: 4px;">${skill.tag}</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.8rem; margin: 0.5rem 0; background: #f8fafc; padding: 0.5rem 0.8rem; border-radius: 6px; border: 1px solid #e2e8f0;">
        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.74rem; font-weight: 800; color: #0f172a; margin-bottom: 3px;">
            <span>🎯 コース有効度:</span>
            <strong style="color: #059669;">${skill.score}点 / 100点</strong>
          </div>
          <div style="width: 100%; background: #e2e8f0; height: 6px; border-radius: 3px; overflow: hidden;">
            <div style="width: ${skill.score}%; background: linear-gradient(90deg, #10b981, #059669); height: 100%;"></div>
          </div>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; font-size: 0.74rem; font-weight: 800; color: #0f172a; margin-bottom: 3px;">
            <span>💎 Ptコスパ評価:</span>
            <strong style="color: #d97706;">${starRating}</strong>
          </div>
          <div style="font-size: 0.7rem; color: #64748b; font-weight: 700;">${skill.cost} (${skill.effect})</div>
        </div>
      </div>

      <div style="font-size: 0.8rem; color: #334155; margin-bottom: 0.3rem;">${skill.desc}</div>
      <div style="font-size: 0.74rem; font-weight: 800; color: #d97706;">📍 発動指定メートル: ${skill.meter}</div>
    `;
    container.appendChild(card);
  });
}

// 2D コースキャンバス描画エンジン (完璧中央フィット・絶対崩れ防止)
function drawCourseCanvas() {
  const canvas = document.getElementById("umai-course-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const wrapper = canvas.parentElement;
  
  const containerWidth = wrapper ? wrapper.clientWidth : 700;
  canvas.width = Math.max(containerWidth, 320);
  canvas.height = 360;
  
  const width = canvas.width;
  const height = canvas.height;
  const data = courseDatabase[currentCourseKey] || courseDatabase["tokyo_2400_turf"];

  // 背景
  ctx.fillStyle = "#0f172a";
  ctx.fillRect(0, 0, width, height);

  const cx = width / 2;
  const cy = height / 2;
  // 左右均等で画面いっぱいに広がる最適アスペクト計算
  const rx = Math.min(width * 0.42, 420);
  const ry = Math.min(height * 0.36, 130);

  // トラック外枠のグリッド装飾
  ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
  ctx.lineWidth = 1;
  for (let i = 0; i < width; i += 40) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }

  // トラック影
  ctx.beginPath();
  ctx.ellipse(cx, cy + 4, rx, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0, 0, 0, 0.4)";
  ctx.lineWidth = 32;
  ctx.stroke();

  // 芝コーストラック本体
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "#006837";
  ctx.lineWidth = 28;
  ctx.stroke();

  // センターレーン白線
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
  ctx.lineWidth = 2;
  ctx.setLineDash([8, 6]);
  ctx.stroke();
  ctx.setLineDash([]); // リセット

  // 最速スパート区間強調 (オレンジ〜レッドのネオグラデーション)
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, 0, Math.PI * 0.8, Math.PI * 1.8);
  ctx.strokeStyle = "#f59e0b";
  ctx.lineWidth = 10;
  ctx.stroke();

  // ランナー位置計算
  const runnerAngle = (currentRunnerPos / data.totalDistance) * Math.PI * 2;
  const px = cx + Math.cos(runnerAngle) * rx;
  const py = cy + Math.sin(runnerAngle) * ry;

  // スパート開始位置マーク
  const spurtAngle = (data.spurtPos / data.totalDistance) * Math.PI * 2;
  const sx = cx + Math.cos(spurtAngle) * rx;
  const sy = cy + Math.sin(spurtAngle) * ry;

  ctx.beginPath();
  ctx.arc(sx, sy, 7, 0, Math.PI * 2);
  ctx.fillStyle = "#f59e0b";
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 2;
  ctx.stroke();

  // ランナー位置ピン
  ctx.beginPath();
  ctx.arc(px, py, 11, 0, Math.PI * 2);
  ctx.fillStyle = "#0284c7";
  ctx.fill();
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = 3;
  ctx.stroke();

  // テキスト表示 (中央揃え)
  ctx.fillStyle = "#ffffff";
  ctx.font = "900 14px Plus Jakarta Sans";
  ctx.textAlign = "center";
  ctx.fillText(`📍 現在位置: ${currentRunnerPos}m / ${data.totalDistance}m`, cx, cy - 12);
  ctx.fillStyle = "#f59e0b";
  ctx.font = "800 12px Plus Jakarta Sans";
  ctx.fillText(`⚡️ 最速スパート推奨: ${data.spurtPos}m地点`, cx, cy + 16);
}

/* ==========================================================================
   🔄 因子ループ（相性ループ）自動選出エンジン & データベース
   ========================================================================== */
const factorUmaDatabase = [
  {
    id: "oguri_cap",
    name: { jp: "オグリキャップ", en: "Oguri Cap" },
    icon: "🐎",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "有馬記念", "マイルCS", "安田記念", "ジャパンC", "宝塚記念"],
    compatBase: { "tamamo_cross": 45, "symboli_rudolf": 38, "tokai_teio": 35, "super_creek": 40, "inari_one": 42, "gold_ship": 36, "mejiro_mcqueen": 37, "vodka": 38, "daiwa_scarlet": 35, "kitasan_black": 36 }
  },
  {
    id: "tamamo_cross",
    name: { jp: "タマモクロス", en: "Tamamo Cross" },
    icon: "⚡️",
    route: "classic",
    g1Races: ["天皇賞春", "天皇賞秋", "宝塚記念", "有馬記念", "ジャパンC"],
    compatBase: { "oguri_cap": 45, "super_creek": 42, "inari_one": 40, "symboli_rudolf": 38, "gold_ship": 38, "mejiro_mcqueen": 40, "satono_diamond": 35 }
  },
  {
    id: "symboli_rudolf",
    name: { jp: "シンボリルドルフ", en: "Symboli Rudolf" },
    icon: "👑",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "菊花賞", "天皇賞春", "ジャパンC", "有馬記念"],
    compatBase: { "tokai_teio": 50, "oguri_cap": 38, "tamamo_cross": 38, "gold_ship": 40, "mejiro_mcqueen": 42, "kitasan_black": 40 }
  },
  {
    id: "tokai_teio",
    name: { jp: "トウカイテイオー", en: "Tokai Teio" },
    icon: "✨",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "ジャパンC", "有馬記念"],
    compatBase: { "symboli_rudolf": 50, "mejiro_mcqueen": 45, "oguri_cap": 35 }
  },
  {
    id: "gold_ship",
    name: { jp: "ゴールドシップ", en: "Gold Ship" },
    icon: "⚓️",
    route: "classic",
    g1Races: ["皐月賞", "菊花賞", "宝塚記念", "有馬記念", "天皇賞春"],
    compatBase: { "mejiro_mcqueen": 48, "symboli_rudolf": 40, "oguri_cap": 36, "tamamo_cross": 38, "kitasan_black": 42, "satono_diamond": 40 }
  },
  {
    id: "mejiro_mcqueen",
    name: { jp: "メジロマックイーン", en: "Mejiro McQueen" },
    icon: "🔱",
    route: "classic",
    g1Races: ["菊花賞", "天皇賞春", "宝塚記念", "阪神大賞典", "有馬記念"],
    compatBase: { "gold_ship": 48, "tokai_teio": 45, "symboli_rudolf": 42, "oguri_cap": 37, "tamamo_cross": 40 }
  },
  {
    id: "kitasan_black",
    name: { jp: "キタサンブラック", en: "Kitasan Black" },
    icon: "🔥",
    route: "classic",
    g1Races: ["菊花賞", "天皇賞春", "ジャパンC", "有馬記念", "大阪杯", "天皇賞秋"],
    compatBase: { "satono_diamond": 48, "gold_ship": 42, "symboli_rudolf": 40, "oguri_cap": 36 }
  },
  {
    id: "satono_diamond",
    name: { jp: "サトノダイヤモンド", en: "Satono Diamond" },
    icon: "💎",
    route: "classic",
    g1Races: ["菊花賞", "有馬記念", "阪神大賞典", "天皇賞春"],
    compatBase: { "kitasan_black": 48, "gold_ship": 40, "mejiro_mcqueen": 38, "symboli_rudolf": 38 }
  },
  {
    id: "vodka",
    name: { jp: "ウオッカ", en: "Vodka" },
    icon: "🥃",
    route: "mile",
    g1Races: ["日本ダービー", "安田記念", "ヴィクトリアマイル", "天皇賞秋", "ジャパンC"],
    compatBase: { "daiwa_scarlet": 50, "oguri_cap": 38, "el_condor_pasa": 38, "grass_wonder": 37 }
  },
  {
    id: "daiwa_scarlet",
    name: { jp: "ダイワスカーレット", en: "Daiwa Scarlet" },
    icon: "🎀",
    route: "mile",
    g1Races: ["桜花賞", "秋華賞", "エリザベス女王杯", "有馬記念", "大阪杯"],
    compatBase: { "vodka": 50, "oguri_cap": 35 }
  },
  {
    id: "grass_wonder",
    name: { jp: "グラスワンダー", en: "Grass Wonder" },
    icon: "🍃",
    route: "classic",
    g1Races: ["朝日杯FS", "有馬記念", "宝塚記念", "安田記念"],
    compatBase: { "special_week": 48, "el_condor_pasa": 45, "seiun_sky": 42, "oguri_cap": 38, "vodka": 37 }
  },
  {
    id: "el_condor_pasa",
    name: { jp: "エルコンドルパサー", en: "El Condor Pasa" },
    icon: "🦅",
    route: "mile",
    g1Races: ["NHKマイルC", "ジャパンC", "宝塚記念", "安田記念"],
    compatBase: { "grass_wonder": 45, "special_week": 45, "seiun_sky": 40, "oguri_cap": 38, "smart_falcon": 35 }
  },
  {
    id: "special_week",
    name: { jp: "スペシャルウィーク", en: "Special Week" },
    icon: "🌸",
    route: "classic",
    g1Races: ["日本ダービー", "天皇賞春", "天皇賞秋", "ジャパンC"],
    compatBase: { "grass_wonder": 48, "el_condor_pasa": 45, "seiun_sky": 44 }
  },
  {
    id: "seiun_sky",
    name: { jp: "セイウンスカイ", en: "Seiun Sky" },
    icon: "☁️",
    route: "classic",
    g1Races: ["皐月賞", "菊花賞", "有馬記念"],
    compatBase: { "special_week": 44, "grass_wonder": 42, "el_condor_pasa": 40 }
  },
  {
    id: "smart_falcon",
    name: { jp: "スマートファルコン", en: "Smart Falcon" },
    icon: "⭐",
    route: "dirt",
    g1Races: ["JBCクラシック", "東京大賞典", "帝王賞", "川崎記念", "フェブラリーS"],
    compatBase: { "copano_rickey": 48, "el_condor_pasa": 35 }
  },
  {
    id: "copano_rickey",
    name: { jp: "コパノリッキー", en: "Copano Rickey" },
    icon: "☯️",
    route: "dirt",
    g1Races: ["フェブラリーS", "かしわ記念", "JBCクラシック", "帝王賞", "東京大賞典"],
    compatBase: { "smart_falcon": 48 }
  }
];

// 2キャラ間の相性ポイントを計算
function getFactorCompatibility(umaA, umaB) {
  if (!umaA || !umaB) return 0;
  if (umaA.id === umaB.id) return 0;

  let baseScore = 22; // デフォルト基本相性
  if (umaA.compatBase && umaA.compatBase[umaB.id]) {
    baseScore = umaA.compatBase[umaB.id];
  } else if (umaB.compatBase && umaB.compatBase[umaA.id]) {
    baseScore = umaB.compatBase[umaA.id];
  }

  // 共通G1出走勝率ボーナス
  const commonG1 = umaA.g1Races.filter(race => umaB.g1Races.includes(race));
  const raceBonus = commonG1.length * 4;

  return baseScore + raceBonus;
}

// 因子ループ試算エンジン
function calculateFactorLoops(loopType = 3, axisCharId = "auto", routeFilter = "all") {
  let candidateList = factorUmaDatabase;
  if (routeFilter !== "all") {
    candidateList = factorUmaDatabase.filter(u => u.route === routeFilter);
    if (candidateList.length < loopType) {
      candidateList = factorUmaDatabase; // 数が不足の場合は全キャラフォールバック
    }
  }

  const results = [];

  if (parseInt(loopType) === 3) {
    // 3個体ループ (A -> B -> C -> A)
    for (let i = 0; i < candidateList.length; i++) {
      const A = candidateList[i];
      if (axisCharId !== "auto" && A.id !== axisCharId) continue;

      for (let j = 0; j < candidateList.length; j++) {
        if (i === j) continue;
        const B = candidateList[j];

        for (let k = 0; k < candidateList.length; k++) {
          if (i === k || j === k) continue;
          const C = candidateList[k];

          const scoreAB = getFactorCompatibility(A, B);
          const scoreBC = getFactorCompatibility(B, C);
          const scoreCA = getFactorCompatibility(C, A);
          const totalScore = scoreAB + scoreBC + scoreCA;
          const avgScore = Math.round(totalScore / 3);

          const commonRaces = A.g1Races.filter(r => B.g1Races.includes(r) && C.g1Races.includes(r));

          results.push({
            loopType: 3,
            members: [A, B, C],
            scores: [scoreAB, scoreBC, scoreCA],
            totalScore,
            avgScore,
            commonRaces
          });
        }
      }
    }
  } else if (parseInt(loopType) === 4) {
    // 4個体ループ (A -> B -> C -> D -> A)
    for (let i = 0; i < candidateList.length; i++) {
      const A = candidateList[i];
      if (axisCharId !== "auto" && A.id !== axisCharId) continue;

      for (let j = 0; j < candidateList.length; j++) {
        if (i === j) continue;
        const B = candidateList[j];

        for (let k = 0; k < candidateList.length; k++) {
          if (i === k || j === k) continue;
          const C = candidateList[k];

          for (let l = 0; l < candidateList.length; l++) {
            if (i === l || j === l || k === l) continue;
            const D = candidateList[l];

            const scoreAB = getFactorCompatibility(A, B);
            const scoreBC = getFactorCompatibility(B, C);
            const scoreCD = getFactorCompatibility(C, D);
            const scoreDA = getFactorCompatibility(D, A);
            const totalScore = scoreAB + scoreBC + scoreCD + scoreDA;
            const avgScore = Math.round(totalScore / 4);

            const commonRaces = A.g1Races.filter(r => B.g1Races.includes(r) && C.g1Races.includes(r) && D.g1Races.includes(r));

            results.push({
              loopType: 4,
              members: [A, B, C, D],
              scores: [scoreAB, scoreBC, scoreCD, scoreDA],
              totalScore,
              avgScore,
              commonRaces
            });
          }
        }
      }
    }
  } else if (parseInt(loopType) === 2) {
    // 2個体交互ループ (A ⇄ B)
    for (let i = 0; i < candidateList.length; i++) {
      const A = candidateList[i];
      if (axisCharId !== "auto" && A.id !== axisCharId) continue;

      for (let j = 0; j < candidateList.length; j++) {
        if (i === j) continue;
        const B = candidateList[j];

        const scoreAB = getFactorCompatibility(A, B);
        const totalScore = scoreAB * 2;
        const avgScore = scoreAB;
        const commonRaces = A.g1Races.filter(r => B.g1Races.includes(r));

        results.push({
          loopType: 2,
          members: [A, B],
          scores: [scoreAB, scoreAB],
          totalScore,
          avgScore,
          commonRaces
        });
      }
    }
  }

  // スコア順ソート
  results.sort((a, b) => b.totalScore - a.totalScore);

  // 重複ループのユニーク抽出
  const uniqueResults = [];
  const seenKeys = new Set();

  for (const res of results) {
    const sortedIds = res.members.map(m => m.id).sort().join("-");
    if (!seenKeys.has(sortedIds)) {
      seenKeys.add(sortedIds);
      uniqueResults.push(res);
    }
    if (uniqueResults.length >= 6) break;
  }

  return uniqueResults;
}

// 育成本体ドロップダウン初期化
function initFactorUmaSelect() {
  const select = document.getElementById("factor-target-body-select");
  if (!select) return;

  select.innerHTML = "";
  factorUmaDatabase.forEach(uma => {
    const opt = document.createElement("option");
    opt.value = uma.id;
    opt.textContent = `${uma.icon} ${uma.name.jp}`;
    select.appendChild(opt);
  });
}

// コース・脚質に対応する「推奨継承固有(親)」の判定
function getRecommendedParentInherent(courseKey, style) {
  const map = {
    "tokyo_2400_turf": {
      nige: [{ id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "終盤コーナー1位で100%最速加速！" }],
      senko: [{ id: "oguri_cap", skillName: "勝利の鼓動 / 王手", desc: "終盤開始コーナーで爆発的加速！" }, { id: "grass_wonder", skillName: "精神一到", desc: "差し・先行終盤で強力加速。" }],
      sashi: [{ id: "oguri_cap", skillName: "勝利の鼓動 / 王手", desc: "終盤コーナー最速発動！" }, { id: "special_week", skillName: "シューティングスター", desc: "終盤直線で追撃加速。" }],
      oikomi: [{ id: "gold_ship", skillName: "不屈の心 / 迫る影", desc: "ロングスパート効果。" }, { id: "tamamo_cross", skillName: "白い稲妻", desc: "直線で鋭い伸び。" }]
    },
    "tokyo_1800_turf": {
      nige: [{ id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "1,200m地点で最速加速！" }],
      senko: [{ id: "oguri_cap", skillName: "王手 / 勝利の鼓動", desc: "2026年9月チャンミ最速加速。" }],
      sashi: [{ id: "oguri_cap", skillName: "王手 / 勝利の鼓動", desc: "終盤開始直後に加速。" }],
      oikomi: [{ id: "tamamo_cross", skillName: "白い稲妻", desc: "中盤〜終盤で位置上げ。" }]
    },
    "nakayama_2500_turf": {
      nige: [{ id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "有馬記念向正面終盤コーナー発動。" }],
      senko: [{ id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤3人抜きで確定凄まじい効果。" }],
      sashi: [{ id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "有馬終盤の差し定番！" }],
      oikomi: [{ id: "gold_ship", skillName: "迫る影 / 不屈の心", desc: "有馬2500m向正面直線で最速着火！" }]
    }
  };

  const defaultRec = [{ id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤で圧倒的速度を発揮。" }, { id: "oguri_cap", skillName: "勝利の鼓動", desc: "残り200mで確実に伸びる。" }];

  if (map[courseKey] && map[courseKey][style]) {
    return map[courseKey][style];
  }
  return defaultRec;
}

// 因子3ステップ診断＆選出エンジン
function renderFactorLoopResults() {
  const targetBodyId = document.getElementById("factor-target-body-select")?.value || "oguri_cap";
  const courseKey = document.getElementById("factor-target-course-select")?.value || "tokyo_2400_turf";
  const style = document.getElementById("factor-target-style-select")?.value || "senko";
  const loopType = document.getElementById("factor-loop-type-select")?.value || "3";
  const container = document.getElementById("factor-loop-result-container");

  if (!container) return;

  const targetBody = factorUmaDatabase.find(u => u.id === targetBodyId) || factorUmaDatabase[0];
  const recParents = getRecommendedParentInherent(courseKey, style);

  // 軸キャラ(本体)の最高相性ループを計算
  const results = calculateFactorLoops(loopType, targetBodyId, "all");

  if (results.length === 0) {
    container.innerHTML = `<div style="padding: 1rem; text-align: center; color: #64748b;">試算条件に合う組み合わせが見つかりませんでした。</div>`;
    return;
  }

  const best = results[0];

  // 親継承固有カードHTML
  const parentSkillsHtml = recParents.map(p => {
    const parentUma = factorUmaDatabase.find(u => u.id === p.id) || { icon: "🐎", name: { jp: p.id } };
    return `
      <div style="background: white; border: 1.5px solid #059669; border-radius: 8px; padding: 0.6rem 0.8rem; display: flex; align-items: center; justify-content: space-between; margin-top: 0.4rem;">
        <div>
          <strong style="font-size: 0.85rem; color: #0f172a;">${parentUma.icon} ${parentUma.name.jp} 固有【${p.skillName}】</strong>
          <span style="display: block; font-size: 0.75rem; color: #475569;">${p.desc}</span>
        </div>
        <span style="background: #dcfce7; color: #15803d; font-size: 0.7rem; font-weight: 900; padding: 2px 8px; border-radius: 12px; white-space: nowrap;">親として継承推奨★</span>
      </div>
    `;
  }).join("");

  // 祖父母・循環図HTML
  let loopVisualHtml = "";
  if (best.loopType === 3) {
    loopVisualHtml = `
      <div style="display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 0.6rem; background: #f8fafc; padding: 1rem; border-radius: 10px; border: 1.5px dashed #cbd5e1; margin: 1rem 0;">
        <div style="text-align: center; background: white; padding: 0.5rem 0.9rem; border-radius: 8px; border: 2px solid #059669; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <div style="font-size: 1.3rem;">${best.members[0].icon}</div>
          <strong style="font-size: 0.85rem; display: block;">${best.members[0].name.jp}</strong>
          <span style="font-size: 0.68rem; color: #059669; font-weight: 800;">(育成本体)</span>
        </div>
        <div style="text-align: center; color: #059669;">
          <i class="fa-solid fa-arrow-right"></i>
          <span style="font-size: 0.68rem; font-weight: 800; display: block;">${best.scores[0]} pt</span>
        </div>
        <div style="text-align: center; background: white; padding: 0.5rem 0.9rem; border-radius: 8px; border: 2px solid #0284c7; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <div style="font-size: 1.3rem;">${best.members[1].icon}</div>
          <strong style="font-size: 0.85rem; display: block;">${best.members[1].name.jp}</strong>
          <span style="font-size: 0.68rem; color: #0284c7; font-weight: 800;">(高相性親/祖)</span>
        </div>
        <div style="text-align: center; color: #0284c7;">
          <i class="fa-solid fa-arrow-right"></i>
          <span style="font-size: 0.68rem; font-weight: 800; display: block;">${best.scores[1]} pt</span>
        </div>
        <div style="text-align: center; background: white; padding: 0.5rem 0.9rem; border-radius: 8px; border: 2px solid #7c3aed; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <div style="font-size: 1.3rem;">${best.members[2].icon}</div>
          <strong style="font-size: 0.85rem; display: block;">${best.members[2].name.jp}</strong>
          <span style="font-size: 0.68rem; color: #7c3aed; font-weight: 800;">(高相性祖父母)</span>
        </div>
        <div style="text-align: center; color: #7c3aed;">
          <i class="fa-solid fa-rotate-right"></i>
          <span style="font-size: 0.68rem; font-weight: 800; display: block;">${best.scores[2]} pt (◎循環)</span>
        </div>
      </div>
    `;
  } else {
    loopVisualHtml = `
      <div style="display: flex; align-items: center; justify-content: space-around; flex-wrap: wrap; gap: 0.5rem; background: #f8fafc; padding: 1rem; border-radius: 10px; border: 1.5px dashed #cbd5e1; margin: 1rem 0;">
        ${best.members.map((m, idx) => `
          <div style="text-align: center; background: white; padding: 0.5rem; border-radius: 6px; border: 1.5px solid #059669;">
            <div style="font-size: 1.2rem;">${m.icon}</div>
            <strong style="font-size: 0.8rem; display: block;">${m.name.jp}</strong>
          </div>
          ${idx < best.members.length - 1 ? `<i class="fa-solid fa-arrow-right" style="color: #059669;"></i>` : `<i class="fa-solid fa-arrows-rotate" style="color: #0284c7;"></i>`}
        `).join("")}
      </div>
    `;
  }

  // UMAIカスタム所持スキル連携HTML
  const isCustom = document.getElementById("factor-umai-import-select")?.value === "custom";
  const customSkillsVal = document.getElementById("input-custom-skills")?.value.trim() || "";
  let customSkillsHtml = "";

  if (isCustom && customSkillsVal) {
    const skillsList = customSkillsVal.split(/[,、\s]+/).filter(Boolean);
    customSkillsHtml = `
      <div style="margin-top: 0.8rem; background: #e0f2fe; padding: 0.8rem; border-radius: 8px; border: 1px solid #7dd3fc; font-size: 0.8rem; color: #0369a1;">
        <strong><i class="fa-solid fa-cloud-arrow-down"></i> UMAI連動 連携された手持ち個体の所持白スキル・因子:</strong>
        <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.3rem;">
          ${skillsList.map(s => `<span style="background: white; border: 1px solid #38bdf8; color: #0284c7; padding: 2px 8px; border-radius: 4px; font-weight: 800;">✨ ${s} (継承確率UP)</span>`).join(" ")}
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div style="background: white; border-radius: 12px; border: 2px solid #059669; padding: 1.2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      
      <!-- STEP 2: 推奨親固有結果 -->
      <div style="margin-bottom: 1.2rem;">
        <h4 style="font-size: 0.9rem; color: #059669; font-weight: 900; margin-bottom: 0.4rem;">
          <i class="fa-solid fa-star"></i> STEP 2: 【${targetBody.name.jp}】に継承させるべき最高相性・最速発動の親固有スキル
        </h4>
        ${parentSkillsHtml}
      </div>

      <!-- STEP 3: 相性最適化祖父母＆因子ループ -->
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h4 style="font-size: 0.9rem; color: #0284c7; font-weight: 900;">
            <i class="fa-solid fa-rotate"></i> STEP 3: 相性◎（二重丸）を確定させる最適因子ループ選出結果
          </h4>
          <span style="font-size: 0.85rem; font-weight: 900; color: #059669; background: #dcfce7; padding: 2px 10px; border-radius: 12px; border: 1px solid #86efac;">
            平均相性: ${best.avgScore} pt (◎二重丸確定)
          </span>
        </div>

        ${loopVisualHtml}

        <div style="background: #f0fdf4; padding: 0.8rem; border-radius: 8px; border: 1px solid #bbf7d0; font-size: 0.8rem; color: #166534;">
          <strong>🏆 共通出走ローテーション (二重丸相性ボーナス獲得重賞):</strong>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.3rem;">
            ${best.commonRaces.map(r => `<span style="background: white; border: 1px solid #86efac; padding: 2px 6px; border-radius: 4px; font-weight: 700;">${r}</span>`).join(" ")}
          </div>
        </div>

        ${customSkillsHtml}
      </div>

    </div>
  `;
}

// イベントリスナーのセットアップ
document.addEventListener("DOMContentLoaded", () => {
  initFactorUmaSelect();
  renderFactorLoopResults();

  // UMAI個体連携切替イベント
  document.getElementById("factor-umai-import-select")?.addEventListener("change", (e) => {
    const customBox = document.getElementById("umai-custom-input-box");
    if (customBox) {
      customBox.style.display = e.target.value === "custom" ? "block" : "none";
    }
    renderFactorLoopResults();
  });

  document.getElementById("input-custom-skills")?.addEventListener("input", () => {
    renderFactorLoopResults();
  });

  document.getElementById("btn-calc-factor-loop")?.addEventListener("click", () => {
    renderFactorLoopResults();
  });

  document.getElementById("factor-target-body-select")?.addEventListener("change", () => {
    renderFactorLoopResults();
  });

  document.getElementById("factor-target-course-select")?.addEventListener("change", () => {
    renderFactorLoopResults();
  });

  document.getElementById("factor-target-style-select")?.addEventListener("change", () => {
    renderFactorLoopResults();
  });

  document.getElementById("factor-loop-type-select")?.addEventListener("change", () => {
    renderFactorLoopResults();
  });
});


