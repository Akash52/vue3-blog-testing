import { Store } from "@/store";
import { Post, today } from "../../src/mocks";
import { State } from "../../src/store";

const mockPost: Post = {
  ...today,
};

jest.mock("axios", () => ({
  get: () => {
    return {
      data: [mockPost],
    };
  },
}));

describe("store/fetchPost", () => {
  it("fetches post and update state", async () => {
    const store = new Store({
      posts: {
        ids: [],
        all: new Map(),
        loaded: true,
      },
      authors: {
        ids: [],
        all: new Map(),
        currentUserId: undefined,
        loaded: false,
      },
    });

    await store.fetchPosts();

    const expected: State = {
      posts: {
        ids: ["1"],
        all: new Map([["1", mockPost]]),
        loaded: true,
      },
      authors: {
        ids: [],
        all: new Map(),
        currentUserId: undefined,
        loaded: false,
      },
    };
    expect(expected).toEqual(store.getState());
  });
});
