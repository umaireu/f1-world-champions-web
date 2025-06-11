import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import en from './en/en.json';
import { IS_DEV_ENV } from '@shared/utils/constants';
import { logDetails } from '@shared/utils/utils';

const resources = {
  en: {
    translation: en,
  },
};

void i18n
  .use(detector)
  .use(initReactI18next)
  .init(
    {
      react: {
        //  wait: true,
        useSuspense: true,
      },
      interpolation: { escapeValue: false }, // React already does escaping
      lng: 'en', // language to use
      fallbackLng: 'en',
      defaultNS: 'translation',
      resources,
    },
    (error: Error) => {
      if (IS_DEV_ENV && error) {
        logDetails({
          additionalArgs: ['Translation keys error'],
          message: error,
        });
      }
    },
  );

export default i18n;
