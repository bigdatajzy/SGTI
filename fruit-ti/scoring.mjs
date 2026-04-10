/** 水果 TI — 数据与计分（ESM，供浏览器与 Node 测试共用） */

export const FRUITS = [
  {
    id: "stnk",
    name: "榴莲",
    code: "STNK",
    tagline: "带刺的保护：柔软只给少数人，靠近前请先心理建设。",
    blurb:
      "外壳带刺、内里绵软，爱与恨都极化。你像一种需要勇气的亲密关系：靠近之前，别人要先做心理建设。",
  },
  {
    id: "meln",
    name: "西瓜",
    code: "MELN",
    tagline: "圆润分瓣：甜常常分给别人，籽与心事留给自己。",
    blurb:
      "外表圆润无害，内部分瓣很清楚。甜是夏天的义务，籽是不好解释的心事；淡季时你也可能被遗忘在冰箱深处。",
  },
  {
    id: "berr",
    name: "草莓",
    code: "BERR",
    tagline: "易碎体面：怕磕碰，也怕不被小心摆放。",
    blurb:
      "表面脆弱、怕磕碰，追求体面与一点点浪漫。压力一大就软，需要被小心摆放，而不是被随手扔进塑料袋。",
  },
  {
    id: "lemn",
    name: "柠檬",
    code: "LEMN",
    tagline: "清醒调味：让问题显形的人，常常也更累。",
    blurb:
      "清醒自带酸味，常被迫当气氛调节器或实话担当。你让问题显形，也让自己更累：苦与清醒常常绑定销售。",
  },
  {
    id: "bana",
    name: "香蕉",
    code: "BANA",
    tagline: "顺拐时机：随和是表象，成熟度不对就黑化。",
    blurb:
      "看起来随和、顺拐、好相处，但你也容易“氧化黑化”。成熟度全凭时机，不等人；拖延一下，故事就换版本。",
  },
  {
    id: "appl",
    name: "苹果",
    code: "APPL",
    tagline: "默认正确：中庸普适，却承担最多比较与期待。",
    blurb:
      "长期承担“默认正确水果”的期待：中庸、普适、好搭配。你被比较得最多，却最不容易被真正看见细节。",
  },
  {
    id: "grap",
    name: "葡萄",
    code: "GRAP",
    tagline: "成串依附：甜涩批量发生，位置感来自群体节奏。",
    blurb:
      "成串出现，甜与涩都批量发生。你懂依附与群体节奏，也懂一串里总有人更甜、有人更酸。",
  },
  {
    id: "coco",
    name: "椰子",
    code: "COCO",
    tagline: "硬壳长续航：水分在内，要费点劲才喝得到。",
    blurb:
      "硬壳长续航，水分藏在深处。社交距离感强，要费点劲才能喝到内在；但一旦打开，你其实很实在。",
  },
];

