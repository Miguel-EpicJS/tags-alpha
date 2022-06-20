import { ReactNode, useState, Children } from 'react';

import { Search } from '../Search/index';
import { Tag } from '../Tag/index';

import { api } from '../../services/api';

import './styles.css';

interface PropTypes {
  children?: ReactNode;
}

export const Box = ({ children }: PropTypes) => {
  const [tags, setTags] = useState<string[]>([]);

  function addTag(e: React.MouseEvent<HTMLButtonElement>, text: string) {
    setTags((oldTags) => [...oldTags, text]);
    try {
      (() => {
        api.post('/tags', { value: text }).then((resp) => {
          console.log(resp);
        });
      })();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-neutral-100 m-4 w-1/4 p-0.5 border-2 rounded-t-md border-b-neutral-900	border-b-4 pr-10">
      <div className="flex flex-wrap justify-start overflow-y-scroll	h-52 scrollbar	">
        {children}
        {tags.map((txt, index) => (
          <Tag
            text={txt}
            deleted={false}
            key={index}
            id={index + Children.count(children)}
          />
        ))}
      </div>
      <div className="mt-20">
        <Search text="Inserir Tag" clickHandler={addTag} />
      </div>
    </div>
  );
};
