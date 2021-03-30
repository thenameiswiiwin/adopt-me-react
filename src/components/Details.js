import { Component } from "react";
import { withRouter } from "react-router-dom";
/*
 * By default ReactRouter doesn't pass in all of the information to the Details component.
 * So you need to wrap the export default Details ==> withRouter(Details)
 * Higher Components, now it can pass all of the props into Details. Basically inject all of the Router information into the Route
 */

class Details extends Component {
  constructor() {
    super(); // Must call super() first, so the Component constructor get call.

    this.state = { loading: true }; // Default state
  }

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
      /*
       * Match ==> is the path
       * Params ==> Parameters that you are getting from the user
       * Id ==> is the :id Route variables.
       */
    );
    const json = await res.json();
    this.setState(
      Object.assign(
        {
          loading: false,
        },
        json.pets[0]
      )
    );
    /*
     * SAME AS ABOVE, however this one is more specific of what you want in the object.
     * this.setState({
     * loading: false,
     * name: json.pets[0].name,
     * breed: json.pets[0].breed,
     * animal: json.pets[0].animal,
    });
    */
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading ....</h2>;
      /*
       * Can put a loading spinner here
       */
    }

    const { animal, breed, city, state, description, name } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);
