import { reactive, readonly } from 'vue';

interface State {
  test: string;
}

class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }

  updateState(test: string) {
    this.state.test = test;
  }
}

const store = new Store({
  test: 'test',
});

store.getState().test;
