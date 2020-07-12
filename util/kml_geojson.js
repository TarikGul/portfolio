const tj = require('togeojson'),
      fs = require('fs'),
      DOMParser = require('xmldom').DomParser;

const kmlToGeoJson = (file) => {
    const kml = new DOMParser().parseFromString(fs.readFileSync(file, 'utf8'));

    return tj.kml(kml);
};

module.exports = kmlToGeoJson;