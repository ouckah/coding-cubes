import { ProjectTable } from "@/components/coding_cubes/project_table";
import { RowOfCards } from "@/components/coding_cubes/row_of_cards";
import { RowOfCardsfex } from "@/components/coding_cubes/row_of_cards_longer_fex";

export default async function IndexPage() {
  return (
    <>
      <section>
        <RowOfCards />
      </section>

      <section>
        <RowOfCardsfex />
      </section>
      <section>
        <ProjectTable />
      </section>
    </>
  );
}
