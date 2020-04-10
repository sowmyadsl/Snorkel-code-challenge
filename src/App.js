import React from "react";
import "./styles.css";
import DataViewer from "./Data-viewer.js";
import SearchBar from "./Search-bar.js";
import { sentences } from "./sentences.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { sentences: sentences };
    this.keywordSearch = this.keywordSearch.bind(this);
  }

  keywordSearch(input) {
    const filteredSentences = sentences.filter(sentence =>
      sentence.data.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({
      sentences: filteredSentences
    });
  }

  render() {
    return (
      <div className="keyword-search-container">
        <SearchBar keywordSearch={this.keywordSearch} />
        <DataViewer sentences={this.state.sentences} />
      </div>
    );
  }
}

export default App;
