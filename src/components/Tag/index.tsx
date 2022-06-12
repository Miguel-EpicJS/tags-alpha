import { useState } from 'react';

import './styles.css';

interface PropTypes {
  text: string;
  deleted: boolean;
}

export const Tag = ({ text, deleted }: PropTypes) => {
  const [hidden, setHidden] = useState(false);

  if (deleted || hidden) {
    return <span></span>;
  }

  return (
    <div
      className={
        'active:bg-neutral-700 bg-neutral-500 m-5 h-9 text-center rounded-md content-center justify-center	text-xl font-sans p-1 px-2 mb-0	flex text-white'
      }
    >
      <span>{text}</span>{' '}
      <button onClick={() => setHidden(!hidden)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7 transition-all duration-200 active:text-neutral-700	"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};
// #727272
