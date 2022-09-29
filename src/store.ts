import { reactive, readonly } from 'vue';
import axios from 'axios';
import { Post, thisWeek, thisMonth, today } from './mocks';

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

  async fetchPosts() {
    const response = await axios.get<Post[]>('/posts');
    const postState: PostState = {
      ids: [],
      all: new Map(),
      loaded: true,
    };
    for (const post of response.data) {
      postState.ids.push(post.id);
      postState.all.set(post.id, post);
    }
    this.state.posts = postState;
  }
}

const all = new Map<string, Post>();
all.set(today.id, today);
all.set(thisWeek.id, thisWeek);
all.set(thisMonth.id, thisMonth);

const store = new Store({
  posts: {
    ids: [today.id, thisWeek.id, thisMonth.id],
    all,
    loaded: false,
  },
});

//use
//composable
//provide/inject

export function useStore() {
  return store;
}
