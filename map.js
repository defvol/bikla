module.exports = function(data, tile, writeData, done) {
  var count = 0;
  var osmLayer = (data.osm.osm);

  osmLayer.features.forEach(function(element, index, array) {
    var highway = element.properties['highway'];
    if (highway && highway == 'cycleway') count ++;
  });

  done(null, count);
};

