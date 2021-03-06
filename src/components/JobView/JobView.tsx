/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';

import Badges from '../Utils/categories/badges';

import UserStepsTimeline from './modules/userStepsTimeline';
import { JobOfferInterface } from 'src/commons/jobOfferInterface';
import { store } from 'src/app/store';
import JobViewHeader from './JobViewHeader';
import HeaderCompany from './HeaderCompany';
import { ResponsivePie } from '@nivo/pie';

const JobView = () => {
  const postInHtml = useRef() as any;
  const [jobOffer, setJobOffer] = useState(
    store.getState().jobs.currentJobOffer as JobOfferInterface
  );
  const [data, setData] = useState([]);
  store.subscribe(() => {
    setJobOffer(store.getState().jobs.currentJobOffer as JobOfferInterface);
  });

  useEffect(() => {
    postInHtml.current.innerHTML = jobOffer.description;
  }, [jobOffer.description]);

  useEffect(() => {
    if (jobOffer.technologies) {
      setData(jobOffer.technologies as any);
    }
  }, [jobOffer.technologies]);

  return (
    <div>
      {jobOffer ? (
        <div className="min-h-full pt-16">
          <main className="py-10">
            {/* Page header */}
            <JobViewHeader />

            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
              <div className="space-y-6 lg:col-start-1 lg:col-span-2">
                <HeaderCompany companyId={jobOffer.company as string} />

                {/* Description list*/}
                <section aria-labelledby="applicant-information-title">
                  <div className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:px-6">
                      <h2
                        id="applicant-information-title"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        Job Information
                      </h2>
                      <p className="mt-1 max-w-2xl text-sm text-gray-500">
                        Details
                      </p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                      <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500 h-80 w-full">
                            <ResponsivePie
                              enableArcLabels={false}
                              margin={{
                                top: 40,
                                right: 90,
                                bottom: 90,
                                left: 90,
                              }}
                              data={data as any}
                              innerRadius={0.5}
                              padAngle={0.7}
                              cornerRadius={3}
                              activeOuterRadiusOffset={8}
                              borderWidth={1}
                              borderColor={{
                                from: 'color',
                                modifiers: [['darker', 0.2]],
                              }}
                              tooltip={(data: any) => {
                                const { id } = data.datum.data;

                                return (
                                  <>
                                    <div className="bg-white p-2 rounded-md">
                                      {id}
                                    </div>
                                  </>
                                );
                              }}
                              arcLinkLabelsSkipAngle={10}
                              arcLinkLabelsTextColor="#333333"
                              arcLinkLabelsThickness={3}
                              arcLinkLabelsColor={{ from: 'color' }}
                              arcLabelsSkipAngle={10}
                              arcLabelsTextColor={{
                                from: 'color',
                                modifiers: [['darker', 2]],
                              }}
                            />
                          </dt>
                        </div>

                        {jobOffer.categories && (
                          <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                              Technologies
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              <Badges categoriesId={jobOffer.categories} />
                            </dd>
                          </div>
                        )}
                        <div className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">
                            Salary
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900">
                            {jobOffer.salary}
                          </dd>
                        </div>

                        <div className="sm:col-span-2">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd
                            id="post-content"
                            ref={postInHtml}
                            className="mt-1 text-sm text-gray-900"
                          ></dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </section>
              </div>

              <UserStepsTimeline />
            </div>
          </main>
        </div>
      ) : (
        <div className="p-32">NO JOB OFFER FOUND</div>
      )}
    </div>
  );
};

export default JobView;
