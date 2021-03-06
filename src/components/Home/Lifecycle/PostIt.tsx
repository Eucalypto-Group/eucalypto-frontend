import { useRouter } from 'next/router';
import React from 'react';

const PostIt = (props: {
  options: {
    step: string;
    description: Array<string>;
    className: string;
    href?: string;
  };
}) => {
  const { step, description, className, href } = props.options;
  const router = useRouter();
  return (
    <div
      className={
        'col-span-2 bg-yellow-200 aspect-square shadow-2xl hover:text-primary hover:bg-tertiary z-10 cursor-pointer ' +
        className
      }
      onClick={() => {
        if (href) {
          router.push(href);
        }
      }}
    >
      <h1 className="font-bold text-xs sm:text-lg md:text-lg lg:text-lg xl:text-base m-2 p-2">
        {step}
      </h1>
      <p className="select-none text-xs aspect-square sm:text-base lg:text-xs xl:text-sm px-0 sm:px-4 mr-2 ml-6 sm:ml-4 sm:mr-2  pb-4">
        <ul>
          {description &&
            description.length &&
            description.map((item, index) => (
              <li className="list-disc" key={index}>
                {item}
              </li>
            ))}
        </ul>
      </p>
    </div>
  );
};

export default PostIt;
