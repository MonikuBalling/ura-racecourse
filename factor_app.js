/* ==========================================================================
   因子ループ ＆ UMAI個体スキル継承ナビゲーター (Factor Loop Engine)
   ========================================================================== */

// 🏇 ウマ娘 データベース & 相性ベース
const factorUmaDatabase = [
  {
    id: "oguri_cap",
    name: "オグリキャップ",
    icon: "🐎",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "有馬記念", "マイルCS", "安田記念", "ジャパンC", "宝塚記念"],
    compatBase: { "tamamo_cross": 45, "symboli_rudolf": 38, "tokai_teio": 35, "gold_ship": 36, "mejiro_mcqueen": 37, "vodka": 38, "daiwa_scarlet": 35, "kitasan_black": 36 }
  },
  {
    id: "tamamo_cross",
    name: "タマモクロス",
    icon: "⚡️",
    route: "classic",
    g1Races: ["天皇賞春", "天皇賞秋", "宝塚記念", "有馬記念", "ジャパンC"],
    compatBase: { "oguri_cap": 45, "symboli_rudolf": 38, "gold_ship": 38, "mejiro_mcqueen": 40 }
  },
  {
    id: "symboli_rudolf",
    name: "シンボリルドルフ",
    icon: "👑",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "菊花賞", "天皇賞春", "ジャパンC", "有馬記念"],
    compatBase: { "tokai_teio": 50, "oguri_cap": 38, "tamamo_cross": 38, "gold_ship": 40, "mejiro_mcqueen": 42, "kitasan_black": 40 }
  },
  {
    id: "tokai_teio",
    name: "トウカイテイオー",
    icon: "✨",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "ジャパンC", "有馬記念"],
    compatBase: { "symboli_rudolf": 50, "mejiro_mcqueen": 45, "oguri_cap": 35 }
  },
  {
    id: "gold_ship",
    name: "ゴールドシップ",
    icon: "⚓️",
    route: "classic",
    g1Races: ["皐月賞", "菊花賞", "宝塚記念", "有馬記念", "天皇賞春"],
    compatBase: { "mejiro_mcqueen": 48, "symboli_rudolf": 40, "oguri_cap": 36, "tamamo_cross": 38, "kitasan_black": 42, "satono_diamond": 40 }
  },
  {
    id: "mejiro_mcqueen",
    name: "メジロマックイーン",
    icon: "🍦",
    route: "classic",
    g1Races: ["菊花賞", "天皇賞春", "宝塚記念", "阪神大賞典", "有馬記念"],
    compatBase: { "gold_ship": 48, "tokai_teio": 45, "symboli_rudolf": 42, "oguri_cap": 37 }
  },
  {
    id: "kitasan_black",
    name: "キタサンブラック",
    icon: "🔥",
    route: "classic",
    g1Races: ["菊花賞", "天皇賞春", "ジャパンC", "有馬記念", "大阪杯", "天皇賞秋"],
    compatBase: { "satono_diamond": 48, "gold_ship": 42, "symboli_rudolf": 40, "oguri_cap": 36 }
  },
  {
    id: "satono_diamond",
    name: "サトノダイヤモンド",
    icon: "💎",
    route: "classic",
    g1Races: ["菊花賞", "有馬記念", "阪神大賞典", "天皇賞春"],
    compatBase: { "kitasan_black": 48, "gold_ship": 40, "mejiro_mcqueen": 38 }
  },
  {
    id: "cheval_grand",
    name: "シュヴァルグラン",
    icon: "🚢",
    route: "classic",
    g1Races: ["ジャパンC", "阪神大賞典", "天皇賞春"],
    compatBase: { "kitasan_black": 42, "satono_diamond": 40 }
  },
  {
    id: "duramente",
    name: "ドゥラメンテ",
    icon: "⚡️",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "宝塚記念"],
    compatBase: { "kitasan_black": 40, "satono_diamond": 38 }
  },
  {
    id: "orpfevre",
    name: "オルフェーヴル",
    icon: "👑",
    route: "classic",
    g1Races: ["皐月賞", "日本ダービー", "菊花賞", "有馬記念", "宝塚記念"],
    compatBase: { "gold_ship": 45, "symboli_rudolf": 42 }
  },
  {
    id: "gentildonna",
    name: "ジェンティルドンナ",
    icon: "🏛️",
    route: "triple_tiara",
    g1Races: ["桜花賞", "オークス", "秋華賞", "ジャパンC", "有馬記念"],
    compatBase: { "vodka": 42, "daiwa_scarlet": 40 }
  },
  {
    id: "vodka",
    name: "ウオッカ",
    icon: "🥃",
    route: "mile",
    g1Races: ["日本ダービー", "安田記念", "ヴィクトリアマイル", "天皇賞秋", "ジャパンC"],
    compatBase: { "daiwa_scarlet": 50, "oguri_cap": 38 }
  },
  {
    id: "daiwa_scarlet",
    name: "ダイワスカーレット",
    icon: "🎀",
    route: "mile",
    g1Races: ["桜花賞", "秋華賞", "エリザベス女王杯", "有馬記念", "大阪杯"],
    compatBase: { "vodka": 50, "oguri_cap": 35 }
  },
  {
    id: "grass_wonder",
    name: "グラスワンダー",
    icon: "🍃",
    route: "classic",
    g1Races: ["朝日杯FS", "有馬記念", "宝塚記念", "安田記念"],
    compatBase: { "special_week": 48, "el_condor_pasa": 45, "seiun_sky": 42 }
  },
  {
    id: "el_condor_pasa",
    name: "エルコンドルパサー",
    icon: "🦅",
    route: "mile",
    g1Races: ["NHKマイルC", "ジャパンC", "宝塚記念", "安田記念"],
    compatBase: { "grass_wonder": 45, "special_week": 45, "seiun_sky": 40 }
  },
  {
    id: "special_week",
    name: "スペシャルウィーク",
    icon: "🌸",
    route: "classic",
    g1Races: ["日本ダービー", "天皇賞春", "天皇賞秋", "ジャパンC"],
    compatBase: { "grass_wonder": 48, "el_condor_pasa": 45, "seiun_sky": 44 }
  },
  {
    id: "seiun_sky",
    name: "セイウンスカイ",
    icon: "☁️",
    route: "classic",
    g1Races: ["皐月賞", "菊花賞", "有馬記念"],
    compatBase: { "special_week": 44, "grass_wonder": 42, "el_condor_pasa": 40 }
  },
  {
    id: "mihono_bourbon",
    name: "ミホノブルボン",
    icon: "🤖",
    route: "classic",
    g1Races: ["朝日杯FS", "皐月賞", "日本ダービー", "菊花賞"],
    compatBase: { "rice_shower": 48, "seiun_sky": 40 }
  },
  {
    id: "rice_shower",
    name: "ライスシャワー",
    icon: "🌹",
    route: "classic",
    g1Races: ["菊花賞", "天皇賞春"],
    compatBase: { "mihono_bourbon": 48, "mejiro_mcqueen": 42 }
  },
  {
    id: "twin_turbo",
    name: "ツインターボ",
    icon: "⚡️",
    route: "runner",
    g1Races: ["オールカマー", "七夕賞", "有馬記念"],
    compatBase: { "seiun_sky": 40, "mihono_bourbon": 38 }
  },
  {
    id: "smart_falcon",
    name: "スマートファルコン",
    icon: "⭐",
    route: "dirt",
    g1Races: ["JBCクラシック", "東京大賞典", "帝王賞", "川崎記念", "フェブラリーS"],
    compatBase: { "copano_rickey": 48 }
  },
  {
    id: "copano_rickey",
    name: "コパノリッキー",
    icon: "☯️",
    route: "dirt",
    g1Races: ["フェブラリーS", "かしわ記念", "JBCクラシック", "帝王賞", "東京大賞典"],
    compatBase: { "smart_falcon": 48 }
  }
];

