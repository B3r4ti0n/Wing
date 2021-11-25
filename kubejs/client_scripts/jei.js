//Cacher des items dans JEI
onEvent('jei.hide.items', event => {

	event.hide([
		'tconstruct:copper_ore',
		'zerocore:debugtool',
		/appliedenergistics2:facade/
	])

})

//Ajouter des items dans JEI
onEvent('jei.add.items', event => {
	
	event.add([
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