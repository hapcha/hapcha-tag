const HapchaTag = (await import('../src/hapcha-tag.js')).HapchaTag;

const fruit_salad = [
  {
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
  },
  {
    version: 1,
    product_name: 'Mango 🥭',
    generic_name: 'Mango 🥭',
    kcal_100g: 60,
    carbohydrates_100g: 15,
    proteins_100g: 0.8,
    fat_100g: 0.4,
    product_amount: 336,
    serving_amount: 165,
    unit: 'g'
  }
];

const hapchaTag = new HapchaTag();

let encoded = hapchaTag.encode(fruit_salad);
console.log("Multiple Hapcha Tag - Encoded Without Domain");
console.log(encoded);
console.log();

let decoded = hapchaTag.decode(encoded);
console.log("Multiple Hapcha Tag - Decoded Without Domain");
console.log(decoded);
console.log();

encoded = hapchaTag.encode(fruit_salad, {'domain': 'https://hapcha.com'});
console.log("Multiple Hapcha Tag - Encoded With Domain");
console.log(encoded);
console.log();

console.log("Multiple Hapcha Tag - Decoded With Domain");
decoded = hapchaTag.decode(encoded);
console.log(decoded);
console.log();

//OUTPUTS the FOLOWING
/*
  Single Hapcha Tag - Encoded Without Domain
  [v1N"Pineapple 🍍"n"Pineapple 🍍"C13P0.5F0.1S905s166U"g"][v1N"Mango 🥭"n"Mango 🥭"C15P0.8F0.4S336s165U"g"]

  Single Hapcha Tag - Decoded Without Domain
  [
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
    },
    {
      version: 1,
      product_name: 'Mango 🥭',
      generic_name: 'Mango 🥭',
      carbohydrates_100g: 15,
      proteins_100g: 0.8,
      fat_100g: 0.4,
      product_amount: 336,
      serving_amount: 165,
      unit: 'g'
    }
  ]

  Single Hapcha Tag - Encoded With Domain
  https://hapcha.com?ht=%5Bv1N%22Pineapple%20%F0%9F%8D%8D%22n%22Pineapple%20%F0%9F%8D%8D%22C13P0.5F0.1S905s166U%22g%22%5D%5Bv1N%22Mango%20%F0%9F%A5%AD%22n%22Mango%20%F0%9F%A5%AD%22C15P0.8F0.4S336s165U%22g%22%5D

  Single Hapcha Tag - Decoded With Domain
  [
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
    },
    {
      version: 1,
      product_name: 'Mango 🥭',
      generic_name: 'Mango 🥭',
      carbohydrates_100g: 15,
      proteins_100g: 0.8,
      fat_100g: 0.4,
      product_amount: 336,
      serving_amount: 165,
      unit: 'g'
    }
  ]
*/