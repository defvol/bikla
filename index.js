var tileReduce = require('tile-reduce'),
    path = require('path'),
    df = [
      -99.30953979492188,
      +19.2528118348149,
      -98.95248413085938,
      +19.57402397030765
    ],
    count = 0;

tileReduce({
  bbox: df,
  zoom: 12,
  map: path.join(__dirname, '/map.js'),
  sources: [{
    name: 'osm',
    mbtiles: path.join(__dirname, '../osm-qa/data/mexico.mbtiles'),
    layers: ['osm']
  }]
})
.on('reduce', function(result) {
  count += result;
})
.on('end', function(res) {
  console.log(count);
});
