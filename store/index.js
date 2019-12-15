export const state = () => ({
  GIFs:[],
  limit: 10,
  likedGIFs: [],
  action: false
});

export const mutations = {
  setGIFs(state, gifs) {
    state.GIFs = gifs;
    console.log(gifs, 'gifs')
  },
  setLikeAction (state, {gif, action}) {
    if (gif !== undefined) {
      const index = state.likedGIFs.indexOf(gif);
      if (index === -1) {
        state.likedGIFs.push(gif);
      } else {
        state.likedGIFs.splice(index, 1);
      }
    }
    if (gif === 'close') {
      state.likedGIFs = []
    }
    state.action = action
  },
};

export const getters = {
  GIFs: state => state.GIFs,
  likeAction: state => state.action,
  likedGIFs: state => state.likedGIFs,
  limit: state => state.limit
};
