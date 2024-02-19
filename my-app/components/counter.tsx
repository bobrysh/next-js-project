'use client'
import { decrement, increment } from "@/app/redux/slice";
import { RootState } from "@/app/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function CounterComponent() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    );
  }
  