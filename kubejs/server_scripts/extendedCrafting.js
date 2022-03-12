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
    
    //creative controller
    event.recipes.extendedcrafting.shaped_table(
        'refinedstorage:creative_controller', 
        [
            'BBBBBBBBB',
            'BCUCUCCCB',
            'BCEUUEEUB',
            'BCEEUEUCB',
            'BUUUSUUUB',
            'BCUEUEECB',
            'BUEEUUECB',
            'BCCCUCUCB',
            'BBBBBBBBB',
        ], 
        {
            B: 'extendedcrafting:black_iron_block',
            E: 'mysticalagradditions:creative_essence',
            S:  'extendedcrafting:ultimate_singularity',
            C: 'refinedstorage:controller',
            U: 'extendedcrafting:the_ultimate_block',
        }
    )

    //creative fluid storage block
    event.recipes.extendedcrafting.shaped_table(
        'refinedstorage:creative_fluid_storage_block',
        [
            'BBBBBBBBB',
            'BTTTTTTTB',
            'BTUUEUUTB',
            'BTBUEUBTB',
            'BTEESEETB',
            'BTBUEUBTB',
            'BTUUEUUTB',
            'BTTTTTTTB',
            'BBBBBBBBB',
        ], 
        {
            B: 'extendedcrafting:black_iron_block',
            E: 'mysticalagradditions:creative_essence',
            S:  'extendedcrafting:ultimate_singularity',
            T: 'industrialforegoing:supreme_black_hole_tank',
            U: 'extendedcrafting:the_ultimate_block',
        }
    )

    //creative storage block
    event.recipes.extendedcrafting.shaped_table(
        'refinedstorage:creative_storage_block',
        [
            'BBBBBBBBB',
            'BTTTTTTTB',
            'BTUUEUUTB',
            'BTBUEUBTB',
            'BTEESEETB',
            'BTBUEUBTB',
            'BTUUEUUTB',
            'BTTTTTTTB',
            'BBBBBBBBB',
        ], 
        {
            B: 'extendedcrafting:black_iron_block',
            E: 'mysticalagradditions:creative_essence',
            S:  'extendedcrafting:ultimate_singularity',
            T: 'industrialforegoing:supreme_black_hole_unit',
            U: 'extendedcrafting:the_ultimate_block',
        }
    )

    //creative fluid storage disk
    event.recipes.extendedcrafting.shaped_table(
        'refinedstorage:creative_fluid_storage_disk',
        [
            'TTTTTTTTT',
            'TUREEERUT',
            'TRUUEUURT',
            'TEUUEUUET',
            'TEEESEEET',
            'TEUUEUUET',
            'TRUUEUURT',
            'TUREEERUT',
            'TTTTTTTTT',
        ], 
        {
            E: 'mysticalagradditions:creative_essence',
            S:  'extendedcrafting:ultimate_singularity',
            T: 'industrialforegoing:supreme_black_hole_tank',
            U: 'extendedcrafting:the_ultimate_block',
            R: 'refinedstorage:creative_fluid_storage_block',
        }
    )

    //creative storage disk
    event.recipes.extendedcrafting.shaped_table(
        'refinedstorage:creative_storage_disk',
        [
            'TTTTTTTTT',
            'TUREEERUT',
            'TRUUEUURT',
            'TEUUEUUET',
            'TEEESEEET',
            'TEUUEUUET',
            'TRUUEUURT',
            'TUREEERUT',
            'TTTTTTTTT',
        ], 
        {
            E: 'mysticalagradditions:creative_essence',
            S:  'extendedcrafting:ultimate_singularity',
            T: 'industrialforegoing:supreme_black_hole_unit',
            U: 'extendedcrafting:the_ultimate_block',
            R: 'refinedstorage:creative_fluid_storage_block',
        }
    )
    //creative soulium dagger
    event.recipes.extendedcrafting.shaped_table(
        'mysticalagriculture:creative_soulium_dagger',
        [
            '       MM',
            '      MGM',
            '     MGM ',
            '  E MGM  ',
            ' GIMGM   ',
            '  GGM    ',
            '  BGIE   ',
            ' B  G    ',
            'B        ',
        ], 
        {
            E: 'mysticalagradditions:creative_essence',
            B:  'mysticalagradditions:insanium_block',
            G: 'mysticalagradditions:insanium_gemstone_block',
            I: 'mysticalagradditions:insanium_essence',
            M: 'mysticalagradditions:insanium_ingot_block',
        }
    )
    //creative capacitor
    event.recipes.extendedcrafting.shaped_table(
        'immersiveengineering:capacitor_creative',
        [
            'TTTTTTTTT',
            'TTTTTTTTT',
            'BEEBEBEEB',
            'BBBBBBBBB',
            'UUUUSUUUU',
            'BBBBBBBBB',
            'BEEBEBEEB',
            'TTTTTTTTT',
            'TTTTTTTTT',
        ], 
        {
            T: 'immersiveengineering:treated_wood_horizontal',
            U:  'extendedcrafting:the_ultimate_block',
            E: 'mysticalagradditions:creative_essence',
            B: 'extendedcrafting:black_iron_block',
            S: 'extendedcrafting:ultimate_singularity',
        }
    )
    
    //creative motor
    event.recipes.extendedcrafting.shaped_table(
        'create:creative_motor',
        [
            'HHHHHHHHH',
            'UBUUBBBBU',
            'UBUUBBBBU',
            'UBUEEEBBU',
            'UBUESEBBU',
            'UBUEEEBBU',
            'UBUUBBBBU',
            'UBUUBBBBU',
            'HHHHHHHHH',
        ], 
        {
            H: 'create:shaft',
            U:  'extendedcrafting:the_ultimate_block',
            E: 'mysticalagradditions:creative_essence',
            B: 'extendedcrafting:black_iron_block',
            S: 'extendedcrafting:ultimate_singularity',
        }
    )

    //creative energy cell
    event.recipes.extendedcrafting.shaped_table(
        'appliedenergistics2:creative_energy_cell',
        [
            'BBBBBBBBB',
            'BUUUBUUUB',
            'BUEUBUEUB',
            'BUUUBUUUB',
            'BBBBSBBBB',
            'BUUUBUUUB',
            'BUEUBUEUB',
            'BUUUBUUUB',
            'BBBBBBBBB',
        ], 
        {
            U:  'extendedcrafting:the_ultimate_block',
            E: 'mysticalagradditions:creative_essence',
            B: 'extendedcrafting:black_iron_block',
            S: 'extendedcrafting:ultimate_singularity',
        }
    )

    //creative storage cell
    event.recipes.extendedcrafting.shaped_table(
        'appliedenergistics2:creative_storage_cell',
        [
            'HHHHHHHHH',
            'HUUUUUUUH',
            'HUECECEUH',
            'HUCEEECUH',
            'HUEESEEUH',
            'HUCEEECUH',
            'HUECECEUH',
            'HUUUUUUUH',
            'HHHHHHHHH',
        ], 
        {
            H: 'industrialforegoing:supreme_black_hole_unit',
            U:  'extendedcrafting:the_ultimate_block',
            E: 'mysticalagradditions:creative_essence',
            S: 'extendedcrafting:ultimate_singularity',
            C: 'appliedenergistics2:creative_energy_cell',
        }
    )

    //creative essence
    event.custom(
        {
            "type": "create:mixing",
            "ingredients": [
              {
                "item": "mysticalagradditions:insanium_essence"
              },
              {
                "item": "extendedcrafting:the_ultimate_block"
              },
              {
                "fluid": "kubejs:molten_insanium_essence",
                "nbt": {},
                "amount": 1000
              }
            ],
            "results": [
              {
                "item": "mysticalagradditions:creative_essence"
              }
            ]
        }
    )
    //molten insanium essence
    event.custom(
        {
            "type": "create:mixing",
            "ingredients": [
              {
                "item": "mysticalagradditions:insanium_essence",
              },
              {
                "item": "mysticalagradditions:insanium_ingot",
              },
              {
                "item": "mysticalagradditions:insanium_gemstone",
              },
              {
                "fluid": "industrialforegoing:biofuel",
                "amount": 250
              },
              {
                "fluid": "tconstruct:molten_manyullyn",
                "amount": 250
              },
            ],
            "results": [
                {
                    "fluid": "kubejs:molten_insanium_essence",
                    "amount": 1000
                }
            ],
            "heatRequirement": "superheated"
          }
    )
    
    //creative vending
    let inputCreativeVendingShapeless = [
        'upgradednetherite_creative:creative_upgraded_netherite_ingot', 
        'extendedcrafting:the_ultimate_ingot', 'pipez:infinity_upgrade', 
        'powah:energy_cell_creative', 
        'storagedrawers:creative_storage_upgrade', 
        'refinedstorage:creative_controller', 
        'refinedstorage:creative_fluid_storage_block', 
        'refinedstorage:creative_storage_block', 
        'refinedstorage:creative_fluid_storage_disk',
        'refinedstorage:creative_storage_disk',
        'mysticalagriculture:creative_soulium_dagger', 
        'mysticalagradditions:creative_essence', 
        'immersiveengineering:capacitor_creative', 
        'create:creative_motor', 
        'appliedenergistics2:creative_storage_cell', 
        'appliedenergistics2:creative_energy_cell',
    ];
    event.recipes.extendedcrafting.shapeless_table('storagedrawers:creative_vending_upgrade', inputCreativeVendingShapeless)
  })