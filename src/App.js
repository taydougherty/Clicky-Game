import React, { Component } from "react";
import PuppyCard from "./components/PuppyCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import puppies from "./puppies.json";

class App extends Component {
  // Setting this.state.puppies to the puppies json array
  state = {
    // sort function for puppies state
    puppies,
    counter: 0,
    ifClicked: []
  };

  // rename to when clicked image
  removePuppy = id => {
    // conditionals:
    // if already in the ifClicked array:
    // set state of counter to 0
    // alert "already been clicked"
    // empty ifClicked array
    // else:
    // add count +1 to counter
    // reshuffle using sort function
    // when hit 12:
    // counter = 0
    // alert "you win"
    // reshuffle using sort function

    // Filter this.state.puppies for puppies with an id not equal to the id being removed
    const puppies = this.state.puppies.filter(friend => friend.id !== id);
    // Set this.state.puppies equal to the new puppies array
    // this.setState({ puppies: sortfunction(google it) });
  };

  // Map over this.state.puppies and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Puppy Match!</Title>
        {this.state.puppies.map(Puppy => (
          <PuppyCard
            removePuppy={this.removePuppy}
            id={Puppy.id}
            key={Puppy.id}
            name={Puppy.name}
            image={Puppy.image}
            toy={Puppy.toy}
            treat={Puppy.treat}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
