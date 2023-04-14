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
  state.random = meals || []
}