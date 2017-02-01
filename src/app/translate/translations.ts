// app/translate/translation.ts

import { OpaqueToken } from '@angular/core';

// import translations
import { LANG_EN_TRANS } from './lang-en';
import { LANG_ES_TRANS } from './lang-es';


// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
	"en": LANG_EN_TRANS,
	"es": LANG_ES_TRANS
};

// providers
export const TRANSLATION_PROVIDERS = [
	{ provide: TRANSLATIONS, useValue: dictionary },
];