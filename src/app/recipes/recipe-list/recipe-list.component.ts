import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply test', 'https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg'),
    new Recipe('A Test Recipe 1', 'This is a simply test', 'https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg'),
    new Recipe('A Test Recipe 2', 'This is a simply test', 'https://www.foodandwine.com/thmb/MsTd5zgsuEHBo1w-vWuuYQno0mw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg'),
  ];

  constructor() { }

  ngOnInit(): void { }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log(typeof (recipe));
  }

}
