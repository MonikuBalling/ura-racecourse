/* ==========================================================================
   🌐 多言語動画コミュニティ ＆ AI Wiki 専用JavaScript (community.js)
   全UI ＆ 全コンテンツ 一括自動多言語翻訳 (Complete Global i18n Engine)
   ========================================================================== */

// 🌐 画面全体の全UI用多言語辞書 (6言語全網羅)
const uiI18nDict = {
  ja: {
    "ui-header-title": "ウマ娘 グローバル動画中継 ＆ 多言語AI攻略Wiki",
    "ui-header-subtitle": `<i class="fa-solid fa-flag-checkered"></i> JRA Official Style × YouTube Engine (日・韓・台・欧米 双方向ブリッジ)`,
    "ui-btn-analyzer": `<i class="fa-solid fa-horse-head"></i> 🏇 RACE攻略・コースアナライザーへ`,
    "ui-news-badge": `<i class="fa-solid fa-bullhorn"></i> 重賞LIVE`,
    "ui-news-text": "【2026年9月決定チャンミ】東京 芝 1800m 毎日王冠モデル 𝕏風多言語自動翻訳コメントスレッド絶賛稼働中！",
    "ui-board-title": "ウマ娘 日・韓・台・欧米 双方向動画ブリッジ (YouTube Player)",
    "ui-lang-select-label": `<i class="fa-solid fa-language"></i> 表示言語:`,
    "ui-select-video-label": `<i class="fa-solid fa-circle-play"></i> 中継映像ターゲットを選択 (JRA/Global YouTube):`,
    "opt-vid-jp": "🇯🇵 日本発 (先行攻略) 【2026年9月決定チャンミ】東京1800m 最速スパート検証",
    "opt-vid-us": "🇺🇸 海外発 (面白プレイ) 【米国トップ層】URA完走＆限定スキルの熱狂リアクション",
    "opt-vid-tw": "🇹🇼 繁中発 (名手育成) 【台湾サーバー名手】マックイーン愛の限界育成論",
    "ui-bridge-desc": "🇯🇵 日本人は海外の映像を日本語で 🌐 海外勢は日本の先行データを自国語で！",
    "ui-ai-summary-badge": `<i class="fa-solid fa-robot"></i> JRA AIレース解読分析`,
    "ui-ai-summary-status": "● 母国語へ自動翻訳完了",
    "ui-triple-ai-title": "JRA規格 3重AIリアルタイム誤訳監査システム:",
    "ui-ai-step1": `<i class="fa-solid fa-check-double"></i> ① 日本語AI (専門語彙校正)`,
    "ui-ai-step2": `<i class="fa-solid fa-language"></i> ② 海外語AI (ネイティブ文脈)`,
    "ui-ai-step3": `<i class="fa-solid fa-crown"></i> ③ チーフAI (最終監査承認)`,
    "ui-chat-ai-trans-badge": `<i class="fa-solid fa-wand-magic-sparkles"></i> 𝕏風 AI自動翻訳中`,
    "user-chat-input": "自国語で掲示板に投下… (世界中の言語へ自動翻訳)",
    "btn-send-chat": "投稿",
    "ui-wiki-main-title": "ウマ娘 JRA規格 みんなで創る多言語AI攻略Wiki",
    "ui-wiki-main-sub": "🇯🇵 日本人トレーナーが集まって投稿した最新検証・Wiki知見が、🌐 海外プレイヤーの母国語へ全自動翻訳されます。",
    "btn-add-wiki-knowledge": `<i class="fa-solid fa-plus"></i> 日本の攻略・検証知見をWikiに投稿`,
    "ui-wiki-cat-header": `<i class="fa-solid fa-list-check"></i> WIKI CATEGORIES`,
    "ui-wiki-cat-1": "🏆 2026年9月決定チャンミ攻略",
    "ui-wiki-cat-2": "💧 目標スタミナ・回復基準",
    "ui-wiki-cat-3": "🌸 最短・因子周回おすすめ",
    "ui-wiki-badge-trans": `<i class="fa-solid fa-wand-magic-sparkles"></i> 母国語AI自動翻訳済`,
    "ui-wiki-comments-label": `<i class="fa-solid fa-users"></i> トレーナーたちの追加検証スレッド (自動翻訳):`
  },
  en: {
    "ui-header-title": "Umamusume Global Video Live & Multi-Lang AI Wiki",
    "ui-header-subtitle": `<i class="fa-solid fa-flag-checkered"></i> JRA Official Style × YouTube Engine (Global Bi-Directional Bridge)`,
    "ui-btn-analyzer": `<i class="fa-solid fa-horse-head"></i> 🏇 To RACE Analyzer & Course Guide`,
    "ui-news-badge": `<i class="fa-solid fa-bullhorn"></i> G1 LIVE`,
    "ui-news-text": "[Sep 2026 CM Guide] Tokyo Turf 1800m Mainichi Okan model X-style multi-lang live chat timeline running!",
    "ui-board-title": "Umamusume Global Video Bridge (YouTube Player)",
    "ui-lang-select-label": `<i class="fa-solid fa-language"></i> Language:`,
    "ui-select-video-label": `<i class="fa-solid fa-circle-play"></i> Select Video Target (JRA/Global YouTube):`,
    "opt-vid-jp": "🇯🇵 JP Pioneer (Guide) [Sep 2026 CM] Tokyo 1800m Optimal Spurt Verification",
    "opt-vid-us": "🇺🇸 US Gameplay (Hype) [US Top Racer] URA Finals Win & Skill Reaction",
    "opt-vid-tw": "🇹🇼 TW Build (Master) [TW Top Ranker] McQueen Long Distance Build Guide",
    "ui-bridge-desc": "🇯🇵 JP trainers watch US videos in JP! 🌐 Global racers learn JP pioneer guides in native language!",
    "ui-ai-summary-badge": `<i class="fa-solid fa-robot"></i> JRA AI Video Analytics`,
    "ui-ai-summary-status": "● Auto-Translated to Native Language",
    "ui-triple-ai-title": "JRA Spec Triple AI Real-Time Translation Audit System:",
    "ui-ai-step1": `<i class="fa-solid fa-check-double"></i> 1. JP AI (Terminology)`,
    "ui-ai-step2": `<i class="fa-solid fa-language"></i> 2. Native AI (Context)`,
    "ui-ai-step3": `<i class="fa-solid fa-crown"></i> 3. Chief AI (Verified)`,
    "ui-chat-ai-trans-badge": `<i class="fa-solid fa-wand-magic-sparkles"></i> X-Style AI Auto-Trans ON`,
    "user-chat-input": "Post comment in native language... (Auto-translated to all languages)",
    "btn-send-chat": "Post",
    "ui-wiki-main-title": "Umamusume JRA Spec Collaborative Multi-Lang AI Wiki",
    "ui-wiki-main-sub": "🇯🇵 Verified guides posted by JP trainers are instantly auto-translated to global players' native language.",
    "btn-add-wiki-knowledge": `<i class="fa-solid fa-plus"></i> Post JP Verification Knowledge to Wiki`,
    "ui-wiki-cat-header": `<i class="fa-solid fa-list-check"></i> WIKI CATEGORIES`,
    "ui-wiki-cat-1": "🏆 Sep 2026 CM Tokyo 1800m Guide",
    "ui-wiki-cat-2": "💧 Target Stamina & Heal Benchmark",
    "ui-wiki-cat-3": "🌸 High Affinity Factor Farming Routes",
    "ui-wiki-badge-trans": `<i class="fa-solid fa-wand-magic-sparkles"></i> AI Auto-Translated`,
    "ui-wiki-comments-label": `<i class="fa-solid fa-users"></i> Trainer Verification Thread (Auto-Translated):`
  },
  kr: {
    "ui-header-title": "우마무스메 글로벌 영상 중계 & 다국어 AI 공략 Wiki",
    "ui-header-subtitle": `<i class="fa-solid fa-flag-checkered"></i> JRA Official Style × YouTube Engine (한·일·대만·글로벌 양방향 브릿지)`,
    "ui-btn-analyzer": `<i class="fa-solid fa-horse-head"></i> 🏇 RACE 공략·코스 분석기로 이동`,
    "ui-news-badge": `<i class="fa-solid fa-bullhorn"></i> 중상 LIVE`,
    "ui-news-text": "【2026년 9월 챔미】도쿄 잔디 1800m 매일왕관 모델 X풍 자동번역 댓글 스레드 가동 중!",
    "ui-board-title": "우마무스메 양방향 영상 브릿지 (YouTube Player)",
    "ui-lang-select-label": `<i class="fa-solid fa-language"></i> 표시 언어:`,
    "ui-select-video-label": `<i class="fa-solid fa-circle-play"></i> 시청 영상 선택 (YouTube):`,
    "opt-vid-jp": "🇯🇵 일본 선행 (공략) 【2026년 9월 챔미】도쿄 1800m 최속 스퍼트 검증",
    "opt-vid-us": "🇺🇸 미국 플레이 (리액션) 【미국 탑 유저】URA 우승 리액션",
    "opt-vid-tw": "🇹🇼 대만 육성 (고수) 【대만 랭커】메지로 맥퀸 장거리 육성론",
    "ui-bridge-desc": "🇯🇵 일본 유저는 해외 영상 한국어로! 🌐 한국 유저는 일본 미래시 정보를 한국어로!",
    "ui-ai-summary-badge": `<i class="fa-solid fa-robot"></i> JRA AI 영상 해설 분석`,
    "ui-ai-summary-status": "● 모국어 자동번역 완료",
    "ui-triple-ai-title": "3중 AI 실시간 오역 감사 시스템:",
    "ui-ai-step1": `<i class="fa-solid fa-check-double"></i> ① 일본어 AI (용어 교정)`,
    "ui-ai-step2": `<i class="fa-solid fa-language"></i> ② 해외어 AI (원어민 문맥)`,
    "ui-ai-step3": `<i class="fa-solid fa-crown"></i> ③ 치프 AI (최종 승인)`,
    "ui-chat-ai-trans-badge": `<i class="fa-solid fa-wand-magic-sparkles"></i> X풍 AI 자동번역 ON`,
    "user-chat-input": "모국어로 댓글 입력... (전 세계 언어로 자동번역)",
    "btn-send-chat": "게시",
    "ui-wiki-main-title": "우마무스메 함께 만드는 다국어 AI 공략 Wiki",
    "ui-wiki-main-sub": "🇯🇵 일본 검증 유저가 작성한 최신 공략이 모국어로 실시간 자동번역됩니다.",
    "btn-add-wiki-knowledge": `<i class="fa-solid fa-plus"></i> 검증 지식을 Wiki에 등록`,
    "ui-wiki-cat-header": `<i class="fa-solid fa-list-check"></i> WIKI 카테고리`,
    "ui-wiki-cat-1": "🏆 2026년 9월 챔미 도쿄 1800m",
    "ui-wiki-cat-2": "💧 목표 스태미나·회복 기준표",
    "ui-wiki-cat-3": "🌸 최단 인자 순환 추천 루틴",
    "ui-wiki-badge-trans": `<i class="fa-solid fa-wand-magic-sparkles"></i> 모국어 자동번역됨`,
    "ui-wiki-comments-label": `<i class="fa-solid fa-users"></i> 트레이너 추가 검증 스레드:`
  },
  tw: {
    "ui-header-title": "賽馬娘 全球影片實況 ＆ 多語言AI攻略Wiki",
    "ui-header-subtitle": `<i class="fa-solid fa-flag-checkered"></i> JRA Official Style × YouTube Engine (日・台・韓・歐美 雙向橋樑)`,
    "ui-btn-analyzer": `<i class="fa-solid fa-horse-head"></i> 🏇 前往 RACE攻略・賽道分析器`,
    "ui-news-badge": `<i class="fa-solid fa-bullhorn"></i> 重賞LIVE`,
    "ui-news-text": "【2026年9月大賽】東京 草地 1800m 每日王冠模型 𝕏風多語言自動翻譯留言串熱烈運作中！",
    "ui-board-title": "賽馬娘 雙向影片橋樑 (YouTube Player)",
    "ui-lang-select-label": `<i class="fa-solid fa-language"></i> 顯示語言:`,
    "ui-select-video-label": `<i class="fa-solid fa-circle-play"></i> 選擇中繼影片 (YouTube):`,
    "opt-vid-jp": "🇯🇵 日本發 (先行攻略) 【2026年9月大賽】東京1800m 最快沖刺驗證",
    "opt-vid-us": "🇺🇸 海外發 (實況反應) 【美國頂尖玩家】URA奪冠熱狂反應",
    "opt-vid-tw": "🇹🇼 繁中發 (名手培育) 【台灣榜首】目白麥昆長距離培育論",
    "ui-bridge-desc": "🇯🇵 日本玩家以繁中看海外影片 🌐 台灣玩家以繁中看日本千里眼數據！",
    "ui-ai-summary-badge": `<i class="fa-solid fa-robot"></i> JRA AI影片重點解讀`,
    "ui-ai-summary-status": "● 已自動翻譯為母語",
    "ui-triple-ai-title": "3重AI即時誤譯審計系統:",
    "ui-ai-step1": `<i class="fa-solid fa-check-double"></i> ① 日語AI (專有名詞校正)`,
    "ui-ai-step2": `<i class="fa-solid fa-language"></i> ② 外語AI (母語語境)`,
    "ui-ai-step3": `<i class="fa-solid fa-crown"></i> ③ 首席AI (最終審核)",
    "ui-chat-ai-trans-badge": `<i class="fa-solid fa-wand-magic-sparkles"></i> 𝕏風 AI自動翻譯中`,
    "user-chat-input": "以母語輸入留言... (自動翻譯至全球語言)",
    "btn-send-chat": "發佈",
    "ui-wiki-main-title": "賽馬娘 大家共同創作的多語言AI攻略Wiki",
    "ui-wiki-main-sub": "🇯🇵 日本驗證玩家發佈的最新數據，將即時全自動翻譯為您的母語。",
    "btn-add-wiki-knowledge": `<i class="fa-solid fa-plus"></i> 發佈驗證心得至Wiki`,
    "ui-wiki-cat-header": `<i class="fa-solid fa-list-check"></i> WIKI 分類`,
    "ui-wiki-cat-1": "🏆 2026年9月大賽東京1800m",
    "ui-wiki-cat-2": "💧 目標耐力與回復基準表",
    "ui-wiki-cat-3": "🌸 高相性刷因子推薦路線",
    "ui-wiki-badge-trans": `<i class="fa-solid fa-wand-magic-sparkles"></i> 已自動翻譯`,
    "ui-wiki-comments-label": `<i class="fa-solid fa-users"></i> 訓練師追加驗證留言串:`
  },
  fr: {
    "ui-header-title": "Umamusume Streaming Global & Wiki AI Multi-Langue",
    "ui-header-subtitle": `<i class="fa-solid fa-flag-checkered"></i> JRA Official Style × YouTube Engine (Pont Bi-Directionnel Global)`,
    "ui-btn-analyzer": `<i class="fa-solid fa-horse-head"></i> 🏇 Vers l'Analyseur de Parcours`,
    "ui-news-badge": `<i class="fa-solid fa-bullhorn"></i> G1 LIVE`,
    "ui-news-text": "[Guide CM Sept 2026] Tokyo 1800m - Fil de discussion traduit en direct !",
    "ui-board-title": "Umamusume Global Video Bridge (Lecteur YouTube)",
    "ui-lang-select-label": `<i class="fa-solid fa-language"></i> Langue:`,
    "ui-select-video-label": `<i class="fa-solid fa-circle-play"></i> Sélectionner la vidéo:`,
    "opt-vid-jp": "🇯🇵 Pionnier JP (Guide) Tokyo 1800m Sprint Optimal",
    "opt-vid-us": "🇺🇸 Gameplay US (Reaction) Victoire URA Finals",
    "opt-vid-tw": "🇹🇼 Build TW (Expert) McQueen Longue Distance",
    "ui-bridge-desc": "Regardez les vidéos du monde entier dans votre langue maternelle !",
    "ui-ai-summary-badge": `<i class="fa-solid fa-robot"></i> Analyse IA Vidéo JRA`,
    "ui-ai-summary-status": "● Traduit automatiquement",
    "ui-triple-ai-title": "Système d'Audit IA Triple pour Traduction en Direct:",
    "ui-ai-step1": `<i class="fa-solid fa-check-double"></i> 1. IA JP (Terminologie)`,
    "ui-ai-step2": `<i class="fa-solid fa-language"></i> 2. IA Native (Contexte)`,
    "ui-ai-step3": `<i class="fa-solid fa-crown"></i> 3. Chef IA (Vérifié)`,
    "ui-chat-ai-trans-badge": `<i class="fa-solid fa-wand-magic-sparkles"></i> Traduction IA ON`,
    "user-chat-input": "Publiez dans votre langue... (Traduit dans toutes les langues)",
    "btn-send-chat": "Publier",
    "ui-wiki-main-title": "Wiki IA Collaboratif Multi-Langue Umamusume",
    "ui-wiki-main-sub": "Les guides validés du Japon sont automatiquement traduits dans votre langue.",
    "btn-add-wiki-knowledge": `<i class="fa-solid fa-plus"></i> Ajouter des données au Wiki`,
    "ui-wiki-cat-header": `<i class="fa-solid fa-list-check"></i> CATÉGORIES WIKI`,
    "ui-wiki-cat-1": "🏆 Guide CM Tokyo 1800m",
    "ui-wiki-cat-2": "💧 Endurance Cible & Soins",
    "ui-wiki-cat-3": "🌸 Routes de Farm de Facteurs",
    "ui-wiki-badge-trans": `<i class="fa-solid fa-wand-magic-sparkles"></i> Traduit par l'IA`,
    "ui-wiki-comments-label": `<i class="fa-solid fa-users"></i> Fil de vérification des entraîneurs:`
  },
  ph: {
    "ui-header-title": "Umamusume Global Video Live & Multi-Lang AI Wiki",
    "ui-header-subtitle": `<i class="fa-solid fa-flag-checkered"></i> JRA Official Style × YouTube Engine (Global Bi-Directional Bridge)`,
    "ui-btn-analyzer": `<i class="fa-solid fa-horse-head"></i> 🏇 Pumunta sa RACE Analyzer`,
    "ui-news-badge": `<i class="fa-solid fa-bullhorn"></i> G1 LIVE`,
    "ui-news-text": "[Sep 2026 CM Guide] Tokyo Turf 1800m Live chat timeline running!",
    "ui-board-title": "Umamusume Global Video Bridge (YouTube Player)",
    "ui-lang-select-label": `<i class="fa-solid fa-language"></i> Wika:`,
    "ui-select-video-label": `<i class="fa-solid fa-circle-play"></i> Pumili ng Video Target:`,
    "opt-vid-jp": "🇯🇵 JP Pioneer (Guide) Tokyo 1800m Optimal Spurt",
    "opt-vid-us": "🇺🇸 US Gameplay (Hype) URA Finals Win Reaction",
    "opt-vid-tw": "🇹🇼 TW Build (Master) McQueen Long Distance",
    "ui-bridge-desc": "Panoorin ang mga video mula sa buong mundo sa iyong sariling wika!",
    "ui-ai-summary-badge": `<i class="fa-solid fa-robot"></i> JRA AI Video Analytics`,
    "ui-ai-summary-status": "● Awtomatikong Isinalin",
    "ui-triple-ai-title": "Triple AI Real-Time Translation Audit System:",
    "ui-ai-step1": `<i class="fa-solid fa-check-double"></i> 1. JP AI (Wika)`,
    "ui-ai-step2": `<i class="fa-solid fa-language"></i> 2. Native AI (Konteksto)`,
    "ui-ai-step3": `<i class="fa-solid fa-crown"></i> 3. Chief AI (Verified)`,
    "ui-chat-ai-trans-badge": `<i class="fa-solid fa-wand-magic-sparkles"></i> AI Auto-Trans ON`,
    "user-chat-input": "Mag-post sa iyong sariling wika... (Isasalin sa lahat ng wika)",
    "btn-send-chat": "I-post",
    "ui-wiki-main-title": "Umamusume JRA Spec Multi-Lang AI Wiki",
    "ui-wiki-main-sub": "Ang mga gabay mula sa Japan ay awtomatikong isasalin sa iyong wika.",
    "btn-add-wiki-knowledge": `<i class="fa-solid fa-plus"></i> Magdagdag ng kaalaman sa Wiki`,
    "ui-wiki-cat-header": `<i class="fa-solid fa-list-check"></i> MGA KATEGORYA NG WIKI`,
    "ui-wiki-cat-1": "🏆 Sep 2026 CM Tokyo 1800m Guide",
    "ui-wiki-cat-2": "💧 Target Stamina & Heal Benchmark",
    "ui-wiki-cat-3": "🌸 High Affinity Factor Farming Routes",
    "ui-wiki-badge-trans": `<i class="fa-solid fa-wand-magic-sparkles"></i> AI Auto-Translated`,
    "ui-wiki-comments-label": `<i class="fa-solid fa-users"></i> Trainer Verification Thread:`
  }
};

