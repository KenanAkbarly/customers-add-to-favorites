import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
// import qs from 'qs';
import './customer.scss'

import { addToFav } from '../redux/Favorite';
// import { display } from '@mui/system';
function getColumns(dispatch){
  
 return  [
    {
      title:'ID',
      dataIndex: 'id',
      editable: true,
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      editable: true,
      sorter:true,
      // render: (name) => `${name.companyName}`,
      width: '20%',
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      editable: true,
      width: '20%',
    },
    {
      title: 'Address',
      dataIndex: ['address', 'street'],
      editable: true,
      width: '20%',
    },
    {
      title: 'Detail',
      render:(value)=>{
        return <Link to={`/detail/${value.id}`}><button className='btnDetail'>Detail</button></Link>
      },
      editable: true,
      width: '20%',
    },
    {
      title: 'Add to favorite',
      render:(product)=>{
        return <button onClick={()=>{ dispatch(addToFav(product))}} className='btnFavorites'>Favorites</button>
      },
      editable: true,
      width: '20%',
    },
  ];
}
const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});
const Customers = () => {
  const favItems = useSelector(state=>state)
  console.log(favItems);
  const dispatch = useDispatch()
  // const handleAddToFavorite = (product)=>{
  //   dispatch(addToFav(product))
  // }
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const fetchData = () => {
    setLoading(true);
    fetch(`https://northwind.vercel.app/api/customers`)
      .then((res) => res.json())
      .then(( results ) => {
        console.log(results)
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams)]);
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };
  return (
    <Table
      columns={getColumns(dispatch)}

      // rowKey={(record) => record.login.uuid}
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
    />
  );
};

 export default Customers
