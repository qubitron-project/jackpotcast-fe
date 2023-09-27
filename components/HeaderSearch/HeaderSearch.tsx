import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { BsFillEraserFill, BsSearch } from 'react-icons/bs';
import { SearchContainer } from './HeaderSearch.style';

const HeaderSearch = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    try {
      if (search) {
        console.log(search);
        router.replace(
          {
            pathname: '/search',
            query: {
              q: search,
            },
          },
          undefined,
          { shallow: true }
        );
      }
    } catch (e: any) {
      console.error(e.response);
    }
  }, [search]);

  const clickSearchImg = () => setClick(!click);

  const backPage = () => {
    router.replace('/');
    setSearch('');
    setClick(false);
  };

  const handleSearchValue = useCallback(
    (e) => {
      setSearch(e.target.value);
    },
    [search]
  );

  return (
    <SearchContainer click={click}>
      <BsSearch onClick={clickSearchImg} size={30} />
      <input
        type='text'
        placeholder='제목, 사람'
        autoFocus
        autoComplete='off'
        value={search}
        onChange={handleSearchValue}
      />
      {search && <BsFillEraserFill onClick={backPage} size={30} />}
    </SearchContainer>
  );
};

export default HeaderSearch;
