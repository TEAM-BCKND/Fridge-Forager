import React from 'react';
import { useLocation } from 'react-router-dom';
import RecipeList from './RecipeList';

const RenderRecipes = () => {
  const location = useLocation();
  
  const searchResults = location.state?.searchResults || [];

  return (
    <div>
      <h2>Rendered Recipes</h2>
      <RecipeList searchResults={searchResults} />
    </div>
  );
};

export default RenderRecipes;

