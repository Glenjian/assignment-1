var mongoose = require('mongoose');

var GraphDataSchema = new mongoose.Schema({
  Year: String,
  Category: String,
  Type: String
  Five or more servings of fruits and vegetables (%): String
}, 
{
  collection: 'fruit-data-collection'
});

mongoose.model('FruitData', FruitDataSchema);
