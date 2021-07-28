export class HapchaTag {
  constructor(){
    this.decode_map = [
      {flag: 'v', type: 'number', field: 'version'},
      {flag: 'N', type: 'string', field: 'product_name'},
      {flag: 'n', type: 'string', field: 'generic_name'},
      {flag: 'S', type: 'number', field: 'product_amount'},
      {flag: 's', type: 'number', field: 'serving_amount'},
      {flag: 'U', type: 'string', field: 'unit'},
      {flag: 'K', type: 'number', field: 'kcal_100g'},
      {flag: 'P', type: 'number', field: 'proteins_100g'},
      {flag: 'Cn', type: 'number', field: 'casein_100g'},
      {flag: 'Sp', type: 'number', field: 'serum-proteins_100g'},
      {flag: 'Nu', type: 'number', field: 'nucleotides_100g'},
      {flag: 'C', type: 'number', field: 'carbohydrates_100g'},
      {flag: 'Cs', type: 'number', field: 'sugars_100g'},
      {flag: 'Su', type: 'number', field: 'sucrose_100g'},
      {flag: 'Gl', type: 'number', field: 'glucose_100g'},
      {flag: 'Fr', type: 'number', field: 'fructose_100g'},
      {flag: 'La', type: 'number', field: 'lactose_100g'},
      {flag: 'Ma', type: 'number', field: 'maltose_100g'},
      {flag: 'Mx', type: 'number', field: 'maltodextrins_100g'},
      {flag: 'St', type: 'number', field: 'starch_100g'},
      {flag: 'Pl', type: 'number', field: 'polyols_100g'},
      {flag: 'F', type: 'number', field: 'fat_100g'},
      {flag: 'Fs', type: 'number', field: 'saturated-fat_100g'},
      {flag: 'Bt', type: 'number', field: 'butyric-acid_100g'},
      {flag: 'Cp', type: 'number', field: 'caproic-acid_100g'},
      {flag: 'Cy', type: 'number', field: 'caprylic-acid_100g'},
      {flag: 'Cc', type: 'number', field: 'capric-acid_100g'},
      {flag: 'Lu', type: 'number', field: 'lauric-acid_100g'},
      {flag: 'My', type: 'number', field: 'myristic-acid_100g'},
      {flag: 'Pm', type: 'number', field: 'palmitic-acid_100g'},
      {flag: 'Sr', type: 'number', field: 'stearic-acid_100g'},
      {flag: 'Ar', type: 'number', field: 'arachidic-acid_100g'},
      {flag: 'Bh', type: 'number', field: 'behenic-acid_100g'},
      {flag: 'Lg', type: 'number', field: 'lignoceric-acid_100g'},
      {flag: 'Ce', type: 'number', field: 'cerotic-acid_100g'},
      {flag: 'Mt', type: 'number', field: 'montanic-acid_100g'},
      {flag: 'Me', type: 'number', field: 'melissic-acid_100g'},
      {flag: 'Fm', type: 'number', field: 'monounsaturated-fat_100g'},
      {flag: 'Fp', type: 'number', field: 'polyunsaturated-fat_100g'},
      {flag: 'Ot', type: 'number', field: 'omega-3-fat_100g'},
      {flag: 'Al', type: 'number', field: 'alpha-linolenic-acid_100g'},
      {flag: 'Ei', type: 'number', field: 'eicosapentaenoic-acid_100g'},
      {flag: 'Dx', type: 'number', field: 'docosahexaenoic-acid_100g'},
      {flag: 'Os', type: 'number', field: 'omega-6-fat_100g'},
      {flag: 'Ll', type: 'number', field: 'linoleic-acid_100g'},
      {flag: 'Ac', type: 'number', field: 'arachidonic-acid_100g'},
      {flag: 'Ga', type: 'number', field: 'gamma-linolenic-acid_100g'},
      {flag: 'Dg', type: 'number', field: 'dihomo-gamma-linolenic-acid_100g'},
      {flag: 'On', type: 'number', field: 'omega-9-fat_100g'},
      {flag: 'Ol', type: 'number', field: 'oleic-acid_100g'},
      {flag: 'El', type: 'number', field: 'elaidic-acid_100g'},
      {flag: 'Gd', type: 'number', field: 'gondoic-acid_100g'},
      {flag: 'Md', type: 'number', field: 'mead-acid_100g'},
      {flag: 'Er', type: 'number', field: 'erucic-acid_100g'},
      {flag: 'Ne', type: 'number', field: 'nervonic-acid_100g'},
      {flag: 'Ft', type: 'number', field: 'trans-fat_100g'},
      {flag: 'Ch', type: 'number', field: 'cholesterol_100g'},
      {flag: 'Fi', type: 'number', field: 'fiber_100g'},
      {flag: 'Na', type: 'number', field: 'sodium_100g'},
      {flag: 'A', type: 'number', field: 'alcohol_100g'},
      {flag: 'Av', type: 'number', field: 'vitamin-a_100g'},
      {flag: 'Dv', type: 'number', field: 'vitamin-d_100g'},
      {flag: 'Ev', type: 'number', field: 'vitamin-e_100g'},
      {flag: 'Kv', type: 'number', field: 'vitamin-k_100g'},
      {flag: 'Cv', type: 'number', field: 'vitamin-c_100g'},
      {flag: 'Bo', type: 'number', field: 'vitamin-b1_100g'},
      {flag: 'Br', type: 'number', field: 'vitamin-b2_100g'},
      {flag: 'Pp', type: 'number', field: 'vitamin-pp_100g'},
      {flag: 'Bs ', type: 'number', field: 'vitamin-b6_100g'},
      {flag: 'Bn', type: 'number', field: 'vitamin-b9_100g'},
      {flag: 'Bw', type: 'number', field: 'vitamin-b12_100g'},
      {flag: 'Bi', type: 'number', field: 'biotin_100g'},
      {flag: 'Pa', type: 'number', field: 'pantothenic-acid_100g'},
      {flag: 'Si ', type: 'number', field: 'silica_100g'},
      {flag: 'Bc', type: 'number', field: 'bicarbonate_100g'},
      {flag: 'Kp ', type: 'number', field: 'potassium_100g'},
      {flag: 'Cl', type: 'number', field: 'chloride_100g'},
      {flag: 'Ca', type: 'number', field: 'calcium_100g'},
      {flag: 'Ps', type: 'number', field: 'phosphorus_100g'},
      {flag: 'Fe', type: 'number', field: 'iron_100g'},
      {flag: 'Mg ', type: 'number', field: 'magnesium_100g'},
      {flag: 'Zn', type: 'number', field: 'zinc_100g'},
      {flag: 'Cu', type: 'number', field: 'copper_100g'},
      {flag: 'Mn', type: 'number', field: 'manganese_100g'},
      {flag: 'Fl', type: 'number', field: 'fluoride_100g'},
      {flag: 'Se', type: 'number', field: 'selenium_100g'},
      {flag: 'Cr', type: 'number', field: 'chromium_100g'},
      {flag: 'Mo', type: 'number', field: 'molybdenum_100g'},
      {flag: 'Io', type: 'number', field: 'iodine_100g'},
      {flag: 'Cf', type: 'number', field: 'caffeine_100g'},
      {flag: 'Ta', type: 'number', field: 'taurine_100g'},
      {flag: 'Ph', type: 'number', field: 'ph_100g'},
      {flag: 'Fv ', type: 'number', field: 'fruits-vegetables-nuts_100g'},
      {flag: 'Cb ', type: 'number', field: 'carbon-footprint_100g'},
      {flag: 'Nf ', type: 'number', field: 'nutrition-score-fr_100g'},
      {flag: 'Nk ', type: 'number', field: 'nutrition-score-uk_100g'},
    ];
  }

  decode(test_str){
    const multiple_ingredients = test_str[0] == '[';
    const ingredients = multiple_ingredients ? test_str.split("[").join("").split("]").slice(0,-1) : [test_str];
    const flags = this.decode_map.map(f => f.flag);

    const output = ingredients.map(ingredient => {
      let pos = 0;
      const ingredient_formatted = {};
      while (pos < ingredient.length) {
        const next_char = ingredient[pos +1];
        
        const char_length = !isNaN(next_char) || next_char == '"' ? 1: 2;
        const flag = ingredient.substring(pos, pos + char_length);

        if (flag[0] == '"' || !isNaN(flag[0])){
          pos +=1;
          continue
        }

        if (flags.indexOf(flag) >= 0){
          const flag_map = this.decode_map[flags.indexOf(flag)];
          if (flag_map.type == 'number'){
            const start_idx = pos + flag.length;
            let next_char_idx = ingredient.substring(start_idx).search(/[A-Za-z]/) >= 0 ? ingredient.substring(start_idx).search(/[A-Za-z]/) + start_idx : ingredient.length;
            const value = ingredient.substring(start_idx, next_char_idx);
            ingredient_formatted[flag_map.field] = parseFloat(value);
            pos = next_char_idx;
          } else if (flag_map.type == 'string'){
            const start_idx = pos + flag.length + 1;
            const next_char_idx = ingredient.substring(start_idx).indexOf('"') + start_idx;
            const length = next_char_idx - start_idx;
            ingredient_formatted[flag_map.field] = ingredient.substr(start_idx, length);
            pos = next_char_idx + 1;
          } else {
            pos +=1
          }
        } else {
          pos += (flag.length);
        }
      }
      return ingredient_formatted
    });
    
    return output
  }

  encode(test_structure){
    const multiple_ingredients = (test_structure instanceof Array);
    const ingredients = multiple_ingredients ? test_structure : [test_structure];
    const fields = this.decode_map.map(f => f.field);

    let output = ingredients.map(ingredient => {
      let ingredient_string =  "v1";
      Object.keys(ingredient).map(key => {
        if (fields.indexOf(key) >= 0){
          if (key != 'version') {
            const flag = this.decode_map[fields.indexOf(key)].flag;
            const val = this.decode_map[fields.indexOf(key)].type == 'string' ? '"' + ingredient[key] + '"': ingredient[key];
            ingredient_string += flag + val;
          }
        }
      });
      return ingredient_string
    });

    if (output.length > 1){
      output = output.map(x => '[' + x + ']');
      output = output.join()
    }

    return output
  }
}