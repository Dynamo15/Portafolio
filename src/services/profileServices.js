import api from "./api";
import { profile as mockProfile } from "../data/mock/profile";

export const getProfile = async () => {
  const response = await api.get("/profile/");
  const data = response.data;

  return {
    hero: {
      name: data.full_name,

      role: {
        es: data.profession_es,
        en: data.profession_en,
      },

      description: {
        es: data.phrase_es,
        en: data.phrase_en,
      },

      // Temporalmente siguen viniendo del mock
      buttons: mockProfile.hero.buttons,
    },

    about: {
      description: {
        es: data.about_description_es,
        en: data.about_description_en,
      },

      remote: {
        available: true,
        label: {
          es: data.work_mode_es,
          en: data.work_mode_en,
        },
      },

      status: {
        es: data.status_es,
        en: data.status_en,
      },

      location: {
        es: data.location_es,
        en: data.location_en,
      },
    },
  };
};