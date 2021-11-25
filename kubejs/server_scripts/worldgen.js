onEvent('worldgen.remove', event => {
    event.removeOres(ores => {
      ores.blocks = [ 
        'tconstruct:copper_ore', 
		'create:copper_ore',
        'immersiveengineering:ore_copper',
        ]
    })
})