// 🎥 動画データベース (発信元国フラグ & AI動画要約 & YouTube ID)
const videoTargetDatabase = {
  vid_jp_pioneering: {
    title: "🇯🇵 日本発 【2026年9月決定チャンミ】東京1800m 最速スパート検証",
    youtubeId: "L06h6v059gE",
    originCountry: "JP",
    aiSummary: {
      ja: "💡 【日本先行データ】東京1800m(毎日王冠)は1,200m地点が最速スパート。先行・差し脚質は金加速スキル『王手』が100%最速着火するため最優先獲得推奨！",
      en: "💡 [JP Pioneer Data] Tokyo 1800m enters spurt at 1,200m. Gold Accel 'Ote' triggers 100% instantly for Front & Late Surgers — highest priority!",
      kr: "💡 [일본 선행 데이터] 도쿄 1800m는 1,200m 지점이 최속 스퍼트. 선행·선입은 금색 가속 스킬 '왕수'가 100% 최속 발동하므로 최우선 획득 추천!",
      tw: "💡 [日本先行數據] 東京1800m在1,200m處為最快沖刺點。前追與後追的金色加速技能『王手』100%最快觸發，強烈建議最優先取得！",
      fr: "💡 [Données Pionnières JP] Tokyo 1800m entre en sprint à 1 200m. La compétence 'Ote' se déclenche à 100% — priorité absolue !",
      ph: "💡 [JP Pioneer Data] Pumasok sa spurt ang Tokyo 1800m sa 1,200m. Ang Gold Accel 'Ote' ay nag-trigger nang 100% agad — pinakamataas na prayoridad!"
    }
  },
  vid_us_gameplay: {
    title: "🇺🇸 海外発 【米国トップ層】URA完走＆限定スキルの熱狂リアクション",
    youtubeId: "g_g58U7m_eI",
    originCountry: "US",
    aiSummary: {
      ja: "💡 【海外注目動画】アメリカのトッププレイヤーがURAファイナルズ優勝の瞬間に大熱狂！海外独自の実況スタイルとハイテンションなリアクションが楽しめます。",
      en: "💡 [Global Highlight] US top racer hypes up winning the URA Finals! Enjoy high-energy commentary and intense gameplay reactions.",
      kr: "💡 [해외 주목 영상] 미국의 탑 플레이어가 URA 파이널스 우승 순간에 대열광! 해외 특유의 해설 스타일과 하이텐션 리액션을 즐길 수 있습니다.",
      tw: "💡 [海外熱門影片] 美國頂尖玩家在URA決賽奪冠的瞬間大熱狂！可以享受海外特有的實況風格與超高情緒的反應。",
      fr: "💡 [Temps Fort Global] Un joueur US s'enflamme en gagnant les finales URA ! Profitez d'un commentaire survolté.",
      ph: "💡 [Global Highlight] Ang nangungunang manlalaro sa US ay nakatanggap ng matinding saya sa pagpanalo sa URA Finals! Tangkilikin ang high-energy commentary."
    }
  },
  vid_tw_build: {
    title: "🇹🇼 繁中発 【台湾サーバー名手】マックイーン愛の限界育成論",
    youtubeId: "Q_3Z9jJ4dJg",
    originCountry: "TW",
    aiSummary: {
      ja: "💡 【台湾名手ノウハウ】繁体字版ランカーによるメジロマックイーン長距離完全特化の因子構成とスキル組み立て解説。海外の緻密なデータ分析が話題！",
      en: "💡 [TW Master Know-How] Top Taiwanese player explains long-distance specialized build for Mejiro McQueen with deep stat analytics.",
      kr: "💡 [대만 고수 노하우] 대만 서버 랭커의 메지로 맥퀸 장거리 특화 인자 구성 및 스킬 빌드 해설. 치밀한 데이터 분석이 화제!",
      tw: "💡 [台灣高手研討] 繁中服榜首玩家針對目白麥昆長距離完全特化的因子配置與技能搭配解說。精密的數據分析引發熱議！",
      fr: "💡 [Savoir-Faire TW] Un joueur taïwanais de haut niveau explique le build longue distance pour Mejiro McQueen.",
      ph: "💡 [TW Master Know-How] Ang nangungunang Taiwanese player ay nagpapaliwanag ng long-distance specialized build para kay Mejiro McQueen."
    }
  }
};

