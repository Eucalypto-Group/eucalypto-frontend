import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import retrieveCategories from 'src/app/backend/category/retrieveCategories';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';

import retrieveCompanyByOwner from 'src/app/backend/company/retrieveCompaniesByOwner';
import retrieveJobOffers from 'src/app/backend/jobOffer/retrievesJobOffer';
import retrieveAllUsersInfo from 'src/app/backend/users/retrieveAllUsersInfo';
import useCheckUserInfo from 'src/app/firebase/auth/useCheckUserInfo';

import ListApplicants from 'src/components/Dashboard/jobOffers/listApplicants';

import LoadingComponent from 'src/components/Utils/LoadingComponent';

const ModifyJobOfferPage = () => {
  const router = useRouter();
  const { offerID } = router.query;

  const checkUserInfo = useCheckUserInfo();
  if (checkUserInfo.loading) return <LoadingComponent />;
  if (!checkUserInfo.isLogedIn) router.push('/signin');
  retrieveCompanyByOwner();
  retrieveJobOffers({
    prop: 'id',
    value: offerID as string,
    reduxSpace: 'currentJobOffer',
  });
  retrieveAllUsersInfo();
  retrieveParentCategories((allParentCats: any) => {
    allParentCats.forEach((parentCat: any) => {
      retrieveCategories({
        propToFind: 'type',
        value: parentCat.name,
        saveIn: parentCat.name,
      });
    });
  });

  return (
    <div className="p-32">
      <ListApplicants />
    </div>
  );
};

export default ModifyJobOfferPage;
