import Header from './components/header/header';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Products from './components/Products/Products';
import SearchProducts from './components/Filter/searchProducts';
import SortByPrice from './components/Filter/sortByPrice';
const Wrapper = () => {
  const [products, setProducts] = useState(null);
  const [searchProducts, setSearchProducts] = useState([]);
  const [serach, setSearch] = useState('');
  const [sort, setSort] = useState('');
  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (products) {
      let resault = products;
      resault = searchOnProducts(resault);
      resault = sortOnProducts(resault)
      setSearchProducts(resault);
    }
  }, [products, serach, sort]);

  const setSearchInputs = search => {
    setSearch(search);
  };
  const sortHandler = sort => {
    setSort(sort);
  };

  const searchOnProducts = array => {
    return array.filter(p =>
      p.title.toLowerCase().includes(serach.toLowerCase()),
    );
  };
  const sortOnProducts = array => {
    let sortedPorducts = [...array];
    return sortedPorducts.sort((a, b) => {
      if (sort === 'max') {
        return a.price > b.price ? -1 : 1;
      } else if(sort === 'min') {
        return a.price > b.price ? 1 : -1;
      }else{
        return array
      }
    });
  };
  return (
    <>
      <Header />
      <SearchProducts onSearch={setSearchInputs} />
      <SortByPrice onSort={sortHandler} />
      {products && <Products products={searchProducts} />}
    </>
  );
};

export default Wrapper;
