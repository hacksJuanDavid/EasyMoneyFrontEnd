import axios from "axios";

// Get all credits
export const getAllCredit = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/credit");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Get credit by id
export const getCreditById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/credit/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Create credit
export const createCredit = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/credit", data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Update credit
export const updateCredit = async (id: number, data: any) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/credit/${id}`, data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Delete credit
export const deleteCredit = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/credit/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};