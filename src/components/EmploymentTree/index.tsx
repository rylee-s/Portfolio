import CompanyCard from "./companyCard";
import { Company } from "./expierience.types";

function EmploymentTree({ companies }: { companies: Company[] }) {
  return (
    <section className="mx-auto">
      <ol className="mx-auto w-fit">
        {companies &&
          companies.map((company, index) => (
            <CompanyCard company={company} key={index} />
          ))}
      </ol>
    </section>
  );
}

export default EmploymentTree;
