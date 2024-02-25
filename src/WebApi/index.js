import axios from 'axios';

export const getDetailApi = async (nameInput) => {
    try {
        const names = nameInput.split(',').map(name => name.trim());

        const responses = await Promise.all(names.map(name =>
            axios.get(`https://api.nationalize.io/?name=${name}`)
        ));

        const data = responses.map(response => response.data);
        return data
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}