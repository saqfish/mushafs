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

const duri = mushaf("duri");
const susi = mushaf("susi");

module.exports.duri = duri;
module.exports.susi = susi;
