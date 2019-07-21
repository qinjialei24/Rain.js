import { renderComponent } from '../../ReactiveDom/diff'
import { enqueueSetState } from "../set-state-queue";

class Component {
  constructor(props = {}) {
    this.isReactComponent = true;

    this.state = {};
    this.props = props;
  }

  setState(stateChange) {
    // Object.assign(this.state, stateChange);
    enqueueSetState(stateChange, this)

    renderComponent(this);
  }
}

export default Component;