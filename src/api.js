// api.js

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8080', // backend API URL
});

const api = {
  // Example endpoint for getting recipes
  getRecipes: () => instance.get('/recipes'),

  // Example endpoint for posting a new recipe
  postRecipe: (recipeData) => instance.post('/recipes', recipeData),

  // Example endpoint for deleting a recipe by ID
  deleteRecipe: (recipeId) => instance.delete(`/recipes/${recipeId}`),

  // Add more API endpoints as needed
};

export default api;
