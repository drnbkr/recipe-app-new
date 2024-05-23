import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a simply test', 'https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg', [new Ingredient('Meat', 1), new Ingredient('Bread', 2)]),
        new Recipe('A Test Recipe 1', 'This is a simply test', 'https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg', [new Ingredient('Bread', 2)]),
        new Recipe('A Test Recipe 2', 'This is a simply test', 'https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg', [new Ingredient('Patatoes', 3)]),
    ];

    constructor(private slService: ShoppingListService) {
        this.slService;

    }
    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }




}