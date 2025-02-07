import { type SchemaTypeDefinition } from 'sanity';
import foodSchema from './foods';
import chefSchema from './chefs';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foodSchema,  chefSchema, ]
};