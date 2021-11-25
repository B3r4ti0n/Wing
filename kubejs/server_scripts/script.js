// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

onEvent('recipes', event => {
	let multiRemove = (ores, arcfurnace, crusher, pulverizer, smelter) => {
		event.remove({ input: '#forge:ores/' + ores})
		if(arcfurnace = true){
			event.remove({id: 'immersiveengineering:arcfurnace/ore_'+ores})
		}
		if(crusher = true){
			event.remove({id: 'immersiveengineering:crusher/ore_'+ores})
		}
		if(pulverizer = true){
			event.remove({id: 'thermal:machine/pulverizer/pulverizer_'+ores+'_ore'})
		}
		if(smelter = true){
			event.remove({id: 'thermal:machine/smelter/smelter_'+ores+'_ore'})
		}
	}
	let multiAdd = (ores,input, inductionSmelter,pulverizer,foundry,blastFurnace,furnace,crushingWheel) => {
		if (furnace = true) {
			event.smelting(input[0] , ores)
		}
	}
	
	multiRemove("copper",true,true,true,true)
	multiAdd('thermal:copper_ore',['create:copper_ingot'],true,true,true,true,true,true,true,true)
})

onEvent('item.tags', event => {
	
})

