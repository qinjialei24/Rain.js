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

  componentDidMount() {
    console.log(2222222222);

  }

  onClick() {
    for (let i = 0; i < 100; i++) {
      this.setState(prevState => {
        console.log(prevState.num);
        return {
          num: prevState.num + 1
        }
      });
    }

    // for (let i = 0; i < 100; i++) {
    //   this.setState({ num: this.state.num + 1 });
    //   console.log(this.state.num);
    // }

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

