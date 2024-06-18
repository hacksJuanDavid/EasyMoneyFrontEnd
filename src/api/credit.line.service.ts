import axios from "axios";

// Get all credit lines
export const getAllCreditLine = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/creditLine");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};


// Get credit line by id
export const getCreditLineById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/creditLine/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Create credit line
export const createCreditLine = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/creditLine", data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Update credit line
export const updateCreditLine = async (id: number, data: any) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/creditLine/${id}`, data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Delete credit line
export const deleteCreditLine = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/creditLine/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};