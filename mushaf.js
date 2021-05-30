// This is a template for each mushaf

const mushaf = (rawi) => {
  let chapters, verses, raw, parts, sections;

  try {
    chapters = require(`./${rawi}/chapters.json`);
    verses = require(`./${rawi}/verses.json`);
    raw = require(`./${rawi}/raw.json`);
    parts = require(`./${rawi}/sections.json`);
    sections = [];
    if (parts) {
      for (let p of parts) {
        sections = sections.concat(p);
      }
    }
  } catch (e) {
    chapters = verses = raw = sections = [];
  }

  return {
    // Data
    chapters,
    verses,
    raw,
    parts,
    sections,
  };
};

// epxort both rawis, this is only a template
const rawi1 = mushaf(null);
const rawi2 = mushaf(null);

module.exports.rawi1 = rawi1;
module.exports.rawi2 = rawi2;
