//Cacher des items dans JEI
onEvent('jei.hide.items', event => {

	event.hide([
		//copper
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
		//lead
		'immersiveengineering:dust_lead', 
		'immersiveengineering:plate_lead', 
		'immersiveengineering:ingot_lead', 
		'immersiveengineering:nugget_lead', 
		'immersiveengineering:storage_lead', 
		'immersiveengineering:ore_lead',
		//nickel
		'immersiveengineering:ingot_nickel', 
		'immersiveengineering:nugget_nickel', 
		'immersiveengineering:storage_nickel', 
		'immersiveengineering:dust_nickel', 
		'immersiveengineering:plate_nickel', 
		'immersiveengineering:ore_nickel',
		/appliedenergistics2:facade/
	])

})

//Ajouter des items dans JEI
onEvent('jei.add.items', event => {
	
	event.add([
		//copper
		'thermal:copper_ore', 
		'create:copper_nugget', 
		'create:copper_ingot', 
		'thermal:copper_block',
		//lead
		//nickel
		
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