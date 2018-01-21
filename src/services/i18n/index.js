// Dependencies
import englishTranslations from './en.translations';
import spanishTranslations from './es.translations';
import frenchTranslations from './fr.translations';
import portugueseTranslations from './pt.translations';
import _ from 'lodash';

export const languageOptions = [
  { key: 'en', value: 'en', flag: 'gb', text: 'EN' },
  { key: 'pt', value: 'pt', flag: 'br', text: 'PT-BR' },
  { key: 'fr', value: 'fr', flag: 'fr', text: 'FR' },
  { key: 'es', value: 'es', flag: 'es', text: 'ES' }
 ]

export const translationsObject = _.assign({}, englishTranslations, spanishTranslations, frenchTranslations, portugueseTranslations);
