export const state = () => ({
  val: 'Krisitnaaaa'
});

export const mutations = {
  setVal(state, val) {
    state.val = val
    console.log('u vendos', val)
  }
};

export const getters = {
  val: state => state.val
};
