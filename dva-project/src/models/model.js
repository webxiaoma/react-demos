const commonModel = {
    reducers: {
      updateState(state, { payload }) {
         console.log(payload)
        return { ...state, ...payload };
      },
    },
  };
  
export {
    commonModel,
};
  