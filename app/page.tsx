import { getVegetables } from "@/server/server";
import { Table } from "./Table";

export default async function Home() {
  const vegetables = await getVegetables();
  return <Table vegetables={vegetables} />;
}
