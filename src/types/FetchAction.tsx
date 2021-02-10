export default interface FetchAction<T> {
  type: "FETCH_INIT" | "FETCH_SUCCESS" | "FETCH_FAILURE";
  payload?: T;
}