// 𝕏風多言語自動翻訳コメントマップ
const videoCommentsMap = {
  vid_jp_pioneering: [
    {
      id: 101,
      user: "Alex_USA (🇺🇸 US)",
      handle: "@alex_global_race",
      origLang: "en",
      time: "8分前",
      likes: 89,
      isLiked: true,
      text: "Learning so much from Japanese pioneering guides! When Tokyo 1800m comes to Global server, I'm definitely getting 'Ote'!",
      translations: {
        ja: "日本の先行攻略ガイドからめちゃくちゃ学んでる！グローバル版に東京1800mが来たら絶対『王手』獲るよ！",
        en: "Learning so much from Japanese pioneering guides! When Tokyo 1800m comes to Global server, I'm definitely getting 'Ote'!",
        kr: "일본 선행 공략 가이드에서 정말 많이 배우네요! 글로벌 서버에 도쿄 1800m 나오면 무조건 '왕수' 챙깁니다!",
        tw: "從日本的先行攻略指南學到了超多！等全球服推出東京1800m時，我一定要拿『王手』！",
        fr: "J'apprends tellement des guides pionniers japonais ! Quand Tokyo 1800m arrivera sur le serveur Global, je prendrai 'Ote' sans hésiter !",
        ph: "Marami akong natutunan sa mga gabay ng Hapon! Kapag dumating ang Tokyo 1800m sa Global server, kukunin ko talaga ang 'Ote'!"
      }
    },
    {
      id: 102,
      user: "Kim_Seoul (🇰🇷 KR)",
      handle: "@kim_kr_uma",
      origLang: "kr",
      time: "15分前",
      likes: 34,
      isLiked: false,
      text: "일본 서버 공략 데이터 덕분에 미래시 준비하기 너무 편하네요! 1200m 스퍼트 정보 감사드립니다!",
      translations: {
        ja: "日本サーバーの攻略データのおかげで未来視（先行育成準備）がすごく捗ります！1,200mスパート情報ありがとうございます！",
        en: "Thanks to Japanese server strategy data, preparing for future updates is so easy! Thanks for the 1,200m spurt info!",
        kr: "일본 서버 공략 데이터 덕분에 미래시 준비하기 너무 편하네요! 1200m 스퍼트 정보 감사드립니다!",
        tw: "多虧了日本伺服器的攻略數據，準備未來的千里眼更新變得超方便！感謝1,200m沖刺資訊！",
        fr: "Grâce aux données du serveur japonais, se préparer pour les futures mises à jour est si facile ! Merci pour l'info sur le sprint à 1 200m !",
        ph: "Salamat sa data ng Japanese server, napakadaling maghanda para sa mga susunod na update! Salamat sa 1,200m spurt info!"
      }
    }
  ],
  vid_us_gameplay: [
    {
      id: 201,
      user: "Ken_Tokyo (🇯🇵 JP)",
      handle: "@ken_trainer_jp",
      origLang: "ja",
      time: "3分前",
      likes: 120,
      isLiked: true,
      text: "海外勢のこのハイテンションな実況最高だなw！日本じゃ見られないリアクションで観ていてすごく楽しい！",
      translations: {
        ja: "海外勢のこのハイテンションな実況最高だなw！日本じゃ見られないリアクションで観ていてすごく楽しい！",
        en: "This US racer's high-energy commentary is so good lol! Reactions we never see in Japan, super fun to watch!",
        kr: "해외 유저의 이 하이텐션 해설 진짜 최고네ㅋㅋㅋ! 일본에서는 볼 수 없는 리액션이라 보는 재미가 쏠쏠함!",
        tw: "海外玩家這個超嗨的實況真的太棒了哈哈！在日本看不到的反應，看著真的超開心！",
        fr: "Ce commentaire survolté du joueur US est trop bon mdr ! Des réactions qu'on ne voit jamais au Japon !",
        ph: "Sobrang ganda ng high-energy commentary na ito ng US racer lol! Mga reaction na hindi natin nakikita sa Japan, sobrang saya panoorin!"
      }
    }
  ],
  vid_tw_build: [
    {
      id: 301,
      user: "Saito_Kyoto (🇯🇵 JP)",
      handle: "@saito_kyoto",
      origLang: "ja",
      time: "12分前",
      likes: 45,
      isLiked: false,
      text: "台湾の名手の方の長距離マックイーン育成論、因子配分が理にかなっててすごく勉強になる。海外の考察力すごい！",
      translations: {
        ja: "台湾の名手の方の長距離マックイーン育成論、因子配分が理にかなっててすごく勉強になる。海外の考察力すごい！",
        en: "This Taiwanese master's McQueen long-distance guide is so logical in gene allocation. Overseas analytical skills are amazing!",
        kr: "대만 고수 분의 장거리 맥퀸 육성론, 인자 배분이 논리적이라 정말 공부가 되네요. 해외 유저들 분석력 대단함!",
        tw: "台灣高手的長距離麥昆培育論，因子分配非常有條理，學到了非常多。海外的分析能力真的厲害！",
        fr: "Ce guide d'un maître taïwanais pour McQueen est si logique dans l'allocation des gènes. L'analyse étrangère est incroyable !",
        ph: "Ang gabay ng Taiwanese master na ito para kay McQueen ay napaka-logical sa gene allocation. Ang husay ng analytical skills ng ibang bansa!"
      }
    }
  ]
};

