import React from "react";
import { CardList } from "../src/components/card-list/card-list.component";
import { SearchBox } from "../src/components/search-box/search-box.component";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchValue: "",
      title: "",
    };

    // this.searchMonster = this.searchMonster.bind(this);
  }

  searchMonster = (e) => {
    this.setState({ searchValue: e.target.value, title: e.target.value });
  };
  // lifecycle method
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users })); // use fetch to get api and put them in mosters array
  }

  render() {
    const { monsters, searchValue, title } = this.state; //destructure
    // const filteredMonsters = monsters.filter((monster) => {
    //   return monster.name.toLowerCase().includes(searchValue.toLowerCase());
    // });
    return (
      <div className="App">
        <h1>{title}</h1>

        <SearchBox
          placeholder="Search something"
          handleChange={this.searchMonster}
        />

        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
