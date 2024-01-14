import React , {useState,useEffect}from "react"; 
import RandomDataChart from "./randomDataView_chart";
import axiosInstance from "../axios";
import DataGrid1 from "./datagrid"
import Datagrid_2npm from "./datagrid_2npm"

const Parentchartcomponent = () =>{
    const [chartData, setChartData] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axiosInstance.get('/api/data');
            console.log('responseinparentcomponent', response.data.rows);
            setChartData(response.data.rows);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

return (
    <div>
      
      {chartData ? (
        <Datagrid_2npm/>,
        // <RandomDataChart chartData={chartData}/>,
        <DataGrid1/>
        
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Parentchartcomponent;