// 多言語AI攻略Wiki データベース
const wikiKnowledgeDatabase = {
  chanmi_guide: {
    title: {
      ja: "🏆 【2026年9月決定チャンミ】東京 芝 1800m 完全育成ガイド",
      en: "🏆 [Sep 2026 CM Guide] Tokyo Turf 1800m Complete Training Guide",
      kr: "🏆 【2026년 9월 챔미】도쿄 잔디 1800m 완전 육성 가이드",
      tw: "🏆 【2026年9月大賽】東京 草地 1800m 完全培育指南",
      fr: "🏆 [Guide CM Sept 2026] Tokyo Turf 1800m Guide Complet",
      ph: "🏆 [Sep 2026 CM Guide] Tokyo Turf 1800m Complete Training Guide"
    },
    content: {
      ja: `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 0.6rem; margin-bottom: 0.6rem;">
          <strong>🎯 最適スパート位置:</strong> 1,200m地点（終盤入り直線・最終コーナー手前）<br>
          <strong>🔥 推奨金加速スキル:</strong> 『王手』（先行・差し100%最速発動）、『アングリング×スキーミング』（逃げ1位最速）
        </div>
        <p><strong>【脚質別育成のコツ】</strong><br>
        1. <strong>逃げ:</strong> 序盤の位置取り争いが命。地固め＋コンセントレーション必須。<br>
        2. <strong>先行・差し:</strong> 1,200m地点で『王手』が確定最速発動するため勝率トップ！スタミナ目標は750＋回復1。</p>
      `,
      en: `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 0.6rem; margin-bottom: 0.6rem;">
          <strong>🎯 Optimal Spurt Mark:</strong> 1,200m point (Late stage entry straight)<br>
          <strong>🔥 Recommended Gold Accel:</strong> 'Ote' (Front & Late Surger 100% instant trigger), 'Angling x Scheming' (Runner 1st place instant)
        </div>
        <p><strong>[Training Tips by Running Style]</strong><br>
        1. <strong>Runner:</strong> Early positioning is key. Groundwork + Concentration required.<br>
        2. <strong>Front / Surger:</strong> 'Ote' has 100% instant trigger at 1,200m! Target Stamina: 750 + 1 Heal.</p>
      `,
      kr: `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 0.6rem; margin-bottom: 0.6rem;">
          <strong>🎯 최적 스퍼트 위치:</strong> 1,200m 지점 (종반 진입 직선)<br>
          <strong>🔥 추천 금색 가속 스킬:</strong> '왕수' (선행·선입 100% 최속 발동), '앵글링×스키밍' (도망 1위 최속)
        </div>
        <p><strong>【각질별 육성 팁】</strong><br>
        1. <strong>도망:</strong> 초반 포지셔닝 싸움이 핵심. 터트리기 + 컨센트레이션 필수.<br>
        2. <strong>선행·선입:</strong> 1,200m 지점에서 '왕수'가 확정 최속 발동! 목표 스태미나 750 + 회복 1개.</p>
      `,
      tw: `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 0.6rem; margin-bottom: 0.6rem;">
          <strong>🎯 最快沖刺位置:</strong> 1,200m處 (終盤進入直線)<br>
          <strong>🔥 推薦金加速技能:</strong> 『王手』（前追・後追100%最快觸發）、『Angling x Scheming』（逃跑1位最快）
        </div>
        <p><strong>【各腳質培育技巧】</strong><br>
        1. <strong>逃跑:</strong> 開局卡位極為關鍵。地固與集中力必備。<br>
        2. <strong>前追・後追:</strong> 1,200m處『王手』100%最快觸發！目標耐力：750 + 1個回復。</p>
      `,
      fr: `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 0.6rem; margin-bottom: 0.6rem;">
          <strong>🎯 Repère de Sprint Optimal :</strong> Point des 1 200m<br>
          <strong>🔥 Compétences Accel Recommandées :</strong> 'Ote' (Déclenchement instantané à 100% pour Front & Surger)
        </div>
      `,
      ph: `
        <div style="background: #f0fdf4; border: 1px solid #86efac; border-radius: 6px; padding: 0.6rem; margin-bottom: 0.6rem;">
          <strong>🎯 Optimal Spurt Mark:</strong> 1,200m point<br>
          <strong>🔥 Inirerekomendang Gold Accel:</strong> 'Ote' (100% instant trigger sa Front & Surger)
        </div>
      `
    },
    comments: [
      {
        user: "Yamada_Verified (🇯🇵 JP検証勢)",
        text: {
          ja: "【検証報告】スタミナ720で白回復1つ入れたら全員ラスト直線足上がりゼロで完走できました！",
          en: "[Test Report] With Stamina 720 + 1 White Heal, all runners finished without slowing down on final straight!",
          kr: "[검증 보고] 스태미나 720에 흰색 회복 1개 넣으니 마지막 직선에서 모두 퍼지지 않고 완주 성공했습니다!",
          tw: "[驗證報告] 耐力720加上1個白色回復，全員在最後直線都沒有力竭，順利完賽！",
          fr: "[Rapport de test] Avec Endurance 720 + 1 Soin Blanc, tous les coursiers ont fini sans ralentir !",
          ph: "[Test Report] Sa Stamina 720 + 1 White Heal, matagumpay na natapos ang lahat nang hindi bumabagal!"
        }
      }
    ]
  },
  stamina_calc: {
    title: {
      ja: "💧 全コース対応 スタミナ・金回復必要量 基準テーブル",
      en: "💧 Stamina & Gold Heal Benchmark Table for All Courses",
      kr: "💧 전 코스 대응 스태미나 및 금색 회복 필요량 기준표",
      tw: "💧 全賽道對應 耐力與金回復必要量基準表",
      fr: "💧 Tableau de référence Endurance & Soin pour tous les parcours",
      ph: "💧 Stamina & Gold Heal Benchmark Table para sa Lahat ng Koerse"
    },
    content: {
      ja: `
        <p>ウマ娘のコース距離別に必要な目標スタミナ数値のWiki検証基準です。</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem; font-size: 0.78rem;">
          <tr style="background: #f1f5f9; text-align: left;">
            <th style="padding: 5px; border: 1px solid #cbd5e1;">距離</th>
            <th style="padding: 5px; border: 1px solid #cbd5e1;">目標スタミナ</th>
            <th style="padding: 5px; border: 1px solid #cbd5e1;">金回復推奨数</th>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">マイル (1600m)</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">600 〜 650</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">0 個 (不要)</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">中距離 (2000-2400m)</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">850 〜 950</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">1 個 (円弧のマエストロ等)</td>
          </tr>
        </table>
      `,
      en: `
        <p>Wiki verified benchmark for target stamina requirements by course distance.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem; font-size: 0.78rem;">
          <tr style="background: #f1f5f9; text-align: left;">
            <th style="padding: 5px; border: 1px solid #cbd5e1;">Distance</th>
            <th style="padding: 5px; border: 1px solid #cbd5e1;">Target Stamina</th>
            <th style="padding: 5px; border: 1px solid #cbd5e1;">Gold Heals Needed</th>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">Mile (1600m)</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">600 - 650</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">0 (Not needed)</td>
          </tr>
          <tr>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">Medium (2000-2400m)</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">850 - 950</td>
            <td style="padding: 5px; border: 1px solid #cbd5e1;">1 (Maestro etc.)</td>
          </tr>
        </table>
      `
    },
    comments: []
  },
  factor_farm: {
    title: {
      ja: "🌸 高相性・青9赤3因子 周回ルート攻略",
      en: "🌸 High Affinity & Blue9 Red3 Factor Farm Routes Guide"
    },
    content: {
      ja: "<p>G1勝利数を稼いで相性ボーナスを最大化する因子周回ルートまとめです。</p>",
      en: "<p>Guide to maximize affinity bonuses by farming G1 wins.</p>"
    },
    comments: []
  }
};

