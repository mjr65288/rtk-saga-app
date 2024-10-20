import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/store";
import { increment, decrement } from "./slices/counter-slice/counterSlice";
import { useEffect } from "react";
import { fetchCats } from "./slices/cats-slice/catsSlice";

function App() {
  // Retrieve the current value of the counter from the Redux store
  const count = useSelector((state: RootState) => state.counter.value);
  const cats = useSelector((state: RootState) => state.cats.cats);

  // Get the dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);
  console.log(cats);

  /**
   * Dispatch an action to increment the counter asynchronously after a delay.
   */
  const handleIncrementAsync = (): void => {
    // Dispatch the incrementAsync action
    dispatch({ type: "counter/incrementAsync" });
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      {/* Dispatch the increment action immediately */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      {/* Dispatch the decrement action immediately */}
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      {/* Dispatch the async increment action to be handled by the saga */}
      <button onClick={handleIncrementAsync}>Increment Async</button>
    </div>
  );
}

export default App;
