const HapchaTag = (await import('../src/hapcha-tag.js')).HapchaTag;

const fruit = {
  version: 1,
  product_name: 'Pineapple 🍍',
  generic_name: 'Pineapple 🍍',
  kcal_100g: 50,
  carbohydrates_100g: 13,
  proteins_100g: 0.5,
  fat_100g: 0.1,
  product_amount: 905,
  serving_amount: 166,
  unit: 'g'
};

const hapchaTag = new HapchaTag();

let encoded = hapchaTag.encode(fruit);
console.log("Single Hapcha Tag - Encoded Without Domain");
console.log(encoded);
console.log();

let decoded = hapchaTag.decode(encoded);
console.log("Single Hapcha Tag - Decoded Without Domain");
console.log(decoded);
console.log();

encoded = hapchaTag.encode(fruit, {'domain': 'https://hapcha.com'});
console.log("Single Hapcha Tag - Encoded With Domain");
console.log(encoded);
console.log();

console.log("Single Hapcha Tag - Decoded With Domain");
decoded = hapchaTag.decode(encoded);
console.log(decoded);
console.log();

//OUTPUTS the FOLOWING
/*
  Single Hapcha Tag - Encoded Without Domain
  v1N"Pineapple 🍍"n"Pineapple 🍍"C13P0.5F0.1S905s166U"g"

  Single Hapcha Tag - Decoded Without Domain
  {
    version: 1,
    product_name: 'Pineapple 🍍',
    generic_name: 'Pineapple 🍍',
    carbohydrates_100g: 13,
    proteins_100g: 0.5,
    fat_100g: 0.1,
    product_amount: 905,
    serving_amount: 166,
    unit: 'g'
  }

  Single Hapcha Tag - Encoded With Domain
  https://hapcha.com?ht=v1N%22Pineapple%20%F0%9F%8D%8D%22n%22Pineapple%20%F0%9F%8D%8D%22C13P0.5F0.1S905s166U%22g%22

  Single Hapcha Tag - Decoded With Domain
  {
    version: 1,
    product_name: 'Pineapple 🍍',
    generic_name: 'Pineapple 🍍',
    carbohydrates_100g: 13,
    proteins_100g: 0.5,
    fat_100g: 0.1,
    product_amount: 905,
    serving_amount: 166,
    unit: 'g'
  }
*/
