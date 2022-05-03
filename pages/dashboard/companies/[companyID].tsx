import { useRouter } from "next/router";
import React, { useState } from "react";
import { store } from "../../../src/app/store";
import { CompanyInterface } from "../../../src/commons/companyInterface";
import CreateNewCompany from "../../../src/components/Dashboard/companies/createNewCompany";
import ModifyCompany from "../../../src/components/Dashboard/companies/modifyCompany";
import CreateNewJobOffer from "../../../src/components/Dashboard/jobOffers/createNewJobOffer";
import UserSettings from "../../../src/components/Dashboard/user/UserSettings";
import getCompanyDataReduxFromId from "../../../src/components/Utils/company/getCompanyDataReduxFromId";

const ModifyCompanyPage = () => {
  const router = useRouter();
  const { companyID } = router.query;

  const [isLogedIn, setIsLogedIn] = useState(
    store.getState().user?.email ? true : false
  );

  const [company, setCompany] = useState(
    getCompanyDataReduxFromId(companyID as string)
  );

  store.subscribe(() => {
    if (store.getState().user?.email) {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
      router.push("/signin");
    }
  });

  return (
    <div className="pt-32">
      {isLogedIn && company && <ModifyCompany company={company} />}
    </div>
  );
};

export default ModifyCompanyPage;
