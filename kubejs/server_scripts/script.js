// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	
	event.remove({input: '#forge:ores/copper'})

})

onEvent('item.tags', event => {
	
})

