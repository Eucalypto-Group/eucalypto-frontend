/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import TextHeader from 'src/components/Utils/TextHeader/TextHeader';
import PostIt from './PostIt';

const Lifecicle = () => {
  return (
    <>
      <hr className="my-2"></hr>
      <TextHeader title="Eucalypto’s lifecycle" category="how we work" />
      <div className="px:4 md:px-4 lg:px-16 py-4">
        <div className="grid grid-cols-4 lg:grid-cols-5 gap-x-1 md:gap-x-0 gap-y-4 xl:gap-y-0 p-0 md:p-2 md:px-2 lg:px-32 xl:px-64 ">
          <PostIt
            options={{
              step: 'Join the community everyone is talking about:',
              description: [
                'Just one click',
                'No chunks of info, no personal information, only wishes',
                'Benefit from our tools and resources: tech articles, events, meet-ups and much more',
              ],

              className: 'rotate-6',
              href: '/dashboard/user',
            }}
          />

          <div className="hidden lg:block">
            <img
              className="w-full self-center p-4  mt-16 "
              alt=""
              src="/file/img/steps/right.png"
            />
          </div>

          <PostIt
            options={{
              step: 'Find the hottest and most exciting challenges',
              description: [
                ' Match with your dream projects',
                ' We are transparent: Salary, Company, Location, tech upfront',
                'Follow up the process in our web app',
              ],
              className: '-rotate-6',
              href: '/search',
            }}
          />
          <div className="lg:block hidden"></div>
          <div className="lg:block hidden"></div>
          <div className="lg:block hidden"></div>
          <div className="lg:block hidden"></div>

          <div className="lg:block hidden">
            <img
              className="  w-full z-1 self-center p-2 md:mt-0 rotate-90"
              alt=""
              src="/file/img/steps/right.png"
            />
          </div>

          <PostIt
            options={{
              step: 'You are already part of Eucalypto',
              description: [
                'Either you get the opportunity or not, you will be always part of our community',
                'Check our news, trends, feed… and stay updated',
                'Check again our job openings',
                'Let’s celebrate it with a beer, coffee or lunch :D',
              ],
              className: 'rotate-3',
              href: 'https://www.linkedin.com/company/85973376/admin/',
            }}
          />

          <div className="lg:block hidden">
            <img
              className="  w-full self-center p-2 mt-16 rotate-180"
              alt=""
              src="/file/img/steps/right.png"
            />
          </div>
          <PostIt
            options={{
              step: 'We will be your agent:',
              description: [
                'We have more than 7 years’ experience in the field, real knowledge not just keywords',
                'We have a specialized team supporting you in every step of the selection process                 ',
                'You struggle in anything? We will coach you!',
                'We counsel, you decide',
              ],
              className: '-rotate-12',
              href: '/contact',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Lifecicle;
