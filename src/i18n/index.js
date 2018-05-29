import I18n from 'react-native-i18n';
import en from './locales/en';
import my from './locales/my';

I18n.fallbacks = true;

I18n.translations = {
  en,
  my
};

export default I18n;
