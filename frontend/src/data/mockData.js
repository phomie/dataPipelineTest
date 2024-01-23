import axiosInstance from '../axios'; 

const TheMockedDataTEam = () => {
    return axiosInstance.get('/userDataApi')
        .then(response => response.data.rows)
        .catch(error => {
            console.error('Error fetching data:', error);
            return [];
        });
};

export default TheMockedDataTEam;