export const QUESTIONS = [
  {
    q: "遇到压力时，你的第一反应更接近？",
    options: [
      { t: "先缩进壳里，把刺竖起来，等世界冷静", f: "stnk" },
      { t: "先切开来分给大家，表面装作没事", f: "meln" },
      { t: "先检查自己有没有“磕伤”，再决定说不说", f: "berr" },
      { t: "先酸一下，把真相挤出来透气", f: "lemn" },
    ],
  },
  {
    q: "你在关系里更怕哪一种？",
    options: [
      { t: "被误解成“难搞”，但其实只是怕受伤", f: "stnk" },
      { t: "被需要太多，甜到后面只剩义务", f: "meln" },
      { t: "被粗鲁对待：我不贵，但我怕磕碰", f: "berr" },
      { t: "被当成工具人：调味可以，别只剩调味", f: "lemn" },
    ],
  },
  {
    q: "你更认同哪种生活策略？",
    options: [
      { t: "先把自己保护好，再谈温柔", f: "stnk" },
      { t: "先让大家开心，我再找角落喘口气", f: "meln" },
      { t: "先维持体面，再处理崩溃", f: "berr" },
      { t: "先把话说清楚，哪怕不太好听", f: "lemn" },
    ],
  },
  {
    q: "别人对你的常见误读是？",
    options: [
      { t: "以为你很凶，其实你只是边界厚", f: "stnk" },
      { t: "以为你很随和，其实你心里有分区", f: "meln" },
      { t: "以为你很娇气，其实你只是敏感", f: "berr" },
      { t: "以为你很刻薄，其实只是清醒", f: "lemn" },
    ],
  },
  {
    q: "你对“合群”的态度更像？",
    options: [
      { t: "合群可以，但别指望我变甜变圆", f: "stnk" },
      { t: "我可以很圆，但请别把我当无限量", f: "meln" },
      { t: "我想合群，但怕在人群里碎掉", f: "berr" },
      { t: "合群不如合拍；不合我就酸一下", f: "lemn" },
    ],
  },
  {
    q: "你更常见的自我消耗来自？",
    options: [
      { t: "解释自己“不是难搞”", f: "stnk" },
      { t: "照顾气氛，结果忘了照顾自己", f: "meln" },
      { t: "把小事放大成“我是不是不行”", f: "berr" },
      { t: "把清醒当成责任，扛太多真话", f: "lemn" },
    ],
  },
  {
    q: "你对计划的态度？",
    options: [
      { t: "计划要有，但我会留一层硬壳防意外", f: "stnk" },
      { t: "计划赶不上变化，我就现场切块分配", f: "meln" },
      { t: "计划让我安心，但一变我就慌", f: "berr" },
      { t: "计划太满会假；我更喜欢可执行的酸爽", f: "lemn" },
    ],
  },
  {
    q: "你更像哪种“成熟”？",
    options: [
      { t: "学会不把所有柔软都交出去", f: "stnk" },
      { t: "学会分瓣：给世界，也给自己留籽", f: "meln" },
      { t: "学会请求被小心对待", f: "berr" },
      { t: "学会把酸话讲得像建议", f: "lemn" },
    ],
  },
  {
    q: "你在人群里通常？",
    options: [
      { t: "站边缘，观察谁值得靠近", f: "stnk" },
      { t: "当气氛组，但内心在算能量账", f: "meln" },
      { t: "怕太亮也怕太暗，想被看见又怕被评判", f: "berr" },
      { t: "当吐槽嘴替，顺便承担一点讨厌值", f: "lemn" },
    ],
  },
  {
    q: "你对“拖延”的解释是？",
    options: [
      { t: "我在等一个配得上我打开的时机", f: "stnk" },
      { t: "我在等一个更甜的场景再开始", f: "meln" },
      { t: "我怕一开始就不完美", f: "berr" },
      { t: "我在等动力超过羞耻", f: "lemn" },
    ],
  },
  {
    q: "你更喜欢的夸奖是？",
    options: [
      { t: "“你很真实，也很可靠”", f: "bana" },
      { t: "“你很稳，也很普适”", f: "appl" },
      { t: "“跟你在一起很热闹”", f: "grap" },
      { t: "“你很有分寸感”", f: "coco" },
    ],
  },
  {
    q: "你觉得自己更常被谁代表？",
    options: [
      { t: "早餐桌：随和但会黑化那种", f: "bana" },
      { t: "果篮默认位：不出错也不出彩", f: "appl" },
      { t: "聚会拼盘：一串里总有一个你", f: "grap" },
      { t: "海边摊位：要费点劲才了解", f: "coco" },
    ],
  },
  {
    q: "你对“摆烂”的态度？",
    options: [
      { t: "可以摆，但别烂到我尊严", f: "bana" },
      { t: "摆得像苹果：仍然体面", f: "appl" },
      { t: "摆也要成群：一个人摆很虚", f: "grap" },
      { t: "外壳还在，里面先躺平", f: "coco" },
    ],
  },
  {
    q: "你更怕哪种失去？",
    options: [
      { t: "失去“刚刚好成熟”的时机", f: "bana" },
      { t: "失去被喜欢的中庸安全感", f: "appl" },
      { t: "失去群体里的位置感", f: "grap" },
      { t: "失去边界：被随意凿开", f: "coco" },
    ],
  },
  {
    q: "你处理尴尬的方式？",
    options: [
      { t: "笑一下，转移，像剥皮一样快", f: "bana" },
      { t: "装没事：苹果式体面", f: "appl" },
      { t: "拉人一起尴尬：一串人就不尬", f: "grap" },
      { t: "沉默硬扛：壳还在", f: "coco" },
    ],
  },
  {
    q: "如果用一句互联网话形容你？",
    options: [
      { t: "“先熟带动后熟”", f: "bana" },
      { t: "“默认选项也是选项”", f: "appl" },
      { t: "“一串里总有一个甜的”", f: "grap" },
      { t: "“外壳免费，内容付费”", f: "coco" },
    ],
  },
];

/** 状态标签：每种水果一条短句，风格贴近参考图「状态标签组」 */
/** 结果页展示用 emoji（榴莲无官方 emoji，用菠萝近似「带刺」） */
export const FRUIT_EMOJI = {
  stnk: "🍍",
  meln: "🍉",
  berr: "🍓",
  lemn: "🍋",
  bana: "🍌",
  appl: "🍎",
  grap: "🍇",
  coco: "🥥",
};

