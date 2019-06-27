import Reactive from "./Reactive";
import ReactiveDom from "./ReactiveDom";

class Counter extends Reactive.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1,
      arr: [1, 2, 3, 4, 5]
    }
  }

  onClick() {
    this.setState({ num: this.state.num + 1 });
    this.setState({
      arr: [
        1, 2, 3333333, 4, 5
      ]
    });

  }

  render() {
    return (
      <div>
        <h1>count: {this.state.num}</h1>
        <button onClick={() => this.onClick()}>add</button>
        <ul>
          <li>{this.state.arr[0]}</li>
          <li>{this.state.arr[1]}</li>
          <li>{this.state.arr[2]}</li>
          <li>{this.state.arr[3]}</li>
        </ul>

      </div>
    );
  }
}
ReactiveDom.render(
  <Counter />,
  document.getElementById('root')
);