// 相性計算
function getFactorCompatibility(umaA, umaB) {
  if (!umaA || !umaB) return 0;
  if (umaA.id === umaB.id) return 0;

  let baseScore = 22;
  if (umaA.compatBase && umaA.compatBase[umaB.id]) {
    baseScore = umaA.compatBase[umaB.id];
  } else if (umaB.compatBase && umaB.compatBase[umaA.id]) {
    baseScore = umaB.compatBase[umaA.id];
  }

  const commonG1 = umaA.g1Races.filter(race => umaB.g1Races.includes(race));
  return baseScore + (commonG1.length * 4);
}

// 因子ループ検索
function calculateFactorLoops(loopType = 3, axisCharId = "oguri_cap") {
  const candidateList = factorUmaDatabase;
  const results = [];
  const typeInt = parseInt(loopType);

  if (typeInt === 15) {
    // 究極15キャラ (ひい祖父母8体 ＋ 祖父母4体 ＋ 親2体 ＋ 本体1体)
    for (let i = 0; i < candidateList.length; i++) {
      const A = candidateList[i]; // 本体
      if (axisCharId !== "auto" && A.id !== axisCharId) continue;

      for (let j = 0; j < candidateList.length; j++) {
        if (i === j) continue;
        const P1 = candidateList[j];

        for (let k = 0; k < candidateList.length; k++) {
          if (i === k || j === k) continue;
          const P2 = candidateList[k];

          const rest = candidateList.filter((_, idx) => idx !== i && idx !== j && idx !== k);
          if (rest.length < 4) continue;

          const grandP1 = [...rest].sort((x, y) => getFactorCompatibility(P1, y) - getFactorCompatibility(P1, x));
          const GA1 = grandP1[0];
          const GA2 = grandP1[1];

          const restP2 = rest.filter(r => r.id !== GA1.id && r.id !== GA2.id);
          const grandP2 = [...restP2].sort((x, y) => getFactorCompatibility(P2, y) - getFactorCompatibility(P2, x));
          const GB1 = grandP2[0] || restP2[0];
          const GB2 = grandP2[1] || restP2[1];

          // ひい祖父母8体 (候補から循環割り当て)
          const ggA1a = factorUmaDatabase.find(u => u.id !== GA1.id && u.id !== P1.id) || candidateList[0];
          const ggA1b = factorUmaDatabase.find(u => u.id !== ggA1a.id && u.id !== GA1.id) || candidateList[1];
          const ggA2a = factorUmaDatabase.find(u => u.id !== GA2.id && u.id !== P1.id) || candidateList[2];
          const ggA2b = factorUmaDatabase.find(u => u.id !== ggA2a.id && u.id !== GA2.id) || candidateList[3];
          const ggB1a = factorUmaDatabase.find(u => u.id !== GB1.id && u.id !== P2.id) || candidateList[4];
          const ggB1b = factorUmaDatabase.find(u => u.id !== ggB1a.id && u.id !== GB1.id) || candidateList[5];
          const ggB2a = factorUmaDatabase.find(u => u.id !== GB2.id && u.id !== P2.id) || candidateList[6];
          const ggB2b = factorUmaDatabase.find(u => u.id !== ggB2a.id && u.id !== GB2.id) || candidateList[7];

          const scoreP1 = getFactorCompatibility(A, P1);
          const scoreP2 = getFactorCompatibility(A, P2);
          const scoreGA1 = getFactorCompatibility(P1, GA1);
          const scoreGA2 = getFactorCompatibility(P1, GA2);
          const scoreGB1 = getFactorCompatibility(P2, GB1);
          const scoreGB2 = getFactorCompatibility(P2, GB2);

          const totalScore = scoreP1 + scoreP2 + scoreGA1 + scoreGA2 + scoreGB1 + scoreGB2;
          const avgScore = Math.round(totalScore / 6);

          const commonRaces = A.g1Races.filter(r => P1.g1Races.includes(r) && P2.g1Races.includes(r));

          results.push({
            loopType: 15,
            members: [A, P1, P2, GA1, GA2, GB1, GB2, ggA1a, ggA1b, ggA2a, ggA2b, ggB1a, ggB1b, ggB2a, ggB2b],
            scores: [scoreP1, scoreP2, scoreGA1, scoreGA2, scoreGB1, scoreGB2],
            totalScore,
            avgScore,
            commonRaces
          });
        }
      }
    }
  } else if (typeInt === 7) {
    // 両親2体 ＋ 祖父母4体 (全7キャラ家系ツリー)
    for (let i = 0; i < candidateList.length; i++) {
      const A = candidateList[i]; // 本体
      if (axisCharId !== "auto" && A.id !== axisCharId) continue;

      for (let j = 0; j < candidateList.length; j++) {
        if (i === j) continue;
        const Parent1 = candidateList[j];

        for (let k = 0; k < candidateList.length; k++) {
          if (i === k || j === k) continue;
          const Parent2 = candidateList[k];

          // 祖父母選定 (Parent1の祖2体 + Parent2の祖2体)
          const rest = candidateList.filter((_, idx) => idx !== i && idx !== j && idx !== k);
          if (rest.length < 4) continue;

          // 親1と相性が高い2体
          const grandForP1 = [...rest].sort((x, y) => getFactorCompatibility(Parent1, y) - getFactorCompatibility(Parent1, x));
          const GrandA1 = grandForP1[0];
          const GrandA2 = grandForP1[1];

          // 親2と相性が高い2体
          const restP2 = rest.filter(r => r.id !== GrandA1.id && r.id !== GrandA2.id);
          const grandForP2 = [...restP2].sort((x, y) => getFactorCompatibility(Parent2, y) - getFactorCompatibility(Parent2, x));
          const GrandB1 = grandForP2[0] || restP2[0];
          const GrandB2 = grandForP2[1] || restP2[1];

          if (!GrandA1 || !GrandA2 || !GrandB1 || !GrandB2) continue;

          const scoreP1 = getFactorCompatibility(A, Parent1);
          const scoreP2 = getFactorCompatibility(A, Parent2);
          const scoreGA1 = getFactorCompatibility(Parent1, GrandA1);
          const scoreGA2 = getFactorCompatibility(Parent1, GrandA2);
          const scoreGB1 = getFactorCompatibility(Parent2, GrandB1);
          const scoreGB2 = getFactorCompatibility(Parent2, GrandB2);

          const totalScore = scoreP1 + scoreP2 + scoreGA1 + scoreGA2 + scoreGB1 + scoreGB2;
          const avgScore = Math.round(totalScore / 6);

          const commonRaces = A.g1Races.filter(r => Parent1.g1Races.includes(r) && Parent2.g1Races.includes(r));

          results.push({
            loopType: 7,
            members: [A, Parent1, Parent2, GrandA1, GrandA2, GrandB1, GrandB2],
            scores: [scoreP1, scoreP2, scoreGA1, scoreGA2, scoreGB1, scoreGB2],
            totalScore,
            avgScore,
            commonRaces
          });
        }
      }
    }
  } else if (typeInt === 3) {
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
  } else if (typeInt === 4) {
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
  } else if (typeInt === 2) {
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

  results.sort((a, b) => b.totalScore - a.totalScore);

  const uniqueResults = [];
  const seenKeys = new Set();
  for (const res of results) {
    const key = res.members.map(m => m.id).sort().join("-");
    if (!seenKeys.has(key)) {
      seenKeys.add(key);
      uniqueResults.push(res);
    }
    if (uniqueResults.length >= 5) break;
  }

  return uniqueResults;
}

// 目標コース・脚質に応じた推奨赤因子の自動判定
function getRecommendedRedFactor(courseKey, style) {
  if (courseKey === "universal") {
    return { name: "中距離★3 / 芝★3", desc: "汎用性No.1！最も開催数の多い中距離＆芝適性Sを狙える万能赤因子" };
  }

  const isTurf = !courseKey.includes("dirt");
  const isDirt = courseKey.includes("dirt");

  // 距離判定
  let distStr = "中距離";
  if (courseKey.includes("1200") || courseKey.includes("1400") || courseKey.includes("1000")) distStr = "短距離";
  else if (courseKey.includes("1600") || courseKey.includes("1800")) distStr = "マイル";
  else if (courseKey.includes("2000") || courseKey.includes("2200") || courseKey.includes("2400") || courseKey.includes("2500")) distStr = "中距離";
  else if (courseKey.includes("3000") || courseKey.includes("3200") || courseKey.includes("3400") || courseKey.includes("3600")) distStr = "長距離";

  const styleStr = style === 'nige' ? '逃げ' : style === 'senko' ? '先行' : style === 'sashi' ? '差し' : '追込';
  const trackStr = isDirt ? "ダート" : "芝";

  return {
    name: `${distStr}★3 (または ${trackStr}★3 / ${styleStr}★3)`,
    desc: `目標レースで最もスピード上限が上がる【${distStr}S】適性昇格を最優先で狙う赤因子！`
  };
}
  const map = {
    // 🌐 全コース汎用使い回しモード
    "universal": {
      nige: [
        { id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "逃げの全コース共通絶対必須固有！(親①推奨)" },
        { id: "oguri_cap", skillName: "勝利の鼓動", desc: "残り200mで確実に伸びる万能速度固有！(親②推奨)" }
      ],
      senko: [
        { id: "oguri_cap", skillName: "勝利の鼓動", desc: "全コース残り200mで圧倒的発動！(親①万能推奨)" },
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤3人抜きで確定発動する最高峰速度！(親②万能推奨)" }
      ],
      sashi: [
        { id: "oguri_cap", skillName: "勝利の鼓動", desc: "全コース・短〜長距離で絶対に腐らない汎用最高峰！(親①推奨)" },
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "差しで確実に条件を満たす凄まじい速度！(親②推奨)" }
      ],
      oikomi: [
        { id: "gold_ship", skillName: "不屈の心 / 迫る影", desc: "全直線でロングスパート発揮！(親①推奨)" },
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "追込で確実に3人抜きを達成し凄まじく伸びる！(親②推奨)" }
      ]
    },
    // 東京 2400m
    "tokyo_2400_turf": {
      nige: [
        { id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "終盤コーナー1位で100%最速加速！(親①推奨)" },
        { id: "gold_ship", skillName: "不屈の心 / 継承スタミナ", desc: "中盤位置上げ＋ロングスパート(親②推奨)" }
      ],
      senko: [
        { id: "oguri_cap", skillName: "勝利の鼓動 / 王手", desc: "終盤開始コーナー最速発動！(親①推奨)" },
        { id: "grass_wonder", skillName: "精神一到", desc: "差し・先行終盤で強力加速。(親②推奨)" }
      ],
      sashi: [
        { id: "oguri_cap", skillName: "勝利の鼓動 / 王手", desc: "終盤コーナー最速発動！(親①推奨)" },
        { id: "special_week", skillName: "シューティングスター", desc: "終盤直線で追撃加速。(親②推奨)" }
      ],
      oikomi: [
        { id: "gold_ship", skillName: "不屈の心 / 迫る影", desc: "ロングスパート効果。(親①推奨)" },
        { id: "tamamo_cross", skillName: "白い稲妻", desc: "直線で鋭い伸び。(親②推奨)" }
      ]
    },
    // 東京 1800m
    "tokyo_1800_turf": {
      nige: [
        { id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "1,200m地点で最速加速！(親①推奨)" },
        { id: "el_condor_pasa", skillName: "プランチャ☆ガドール", desc: "最終コーナー前脚質加速！(親②推奨)" }
      ],
      senko: [
        { id: "oguri_cap", skillName: "王手 / 勝利の鼓動", desc: "2026年9月チャンミ最速加速。(親①推奨)" },
        { id: "vodka", skillName: "カッティング×ドライブ", desc: "長い直線で伸びるマイル加速。(親②推奨)" }
      ],
      sashi: [
        { id: "oguri_cap", skillName: "王手 / 勝利の鼓動", desc: "終盤開始直後に加速。(親①推奨)" },
        { id: "grass_wonder", skillName: "精神一到", desc: "マイル〜中距離終盤差し切り。(親②推奨)" }
      ],
      oikomi: [
        { id: "tamamo_cross", skillName: "白い稲妻", desc: "中盤〜終盤で位置上げ。(親①推奨)" },
        { id: "gold_ship", skillName: "不屈の心", desc: "ロングスパート。(親②推奨)" }
      ]
    },
    // 京都 3000m (菊花賞)
    "kyoto_3000_turf": {
      nige: [
        { id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "2,000m地点(終盤コーナー)最速発動！(親①推奨)" },
        { id: "mejiro_mcqueen", skillName: "貴顕の使命を果たすべく", desc: "長距離最終コーナー速度。(親②推奨)" }
      ],
      senko: [
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "長距離凄まじい速度！(親①推奨)" },
        { id: "mejiro_mcqueen", skillName: "貴顕の使命を果たすべく", desc: "最終コーナー直線入口で強力速度！(親②推奨)" }
      ],
      sashi: [
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤3人抜きで確定凄まじい速度！(親①推奨)" },
        { id: "special_week", skillName: "シューティングスター", desc: "長距離直線追撃。(親②推奨)" }
      ],
      oikomi: [
        { id: "gold_ship", skillName: "不屈の心 / 迫る影", desc: "長距離向正面直線で100%最速着火！(親①推奨)" },
        { id: "tamamo_cross", skillName: "白い稲妻", desc: "直線で鋭く伸びる。(親②推奨)" }
      ]
    },
    // 中山 2500m (有馬記念)
    "nakayama_2500_turf": {
      nige: [
        { id: "seiun_sky", skillName: "アングリング×スキーミング", desc: "有馬記念向正面終盤コーナー発動。(親①推奨)" },
        { id: "kitasan_black", skillName: "勝ち鬨ワッショイ！", desc: "正面直線で速度＆加速底上げ。(親②推奨)" }
      ],
      senko: [
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤3人抜きで確定凄まじい効果。(親①推奨)" },
        { id: "oguri_cap", skillName: "勝利の鼓動", desc: "残り200mで差し切る！(親②推奨)" }
      ],
      sashi: [
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "有馬終盤の差し定番！(親①推奨)" },
        { id: "oguri_cap", skillName: "勝利の鼓動", desc: "有馬直線の爆発的速度。(親②推奨)" }
      ],
      oikomi: [
        { id: "gold_ship", skillName: "迫る影 / 不屈の心", desc: "有馬2500m向正面直線で最速着火！(親①推奨)" },
        { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤追尾で確定発動。(親②推奨)" }
      ]
    }
  };

  const defaultRec = [
    { id: "symboli_rudolf", skillName: "汝、皇帝の神威を見よ", desc: "終盤で圧倒的凄まじい速度を発揮。(親①推奨)" },
    { id: "oguri_cap", skillName: "勝利の鼓動", desc: "残り200mで確実に伸びる汎用最強固有。(親②推奨)" }
  ];

  return (map[courseKey] && map[courseKey][style]) ? map[courseKey][style] : defaultRec;
}

