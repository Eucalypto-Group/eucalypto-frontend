/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { store } from '../../../app/store';

import Link from 'next/link';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import { CompanyInterface } from '../../../commons/companyInterface';
import newUpload from '../../../app/firebase/storage/newUpload';
import dashify from 'dashify';
import registerCompany from '../../../app/backend/company/registerCompany';
import { CheckCircleIcon } from '@heroicons/react/outline';
import ComapanyImageDropZone from './modules/ComapanyImageDropZone';

const CreateNewCompany = () => {
  const router = useRouter();

  const [company, setCompany] = useState({} as CompanyInterface);
  const [owners, setOwners] = useState([store.getState().user?.id as string]);
  const [logo, setLogo] = useState('');

  const [newUploadCoverImg, setNewUploadCoverImg] = useState(false);

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Create new company profile
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Create a new company profile to asssign job offers
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 md:grid-cols-3">
              <ComapanyImageDropZone
                logo={logo}
                setLogo={setLogo}
                setNewUploadCoverImg={setNewUploadCoverImg}
              />
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 flex"
                >
                  Name of the company
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 flex"
                >
                  Description of the company
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
                </label>
                <div className="mt-1">
                  <textarea
                    rows={4}
                    name="description"
                    id="description"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, description: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="web"
                  className="block text-sm font-medium text-gray-700"
                >
                  Web of the company
                </label>
                <div className="mt-1">
                  <input
                    id="web"
                    name="web"
                    type="url"
                    autoComplete="web"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, web: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="linkedIn"
                  className="block text-sm font-medium text-gray-700"
                >
                  LinkedIn of the company
                </label>
                <div className="mt-1">
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    type="url"
                    autoComplete="linkedIn"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, linkedIn: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email of the company
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, email: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone of the company
                </label>
                <div className="mt-1">
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    autoComplete="phone"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, phone: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 flex"
                >
                  Country
                  <CheckCircleIcon className="text-red-900 w-4 h-4" />
                </label>
                <div className="mt-1">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    autoComplete="country"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    onChange={(e) => {
                      setCompany({ ...company, country: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <Link href="/dashboard/user">
              <button
                type="button"
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
            </Link>

            <button
              type="button"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={async () => {
                toast.warn('Loading...');
                company.published = true;
                company.owners = owners;

                if (logo && company.name) {
                  await newUpload(
                    logo as string,
                    dashify(company.name.trim().toLowerCase()) + '.jpg',
                    (store.getState().user.id as string) + '/company',
                    (url: string) => {
                      company.coverImg = url;
                      registerCompany(company, () => {
                        router.push('/dashboard/user');
                      });
                    }
                  );
                } else {
                  toast.error('please upload a logo');
                }
              }}
            >
              Publish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateNewCompany;
