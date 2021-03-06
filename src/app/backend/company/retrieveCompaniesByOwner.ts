import axios from 'axios';

import { store } from '../../store';
import { api } from '../apiEndPoints';
import { toast } from 'react-toastify';

import companySlice from '../../slices/companies/companySlice';

// Retrieves company data of the owner of the current session
const retrieveCompanyByOwner = async (userId?: string, next?: Function) => {
  const isAdmin = store.getState().user.role === 'admin' ? true : false;

  const dinamicUserId = userId ? userId : store.getState().user?.id;

  // If the user is an admin, retrieve all companies
  const url = isAdmin ? api.company : api.company + '/' + dinamicUserId;

  axios
    .get(url)
    .then((response) => {
      const allCompaniesFound = response.data;

      store.dispatch(companySlice.actions.setData(allCompaniesFound));
      if (typeof next === 'function') {
        next(allCompaniesFound);
      }
    })
    .catch((error) => {
      console.log(error);
      toast.error('Error retrieving Company info');
    });
};

export default retrieveCompanyByOwner;