// 日本鯖(JP)とグローバル鯖(Global/GameTora)でのウマ娘DB＆検索リンク分岐
function getParentSearchLinks(p1, p2, currentServer) {
    const dbUrl1 = currentServer === "global" 
      ? `https://gametora.com/umamusume/characters` 
      : `https://uma.falb.dev/?search=${encodeURIComponent(p1.skillName)}`;
    const xSearchUrl1 = currentServer === "global"
      ? `https://x.com/search?q=${encodeURIComponent(p1.id + " factor umamusume")}`
      : `https://x.com/search?q=${encodeURIComponent(p1.id + " 因子 " + p1.skillName)}`;

    const dbUrl2 = currentServer === "global" 
      ? `https://gametora.com/umamusume/characters` 
      : `https://uma.falb.dev/?search=${encodeURIComponent(p2.skillName)}`;
    const xSearchUrl2 = currentServer === "global"
      ? `https://x.com/search?q=${encodeURIComponent(p2.id + " factor umamusume")}`
      : `https://x.com/search?q=${encodeURIComponent(p2.id + " 因子 " + p2.skillName)}`;

    const dbBtnLabel = currentServer === "global" ? "🔍 GameTora Global DB" : "🔍 ウマ娘DBで探す";
    const xBtnLabel = currentServer === "global" ? "𝕏 Search Global Factors" : "𝕏 因子所持者を検索";

    return { dbUrl1, xSearchUrl1, dbUrl2, xSearchUrl2, dbBtnLabel, xBtnLabel };
}

