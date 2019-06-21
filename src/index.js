import Reactive from "./Reactive";
import ReactiveDom from "./ReactiveDom";


function test() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactiveDom.render(
    element,
    document.getElementById('root')
  );
}

setInterval(test, 1000);