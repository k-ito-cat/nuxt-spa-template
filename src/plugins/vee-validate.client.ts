import _ from "lodash";
import { setLocale, type LocaleObject } from "yup";
import { suggestive } from "yup-locale-ja";

export default defineNuxtPlugin(() => {
  const customLocaleObject: LocaleObject = {
    mixed: {
      required: ({ label }) => (label ? label + "を" : "") + "入力してください",
    },
  };

  const localeObject = _.merge({}, suggestive, customLocaleObject);

  setLocale(localeObject);
});
