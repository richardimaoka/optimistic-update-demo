"use client";

import { useState, ChangeEvent, KeyboardEvent } from "react";

// 野菜の型定義
interface Vegetable {
  id: number;
  name: string;
  quantity: number;
}

// 初期データ
const initialVegetables: Vegetable[] = [
  { id: 1, name: "トマト", quantity: 10 },
  { id: 2, name: "きゅうり", quantity: 20 },
  { id: 3, name: "にんじん", quantity: 15 },
  { id: 4, name: "じゃがいも", quantity: 30 },
  { id: 5, name: "たまねぎ", quantity: 25 },
];

export default function Home() {
  const [vegetables, setVegetables] =
    useState<Vegetable[]>(initialVegetables);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [tempQuantity, setTempQuantity] = useState<number>(0);

  const handleQuantityClick = (vegetable: Vegetable) => {
    setEditingId(vegetable.id);
    setTempQuantity(vegetable.quantity);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTempQuantity(Number(e.target.value));
  };

  const handleInputBlur = (id: number) => {
    setVegetables(
      vegetables.map((veg) =>
        veg.id === id ? { ...veg, quantity: tempQuantity } : veg
      )
    );
    setEditingId(null);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>, id: number) => {
    if (e.key === "Enter") {
      handleInputBlur(id);
    }
  };

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
              {vegetables.map((vegetable) => (
                <tr key={vegetable.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {vegetable.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {editingId === vegetable.id ? (
                      <input
                        type="number"
                        value={tempQuantity}
                        onChange={handleInputChange}
                        onBlur={() => handleInputBlur(vegetable.id)}
                        onKeyDown={(e) => handleInputKeyDown(e, vegetable.id)}
                        autoFocus
                        className="w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    ) : (
                      <span
                        className="cursor-pointer"
                        onClick={() => handleQuantityClick(vegetable)}
                      >
                        {vegetable.quantity}
                      </span>
                    )}
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