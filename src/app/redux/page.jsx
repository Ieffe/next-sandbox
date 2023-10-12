"use client";

import { useGetProductsQuery } from "@/redux/api/productsApi";
import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
  reset,
  setBase,
} from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Page = () => {
  const count = useAppSelector((state) => state.counterReducer.value);
  const base = useAppSelector((state) => state.counterReducer.baseValue);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetProductsQuery(null);
  return (
    <>
      <div className="mb-3">
        <h1 className="mb-2 font-bold">
          This page implements Redux Toolkit for State Management
        </h1>
        <p>
          In this page, the counter below is implementing redux mechanism.
          Provider applied in this redux route only (provider only applied in
          the layout). If the counter reaches zero, it can't be decremented.
          Applied reducers are done for reset, increment and decrement, and
          setting value based increment. Reset Button reset both the counter and
          the base value for value-based increment.
        </p>
      </div>
      <div className="mb-4">
        <input
          onChange={(e) => dispatch(setBase(e.target.value))}
          onKeyDown={(e) => {
            if (e.code === "Minus" || e.code == "Digit0") {
              e.preventDefault();
            }
          }}
          className="px-2 py-2 rounded-md bg-black border-2 border-white"
          placeholder="Set base value"
          min={1}
          type="number"
          value={base}
        />
      </div>
      <div className="flex flex-row items-center">
        {!!base && (
          <button
            onClick={() => {
              count <= 0 ? "" : dispatch(decrementByValue(base));
            }}
            className=" mr-4 px-2 py-1 border-2 border-white rounded-md hover:bg-white hover:text-black"
          >
            -{base}
          </button>
        )}

        <button
          onClick={() => {
            count <= 0 ? "" : dispatch(decrement());
          }}
          className="px-2 py-1 border-2 border-white rounded-md hover:bg-white hover:text-black"
        >
          -
        </button>
        <p className="mx-4">{count}</p>
        <button
          onClick={() => dispatch(increment())}
          className="px-2 py-1 border-2 border-white rounded-md mr-4 hover:bg-white hover:text-black"
        >
          +
        </button>
        {!!base && (
          <button
            onClick={() => dispatch(incrementByValue(base))}
            className="px-2 py-1 border-2 border-white rounded-md mr-4 hover:bg-white hover:text-black"
          >
            +{base}
          </button>
        )}

        <button
          onClick={() => dispatch(reset())}
          className="px-2 py-1 border-2 border-white rounded-md hover:bg-white hover:text-black"
        >
          Reset
        </button>
      </div>
      <hr />
      <div>
        {error ? (
          <p>Error.</p>
        ) : isLoading || isFetching ? (
          <p>Loading ... </p>
        ) : data ? (
          
          data.products.map((m)=>(
            <p key={m.id}>{m.title}</p>
          ))
        ) : null}
      </div>
    </>
  );
};

export default Page;
