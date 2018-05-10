import { locales } from './localization.mockdata';
import LocalizedStrings from 'react-localization';

export const ReactLocaleService = {};

ReactLocaleService.fetchLocaleCache = function() {
    ReactLocaleService.cache = locales;
}

ReactLocaleService.getlocales = function(keys, langs){
    if(! ReactLocaleService.cache){
        ReactLocaleService.fetchLocaleCache();
    }
    let allLangs = Object.keys(ReactLocaleService.cache);
    langs = langs ? (langs.length > 0 ? langs : allLangs ) : allLangs;
    let requestedLocales = {};
    for(let lang of langs){
        requestedLocales[lang] = requestedLocales[lang] ? requestedLocales[lang] : {};
        let langContainer = requestedLocales[lang];
        let keyStore = ReactLocaleService.cache[lang];
        for(let key of keys){
            langContainer[key] = keyStore[key];
        }
    }
    return requestedLocales;
}

ReactLocaleService.getLocalizedStrings = function (labels){
    return new LocalizedStrings(labels);
}