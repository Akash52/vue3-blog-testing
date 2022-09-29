import { reactive, readonly } from 'vue';
import axios from 'axios';
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

const store = new Store({
  posts: {
    ids: [],
    all: new Map(),
    loaded: false,
  },
});

store.getState().posts.loaded;