let currentSelectedVideoKey = "vid_jp_pioneering";
let currentTargetUserLang = "ja";
let currentWikiCatKey = "chanmi_guide";
let ytPlayer = null;

document.addEventListener("DOMContentLoaded", () => {
  initCommunityPage();
});

function initCommunityPage() {
  // 言語ピル切替 (全画面一括i18n更新)
  const langPills = document.querySelectorAll(".sub-lang-btn");
  langPills.forEach(btn => {
    btn.addEventListener("click", (e) => {
      langPills.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentTargetUserLang = e.target.getAttribute("data-lang");
      
      // 全UIテキスト一括言語切り替え
      applyGlobalLanguage(currentTargetUserLang);
      
      // 動画・コメント・Wikiコンテンツ一括更新
      switchVideoContent(currentSelectedVideoKey);
      renderVideoCommentsTimeline();
      renderWikiArticle();
    });
  });

  // Wikiカテゴリボタンのイベント登録
  const wikiCatBtns = document.querySelectorAll(".wiki-cat-btn");
  wikiCatBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      wikiCatBtns.forEach(b => b.classList.remove("active"));
      e.target.classList.add("active");
      currentWikiCatKey = e.target.getAttribute("data-cat");
      renderWikiArticle();
    });
  });

  // 日本の検証知見をWikiへ投稿するアクション
  const btnAddWiki = document.getElementById("btn-add-wiki-knowledge");
  if (btnAddWiki) {
    btnAddWiki.addEventListener("click", () => {
      const userKnowledge = prompt("【日本トレーナーの検証知見をWikiへ投稿】\n検証結果やおすすめ構成を入力してください:");
      if (userKnowledge && userKnowledge.trim()) {
        const article = wikiKnowledgeDatabase[currentWikiCatKey];
        if (article) {
          if (!article.comments) article.comments = [];
          article.comments.push({
            user: "あなた (JP検証トレーナー)",
            text: {
              ja: userKnowledge.trim(),
              en: `[AI Trans] ${userKnowledge.trim()}`,
              kr: `[AI 번역] ${userKnowledge.trim()}`,
              tw: `[AI 自動翻譯] ${userKnowledge.trim()}`,
              fr: `[Traduction AI] ${userKnowledge.trim()}`,
              ph: `[AI Pagsasalin] ${userKnowledge.trim()}`
            }
          });
          renderWikiArticle();
          alert("✅ 検証知見をWikiへ保存しました！海外プレイヤーの言語へ自動翻訳されて共有されます。");
        }
      }
    });
  }

  // 動画選択ドロップダウンの連動
  const videoSelect = document.getElementById("select-video-target");
  if (videoSelect) {
    videoSelect.addEventListener("change", (e) => {
      currentSelectedVideoKey = e.target.value;
      switchVideoContent(currentSelectedVideoKey);
    });
  }

  // コメント投稿処理
  const btnSend = document.getElementById("btn-send-chat");
  const inputChat = document.getElementById("user-chat-input");

  if (btnSend && inputChat) {
    const handlePost = () => {
      const text = inputChat.value.trim();
      if (!text) return;

      const newMsg = {
        id: Date.now(),
        user: "あなた (Trainer)",
        handle: "@you_trainer",
        origLang: currentTargetUserLang,
        time: "たった今",
        likes: 0,
        isLiked: false,
        text: text,
        translations: {
          ja: text,
          en: `[AI Auto-Trans] ${text}`,
          kr: `[AI 자동번역] ${text}`,
          tw: `[AI 自動翻譯] ${text}`,
          fr: `[Traduction AI] ${text}`,
          ph: `[AI Pagsasalin] ${text}`
        }
      };

      if (!videoCommentsMap[currentSelectedVideoKey]) {
        videoCommentsMap[currentSelectedVideoKey] = [];
      }

      videoCommentsMap[currentSelectedVideoKey].unshift(newMsg);
      renderVideoCommentsTimeline();
      inputChat.value = "";
    };

    btnSend.addEventListener("click", handlePost);
    inputChat.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handlePost();
    });
  }

  // 初期描画 (初期言語: ja)
  applyGlobalLanguage(currentTargetUserLang);
  switchVideoContent(currentSelectedVideoKey);
  renderWikiArticle();

  // YouTube IFrame APIの読み込み
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  } else if (window.YT && window.YT.Player) {
    onYouTubeIframeAPIReady();
  }
}

