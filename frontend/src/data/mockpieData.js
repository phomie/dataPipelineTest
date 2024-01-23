import axiosInstance from '../axios'; 
const mockDataPie = () => {
    return axiosInstance.get('/mockpieData')
        .then(response => response.data.rows)
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
};

export default mockDataPie;
