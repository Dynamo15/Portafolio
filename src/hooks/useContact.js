import useFetch from "./useFetch";
import { getContact } from "../services/contactServices";

export default function useContact() {

    const {
        data,
        loading,
        error,
    } = useFetch(getContact);

    return {
        contact: data,
        loading,
        error,
    };

}