export function CatalogReducer(state, action) {
  const { type, payload } = action;

  const setCatalog = () => {
    return {
      catalog: payload,
      isLoading: false,
    };
  };

  const setClearCatalog = () => {
    return {
      catalog: [],
      isLoading: true,
    };
  };

  const setStateReducerTypes = {
    SET_CATALOG: setCatalog,
    SET_CLEAR_CATALOG: setClearCatalog,
  };

  return setStateReducerTypes[type]() || state;
}
