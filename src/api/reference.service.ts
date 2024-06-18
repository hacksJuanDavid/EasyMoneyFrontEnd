import axios from "axios";

// Get all references
export const getAllReference = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/reference");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Get reference by id
export const getReferenceById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/reference/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Create reference
export const createReference = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/reference", data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Update reference
export const updateReference = async (id: number, data: any) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/reference/${id}`, data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Delete reference
export const deleteReference = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/reference/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};