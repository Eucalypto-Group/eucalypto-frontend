/* eslint-disable @next/next/link-passhref */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { toast } from 'react-toastify';

import { useRouter } from 'next/router';
import { CategoryInterface } from 'src/commons/categoryInterface';
import modifyCategory from 'src/app/backend/category/modifyCategory';
import deleteCategory from 'src/app/backend/category/deleteCategory';
import { ParentCategoryInterface } from 'src/commons/parentCategoryInterface';
import retrieveParentCategories from 'src/app/backend/category/retrieveParentCategories';

const ModifyCategory = (props: any) => {
  const router = useRouter();

  // const [category, setCategory] = useState({} as CategoryInterface);

  const [category, setCategory] = useState({
    ...props.category,
  } as CategoryInterface);
  console.log(
    '🚀 ~ file: modifyCategory.tsx ~ line 23 ~ ModifyCategory ~ props',
    props
  );

  console.log(
    '🚀 ~ file: modifyCategory.tsx ~ line 22 ~ ModifyCategory ~ category',
    category
  );

  const [parentCategory, setParentCategory] = useState(
    [] as Array<ParentCategoryInterface>
  );

  useEffect(() => {
    retrieveParentCategories((parentCat: Array<ParentCategoryInterface>) => {
      setParentCategory(parentCat);
    });
  }, []);

  return (
    <div>
      <form className="space-y-8 divide-y divide-gray-200">
        <div className="space-y-8 divide-y divide-gray-200">
          <div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Update Category
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Update category for jobs, companies, skills, locations,
                languages, etc.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name of the category
                </label>
                <div className="mt-1">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue={category.name}
                    onChange={(e) => {
                      setCategory({ ...category, name: e.target.value });
                    }}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium text-gray-700"
                >
                  Type / Category
                </label>
                <div className="mt-1">
                  <select
                    id="type"
                    name="type"
                    autoComplete="type-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    defaultValue="tech"
                    onChange={(e) => {
                      category.type = e.target.value;
                    }}
                  >
                    <option value=""></option>
                    {parentCategory.map(
                      (parentCat: ParentCategoryInterface) => {
                        const selected = category.type === parentCat.name;

                        return (
                          <>
                            <option
                              key={parentCat.id}
                              selected={selected}
                              value={parentCat.name}
                            >
                              {parentCat.name}
                            </option>
                          </>
                        );
                      }
                    )}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-600 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-200 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={async () => {
                deleteCategory(category, () => {
                  router.push('/dashboard/user');
                });
              }}
            >
              Delete Category
            </button>

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
                if (category.createdAt) delete category.createdAt;
                if (category.updatedAt) delete category.updatedAt;

                category.published = true;

                modifyCategory(category, () => {
                  router.push('/dashboard/user');
                });
              }}
            >
              Update Category
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModifyCategory;
