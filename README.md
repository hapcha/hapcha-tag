# Welcome to Hapcha Tags (hapcha-tag)
## What are Hapcha Tags?
Hapcha Tags are a way of storing nutritional information for food products in a shortened string so that you can transfer the information quickly and easily, for example in QR codes. We are currently working to implement Hapcha Tags in the [Hapcha app](https://hapcha.com) to help users add foods to their meals quickly and so they can share meals with each other and we hope that the format can be developed collaboratively, allowing users to share foods across apps and easily add nutrition information from places such as menus and food packaging.
## How do they work?
Hapcha Tags work by converting a Javascript Object containing a product's nutrtional information into a string. You can define one of these objects using the [standard fields in the Open Food Facts Database](https://static.openfoodfacts.org/data/data-fields.txt). At the moment, not all of these fields are have been enabled in Hapcha tags, but all the ones in the "# Nutrition facts" section have. You can use these to definie an object containing a single food like this:
```
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
```
Alternatively, Hapcha Tags also support storing multiple foods, which can be done by creating an array of food objects.
```
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
```

## How do I create a Hapcha Tag?
Creating a Hapcha Tag from an object or array such as the ones above are easy with the encode() method.
```
const hapchaTag = new HapchaTag();
const fruit_tag = hapchaTag.encode(fruit); //returns 'v1N"Mango 🥭"n"Mango 🥭"K60C15P0.8F0.4S336s165U"g"'
const fruit_salad_tag = hapchaTag.encode(fruit_salad); //returns [v1N"Pineapple 🍍"n"Pineapple 🍍"K50C13P0.5F0.1S905s166U"g"][v1N"Mango 🥭"n"Mango 🥭"K60C15P0.8F0.4S336s165U"g"]
```

## How do I turn a Hapcha Tag back into an object I can use?
Similarly, a string representing a Hapcha Tag can be turned back into an object or array using the decode() method. These return the object and array we defined in the first cell.
```
const hapchaTag = new HapchaTag();
const fruit = hapchaTag.decode(fruit_tag);
const fruit_salad = hapchaTag.decode(fruit_salad_tag);
```