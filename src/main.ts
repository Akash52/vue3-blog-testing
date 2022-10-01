import axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import { today, thisWeek, thisMonth, Post } from './mocks';
import { router } from './router';
import 'highlight.js/styles/atom-one-dark.css';
import random from 'lodash/random';

function delay() {
  return new Promise((res) => {
    setTimeout(res, 2000);
  });
}
// @ts-ignore
axios.get = async (url: string) => {
  if (url === '/posts') {
    await delay();
    return Promise.resolve({
      data: [today, thisWeek, thisMonth],
    });
  }
};

// @ts-ignore
axios.post = async (url: string, post: Post) => {
  const id = random(100, 10000);
  if (url === '/posts') {
    await delay();
    return Promise.resolve({
      data: {
        ...post,
        id,
      },
    });
  }
};

const app = createApp(App);

app.use(router);
app.mount('#app');
