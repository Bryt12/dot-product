import { Ingredients } from './Ingredients';

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredients[];
}
