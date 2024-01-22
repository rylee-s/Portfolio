import awsCPLogo from "../../assets/aws-certified-cloud-practitioner.avif";
import gaLogo from "../../assets/ga_Logo.avif";
import payrollLogo from "../../assets/payrollorg-logo.avif";
import csuLogo from "../../assets/csu-global-logo.avif";
import { Education } from "../EmploymentTree/expierience.types";
import { NewWindowIcon } from "../Global/Icons";

export default function EduCard({ education }: { education: Education }) {
  const logo = (issuer: string) => {
    switch (issuer) {
      case "Amazon Web Services (AWS)":
        return awsCPLogo;
      case "General Assembly":
        return gaLogo;
      case "PayrollOrg (American Payroll Association)":
        return payrollLogo;
      case "Colorado State University Global Campus":
        return csuLogo;
    }
  };
  return (
    <div className="flex flex-wrap">
      <div className="m-auto w-[35%] border-r border-slate-700">
        <img
          src={logo(education.issuer)}
          alt={education.issuer}
          className="mx-auto p-5"
        />
      </div>
      <div className="my-auto w-[65%] pl-4">
        <div className="">
          <div>
            <h2 className="text-xl font-extrabold">{education.name}</h2>
            <h3>{education.issuer}</h3>
            {education.issueDate && (
              <h3>
                <span className="font-bold">Issued On: </span>
                {education.issueDate}
              </h3>
            )}
            {education.expirationDate && (
              <h3>
                <span className="font-bold">Expiration Date: </span>
                {education.expirationDate}
              </h3>
            )}
            {education.graduationDate && (
              <h3>
                <span className="font-bold">Graduation Date: </span>
                {education.graduationDate}
              </h3>
            )}
            {education.link && (
              <button
                onClick={() => window.open(education.link, "_blank")}
                className="relative mt-5 flex h-12 items-center overflow-hidden rounded-full border border-transparent bg-blue-600 px-6 text-white outline-none duration-300
                              ease-linear after:absolute after:inset-x-0 after:left-0 after:top-0 after:aspect-square after:origin-center after:scale-0 after:rounded-full after:bg-[#172554] after:opacity-70 after:duration-300 after:ease-linear hover:border-[#172554] hover:after:scale-[2.5] hover:after:opacity-100 sm:w-max"
              >
                <span className="z-[5] flex">
                  <span>{education.linkText}</span>
                  <NewWindowIcon className="my-auto ml-2" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
