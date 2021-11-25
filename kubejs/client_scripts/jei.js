//Cacher des items dans JEI
onEvent('jei.hide.items', event => {

	event.hide([
		'immersiveengineering:storage_copper', 
		'tconstruct:copper_block', 
		'immersiveengineering:ingot_copper', 
		'thermal:copper_ingot', 
		'tconstruct:copper_ingot', 
		'immersiveengineering:ore_copper', 
		'thermal:copper_nugget', 
		'immersiveengineering:dust_copper', 
		'immersiveengineering:plate_copper', 
		'tconstruct:copper_nugget', 
		'tconstruct:copper_ore', 
		'create:copper_ore', 
		'immersiveengineering:nugget_copper', 
		'immersiveengineering:slab_storage_copper', 
		'create:copper_block', 
		'create:copper_shingles', 
		'create:copper_tiles',
		/appliedenergistics2:facade/
	])

})

//Ajouter des items dans JEI
onEvent('jei.add.items', event => {
	
	event.add([
		'thermal:copper_ore', 
		'create:copper_nugget', 
		'create:copper_ingot', 
		'thermal:copper_block',
		Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}')
	])

  })

//Ajouter des informations sur un item dans JEI
  onEvent('jei.information', event => {

	event.add('minecraft:bedrock', [
		'Exemple de texte sur la première ligne pour ajouter des informations avec KubeJS',
		'Yolo',
		'Ligne 3'
	])

  })