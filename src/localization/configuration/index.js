import * as languages from '../languages';
import i18n from 'i18next';

const createResourses = (langs) => {
    const entries = Object.entries(langs);
    const mapedEntries = entries.map(([lang, dict]) => (
        [
            lang, 
            { translation: dict }
        ]
    ));
    return Object.fromEntries(mapedEntries);
};

const configureLocalization = (settings) => {
    const { 
        language: lng, 
        fallbackLanguage: fallbackLng 
    } = settings;

    i18n
    .init({
        resources: createResourses(languages),
        lng,
        fallbackLng
    });

    return i18n;
}

export { createResourses };
export default configureLocalization;