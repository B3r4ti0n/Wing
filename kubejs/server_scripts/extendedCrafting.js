// priority: 5

// Enable recipe logging, off by default
settings.logAddedRecipes = true
settings.logRemovedRecipes = true
// Enable skipped recipe logging, off by default
settings.logSkippedRecipes = true
// Enable erroring recipe logging, on by default, recommended to be kept to true
settings.logErroringRecipes = false

onEvent('recipes', event => {
    /*
    event.recipes.extendedcrafting.shaped_table(
        'minecraft:stone', 
        [
            '123456789',
            '123456789',
            '123456789',
            '123456789',
            '123456789',
            '123456789',
            '123456789',
            '123456789',
            '123456789',
        ], 
        {
            1: 'minecraft:dirt',
            2: 'minecraft:stone',
            3: 'minecraft:sand',
            4: 'minecraft:gravel',
            5: 'minecraft:clay',
            6: 'minecraft:grass_block',
            7: 'minecraft:cobblestone',
            8: 'minecraft:end_stone',
            9: 'minecraft:sponge',
        }
    )
    */
    //energy cell powah
    event.recipes.extendedcrafting.shaped_table(
        'powah:energy_cell_creative',
        [
            'NNNNCNNNN',
            'NGGCGCGGN',
            'NGRRURRGN',
            'NCRUEURCN',
            'CGUESEUGC',
            'NCRUEURCN',
            'NGRRURRGN',
            'NGGCGCGGN',
            'NNNNCNNNN'
        ],
        {
            C:'powah:nitro_crystal_block', 
            E:'mysticalagradditions:creative_essence', 
            U:'extendedcrafting:the_ultimate_block', 
            R:'powah:energizing_rod_nitro', 
            N:'powah:ender_cell_nitro', 
            G:'powah:energy_cell_nitro', 
            S:'extendedcrafting:ultimate_singularity'
        }
    )

    //infinity pipe upgrade
    event.smithing('pipez:infinity_upgrade', 'pipez:ultimate_upgrade', 'extendedcrafting:the_ultimate_ingot')

    //ultimate ingot
    let inputExtendedCraftingShapeless = [
        'tconstruct:hepatizon_ingot', 
        'blue_skies:horizonite_ingot', 
        'extendedcrafting:black_iron_ingot', 
        'extendedcrafting:crystaltine_ingot', 
        'betterendforge:terminite_ingot', 
        'betterendforge:aeternium_ingot', 
        'blue_skies:ventium_ingot', 
        'betterendforge:thallasium_ingot',
        'thermal:enderium_ingot', 
        'tconstruct:queens_slime_ingot', 
        'immersiveengineering:ingot_aluminum', 
        'ftbjarmod:cast_iron_ingot', 
        'thermal:tin_ingot', 
        'thermal:lumium_ingot', 
        'immersiveengineering:ingot_uranium', 
        'tconstruct:slimesteel_ingot', 
        'blue_skies:falsite_ingot', 
        'create:brass_ingot', 
        'tconstruct:manyullyn_ingot', 
        'immersiveengineering:ingot_constantan', 
        'create:copper_ingot', 
        'thermal:silver_ingot', 
        'minecraft:netherite_ingot', 
        'mysticalagriculture:soulium_ingot', 
        'minecraft:gold_ingot', 
        'minecraft:iron_ingot', 
        'mysticalagriculture:prosperity_ingot', 
        'immersiveengineering:ingot_hop_graphite', 
        'extendedcrafting:redstone_ingot', 
        'extendedcrafting:enhanced_ender_ingot', 
        'extendedcrafting:ender_ingot', 
        'tconstruct:pig_iron_ingot', 
        'thermal:constantan_ingot', 
        'thermal:invar_ingot', 
        'mysticalagradditions:insanium_ingot',
        'mysticalagriculture:tertium_ingot', 
        'thermal:signalum_ingot', 
        'tconstruct:rose_gold_ingot', 
        'mysticalagriculture:prudentium_ingot', 
        'thermal:nickel_ingot', 
        'mysticalagriculture:supremium_ingot', 
        'tconstruct:cobalt_ingot', 
        'immersiveengineering:ingot_steel', 
        'immersiveengineering:ingot_electrum', 
        'mysticalagriculture:inferium_ingot', 
        'thermal:bronze_ingot', 
        'industrialforegoing:pink_slime_ingot', 
        'tconstruct:tinkers_bronze_ingot', 
        'thermal:lead_ingot', 
        'thermal:electrum_ingot'
    ];
    
    event.recipes.extendedcrafting.shapeless_table('50x extendedcrafting:the_ultimate_ingot', inputExtendedCraftingShapeless)

    //Creative storage upgrade
    event.smithing('storagedrawers:creative_storage_upgrade', 'storagedrawers:emerald_storage_upgrade', 'mysticalagradditions:creative_essence')
    
    
  })