export const STATUS_LINES = {
  stnk: "装刺者（SPIK）：先把自己武装好，再谈温柔。",
  meln: "分瓣者（SLIC）：把甜分出去，把籽留给自己。",
  berr: "易碎甜（BRUI）：怕磕碰，也怕不被小心摆放。",
  lemn: "清醒酸（SOUR）：让问题显形的人，常常也更累。",
  bana: "顺拐熟（RIPE）：随和是表象，时机不对就黑化。",
  appl: "默认果（DFLT）：不出错也不出彩，但承担最多比较。",
  grap: "成串人（BUNC）：依附群体节奏，甜涩都批量发生。",
  coco: "硬壳派（HARD）：距离感强，打开以后才见真章。",
};

/** 十五维度（水果化）：示分由得分向量与各水果原型权重加权得到 */
export const DIMENSIONS = [
  {
    code: "F1",
    name: "外壳硬度",
    desc: "刺与壳的外显程度：防御、距离感与「别碰我」的气场。",
  },
  {
    code: "F2",
    name: "甜度合规",
    desc: "把甜分出去、照顾气氛与义务感的强度。",
  },
  {
    code: "F3",
    name: "易碎指数",
    desc: "对磕碰、评价与不确定性的敏感与体面焦虑。",
  },
  {
    code: "F4",
    name: "酸度清醒",
    desc: "把不适说清楚、用清醒换代价的倾向。",
  },
  {
    code: "F5",
    name: "分瓣内耗",
    desc: "内在分区、算能量账与「籽留给自己」的程度。",
  },
  {
    code: "F6",
    name: "群体黏度",
    desc: "依附簇、拼盘与群体节奏的舒适度。",
  },
  {
    code: "F7",
    name: "氧化焦虑",
    desc: "对时机、成熟度与「再拖就黑化」的紧张。",
  },
  {
    code: "F8",
    name: "默认压力",
    desc: "承担中庸、普适与「不出错」期待的压力。",
  },
  {
    code: "F9",
    name: "串感依附",
    desc: "在关系与场合里找位置感、怕落单的程度。",
  },
  {
    code: "F10",
    name: "体面执念",
    desc: "维持观感、体面与「看起来还行」的执念。",
  },
  {
    code: "F11",
    name: "水分内敛",
    desc: "情绪与需求藏在内里、外壳偏厚的程度。",
  },
  {
    code: "F12",
    name: "极化张力",
    desc: "爱与厌、靠近与拒绝之间的摇摆幅度。",
  },
  {
    code: "F13",
    name: "边界刺感",
    desc: "拒绝、反驳与「我不好惹」的锐利感。",
  },
  {
    code: "F14",
    name: "保质期幻想",
    desc: "对稳定、耐放与「还能撑多久」的想象与担忧。",
  },
  {
    code: "F15",
    name: "节奏随性",
    desc: "顺拐、即兴与「先笑一下再说」的松弛度。",
  },
];

/**
 * 每维 8 列：与 FRUITS 顺序一致（stnk…coco），数值 0–1 表示该水果在该维上的原型强度
 * @type {number[][]}
 */
export const DIMENSION_WEIGHTS = [
  [0.95, 0.22, 0.28, 0.38, 0.42, 0.48, 0.32, 0.9],
  [0.28, 0.9, 0.52, 0.32, 0.48, 0.52, 0.46, 0.3],
  [0.32, 0.45, 0.92, 0.4, 0.38, 0.55, 0.42, 0.35],
  [0.4, 0.35, 0.38, 0.93, 0.42, 0.45, 0.4, 0.42],
  [0.38, 0.88, 0.48, 0.42, 0.45, 0.5, 0.48, 0.4],
  [0.35, 0.55, 0.42, 0.38, 0.48, 0.45, 0.9, 0.4],
  [0.4, 0.42, 0.4, 0.4, 0.9, 0.48, 0.45, 0.42],
  [0.42, 0.48, 0.48, 0.42, 0.45, 0.92, 0.48, 0.45],
  [0.36, 0.52, 0.45, 0.4, 0.46, 0.48, 0.9, 0.42],
  [0.4, 0.48, 0.88, 0.42, 0.42, 0.85, 0.48, 0.4],
  [0.38, 0.4, 0.42, 0.55, 0.4, 0.42, 0.4, 0.92],
  [0.88, 0.4, 0.45, 0.85, 0.42, 0.45, 0.42, 0.4],
  [0.92, 0.35, 0.4, 0.55, 0.4, 0.45, 0.38, 0.48],
  [0.42, 0.48, 0.45, 0.42, 0.88, 0.85, 0.48, 0.45],
  [0.4, 0.55, 0.42, 0.42, 0.85, 0.48, 0.55, 0.4],
];

const FRUIT_ORDER = FRUITS.map((x) => x.id);

