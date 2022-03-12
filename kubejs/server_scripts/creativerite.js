// priority: 5

// Enable recipe logging, off by default
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
// Enable skipped recipe logging, off by default
settings.logSkippedRecipes = true
// Enable erroring recipe logging, on by default, recommended to be kept to true
settings.logErroringRecipes = false

onEvent('recipes', event => {
    //creativerite ingot
    let inputShapeless = [
        'upgradednetherite:poison_upgraded_netherite_ingot', 
        'upgradednetherite:phantom_upgraded_netherite_ingot', 
        'upgradednetherite:feather_upgraded_netherite_ingot',
        'upgradednetherite:corrupt_upgraded_netherite_ingot', 
        'upgradednetherite:gold_upgraded_netherite_ingot', 
        'upgradednetherite:fire_upgraded_netherite_ingot', 
        'upgradednetherite:ender_upgraded_netherite_ingot', 
        'upgradednetherite:water_upgraded_netherite_ingot', 
        'upgradednetherite:wither_upgraded_netherite_ingot',
        'mysticalagradditions:creative_essence',
    ];
    
    event.shapeless('upgradednetherite_creative:creative_upgraded_netherite_ingot', inputShapeless)
    
    //smithing creativerite

    let creativeriteTab = [
        ['upgradednetherite_creative:creative_upgraded_netherite_sword', 'minecraft:netherite_sword'],
        ['upgradednetherite_creative:creative_upgraded_netherite_pickaxe', 'minecraft:netherite_pickaxe'],
        ['upgradednetherite_creative:creative_upgraded_netherite_shovel', 'minecraft:netherite_shovel'],
        ['upgradednetherite_creative:creative_upgraded_netherite_axe', 'minecraft:netherite_axe'],
        ['upgradednetherite_creative:creative_upgraded_netherite_bow', 'upgradednetherite:netherite_bow'],
        ['upgradednetherite_creative:creative_upgraded_netherite_crossbow', 'upgradednetherite:netherite_crossbow'],
        ['upgradednetherite_creative:creative_upgraded_netherite_shield', 'upgradednetherite:netherite_shield'],
        ['upgradednetherite_creative:creative_upgraded_netherite_leggings', 'minecraft:netherite_leggings'],
        ['upgradednetherite_creative:creative_upgraded_netherite_helmet', 'minecraft:netherite_helmet'],
        ['upgradednetherite_creative:creative_upgraded_netherite_chestplate', 'minecraft:netherite_chestplate'],
        ['upgradednetherite_creative:creative_upgraded_netherite_boots', 'minecraft:netherite_boots'],
        ['upgradednetherite_creative:creative_upgraded_netherite_horse_armor', 'upgradednetherite:netherite_horse_armor']
    ];
    
    for (let index = 0; index < creativeriteTab.length; index++) {
        event.smithing(creativeriteTab[index][0], creativeriteTab[index][1], 'upgradednetherite_creative:creative_upgraded_netherite_ingot')
    }
  })