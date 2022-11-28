export default function reducer(state, { type, payload }) {
  switch (type) {
    case 'AWAIT_RESPONSE':
      return (
        { ...state, isLoading: true }
      );
    case 'RESPONSE_RESOLVED':
      return (
        { ...state, isLoading: false }
      );
    default:
      throw new Error();
  }
}