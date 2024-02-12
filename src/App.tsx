
import { decrement, increment, incrementByValue,} from "./redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center  h-screen w-full  ">
      <div className=" border border-purple-500 rounded-md bg-slate-50  p-10 flex">
        <button
          onClick={() => dispatch(incrementByValue({value : 5}))}
          className="px-3 py-3 rounded md bg-green-500 text-xm font-semibold text-white"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="px-3 py-3 rounded md bg-green-500 text-xm font-semibold text-white"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-3 py-3 rounded md bg-red-500 text-xm font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
