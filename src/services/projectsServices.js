import api from "./api";

// Temporal mientras no exista FastAPI
import { projects } from "../data/mock/projects";

export const getProjects = async () => {

  // Cuando exista FastAPI solamente dejarás esto:
  //
  // const { data } = await api.get("/projects");
  // return data;

  return projects;

};