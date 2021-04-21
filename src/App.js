import React from 'react';
import ListItems from './components/ListItems';
import './App.css';
import recipes from './object';
import ShowContent from './components/ShowContent';

class  App extends React.Component {

  constructor(){
    super();
    this.state = {
      recipes: recipes,
      index: ''
    }
  }

  filteringObject = (index) => {
    const filtered = this.state.recipes.filter(recipe => recipe.tag === index)
    return filtered
  }

  clickRecipe = (text) => {
      this.setState({
        index: text
      })
  }

  render(){

    return (
      <div className="App">
      <ListItems recipes={this.state.recipes} clickRecipe={this.clickRecipe} />
      { this.state.index ? <div><ShowContent recipe={ this.filteringObject(this.state.index)} /></div> : <div>Click the Recipes Button</div> }
    </div>
  );
}
}

export default App;
