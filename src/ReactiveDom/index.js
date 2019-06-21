import render from "./render";

export default {
  render(vnode, container) {
    container.innerHTML = '';
    return render(vnode, container)
  }
}