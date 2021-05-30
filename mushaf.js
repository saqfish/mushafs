const mushaf = (rawi) => {
  let chapters, verses, raw, parts, sections;

  try {
    chapters = require(`./data/${rawi}/chapters.json`);
    verses = require(`./data/${rawi}/verses.json`);
    raw = require(`./data/${rawi}/raw.json`);
    parts = require(`./data/${rawi}/sections.json`);
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
const hafs = mushaf("asim/hafs");
const shuba = mushaf("asim/shuba");

module.exports.rawi1 = hafs;
module.exports.rawi2 = shuba;
