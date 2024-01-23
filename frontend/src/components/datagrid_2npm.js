import React, { useState, useEffect } from 'react';
import axiosInstance from '../axios';
import { Row, Col } from 'antd';
import 'react-data-grid/lib/styles.css';
//import {DataGrid} from 'react-data-grid';

const Datagrid_2npm = () => {
  const [chartData, setChartData] = useState([]);
  const [filterValues, setFilterValues] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    postalzip: '',
    text: '',
    time: '',
    date: '',
    city: '',
    text1: '',
    latlng: '',
    url: '',
    currency: '',
   
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get('/api/data');
        setChartData(response.data.rows);
        console.log('response', response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (columnName, value) => {
    setFilterValues((prevFilters) => ({
      ...prevFilters,
      [columnName]: value,
    }));
  };

  const filteredData = chartData.filter((row) => {
    return Object.keys(filterValues).every(
      (key) => !filterValues[key] || String(row[key]).includes(filterValues[key])
    );
  });

  return (
    <div >
      <div className="DataGrid1">
      <h1>Data Grid1</h1>

      <table >
        <thead>
        <tr>
            {Object.keys(filterValues).map((key) => (
              <th key={key}>
                <input
                  type="text"
                  value={filterValues[key]}
                  onChange={(e) => handleFilterChange(key, e.target.value)}
                  placeholder={`Filter ${key}`}
                />
              </th>
            ))}
          </tr>
         
        </thead>

        <tbody>
        {filteredData.map((row) => (
            <tr key={row.id}>
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>{row.address}</td>
              <td>{row.postalzip}</td>
              <td>{row.text}</td>
              <td>{row.time}</td>
              <td>{row.date}</td>
              <td>{row.city}</td>
              <td>{row.text1}</td>
              <td>{row.latlng}</td>
              <td>{row.url}</td>
              <td>{row.currency}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Datagrid_2npm;
