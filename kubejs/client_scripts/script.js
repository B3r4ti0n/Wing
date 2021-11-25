
onEvent('jei.hide.items', event => {

	event.hide([
		/appliedenergistics2:facade/,
	])
})

onEvent('jei.add.items', event => {
	event.add([
		Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'),
	])
})