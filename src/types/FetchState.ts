export default interface FetchState<T> {
  isLoading: boolean;
  isError: boolean;
  content?: T;
}