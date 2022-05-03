import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

import Link from "next/link";
import { JobOfferInterface } from "src/commons/jobOfferInterface";

export default function JobViewHeader(props: {
  alreadyApplied: any;
  jobOffer: JobOfferInterface;
}) {
  const { alreadyApplied, jobOffer } = props;
  const closeDate =
    jobOffer.deadLine && new Date(jobOffer.deadLine).toISOString().slice(0, 10);

  return (
    <div className="lg:flex lg:items-center lg:justify-between px-8">
      <div className="flex-1 min-w-0">
        <h2 className="mt-2 text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
          {jobOffer.name}
        </h2>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Full-time??? IN PROGRESSS
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {jobOffer.remote ? "Remote" : "Local"}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyDollarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {jobOffer.salary}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Closing on {closeDate}
          </div>
        </div>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        {alreadyApplied ? (
          <>
            <button
              type="button"
              className="w-full inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              Already Applied
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="w-full inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg mr-2 font-medium text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <CheckIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              <Link href="/signin">Apply Now</Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}
