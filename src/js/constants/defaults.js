// NOTE: Do not use these values directly, instead use state.config which will fallback to these
// 		 defaults if no value is configured.
import { coreCitationStyles } from '../../../data/citation-styles-data.json';

export const apiKey = '';
export const apiConfig = {
	apiAuthorityPart: '192.168.62.111/192.168.62.111:8080',
	retry: 2,
};

export const websiteUrl = 'https://192.168.62.111/http://192.168.62.111:8080';
export const buyStorageUrl = websiteUrl + 'storage?ref=usb';
export const stylesSourceUrl = 'https://www.zotero.org/styles-files/styles.json';
export const streamingApiUrl = 'ws://192.168.62.111:8081/';
export const translateUrl = 'location' in window ? window.location.origin : '';
export const pdfReaderURL = '/static/pdf-reader/reader.html';
export const pdfReaderCMapsRoot = '/static/pdf-reader/pdf/web/cmaps/';
export const pdfWorkerURL = '/static/pdf-worker/worker.js';
export const noteEditorURL = '/static/note-editor/editor.html';

export const libraries = {
	includeMyLibrary: true,
	includeUserGroups: true,
	include: []
};
export const menus = { desktop: [], mobile: [] };
export const userId = 0;
export const userSlug = '';
export const containterClassName = process.env.TARGET === 'embedded' ? 'zotero-wle' : 'zotero-wl';
export const isEmbedded = process.env.TARGET === 'embedded';

export const preferences = {
	citationStyle: coreCitationStyles.find(cs => cs.isDefault).name,
	citationLocale: 'en-US',
	installedCitationStyles: [],
	//@NOTE: sum of all minFractions must be < 1.0
	columns: [
		{
			field: 'title',
			fraction: 0.45,
			isVisible: true,
			minFraction: 0.1,
			sort: 'asc',
		},
		{
			field: 'creator',
			fraction: 0.3,
			isVisible: true,
			minFraction: 0.05,
		},
		{
			field: 'date',
			fraction: 0.2,
			isVisible: true,
			minFraction: 0.05,
		},
		{
			field: 'itemType',
			fraction: 0.2,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'year',
			fraction: 0.1,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'publisher',
			fraction: 0.2,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'publicationTitle',
			fraction: 0.2,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'journalAbbreviation',
			fraction: .2,
			isVisible: false,
			minFraction: .05
		},
		{
			field: 'language',
			fraction: .2,
			isVisible: false,
			minFraction: .05
		},
		{
			field: 'libraryCatalog',
			fraction: .2,
			isVisible: false,
			minFraction: .05,
		},
		{
			field: 'callNumber',
			fraction: .2,
			isVisible: false,
			minFraction: .05,
		},
		{
			field: 'rights',
			fraction: .2,
			isVisible: false,
			minFraction: .05,
		},
		{
			field: 'dateAdded',
			fraction: 0.1,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'dateModified',
			fraction: 0.1,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'extra',
			fraction: 0.2,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'createdByUser',
			fraction: 0.2,
			isVisible: false,
			minFraction: 0.05,
		},
		{
			field: 'attachment',
			fraction: 0.05,
			isVisible: true,
			minFraction: 0.05,
		},
	]
};
