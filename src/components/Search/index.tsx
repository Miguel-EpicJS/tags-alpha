import { ReactNode, useState } from 'react';

import './styles.css';

interface PropTypes {
  children?: ReactNode;
  text: string;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>, text: string) => void;
}

export const Search = ({ text, children, clickHandler }: PropTypes) => {
  const [tagName, setTagName] = useState('');

  return (
    <div className="flex justify-center mt-8">
      <div className="mb-3 w-4/5">
        <div className="input-group relative flex flex-nowrap flex-row-reverse items-stretch w-full mb-4 rounded">
          <input
            type="search"
            className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-medium text-neutral-500  bg-transparent bg-clip-padding  transition ease-in-out m-0 focus:text-neutral-500 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder={text}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTagName(e.target.value);
            }}
          />
          <button
            className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-neutral-500 text-center whitespace-wrap rounded"
            id="basic-addon2"
            onClick={(e) => clickHandler(e, tagName)}
          >
            <svg
              id="Layer_1"
              height="40"
              viewBox="0 0 24 24"
              width="40"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="m8 8v-2h8v2zm-3 14a1 1 0 0 1 -1-1v-18a1 1 0 0 1 1-1h15v9.5a6.513 6.513 0 0 1 2 1.32v-12.82h-17a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h12.5a6.475 6.475 0 0 1 -4.679-2zm17.543 1.957-2.657-2.657a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.657 2.657zm-5.043-3.957a2.5 2.5 0 1 0 -2.5-2.5 2.5 2.5 0 0 0 2.5 2.5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
