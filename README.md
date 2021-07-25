# Welcome to Hapcha Tags (hapcha-tag)
## What are Hapcha Tags?
Hapcha Tags are a way of storing nutritional information for food products in a shortened string so that you can transfer the information quickly and easily, for example in QR codes.
## How do they work?
Hapcha Tags work by converting a Javascript Object containing a product's nutrtional information into a string. You can define one of these objects using the [standard fields in the Open Food Facts Database](https://static.openfoodfacts.org/data/data-fields.txt). At the moment, not all of these fields are have been enabled in Hapcha tags, but all the ones in the "# Nutrition facts" section have. A single tag can contain multiple foods meaning that you can define food/s as an object (single) or as an array (multiple) like this:

```
//Define a Single Food

const fruit = {
    version: 1,
    product_name: 'Pineapple 🍍',
    generic_name: 'Pineapple 🍍',
    'energy-kcal_100g': 50,
    carbohydrates_100g: 13,
    proteins_100g: 0.5,
    fat_100g: 0.1,
    product_amount: 905,
    serving_amount: 166,
    unit: 'g'
  };

const fruit_salad = [
    {
      version: 1,
      product_name: 'Pineapple 🍍',
      generic_name: 'Pineapple 🍍',
      'energy-kcal_100g': 50,
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
      'energy-kcal_100g': 60,
      carbohydrates_100g: 15,
      proteins_100g: 0.8,
      fat_100g: 0.4,
      product_amount: 336,
      serving_amount: 165,
      unit: 'g'
    }
  ];
```