// 🌐 画面全体のUIテキスト一括多言語更新関数
function applyGlobalLanguage(lang) {
  const dict = uiI18nDict[lang] || uiI18nDict["ja"];

  for (const [id, text] of Object.entries(dict)) {
    const el = document.getElementById(id);
    if (el) {
      if (el.tagName === "INPUT") {
        el.placeholder = text;
      } else {
        el.innerHTML = text;
      }
    }
  }
}

// 対象動画の切替ロジック
function switchVideoContent(videoKey) {
  const videoData = videoTargetDatabase[videoKey];
  if (!videoData) return;

  const labelEl = document.getElementById("current-video-title-label");
  if (labelEl) labelEl.innerText = `${videoData.title} のコメント`;

  const summaryEl = document.getElementById("video-ai-summary-text");
  if (summaryEl && videoData.aiSummary) {
    summaryEl.innerText = videoData.aiSummary[currentTargetUserLang] || videoData.aiSummary["ja"];
  }

  if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
    ytPlayer.loadVideoById(videoData.youtubeId);
  }

  renderVideoCommentsTimeline();
}

// 𝕏風タイムラインコメント描画
function renderVideoCommentsTimeline() {
  const container = document.getElementById("global-chat-timeline");
  if (!container) return;

  container.innerHTML = "";
  const comments = videoCommentsMap[currentSelectedVideoKey] || [];

  if (comments.length === 0) {
    container.innerHTML = `<div style="text-align: center; color: #94a3b8; padding: 2rem; font-size: 0.8rem;">コメントはまだありません。</div>`;
    return;
  }

  comments.forEach(item => {
    const card = document.createElement("div");
    card.className = "x-post-card";

    const isTranslated = item.origLang !== currentTargetUserLang;
    const translatedText = item.translations[currentTargetUserLang] || item.text;

    card.innerHTML = `
      <div class="x-post-header">
        <div class="x-user-info">
          <div class="x-avatar-badge">${item.user.charAt(0)}</div>
          <div>
            <div class="x-user-name">${item.user}</div>
            <div class="x-user-handle">${item.handle} • ${item.time}</div>
          </div>
        </div>
        <span style="font-size: 0.65rem; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; color: #475569; font-weight: 800;">
          原文: ${item.origLang.toUpperCase()}
        </span>
      </div>

      <div class="x-orig-text">${item.text}</div>

      ${isTranslated ? `
        <div class="x-translated-box">
          <div class="x-translated-label">
            <i class="fa-solid fa-wand-magic-sparkles"></i> 𝕏風 AI自動翻訳 (${currentTargetUserLang.toUpperCase()}へ翻訳):
          </div>
          <div class="x-translated-text">${translatedText}</div>
        </div>
      ` : ""}

      <div class="x-actions-row">
        <span class="x-action-btn"><i class="fa-regular fa-comment"></i> 返信</span>
        <span class="x-action-btn"><i class="fa-solid fa-retweet"></i> 引用</span>
        <span class="x-action-btn ${item.isLiked ? 'liked' : ''}" onclick="toggleLikeComment(${item.id})">
          <i class="${item.isLiked ? 'fa-solid' : 'fa-regular'} fa-heart"></i> ${item.likes}
        </span>
        <span class="x-action-btn"><i class="fa-regular fa-bookmark"></i></span>
      </div>
    `;

    container.appendChild(card);
  });
}

