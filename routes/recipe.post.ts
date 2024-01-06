import { Recipe } from '../interfaces/recipe';

export default eventHandler(async (event) => {
  const body: Recipe = await readBody(event);

  return { nitro: 'Is Awesome!' };
});
