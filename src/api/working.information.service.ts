import axios from "axios";

// Get all working informations
export const getAllWorkingInformation = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/workingInformation");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Get working information by id
export const getWorkingInformationById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/workingInformation/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Create working information
export const createWorkingInformation = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/workingInformation", data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Update working information
export const updateWorkingInformation = async (id: number, data: any) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/workingInformation/${id}`, data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Delete working information
export const deleteWorkingInformation = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/workingInformation/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