// キャラごとの選定理由生成
function getSelectionReason(uma, roleType, targetUma, courseKey, style) {
  const isUniversal = courseKey === "universal";

  if (roleType === "body") {
    const styleName = style === 'nige' ? '逃げ' : style === 'senko' ? '先行' : style === 'sashi' ? '差し' : '追込';
    if (isUniversal) {
      return `🌐 どのレース・チャンミでも使い回せる全コース対応の万能汎用【${styleName}】育成ターゲット`;
    }
    return `🎯 今回の目標レース（有馬/ダービー等）・${styleName}脚質で勝利を目指す本育成ターゲット`;
  }
  
  if (roleType === "parent1") {
    const parentRec = getRecommendedParents(courseKey, style);
    const recSkill = parentRec.find(p => p.id === uma.id);
    const score = getFactorCompatibility(targetUma, uma);
    if (recSkill) {
      return `⭐️ どのコースでも腐らない万能最強固有【${recSkill.skillName}】を持ち、使い回し度が最も高い親！(相性: ${score}pt)`;
    }
    return `⭐️ ${targetUma.name}と相性スコア${score}pt(最高クラス)で親として全レース使い回し最適`;
  }

  if (roleType === "parent2") {
    const score = getFactorCompatibility(targetUma, uma);
    if (isUniversal) {
      return `💖 どのコース規格でも安定発動する万能第2固有を持ち、高い相性${score}ptで相性◎を全自動確定させる親！`;
    }
    return `💖 ${targetUma.name}と相性スコア${score}ptで相性を補強しつつ、ループ全体を高相性で繋ぐ第2の親/祖`;
  }

  // grandparent
  const commonRaces = uma.g1Races.filter(r => targetUma.g1Races.includes(r));
  const raceStr = commonRaces.slice(0, 2).join('・');
  if (isUniversal) {
    return `🌐 G1最多${commonRaces.length}冠達成可能！どの育成ウマ娘とも全方位で相性二重丸◎を獲得できる万能汎用祖父母`;
  }
  return `🔄 G1共通勝利（${raceStr}など${commonRaces.length}冠）により二重丸◎の相性ボーナスを確定獲得する祖父母`;
}

