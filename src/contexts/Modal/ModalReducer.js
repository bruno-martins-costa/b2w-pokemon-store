export function ModalReducer(state, action) {
  const { type } = action;

  const setToggleIsModalOpen = () => {
    return {
      isModalOpen: !state.isModalOpen,
    };
  };

  const setStateReducerTypes = {
    SET_IS_MODAL_OPEN: setToggleIsModalOpen,
  };

  return setStateReducerTypes[type]() || state;
}
