export function setSearchedMeals(state, meals){
  state.searchedMeals = meals || []
}
export function setMealsByLetter(state, letter){
  state.mealsByLetter = letter || []
}
export function setMealsByIngredient(state, ingredient){
  // debugger
  state.mealsByIngredient = ingredient || []
}
export function setRandom(state, meals){
  // debugger
  state.random = [...state.random, ...meals]
}
export function clearRandom(state){
  // debugger
  state.random = []
}