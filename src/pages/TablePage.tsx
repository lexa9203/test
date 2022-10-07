import React, { useEffect, useState } from 'react';
import { API_URL } from '../environment/apiUrl';
import { IFormFields } from '../interfaces/app.interfaces';
import Table from '../components/Table';

const TablePage: React.FC = () => {

  const [data, setData] = useState<IFormFields[]>([]);

  useEffect(() => {
    getData();
  }, [])
  
  const getData = () => {
    fetch(API_URL + 'orders')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => {
        console.log(error.message)
      })
  }  

  return (
    <>
      {data.length ? <Table data={data} /> : <p>Загрузка...</p>}
    </>
  );
}

export default TablePage;
