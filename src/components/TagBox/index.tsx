import { Tag } from '../Tag/index';
import { Box } from '../Box/index';
import { useEffect, useState } from 'react';

import { api } from '../../services/api';

export const TagBox = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      (async () => {
        setLoading(true);
        const { data } = await api.get('/tags');

        let val: string[] = [];
        data.forEach((element: any) => {
          val.push(element.value);
        });

        setTags(val);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return (
      <h1 className="flex flex-wrap justify-center text-5xl	">Loading...</h1>
    );
  }

  return (
    <div className="main flex flex-wrap justify-center">
      <Box>
        {tags.map((txt, index) => (
          <Tag text={txt} deleted={false} key={index} id={index} />
        ))}
      </Box>
    </div>
  );
};
