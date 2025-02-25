
  onEvent('recipes', event => {
	/*
// Input and Output
 // Items
 .inputItem('Item').ignoreNBT()) | .outputItem('Item').ignoreNBT())
 .inputItems('Item1', 'Item2') | .outputItems('Item1', 'Item2')
// Fluids
 .inputFluid('Fluid') | .outputFluid('Fluid')
// Forge Energy
 .inputFE(int) | .outputFE(int)
// Stress
 .inputStress(int) | .outputStress(int)
// Mekanism Gas
 .inputGas({type: '', amount: int}) | .outputGas({type: '', amount: int})
// Mekanism Slurry
 .inputSlurry({type: '', amount: int}) | .outputSlurry({type: '', amount: int})
// Mekanism Infuse
 .inputInfuse({type: '', amount: int}) | .outputInfuse({type: '', amount: int})
// Mekanism Pigment
 .inputPigment({type: '', amount: int}) | .outputPigment({type: '', amount: int})
// Mana
 .inputMana(int) | .outputMana(int)

// Alter Input and Output (place before the input or output to alter them)
 .setChance(int) // int <= 1
 .setPerTick(boolean) // Switch perTick on/off
*/

	//Sulfuric Acid
	event.recipes.multiblocked.multiblock("chemical_reactor")
		.inputFluid(Fluid.of('mekanism:oxygen', 1000))
		//.inputFluid(r.input)
		.inputItem([Ingredient.of('#forge:dusts/sulfur'), Ingredient.of('#forge:gems/sulfur')])
		//.outputItem(r.output1)
		.outputFluid(Fluid.of('mekanism:sulfuric_acid', 1000))
		.setPerTick(true)
		.inputFE(1024)
		.duration(200)

	//Nitric Acid
	event.recipes.multiblocked.multiblock("chemical_reactor")
		.inputFluid(Fluid.of('mekanism:oxygen', 300))
		.inputFluid(Fluid.of('mekanism:hydrogen', 100))
		.inputFluid(Fluid.of('chemlib:nitrogen_fluid', 100))
		.outputFluid(Fluid.of('chemlib:nitric_acid_fluid', 400))
		.setPerTick(true)
		.inputFE(1024*2)
		.duration(200)
  })