import { StarIcon } from '@heroicons/react/outline';
import { StarIcon as StarIconFill } from '@heroicons/react/solid';
import React from 'react';

interface StarsProps {
  stars: number;
}

const Stars = (props: StarsProps) => {
  const { stars } = props;
  const className = 'inline-block h-6 w-6 mr-1 text-secondary';

  return (
    <div className="flex">
      {[...Array(stars)].map((e, i) => (
        <div key={i}>
          <img className="mx-[3px]" src="/file/webDesign/starFull.png" />
        </div>
      ))}
      {[...Array(5 - stars)].map((e, i) => (
        <div key={i}>
          <img className="mx-[3px]" src="/file/webDesign/starEmpty.png" />
        </div>
      ))}
    </div>
  );
};

export default Stars;
