import assert from "node:assert/strict";
import {
  QUESTIONS,
  FRUITS,
  DIMENSIONS,
  computeScores,
  computeResult,
  matchPercentFromScores,
  computeDimensionRows,
  countExactHits,
  HIDDEN_FRUIT,
} from "../scoring.mjs";

function assertThrows(fn, msg) {
  let threw = false;
  try {
    fn();
  } catch (e) {
    threw = true;
  }
  assert.equal(threw, true, msg);
}

// 题库结构
assert.equal(QUESTIONS.length, 16, "应为 16 题");
for (const q of QUESTIONS) {
  assert.equal(q.options.length, 4, "每题 4 选项");
}

assert.equal(FRUITS.length, 8, "8 种水果");
const ids = new Set(FRUITS.map((f) => f.id));
assert.equal(ids.size, 8, "id 唯一");

// 每题选项引用的水果 id 均合法
for (const q of QUESTIONS) {
  for (const o of q.options) {
    assert.ok(ids.has(o.f), `未知水果: ${o.f}`);
  }
}

// 非法答案
assertThrows(() => computeScores([]), "空数组应抛错");
assertThrows(() => computeScores([0]), "长度不对应抛错");
const badOpt = new Array(16).fill(0);
badOpt[0] = 4;
assertThrows(() => computeScores(badOpt), "选项>3 应抛错");

// 全选 0：前 10 题为榴莲，后 6 题为香蕉（题 11–16 的选项 0）
const allZero = new Array(16).fill(0);
const s0 = computeScores(allZero);
assert.equal(s0.stnk, 10);
assert.equal(s0.bana, 6);

// 每题选项 3：前 10 题为柠檬，后 6 题为椰子（题库设计）
const lemnCoco = new Array(16).fill(3);
const sl = computeScores(lemnCoco);
assert.equal(sl.lemn, 10);
assert.equal(sl.coco, 6);

const rLemn = computeResult(lemnCoco);
assert.equal(rLemn.mainId, "lemn");
assert.equal(rLemn.top3.length, 3);
assert.ok(rLemn.match >= 41 && rLemn.match <= 99);
assert.equal(DIMENSIONS.length, 15);
assert.equal(rLemn.dimensionRows.length, 15);
assert.ok(rLemn.exactHits >= 0 && rLemn.exactHits <= 15);

const rows = computeDimensionRows(s0);
assert.equal(rows.length, 15);
for (const r of rows) {
  assert.ok(["L", "M", "H"].includes(r.band));
  assert.ok([2, 4, 6].includes(r.points));
}
const hits = countExactHits(s0, "stnk");
assert.ok(hits >= 0 && hits <= 15);

// 隐藏款：两种基础水果并列最高分（例：榴莲 5 · 西瓜 5 · 香蕉 3 · 苹果 3）
const tieAnswers = [
  0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1,
];
assert.equal(tieAnswers.length, QUESTIONS.length);
const rTie = computeResult(tieAnswers);
assert.equal(rTie.isHidden, true);
assert.equal(rTie.mainId, HIDDEN_FRUIT.id);
assert.ok(rTie.tiedWith && rTie.tiedWith.length === 2);
assert.equal(rTie.scores.stnk, 5);
assert.equal(rTie.scores.meln, 5);

// 匹配度单调性：越极端应倾向更高匹配
const mpEven = matchPercentFromScores({
  stnk: 2,
  meln: 2,
  berr: 2,
  lemn: 2,
  bana: 2,
  appl: 2,
  grap: 2,
  coco: 2,
});
const mpFocus = matchPercentFromScores({
  stnk: 14,
  meln: 1,
  berr: 1,
  lemn: 0,
  bana: 0,
  appl: 0,
  grap: 0,
  coco: 0,
});
assert.ok(mpFocus > mpEven, "集中得分应更高匹配度");

console.log("scoring.test.mjs: 全部通过");
