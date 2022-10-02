import { reactive, readonly } from 'vue';
import axios from 'axios';
import { Post, thisWeek, thisMonth, today } from './mocks';

interface State {
  posts: PostState;
}

export interface User {
  id: string;
  username: string;
  password: string;
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

  async createPost(post: Post) {
    const { data } = await axios.post<Post>('/posts', post);
    this.state.posts.all.set(post.id, data);
    this.state.posts.ids.push(post.id);
  }

  async createUser(user: User) {
    console.log(user);
    // const { data } = await axios.post<Post>('/users', user);
    // this.state.posts.all.set(user.id, data);
    // this.state.posts.ids.push(user.id);
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

const store = new Store({
  posts: {
    ids: [],
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
