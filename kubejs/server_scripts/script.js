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
	let multiAdd = (output,input, inductionSmelter,pulverizer,foundry,blastFurnace,furnace,crushingWheel) => {
		if (furnace = true) {
			event.smelting(input[0] , output[0])
		}
		if (blastFurnace = true) {
			event.blasting(input[0] , output[0])
		}
		if (crushingWheel = true){
			event.custom({
				"type": "create:crushing",
				"ingredients": [
					{
					"tag": "forge:storage_blocks/"+output[1]
					}
				],
				"results": [
					{
					"item": input[0],
					"count": 5
					}
				],
				"processingTime": 400
			})
		}
		if (inductionSmelter = true){
			event.custom({
				"type": "thermal:smelter",
				"ingredient": {
					"tag": "forge:ores/"+output[1]
				},
				"result": [
					{
					"item": "thermal:"+output[1]+"_ingot",
					"chance": 1.0
					},
					{
					"item": "minecraft:"+input[1]+"_ingot",
					"chance": 0.2
					},
					{
					"item": "thermal:rich_slag",
					"chance": 0.2
					}
				],
				"experience": 0.2
			})
		}
		if (pulverizer = true){
			event.custom({
				"type": "thermal:pulverizer",
				"ingredient": {
					"tag": "forge:ores/copper"
				},
				"result": [
					{
					"item": "thermal:copper_dust",
					"chance": 2.0
					},
					{
					"item": "thermal:gold_dust",
					"chance": 0.1
					},
					{
					"item": "minecraft:gravel",
					"chance": 0.2
					}
				],
				"experience": 0.2
			})
		}
		if (foundry = true){
			event.custom({
				"type": "tconstruct:ore_melting",
				"ingredient": {
				  "item": output[0]
				},
				"result": {
				  "fluid": "tconstruct:molten_"+output[1],
				  "amount": 144
				},
				"temperature": 500,
				"time": 75,
				"byproducts": [
				  {
					"fluid": "tconstruct:molten_"+input[1],
					"amount": 16
				  }
				]
			  })
		}
	}
	//copper
	event.remove({id: 'immersiveengineering:crafting/ingot_copper_to_storage_copper'})
	event.remove({id: 'thermal:storage/copper_block'})
	event.remove({id: 'tconstruct:common/materials/copper_block_from_ingots'})
	event.remove({id: 'create:crafting/materials/copper_block_from_compacting'})
	event.remove({id: 'immersiveengineering:arcfurnace/dust_copper'})

	multiRemove("copper",true,true,true,true)
	multiAdd(['thermal:copper_ore', 'copper'],['create:copper_ingot','gold'],true,true,true,true,true,true)
	
	
	//lead
	event.remove({id: 'immersiveengineering:crafting/ingot_lead_to_storage_lead'})
	event.remove({id: 'thermal:storage/lead_block'})

	multiRemove("lead",true,true,true,true)
	multiAdd(['thermal:lead_ore', 'lead'],['thermal:lead_ingot','silver'],true,true,true,true,true,true)

	event.shapeless('1x thermal:copper_block', ['9x create:copper_ingot'])
	//silver
	event.remove({id: 'immersiveengineering:crafting/ingot_silver_to_storage_silver'})
	event.remove({id: 'thermal:storage/silver_block'})

	multiRemove("lead",true,true,true,true)
	multiAdd(['thermal:silver_ore', 'silver'],['thermal:silver_ingot','lead'],true,true,true,true,true,true)
	//nickel
	event.remove({id: 'immersiveengineering:crafting/ingot_nickel_to_storage_nickel'})
	event.remove({id: 'thermal:storage/nickel_block'})

	multiRemove("lead",true,true,true,true)
	multiAdd(['thermal:nickel_ore', 'nickel'],['thermal:nickel_ingot','iron'],true,true,true,true,true,true)
})

onEvent('item.tags', event => {
	
})