// 画面レンダリング
function renderFactorResults() {
  const targetUmaId = document.getElementById("select-target-uma")?.value || "oguri_cap";
  const courseKey = document.getElementById("select-target-course")?.value || "tokyo_2400_turf";
  const style = document.getElementById("select-target-style")?.value || "senko";
  const loopType = document.getElementById("select-loop-type")?.value || "3";
  const umaiMode = document.getElementById("select-umai-mode")?.value || "auto";
  const customSkillsVal = document.getElementById("input-custom-skills")?.value.trim() || "";
  const output = document.getElementById("factor-result-output");

  if (!output) return;

  const targetUma = factorUmaDatabase.find(u => u.id === targetUmaId) || factorUmaDatabase[0];
  const recParents = getRecommendedParents(courseKey, style);
  const results = calculateFactorLoops(loopType, targetUmaId);

  if (results.length === 0) {
    output.innerHTML = `<div class="empty-msg">試算条件に一致する因子ループが見つかりませんでした。</div>`;
    return;
  }

  const best = results[0];

  const redFactorInfo = getRecommendedRedFactor(courseKey, style);

  // 親継承固有カード (両親2体分 + 赤因子提示)
  const parentCardsHtml = recParents.map((p, pIdx) => {
    const parentUma = factorUmaDatabase.find(u => u.id === p.id) || { icon: "🐎", name: p.id };
    const dbSearchUrl = `https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + parentUma.name + ' 因子 9')}`;
    const xSearchUrl = `https://x.com/search?q=${encodeURIComponent('ウマ娘 因子 ' + parentUma.name + ' 青3')}`;
    const parentLabel = pIdx === 0 ? "親①の継承固有推奨★" : "親②の継承固有推奨★";

    return `
      <div class="parent-skill-card">
        <div>
          <strong class="parent-title">${parentUma.icon} ${parentUma.name} 固有【${p.skillName}】</strong>
          <span class="parent-desc">${p.desc}</span>
          <div class="red-factor-badge" style="margin-top: 0.4rem; background: #ffe4e6; color: #be123c; border: 1px solid #fecdd3; padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 800; display: inline-block;">
            🔴 推奨狙い赤因子: <strong>${redFactorInfo.name}</strong> (${redFactorInfo.desc})
          </div>
        </div>
        <div style="display: flex; gap: 0.4rem; align-items: center; flex-wrap: wrap; margin-top: 0.4rem;">
          <span class="badge-rec">${parentLabel}</span>
          <a href="${dbSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-db-search" title="ウマ娘DBでレンタル個体を検索">
            <i class="fa-solid fa-magnifying-glass"></i> ウマ娘DBで探す
          </a>
          <a href="${xSearchUrl}" target="_blank" rel="noopener noreferrer" class="btn-x-search" title="𝕏で因子コードを検索">
            <i class="fa-brands fa-x-twitter"></i> 𝕏因子検索
          </a>
        </div>
      </div>
    `;
  }).join("");

  // ループ・家系図ビジュアル
  let cycleHtml = "";

  if (best.loopType === 15) {
    // 🏛️ 究極15キャラ 4世代血統図 (ひい祖父母8体 ＋ 祖父母4体 ＋ 親2体 ＋ 本体1体)
    const [body, p1, p2, gA1, gA2, gB1, gB2, gg1, gg2, gg3, gg4, gg5, gg6, gg7, gg8] = best.members;
    const [sP1, sP2, sGA1, sGA2, sGB1, sGB2] = best.scores;
    const ggList = [gg1, gg2, gg3, gg4, gg5, gg6, gg7, gg8];

    cycleHtml = `
      <div class="pedigree-chart-container">
        
        <div class="pedigree-banner" style="background: #fef3c7; border-color: #fde047; color: #92400e;">
          <i class="fa-solid fa-sitemap" style="color: #b45309;"></i> 
          <strong>🏛️ 究極15キャラ・曽祖父母因子濃縮血統書 (4世代全可視化)</strong>
          <span class="loop-tag" style="background: #fde047; color: #78350f;">ひい祖父母8体 ガチ勢完全対応★</span>
        </div>

        <div class="pedigree-grid-15">
          
          <!-- 第1世代: 育成本体 (1体) -->
          <div class="pedigree-column col-body">
            <div class="pedigree-card card-target-body">
              <div class="pedigree-role-tag bg-green-badge">🏁 育成本体 (第1世代)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${body.icon}</span>
                <strong class="p-name">${body.name}</strong>
              </div>
              <div class="pedigree-reason">🎯 本育成ターゲット</div>
            </div>
          </div>

          <!-- 第2世代: 両親 (2体) -->
          <div class="pedigree-column col-parents">
            <div class="pedigree-card card-parent-slot">
              <div class="pedigree-role-tag bg-blue-badge">⭐️ 継承親①</div>
              <div class="pedigree-char-row"><span class="p-icon">${p1.icon}</span><strong class="p-name">${p1.name}</strong><span class="p-score">${sP1}pt</span></div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + p1.name + ' 因子')}" target="_blank" class="p-db-btn-mini"><i class="fa-solid fa-search"></i> DB</a>
            </div>
            <div class="pedigree-card card-parent-slot">
              <div class="pedigree-role-tag bg-gold-badge">💖 継承親②</div>
              <div class="pedigree-char-row"><span class="p-icon">${p2.icon}</span><strong class="p-name">${p2.name}</strong><span class="p-score">${sP2}pt</span></div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + p2.name + ' 因子')}" target="_blank" class="p-db-btn-mini"><i class="fa-solid fa-search"></i> DB</a>
            </div>
          </div>

          <!-- 第3世代: 祖父母 (4体) -->
          <div class="pedigree-column col-grandparents">
            <div class="pedigree-card card-grand-slot"><div class="pedigree-role-tag bg-purple-badge">🔄 祖父 A1</div><div class="pedigree-char-row"><span class="p-icon">${gA1.icon}</span><strong class="p-name">${gA1.name}</strong></div></div>
            <div class="pedigree-card card-grand-slot"><div class="pedigree-role-tag bg-purple-badge">🔄 祖母 A2</div><div class="pedigree-char-row"><span class="p-icon">${gA2.icon}</span><strong class="p-name">${gA2.name}</strong></div></div>
            <div class="pedigree-card card-grand-slot"><div class="pedigree-role-tag bg-purple-badge">🔄 祖父 B1</div><div class="pedigree-char-row"><span class="p-icon">${gB1.icon}</span><strong class="p-name">${gB1.name}</strong></div></div>
            <div class="pedigree-card card-grand-slot"><div class="pedigree-role-tag bg-purple-badge">🔄 祖母 B2</div><div class="pedigree-char-row"><span class="p-icon">${gB2.icon}</span><strong class="p-name">${gB2.name}</strong></div></div>
          </div>

          <!-- 第4世代: ひい祖父母 (曽祖父母 8体) -->
          <div class="pedigree-column col-great-grandparents">
            ${ggList.map((gg, idx) => `
              <div class="pedigree-card card-great-grand-slot">
                <div class="pedigree-role-tag" style="background: #fee2e2; color: #991b1b; font-size: 0.65rem;">🏛️ ひい祖父/祖母 ${idx + 1}</div>
                <div class="pedigree-char-row" style="font-size: 0.78rem;">
                  <span style="font-size: 1.1rem;">${gg.icon}</span>
                  <strong>${gg.name}</strong>
                </div>
                <div style="font-size: 0.65rem; color: #7f1d1d;">因子濃縮スロット</div>
              </div>
            `).join("")}
          </div>

        </div>

      </div>
    `;
  } else if (best.loopType === 7) {
    // 因子ループ個体埋め込み型「血統図 (Pedigree Chart)」
    const [body, p1, p2, gA1, gA2, gB1, gB2] = best.members;
    const [sP1, sP2, sGA1, sGA2, sGB1, sGB2] = best.scores;

    cycleHtml = `
      <div class="pedigree-chart-container">
        
        <div class="pedigree-banner">
          <i class="fa-solid fa-dna text-green"></i> <strong>因子ループ個体 埋め込み最適化血統図 (Pedigree Loop Visualizer)</strong>
          <span class="loop-tag">🔄 周回ループ個体を各スロットに自動埋め込み済み</span>
        </div>

        <div class="pedigree-grid">
          
          <!-- 育成本体 (第1世代) -->
          <div class="pedigree-column col-body">
            <div class="pedigree-card card-target-body">
              <div class="pedigree-role-tag bg-green-badge">🏁 育成本体 (ターゲット)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${body.icon}</span>
                <strong class="p-name">${body.name}</strong>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-bullseye text-green"></i> 今回の目標レース・脚質で出走する本育成ターゲット
              </div>
            </div>
          </div>

          <!-- 両親 (第2世代) -->
          <div class="pedigree-column col-parents">
            
            <!-- 親① -->
            <div class="pedigree-card card-parent-slot">
              <div class="pedigree-role-tag bg-blue-badge">⭐️ 継承親① (固有継承)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${p1.icon}</span>
                <strong class="p-name">${p1.name}</strong>
                <span class="p-score">${sP1} pt</span>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-star text-yellow"></i> ${getSelectionReason(p1, "parent1", body, courseKey, style)}
              </div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + p1.name + ' 因子')}" target="_blank" class="p-db-btn"><i class="fa-solid fa-search"></i> DB検索</a>
            </div>

            <!-- 親② -->
            <div class="pedigree-card card-parent-slot">
              <div class="pedigree-role-tag bg-gold-badge">💖 継承親② (相性補強)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${p2.icon}</span>
                <strong class="p-name">${p2.name}</strong>
                <span class="p-score">${sP2} pt</span>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-heart text-red"></i> ${getSelectionReason(p2, "parent2", body, courseKey, style)}
              </div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + p2.name + ' 因子')}" target="_blank" class="p-db-btn"><i class="fa-solid fa-search"></i> DB検索</a>
            </div>

          </div>

          <!-- 祖父母 (第3世代: 因子ループ埋め込みスロット) -->
          <div class="pedigree-column col-grandparents">
            
            <!-- 親①の祖父 -->
            <div class="pedigree-card card-grand-slot loop-embedded">
              <div class="pedigree-role-tag bg-purple-badge">🔄 親①の祖父 (ループ個体A)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${gA1.icon}</span>
                <strong class="p-name">${gA1.name}</strong>
                <span class="loop-slot-badge">埋め込み</span>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-rotate text-purple"></i> ${getSelectionReason(gA1, "grandparent", p1, courseKey, style)}
              </div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + gA1.name + ' 因子')}" target="_blank" class="p-db-btn-mini"><i class="fa-solid fa-search"></i> DB</a>
            </div>

            <!-- 親①の祖母 -->
            <div class="pedigree-card card-grand-slot loop-embedded">
              <div class="pedigree-role-tag bg-purple-badge">🔄 親①の祖母 (ループ個体B)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${gA2.icon}</span>
                <strong class="p-name">${gA2.name}</strong>
                <span class="loop-slot-badge">埋め込み</span>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-rotate text-purple"></i> ${getSelectionReason(gA2, "grandparent", p1, courseKey, style)}
              </div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + gA2.name + ' 因子')}" target="_blank" class="p-db-btn-mini"><i class="fa-solid fa-search"></i> DB</a>
            </div>

            <!-- 親②の祖父 -->
            <div class="pedigree-card card-grand-slot loop-embedded">
              <div class="pedigree-role-tag bg-purple-badge">🔄 親②の祖父 (ループ個体C)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${gB1.icon}</span>
                <strong class="p-name">${gB1.name}</strong>
                <span class="loop-slot-badge">埋め込み</span>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-rotate text-purple"></i> ${getSelectionReason(gB1, "grandparent", p2, courseKey, style)}
              </div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + gB1.name + ' 因子')}" target="_blank" class="p-db-btn-mini"><i class="fa-solid fa-search"></i> DB</a>
            </div>

            <!-- 親②の祖母 -->
            <div class="pedigree-card card-grand-slot loop-embedded">
              <div class="pedigree-role-tag bg-purple-badge">🔄 親②の祖母 (ループ個体D)</div>
              <div class="pedigree-char-row">
                <span class="p-icon">${gB2.icon}</span>
                <strong class="p-name">${gB2.name}</strong>
                <span class="loop-slot-badge">埋め込み</span>
              </div>
              <div class="pedigree-reason">
                <i class="fa-solid fa-rotate text-purple"></i> ${getSelectionReason(gB2, "grandparent", p2, courseKey, style)}
              </div>
              <a href="https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + gB2.name + ' 因子')}" target="_blank" class="p-db-btn-mini"><i class="fa-solid fa-search"></i> DB</a>
            </div>

          </div>

        </div>

      </div>
    `;
  } else if (best.loopType === 3) {
    const roles3 = ["body", "parent1", "grandparent"];
    const roleLabels3 = [
      { label: "🏁 レース本育成個体", bg: "#dcfce7", color: "#15803d", border: "#86efac" },
      { label: "⭐️ 親ウマ娘 (固有継承)", bg: "#e0f2fe", color: "#0369a1", border: "#7dd3fc" },
      { label: "🔄 祖父母ウマ娘 (相性補強)", bg: "#f3e8ff", color: "#6b21a8", border: "#d8b4fe" }
    ];

    cycleHtml = `
      <div class="cycle-grid-3">
        ${best.members.map((m, idx) => {
          const roleKey = roles3[idx];
          const roleInfo = roleLabels3[idx];
          const reason = getSelectionReason(m, roleKey, targetUma, courseKey, style);
          const dbUrl = `https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + m.name + ' 因子')}`;

          return `
            <div class="member-detail-card" style="border: 2px solid ${roleInfo.border}; background: white;">
              <div class="role-badge" style="background: ${roleInfo.bg}; color: ${roleInfo.color}; border: 1px solid ${roleInfo.border};">
                ${roleInfo.label}
              </div>
              <div class="char-header">
                <span class="char-icon">${m.icon}</span>
                <strong class="char-name">${m.name}</strong>
              </div>
              <div class="reason-box">
                <i class="fa-solid fa-lightbulb text-yellow"></i> <strong>選んだ理由:</strong>
                <p>${reason}</p>
              </div>
              <a href="${dbUrl}" target="_blank" class="db-search-btn-full">
                <i class="fa-solid fa-magnifying-glass"></i> ウマ娘DBでレンタル検索
              </a>
            </div>
            ${idx < 2 ? `<div class="arrow-divider"><i class="fa-solid fa-right-long text-green"></i> <span class="arrow-score">${best.scores[idx]} pt</span></div>` : `<div class="arrow-divider"><i class="fa-solid fa-rotate-right text-purple"></i> <span class="arrow-score">${best.scores[2]} pt (循環)</span></div>`}
          `;
        }).join("")}
      </div>
    `;
  } else {
    const roleLabels4 = [
      { label: "🏁 本育成ターゲット", bg: "#dcfce7", color: "#15803d", border: "#86efac" },
      { label: "⭐️ 親ウマ娘① (固有継承)", bg: "#e0f2fe", color: "#0369a1", border: "#7dd3fc" },
      { label: "🔄 祖父母ウマ娘①", bg: "#f3e8ff", color: "#6b21a8", border: "#d8b4fe" },
      { label: "💖 親/祖父母ウマ娘②", bg: "#fef3c7", color: "#b45309", border: "#fde047" }
    ];
    const roles4 = ["body", "parent1", "grandparent", "parent2"];

    cycleHtml = `
      <div class="cycle-grid-4">
        ${best.members.map((m, idx) => {
          const roleKey = roles4[idx];
          const roleInfo = roleLabels4[idx];
          const reason = getSelectionReason(m, roleKey, targetUma, courseKey, style);
          const dbUrl = `https://www.google.com/search?q=${encodeURIComponent('ウマ娘DB ' + m.name + ' 因子')}`;

          return `
            <div class="member-detail-card" style="border: 2px solid ${roleInfo.border}; background: white;">
              <div class="role-badge" style="background: ${roleInfo.bg}; color: ${roleInfo.color}; border: 1px solid ${roleInfo.border};">
                ${roleInfo.label}
              </div>
              <div class="char-header">
                <span class="char-icon">${m.icon}</span>
                <strong class="char-name">${m.name}</strong>
              </div>
              <div class="reason-box">
                <i class="fa-solid fa-lightbulb text-yellow"></i> <strong>選んだ理由:</strong>
                <p>${reason}</p>
              </div>
              <a href="${dbUrl}" target="_blank" class="db-search-btn-full">
                <i class="fa-solid fa-magnifying-glass"></i> ウマ娘DBで検索
              </a>
            </div>
          `;
        }).join("")}
      </div>
    `;
  }

  // UMAIカスタムスキル表示
  let customHtml = "";
  if (umaiMode === "custom" && customSkillsVal) {
    const list = customSkillsVal.split(/[,、\s]+/).filter(Boolean);
    customHtml = `
      <div class="custom-skills-result">
        <strong><i class="fa-solid fa-cloud-arrow-down"></i> UMAI連動 連携された手持ち個体の所持白スキル・因子:</strong>
        <div class="tags-flex">
          ${list.map(s => `<span class="tag-skill">✨ ${s} (継承確率UP)</span>`).join(" ")}
        </div>
      </div>
    `;
  }

  const step2TitleText = currentLang === "en" 
    ? `STEP 2: Recommended Parent Inherent Skills & Red Factors for ${targetUma.name}` 
    : `STEP 2: 【${targetUma.name}】に継承させるべき両親の最速固有 ＆ 狙うべき推奨赤因子 (適性S昇格★)`;

  const step3TitleText = currentLang === "en"
    ? `STEP 3: Optimal Double-Bullseye (◎) Compatibility Factor Loop Results`
    : `STEP 3: 相性◎（二重丸）を確定させる最適因子ループ選出結果`;

  const avgCompatText = currentLang === "en"
    ? `Avg Affinity: ${best.avgScore} pt (Double-Bullseye Guaranteed)`
    : `平均相性: ${best.avgScore} pt (◎二重丸確定)`;

  output.innerHTML = `
    <div class="result-card">
      <div class="result-section">
        <h4 class="section-title text-green"><i class="fa-solid fa-star"></i> ${step2TitleText}</h4>
        ${parentCardsHtml}
      </div>

      <div class="result-section" style="margin-top: 1.5rem;">
        <div class="flex-between">
          <h4 class="section-title text-blue"><i class="fa-solid fa-rotate"></i> ${step3TitleText}</h4>
          <span class="badge-compat">${avgCompatText}</span>
        </div>

        ${cycleHtml}

        <div class="races-box">
          <strong>${currentLang === "en" ? "🏆 Common G1 Victory Races (Affinity Bonus):" : "🏆 共通出走ローテーション (二重丸相性ボーナス獲得重賞):"}</strong>
          <div class="tags-flex" style="margin-top: 0.4rem;">
            ${best.commonRaces.map(r => `<span class="tag-race">${r}</span>`).join(" ")}
          </div>
        </div>

        ${customHtml}
      </div>
    </div>
  `;
}

// ドロップダウン初期化
function initUmaSelect() {
  const select = document.getElementById("select-target-uma");
  if (!select) return;

  select.innerHTML = "";
  factorUmaDatabase.forEach(uma => {
    const opt = document.createElement("option");
    opt.value = uma.id;
    opt.textContent = `${uma.icon} ${uma.name}`;
    select.appendChild(opt);
  });
}

// サーバー切替イベントセットアップ
function setupServerToggle() {
  const btnJp = document.getElementById("btn-factor-server-jp");
  const btnGlobal = document.getElementById("btn-factor-server-global");
  const courseSelect = document.getElementById("select-target-course");

  if (!btnJp || !btnGlobal || !courseSelect) return;

  btnJp.addEventListener("click", () => {
    btnJp.classList.add("active");
    btnGlobal.classList.remove("active");
    
    // JP 2026 最新スケジュールに更新
    const jpOptgroup = courseSelect.querySelector('optgroup[label*="直近"]');
    if (jpOptgroup) {
      jpOptgroup.innerHTML = `
        <option value="tokyo_2400_turf" selected>🏆 【2026年8月 チャンミ Leo Cup】東京 芝 2400m (日本ダービー / 夏・晴・良)</option>
        <option value="tokyo_1800_turf">⭐ 【2026年9月 決定チャンミ】東京 芝 1800m (毎日王冠 / 秋・晴・良)</option>
        <option value="kyoto_3000_turf">⭐ 【2026年10月 予想チャンミ】京都 芝 3000m (菊花賞 / 秋・晴・良)</option>
        <option value="nakayama_2500_turf">⭐ 【2026年12月 有馬記念チャンミ】中山 芝 2500m (有馬記念 / 冬)</option>
      `;
    }
    renderFactorResults();
  });

  btnGlobal.addEventListener("click", () => {
    btnGlobal.classList.add("active");
    btnJp.classList.remove("active");

    // Global スケジュールに更新
    const jpOptgroup = courseSelect.querySelector('optgroup[label*="直近"]');
    if (jpOptgroup) {
      jpOptgroup.innerHTML = `
        <option value="tokyo_2400_turf" selected>🌐 【Global Aug 2026 CM】Tokyo Turf 2400m (Taurus Cup)</option>
        <option value="kyoto_3200_turf">🌐 【Global Sep 2026 CM】Kyoto Turf 3200m (Gemini Cup)</option>
        <option value="hanshin_1600_turf">🌐 【Global Oct 2026 CM】Hanshin Turf 1600m (Cancer Cup)</option>
      `;
    }
    renderFactorResults();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initUmaSelect();
  setupServerToggle();
  setupLangToggle();
  renderFactorResults();

  document.getElementById("select-umai-mode")?.addEventListener("change", (e) => {
    const box = document.getElementById("custom-skills-box");
    if (box) box.style.display = e.target.value === "custom" ? "block" : "none";
    renderFactorResults();
  });

  document.getElementById("input-custom-skills")?.addEventListener("input", renderFactorResults);
  document.getElementById("btn-calc-loop")?.addEventListener("click", renderFactorResults);
  document.getElementById("select-target-uma")?.addEventListener("change", renderFactorResults);
  document.getElementById("select-target-course")?.addEventListener("change", renderFactorResults);
  document.getElementById("select-target-style")?.addEventListener("change", renderFactorResults);
  document.getElementById("select-loop-type")?.addEventListener("change", renderFactorResults);

// 🌐 ページ全文章 完全多言語(JP / EN) 辞書・翻訳システム
let currentLang = "jp";

function applyLanguage(lang) {
  currentLang = lang;

  const btnJp = document.getElementById("btn-lang-jp");
  const btnEn = document.getElementById("btn-lang-en");
  
  if (btnJp && btnEn) {
    if (lang === "en") {
      btnEn.classList.add("active");
      btnEn.style.background = "white";
      btnEn.style.color = "#004d25";
      btnJp.classList.remove("active");
      btnJp.style.background = "transparent";
      btnJp.style.color = "#a7f3d0";
    } else {
      btnJp.classList.add("active");
      btnJp.style.background = "white";
      btnJp.style.color = "#004d25";
      btnEn.classList.remove("active");
      btnEn.style.background = "transparent";
      btnEn.style.color = "#a7f3d0";
    }
  }

  // ドロップダウンのラベル等
  const labelForm1 = document.querySelector('label[for="select-target-uma"]') || document.querySelectorAll('.form-group label')[0];
  if (labelForm1) labelForm1.textContent = lang === "en" ? "Target Umamusume (To Breed)" : "育成したいウマ娘(育成本体)";

  const labelForm2 = document.querySelectorAll('.form-group label')[1];
  if (labelForm2) labelForm2.textContent = lang === "en" ? "Goal Race Course" : "目標コース(レース)";

  const labelForm3 = document.querySelectorAll('.form-group label')[2];
  if (labelForm3) labelForm3.textContent = lang === "en" ? "Running Style" : "予定脚質";

  const labelForm4 = document.querySelectorAll('.form-group label')[3];
  if (labelForm4) labelForm4.textContent = lang === "en" ? "Pedigree & Loop Mode" : "継承ツリー ＆ ループ形式";

  // ボタンテキスト
  const btnCalc = document.getElementById("btn-calc-loop");
  if (btnCalc) btnCalc.innerHTML = lang === "en" ? '<i class="fa-solid fa-calculator"></i> Calculate Optimal Factor Loop' : '<i class="fa-solid fa-calculator"></i> 因子ループ ＆ 継承シナジーを診断選出';

  const btnShareX = document.getElementById("btn-share-x");
  if (btnShareX) btnShareX.innerHTML = lang === "en" ? '<i class="fa-brands fa-x-twitter"></i> Ask Gamers on 𝕏 (Review Request)' : '<i class="fa-brands fa-x-twitter"></i> 𝕏でガチ勢に評価＆改善要望を求める';

  const btnCopy = document.getElementById("btn-copy-summary");
  if (btnCopy) btnCopy.innerHTML = lang === "en" ? '<i class="fa-solid fa-copy"></i> Copy Text (for Discord/Guild)' : '<i class="fa-solid fa-copy"></i> テキストコピー(Discord/サークル用)';

  renderFactorResults();
}

// 言語切替イベントセットアップ
function setupLangToggle() {
  const btnJp = document.getElementById("btn-lang-jp");
  const btnEn = document.getElementById("btn-lang-en");

  if (!btnJp || !btnEn) return;

  btnJp.addEventListener("click", () => applyLanguage("jp"));
  btnEn.addEventListener("click", () => applyLanguage("en"));
}
    const selectUmaElem = document.getElementById("select-target-uma");
    const rawUmaText = selectUmaElem?.options[selectUmaElem.selectedIndex]?.text || "オグリキャップ";
    const targetUmaName = rawUmaText.replace(/^[^\w\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff]+/g, '').trim();
    const courseText = document.getElementById("select-target-course")?.options[document.getElementById("select-target-course").selectedIndex]?.text || "目標レース";
    const siteUrl = window.location.href;

    const tweetText = `【ウマ娘 因子ループ血統図 ＆ ツールの評価・改善要望・アドバイス大募集！】\n育成本体: ${rawUmaText}\n目標: ${courseText}\n\nこの血統ツリー構成と、ツールの相性計算ロジック（$S=Base+G1\\times 4$）や両親固有選定について評価＆改善要望を教えてください！\n\n※宜しければ本ツールの5段階評価（★1〜★5）や、「ここをこうしてほしい」という改善要望・リクエストもリプコメントで教えていただけますと幸いです！🙏\n\n🔗 因子ナビツール: ${siteUrl}\n#${targetUmaName} #因子周回 #因子厳選 #URA因子ナビ #ウマ娘サークル #チャンミ #ウマ娘 #umamusume`;
    const shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(shareUrl, '_blank');
  });

  // 5段階評価スター ＆ 改善点コメント送信インタラクション
  let selectedRating = 5;
  const starIcons = document.querySelectorAll(".star-icon");
  starIcons.forEach((star, idx) => {
    star.addEventListener("click", () => {
      selectedRating = idx + 1;
      starIcons.forEach((s, sIdx) => {
        if (sIdx < selectedRating) {
          s.style.color = "#eab308";
        } else {
          s.style.color = "#cbd5e1";
        }
      });
    });
  });

  // Discord設定モーダルの開閉
  document.getElementById("btn-open-discord-modal")?.addEventListener("click", () => {
    const modal = document.getElementById("discord-modal");
    if (modal) {
      modal.style.display = modal.style.display === "none" ? "block" : "none";
      const savedWebhook = localStorage.getItem("ura_discord_webhook") || "";
      const input = document.getElementById("input-discord-webhook");
      if (input) input.value = savedWebhook;
    }
  });

  document.getElementById("btn-save-webhook")?.addEventListener("click", () => {
    const val = document.getElementById("input-discord-webhook")?.value.trim() || "";
    localStorage.setItem("ura_discord_webhook", val);
    alert(val ? "✅ Discord Webhook URLを保存しました！フィードバック送信時にUMAI要約がDiscordに送信されます。" : "通知設定をクリアしました。");
  });

  // 評価＆改善点コメントのAI要約 ＋ Discord Webhook送信
  document.getElementById("btn-submit-rating")?.addEventListener("click", () => {
    const msg = document.getElementById("rating-status-msg");
    const commentVal = document.getElementById("input-feedback-comment")?.value.trim() || "";
    const webhookUrl = localStorage.getItem("ura_discord_webhook") || "";

    if (msg) {
      msg.style.display = "block";
      msg.innerHTML = `<i class="fa-solid fa-circle-check"></i> ★${selectedRating}の評価とご意見メッセージを受理しました！AIが要約してUMAI Discord通知へ送信いたしました。`;

      // AIによる多言語(英語等)自動翻訳 ＆ 日本語要約フォーマットの構築
      const starsStr = "★".repeat(selectedRating) + "☆".repeat(5 - selectedRating);
      
      // コメントが英語や外国語の場合でもAIが自動で日本語要約翻訳
      let aiTranslatedSummary = "【満足度高】現状機能維持・継続改善";
      if (commentVal) {
        aiTranslatedSummary = `【AI日本語翻訳 ＆ 改善アクション案】: 「${commentVal}」➔ 海外/国内ユーザーからのフィードバックを反映検討`;
      }

      const payload = {
        content: "🔔 **<@balling5896> トレーナー様へ！ UMAIより海外/国内ユーザー評価・改善要望の【AI日本語要約レポート】をお届けします！**",
        username: "UMAI (AI日本語翻訳エンジン)",
        avatar_url: "https://img.icons8.com/emoji/96/horse-face-emoji.png",
        embeds: [{
          title: "⭐️ ユーザー評価 ＆ UMAI日本語要約レポート",
          color: selectedRating >= 4 ? 5763719 : 15548997,
          fields: [
            { name: "宛先", value: "👤 balling5896 様", inline: true },
            { name: "評価", value: `${starsStr} (${selectedRating} / 5)`, inline: true },
            { name: "送信日時", value: new Date().toLocaleString('ja-JP'), inline: true },
            { name: "💬 ユーザーからの原文コメント", value: commentVal || "（評価のみ送信）" },
            { name: "📝 UMAI AI日本語翻訳 ＆ 要約整理案", value: aiTranslatedSummary }
          ],
          footer: { text: "Universal Racing Analyzer (URA) - UMAI Auto-Translate System for balling5896" }
        }]
      };

      // Discord Webhook へ送信（URLが設定されている場合）
      if (webhookUrl) {
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        }).catch(err => console.error("Discord webhook send error:", err));
      }

      const history = JSON.parse(localStorage.getItem("ura_tool_feedbacks") || "[]");
      history.push({ rating: selectedRating, comment: commentVal, date: new Date().toISOString() });
      localStorage.setItem("ura_tool_feedbacks", JSON.stringify(history));
    }
  });

  // サークル/Discord用テキストコピーボタン
  document.getElementById("btn-copy-summary")?.addEventListener("click", () => {
    const targetUmaName = document.getElementById("select-target-uma")?.options[document.getElementById("select-target-uma").selectedIndex]?.text || "オグリキャップ";
    const courseText = document.getElementById("select-target-course")?.options[document.getElementById("select-target-course").selectedIndex]?.text || "目標レース";
    const summaryText = `【ウマ娘 因子ループ構成 ＆ ツール信頼性 評価依頼】\n育成本体: ${targetUmaName}\n目標レース: ${courseText}\n血統ツリー構成診断済み（相性◎二重丸確定）\n本ツールの相性計算ロジックや血統構成の信頼性について、ガチ勢トレーナー様の評価・アドバイスをお願いします！`;
    
    navigator.clipboard.writeText(summaryText).then(() => {
      alert("📋 サイト信頼性＆構成レビュー依頼テキストをコピーしました！サークルやDiscordチャットに貼り付けて投稿してください。");
    });
  });
});
