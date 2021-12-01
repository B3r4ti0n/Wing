onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = [
          'immersiveengineering:ore_copper', 
          'create:copper_ore', 
          'tconstruct:copper_ore', 
          'immersiveengineering:ore_lead', 
          'immersiveengineering:ore_silver', 
          'immersiveengineering:ore_nickel',
        ]
      ores.biomes.values = [ 
            '#taiga',
            '#extreme_hills',
            '#jungle',
            '#mesa',
            '#plains',
            '#savanna',
            '#icy',
            '#the_end',
            '#beach',
            '#forest',
            '#ocean',
            '#desert',
            '#river',
            '#swamp',
            '#mushroom',
            '#nether',
        ]
    })
})