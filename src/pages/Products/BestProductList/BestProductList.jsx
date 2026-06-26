import { useEffect, useState } from 'react';
import axios from '../../../utils/axios';
import ProductCard from '../../../components/ProductCard/ProductCard';
import './BestProductList.css';


function BestProductList() {
  const [items, setItems ] = useState([]);

  const handleLoad = async () => {
    const response = await axios.get('/products');
    console.log(response.data);

    setItems(response.data.list);
};

useEffect(() => {
  handleLoad();
}, []);


  return (
    <div className='bestProductList'>
      <h2>베스트 상품</h2>
      <ProductCard items={items}/>
    </div>
    
  );
}

export default BestProductList;