function rowMinMax(row) {
  let min = row[0];
  let max = row[0];
  for (const v of row) {
    if (v < min) min = v;
    if (v > max) max = v;
  }
  return { min, max: max === min ? max + 1e-6 : max };
}

function tertileIndex(x) {
  if (x < 1 / 3) return 0;
  if (x < 2 / 3) return 1;
  return 2;
}

/**
 * @param {Record<string, number>} scores
 * @param {string} mainId
 */
export function countExactHits(scores, mainId) {
  const mi = FRUIT_ORDER.indexOf(mainId);
  if (mi < 0) return 0;
  let hits = 0;
  for (let k = 0; k < DIMENSIONS.length; k++) {
    const row = DIMENSION_WEIGHTS[k];
    let userRaw = 0;
    for (let j = 0; j < FRUIT_ORDER.length; j++) {
      userRaw += scores[FRUIT_ORDER[j]] * row[j];
    }
    userRaw /= 16;
    const { min, max } = rowMinMax(row);
    const span = max - min;
    const userN = Math.max(0, Math.min(1, (userRaw - min) / span));
    const archeN = Math.max(0, Math.min(1, (row[mi] - min) / span));
    if (tertileIndex(userN) === tertileIndex(archeN)) hits += 1;
  }
  return hits;
}

/**
 * @param {Record<string, number>} scores
 */
export function computeDimensionRows(scores) {
  return DIMENSIONS.map((d, k) => {
    const row = DIMENSION_WEIGHTS[k];
    let userRaw = 0;
    for (let j = 0; j < FRUIT_ORDER.length; j++) {
      userRaw += scores[FRUIT_ORDER[j]] * row[j];
    }
    userRaw /= 16;
    const { min, max } = rowMinMax(row);
    const span = max - min;
    const userN = Math.max(0, Math.min(1, (userRaw - min) / span));
    const band = userN < 1 / 3 ? "L" : userN < 2 / 3 ? "M" : "H";
    const points = band === "L" ? 2 : band === "M" ? 4 : 6;
    return {
      code: d.code,
      name: d.name,
      desc: d.desc,
      band,
      points,
    };
  });
}

function emptyScores() {
  /** @type {Record<string, number>} */
  const o = {};
  for (const id of FRUIT_ORDER) o[id] = 0;
  return o;
}

/**
 * @param {number[]} answers 每题选项下标 0–3，长度须等于 QUESTIONS.length
 */
export function computeScores(answers) {
  if (!Array.isArray(answers) || answers.length !== QUESTIONS.length) {
    throw new Error(`answers 长度须为 ${QUESTIONS.length}`);
  }
  const scores = emptyScores();
  for (let i = 0; i < QUESTIONS.length; i++) {
    const idx = answers[i];
    if (typeof idx !== "number" || idx < 0 || idx > 3 || !Number.isInteger(idx)) {
      throw new Error(`第 ${i + 1} 题选项下标非法: ${idx}`);
    }
    const fruitId = QUESTIONS[i].options[idx].f;
    if (!(fruitId in scores)) throw new Error(`未知水果 id: ${fruitId}`);
    scores[fruitId] += 1;
  }
  return scores;
}

/**
 * 匹配度：主分占比 + 与次高分差距，落在 41–99，娱乐向偏高
 */
export function matchPercentFromScores(scores) {
  const entries = FRUIT_ORDER.map((id) => [id, scores[id]]).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return String(a[0]).localeCompare(String(b[0]));
  });
  const top = entries[0][1];
  const second = entries[1][1];
  const total = FRUIT_ORDER.reduce((s, id) => s + scores[id], 0);
  if (total <= 0) return 50;
  const share = top / total;
  const gap = top - second;
  const raw = 40 + 35 * share + 25 * (gap / total);
  return Math.min(99, Math.max(41, Math.round(raw)));
}

export function fruitById(id) {
  return FRUITS.find((f) => f.id === id) || null;
}

/**
 * @param {number[]} answers
 */
export function computeResult(answers) {
  const scores = computeScores(answers);
  const sorted = FRUIT_ORDER.map((id) => ({ id, score: scores[id] })).sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return String(a.id).localeCompare(String(b.id));
  });
  const mainId = sorted[0].id;
  const main = fruitById(mainId);
  if (!main) throw new Error("主类型缺失");
  const match = matchPercentFromScores(scores);
  const top3 = sorted.slice(0, 3).map((x) => ({
    ...x,
    fruit: fruitById(x.id),
    tagLine: STATUS_LINES[x.id],
  }));
  const dimensionRows = computeDimensionRows(scores);
  const exactHits = countExactHits(scores, mainId);
  return { mainId, main, scores, match, top3, sorted, dimensionRows, exactHits };
}
