var turf = require('turf');

module.exports = function(data, tile, writeData, done) {
  var result = {
    count: 0,
    distance: 0
  },
  osmLayer = (data.osm.osm);

  osmLayer.features.forEach(function(element, index, array) {
    var highway = element.properties['highway'];
    if (highway && highway == 'cycleway') {
      result.count++;
      result.distance += turf.lineDistance(element, 'kilometers');
    }
  });

  done(null, result);
};

