import { Component } from "react";
class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index, // Come back as a string, that is why add the plus sign to change to number
    });
  };

  render() {
    const { active } = this.state; // One state is mutable (changeable).
    const { images } = this.props; // One way data flow. State come from parent, and only the parent can change props. The only thing that can modify state is the component that contain it.
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img
              key={photo}
              src={photo}
              onClick={this.handleIndexClick} // Will give error because img should be a button
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
