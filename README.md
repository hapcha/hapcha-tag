# Welcome to Hapcha Tags (hapcha-tag)
## What are Hapcha Tags?
Hapcha Tags are a way of storing nutritional information for food products in a shortened string so that you can transfer the information quickly and easily, for example in QR codes. We are currently working to implement Hapcha Tags in the [Hapcha app](https://hapcha.com) to help users add foods to their meals quickly and so they can share meals with each other and we hope that the format can be developed collaboratively, allowing users to share foods across apps and easily add nutrition information from places such as menus and food packaging. Also, they look really cool.
```
v1N"Pineapple 🍍"n"Pineapple 🍍"K50C13P0.5F0.1S905s166U"g"
```
## How do I install Hapcha Tags?
Hapcha Tags can be installed either from the /src directory on Git Hub or by installing the NPM package with the following command.
```
npm i hapcha-tag
```
## How do they work?
Hapcha Tags work by converting a Javascript Object containing a product's nutrtional information into a string. You can define one of these objects using the [standard fields in the Open Food Facts Database](https://static.openfoodfacts.org/data/data-fields.txt). At the moment, not all of these fields are  enabled in Hapcha Tags, but all the ones in the "# Nutrition facts" section have, as well as some others. You can use these to define an object containing a single food like this:
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
Hapcha Tags also support storing multiple foods, which can be done by creating an array of food objects.
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
Finally, you can also store recipes in Hapcha Tags by nesting foods into collections for supported fields (like ingredients). This allows you to assign some information to the parent food and other information to the nested foods. Ingredients in a fruit salad are a great example. As a general rule of thumb, it is best practice to only provide information on amounts, energy and nutrients at one level (usually the nested foods in ingredients) so that the overall nutrients can be calculated from the food's constituent parts.
```
const fruit_salad = {
    version: 1,
    product_name: 'Fruit Salad',
    ingredients: [
      {
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
  }
```
## How do I create a Hapcha Tag?
Creating a Hapcha Tag from an object or array such as the ones above are easy with the encode() method.
```
const hapchaTag = new HapchaTag();
const fruit_tag = hapchaTag.encode(fruit);
//v1N"Mango 🥭"n"Mango 🥭"K60C15P0.8F0.4S336s165U"g"

const fruit_salad_tag = hapchaTag.encode(fruit_salad);
//[v1N"Pineapple 🍍"n"Pineapple 🍍"K50C13P0.5F0.1S905s166U"g"][v1N"Mango 🥭"n"Mango 🥭"K60C15P0.8F0.4S336s165U"g"]
```

## How do I turn a Hapcha Tag back into an object I can use?
Similarly, a string representing a Hapcha Tag can be turned back into an object or array using the decode() method. These return the object and array we defined in the first cell.
```
const hapchaTag = new HapchaTag();
const fruit = hapchaTag.decode(fruit_tag);
const fruit_salad = hapchaTag.decode(fruit_salad_tag);
```

## What happens if a user scans the Tag with a tool which does not support Hapcha Tags?
Great question! If you plan to share your Hapcha Tags in either QR Codes or an NFC Tag, the having a fallback for when a user scans the Hapcha tag outside of an app experience is really important. Fortunately, by adding the "domain" flag as an optional parameter to the encode method, the user will be directed to that URL should they scan the Hapcha Tag (as a QR code for example) in their phone's native camera or in an application uncapable of supporting it. On this webpage, should you choose, you can then collect this data from the "ht" parameter and decode it as usual.

```
const hapchaTag = new HapchaTag();
const fruit_tag = hapchaTag.encode(fruit, {"domain": "https://hapcha.com"});
//https://hapcha.com?ht=v1N"Pineapple 🍍"n"Pineapple 🍍"K50C13P0.5F0.1S905s166U"g"
```

## How can I see what Hapcha tags can do?
In this version, we've added a "tests" folder which implements the above examples of storing single, multiple and recipe foods in a single string. Youc an run those tests in node.js or copy the code and use them as examples.

## Where else are Hapcha Tags used?
Whilst developed initally for the [Hapcha app](https://hapcha.com), Hapcha Tags are free, open-source and available for anyone to implement and use. We even have a [web app](https://hapcha.com/tag-designer/) where you generate your own QR Codes for food products using a UI. We're reallye scited to announce that Hapcha Tags bare bnow also used in [Bygram](https://bygram.co.uk), a refill supermarket in London, UK to help consumers save information on what they fill their tubs with!

If you're working on a project with Hapcha Tags, let us know and we can feature you here. Whilst GitHub manages the technical implementation of the HapchaTag, it is our hope that the standards behind the Hapcha Tag will be steered by a committee of organizations that use Hapcha Tags. if you or your organization would be interested in steering the future of the format with us, let us know!