import React, { Component } from "react";
import PuppyCard from "./components/PuppyCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import puppies from "./puppies.json";

class App extends Component {
  state = {
    puppies: puppies.sort(() => 0.5 - Math.random()),
    counter: 0,
    topScore: 0,
    ifClicked: []
  };

  clickedPuppy = id => {

    if (this.state.ifClicked.includes(id)) {
      this.setState({ counter: 0 });
      this.setState({ ifClicked: [] });
      alert(`You've already selected this puppy! Game over.`);
    } else {
      this.setState({ counter: this.state.counter + 1 });
      this.state.ifClicked.push(id);
    }

    if (this.state.counter >= this.state.topScore) {
      this.setState({ topScore: this.state.counter });
    }

    if (this.state.counter === 12) {
      this.setState({ counter: 0 });
      this.setState({ ifClicked: [] });
      alert("You win!");
    }

    this.setState({ puppies: this.state.puppies.sort(() => 0.5 - Math.random()) });
  };

  render() {
    return (
      <div>
        <Header counter={this.state.counter} topScore={this.state.topScore} />
        <Wrapper>
          {this.state.puppies.map(Puppy => (
            <PuppyCard
              clickedPuppy={this.clickedPuppy}
              id={Puppy.id}
              key={Puppy.id}
              name={Puppy.name}
              image={Puppy.image}
              toy={Puppy.toy}
              treat={Puppy.treat}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
