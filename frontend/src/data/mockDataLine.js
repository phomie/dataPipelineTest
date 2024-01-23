import axiosInstance from '../axios'; 

const mockDataLine = () => {
    return axiosInstance.get('/mockLineData')
    .then(response => {
        // console.log('Data fetched successfully:', response.data.rows);
        return  response.data.rows
    })
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
};

export default mockDataLine;