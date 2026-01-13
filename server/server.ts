import { Vegetable } from "@/types/types";

const vegetables: Vegetable[] = [
  { id: 1, name: "トマト", quantity: 10 },
  { id: 2, name: "きゅうり", quantity: 20 },
  { id: 3, name: "にんじん", quantity: 15 },
  { id: 4, name: "じゃがいも", quantity: 30 },
  { id: 5, name: "たまねぎ", quantity: 25 },
];

export async function getVegetables() {
  return vegetables;
}
