import useFetch from "./useFetch";
import { getProjects } from "../services/projectsServices";

export default function useProjects() {

    const {
        data,
        loading,
        error,
    } = useFetch(getProjects);

    return {
        projects: data ?? [],
        loading,
        error,
    };

}