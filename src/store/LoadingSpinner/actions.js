export const LAUNCH_LOADING = 'LAUNCH_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

export const startLoading = () => {
  return {
    type: LAUNCH_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};
