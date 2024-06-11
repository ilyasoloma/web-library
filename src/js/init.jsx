import { createRoot } from 'react-dom/client';
import { LOCATION_CHANGE } from 'connected-react-router';
import * as defaults from './constants/defaults';
import Main from './component/main';
import { setupStore } from './store';
import { configure } from './actions';

const init = (element, config = {}) => {
    console.log('init config:', config);

    const libraries = { ...defaults.libraries, ...config.libraries };
    const apiConfig = { ...defaults.apiConfig, ...config.apiConfig };
    const { store, history } = setupStore();

    console.log('init libraries:', libraries);
    console.log('init apiConfig:', apiConfig);

    store.dispatch(
        configure({ ...defaults, ...config, apiConfig, libraries })
    );

    if (store.getState().config.isEmbedded) {
        store.dispatch({
            type: LOCATION_CHANGE,
            payload: {
                location: {
                    pathname: '/',
                    search: '',
                    hash: '',
                    key: '',
                },
                action: 'POP',
                isFirstRendering: true
            }
        });
    }

    if (process.env.NODE_ENV === 'development') {
        // only in development, expose redux store
        window.WebLibStore = store;
        window.WebLibCrash = () =>
            window.WebLibStore.dispatch({ type: 'CONFIGURE', ...defaults, ...config, apiConfig, libraries, menus: null });
    }

    const root = createRoot(element);
    root.render(<Main store={store} history={history} />);
}

export default init;

