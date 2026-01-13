"use client";

import { Vegetable } from "@/types/types";

type Props = {
  vegetables: Vegetable[];
};

export function Table(props: Props) {
  // const handleQuantityClick = (vegetable: Vegetable) => {
  //   setEditingId(vegetable.id);
  //   setTempQuantity(vegetable.quantity);
  // };

  // const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setTempQuantity(Number(e.target.value));
  // };

  // const handleInputBlur = (id: number) => {
  //   setVegetables(
  //     vegetables.map((veg) =>
  //       veg.id === id ? { ...veg, quantity: tempQuantity } : veg
  //     )
  //   );
  //   setEditingId(null);
  // };

  // const handleInputKeyDown = (
  //   e: KeyboardEvent<HTMLInputElement>,
  //   id: number
  // ) => {
  //   if (e.key === "Enter") {
  //     handleInputBlur(id);
  //   }
  // };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6 text-center text-zinc-800">
          野菜の棚卸し
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full min-w-full divide-y divide-gray-200 table-fixed">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  品目
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  数量
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {props.vegetables.map((vegetable) => (
                <tr key={vegetable.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {vegetable.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {/* {editingId === vegetable.id ? (
                      <input
                        type="number"
                        defaultValue={vegetable.quantity}
                        autoFocus
                        className="w-20 rounded-md border-gray-300 shadow-sm focus:outline-none"
                      />
                    ) : ( */}
                    <span
                      className="cursor-pointer"
                      // onClick={() => handleQuantityClick(vegetable)}
                    >
                      {vegetable.quantity}
                    </span>
                    {/* )} */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
