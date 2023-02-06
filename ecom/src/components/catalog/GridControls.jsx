import { useState } from "react";

// const buttonClasses = `hidden lg:block w-14 h-14 border-l border-zinc-400 flex justify-center items-center`;

export const GridControls = () => {
  const [itemsPerRow, setItemsPerRow] = useState("1/row");

  return (
    <>
    <div className="hidden lg:block">
      <label htmlFor="items" id="items">
        Items per row:{" "}
      </label>
      <select name="items" id="items" className="bg-gray-200 text-black p-2 cursor-pointer">
        <option>---</option>
        <option
          value="1 per row"
          onClick={() => {
            setItemsPerRow("1/row");
          }}
        >
          1 per row
        </option>
        <option
          value="2 per row"
          onClick={() => {
            setItemsPerRow("2/row");
          }}
        >
          2 per row
        </option>
        <option
          value="4 per row"
          onClick={() => {
            setItemsPerRow("4/row");
          }}
        >
          4 per row
        </option>
      </select>
      </div>

      {/* <ul className="flex border border-l-0 border-zinc-400">
      <li>
        <button
          title="One per row"
          className={`${buttonClasses} ${
            itemsPerRow === "1/row" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setItemsPerRow("1/row");
          }}
        >
          1
        </button>
      </li>

      <li>
        <button
          title="Two per row"
          className={`${buttonClasses} ${
            itemsPerRow === "2/row" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setItemsPerRow("2/row");
          }}
        >
          2
        </button>
      </li>

      <li>
        <button
          title="Four per row"
          className={`${buttonClasses} ${
            itemsPerRow === "4/row" ? "bg-black text-white" : ""
          }`}
          onClick={() => {
            setItemsPerRow("4/row");
          }}
        >
          4
        </button>
      </li>
    </ul> */}
    </>
  );
};