// 多言語AI攻略Wiki記事描画
function renderWikiArticle() {
  const article = wikiKnowledgeDatabase[currentWikiCatKey];
  if (!article) return;

  const titleEl = document.getElementById("wiki-article-title");
  const contentEl = document.getElementById("wiki-article-content");
  const commentsEl = document.getElementById("wiki-comments-container");

  if (titleEl) titleEl.innerText = article.title[currentTargetUserLang] || article.title["ja"];
  if (contentEl) contentEl.innerHTML = article.content[currentTargetUserLang] || article.content["ja"];

  if (commentsEl) {
    commentsEl.innerHTML = "";
    if (!article.comments || article.comments.length === 0) {
      commentsEl.innerHTML = `<span style="color: #94a3b8; font-size: 0.74rem;">まだ検証コメントはありません。</span>`;
    } else {
      article.comments.forEach(c => {
        const item = document.createElement("div");
        item.className = "wiki-comment-item";
        const commentText = c.text[currentTargetUserLang] || c.text["ja"];
        item.innerHTML = `
          <strong style="color: #059669;">${c.user}:</strong>
          <span style="color: #1e293b; margin-left: 0.3rem;">${commentText}</span>
        `;
        commentsEl.appendChild(item);
      });
    }
  }
}

// いいね機能
window.toggleLikeComment = function(commentId) {
  const comments = videoCommentsMap[currentSelectedVideoKey] || [];
  const item = comments.find(c => c.id === commentId);
  if (item) {
    item.isLiked = !item.isLiked;
    item.likes += item.isLiked ? 1 : -1;
    renderVideoCommentsTimeline();
  }
};

// YouTube IFrame API Ready
window.onYouTubeIframeAPIReady = function() {
  const initialVideo = videoTargetDatabase[currentSelectedVideoKey];
  ytPlayer = new YT.Player("youtube-player", {
    videoId: initialVideo ? initialVideo.youtubeId : "L06h6v059gE",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0
    }
  });
};
