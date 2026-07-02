import useFetch from "./useFetch";
import { getProfile } from "../services/profileServices";

export default function useProfile() {

    const {
        data,
        loading,
        error,
    } = useFetch(getProfile);

    return {
        profile: data,
        loading,
        error,
    };

}