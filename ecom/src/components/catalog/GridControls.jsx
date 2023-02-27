import { useEffect, useState } from "react";

const options = ["1", "2", "4"];

export const GridControls = ({ setPerRow = () => {} }) => {
  const [itemsPerRow, setItemsPerRow] = useState(options[0]);

  useEffect(() => {
    const perRow = parseInt(itemsPerRow);

    setPerRow(perRow);
  }, [itemsPerRow]);

  return (
    <>
      <div className="hidden lg:block">
        <label htmlFor="items" id="items">
          Items per row:{" "}
        </label>

        <select
          className="bg-gray-200 text-black p-2 cursor-pointer"
          value={itemsPerRow}
          onChange={(e) => setItemsPerRow(e.target.value)}
        >
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
