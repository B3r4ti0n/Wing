// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	event.create('new_block').material('lantern').hardness(40.0).displayName('NewBlock').texture('../kubejs/assets/kubejs/textures/block/new_block.png').harvestTool('hoe', 4)
})
//Caius Hosdius Geta
