import Reactive from "./Reactive";
import ReactiveDom from "./ReactiveDom";
class Welcome extends Reactive.Component {

  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}


class App extends Reactive.Component {
  render() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }
}

ReactiveDom.render(
  <App />,
  document.getElementById('root')
);

