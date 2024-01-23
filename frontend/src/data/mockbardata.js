import axiosInstance from '../axios'; 

const mockbardata = () => {
    return axiosInstance.get('/mockBarData')
    .then(response => {
        // console.log('Data fetched successfully:', response.data.rows);
        return  response.data.rows
    })
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
};

export default mockbardata;
