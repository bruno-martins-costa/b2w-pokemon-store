export function StoresReducer(state, action) {
  const { type, payload } = action;

  const setCurrentStoreType = () => {
    return {
      ...state,
      currentStoreType: payload,
    };
  };

  const setClearCurrentStoreType = () => {
    return {
      ...state,
      currentStoreType: { value: '', label: '' },
    };
  };

  const setStateReducerTypes = {
    SET_CURRENT_STORE_TYPE: setCurrentStoreType,
    SET_CLEAR_CURRENT_STORE_TYPE: setClearCurrentStoreType,
  };

  return setStateReducerTypes[type]() || state;
}
