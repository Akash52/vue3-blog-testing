import { reactive, readonly } from 'vue';
import { Post } from './mocks';

interface State {
  posts: PostState;
}

interface PostState {
  //o(n)
  ids: string[];
  //o(1)
  all: Map<string, Post>;
  loaded: boolean;
}

class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }
}

const store = new Store({
  posts: {
    ids: [],
    all: new Map(),
    loaded: false,
  },
});

store.getState().posts.loaded;
