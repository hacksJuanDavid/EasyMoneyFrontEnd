import axios from "axios";

// Get all personal information
export const getAllPersonalInformation = async () => {
    try {
        const response = await axios.get("http://localhost:5000/api/v1/personalInformation");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Get personal information by id
export const getPersonalInformationById = async (id: number) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/v1/personalInformation/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Create personal information
export const createPersonalInformation = async (data: any) => {
    try {
        const response = await axios.post("http://localhost:5000/api/v1/personalInformation", data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Update personal information
export const updatePersonalInformation = async (id: number, data: any) => {
    try {
        const response = await axios.put(`http://localhost:5000/api/v1/personalInformation/${id}`, data);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};

// Delete personal information
export const deletePersonalInformation = async (id: number) => {
    try {
        const response = await axios.delete(`http://localhost:5000/api/v1/personalInformation/${id}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
};