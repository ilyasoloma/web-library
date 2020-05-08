import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icon from './ui/icon';
import LibraryContainer from '../container/library';
import { preferencesLoad, initialize, fetchLibrarySettings, fetchAllCollections, fetchAllGroups,
toggleTransitions, triggerResizeViewport } from '../actions';
import { get } from '../utils';

const LoadingCover = () => (
	<div className="loading-cover">
		<Icon type={ '32/z' } width="32" height="32" />
	</div>
);

const Loader = () => {
	const dispatch = useDispatch();

	const { libraryKey, userLibraryKey } = useSelector(state => state.current);
	const config = useSelector(state => state.config);
	const { itemTypes, itemFields, creatorFields } = useSelector(state => state.meta)
	const tagColors = useSelector(state => get(state, ['libraries', libraryKey, 'tagColors'], null));
	const isFetchingGroups = useSelector(state => state.fetching.allGroups);
	const isFetchingAllCollections = useSelector(
		state => get(state, ['libraries', libraryKey, 'collections', 'isFetchingAll'], null)
	);
	const hasCheckedCollections = useSelector(
		state => get(state, ['libraries', libraryKey, 'collections', 'totalResults'], null) !== null
	);
	const isWaitingForCollections = !hasCheckedCollections || isFetchingAllCollections;

	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		if(itemTypes && itemFields && creatorFields && tagColors && !isWaitingForCollections && !isFetchingGroups) {
			setIsReady(true);
		}
	}, [itemTypes, itemFields, creatorFields, tagColors, isWaitingForCollections, isFetchingGroups]);

	useEffect(() => {
		dispatch(preferencesLoad());
		dispatch(initialize());
		dispatch(triggerResizeViewport(window.innerWidth, window.innerHeight));
		dispatch(fetchLibrarySettings(libraryKey));
		dispatch(toggleTransitions(true));
		dispatch(fetchAllCollections(libraryKey));

		if(config.includeUserGroups) {
			dispatch(fetchAllGroups(userLibraryKey));
		}
	}, []);

	return isReady ? <LibraryContainer /> : <LoadingCover />;
}

export default Loader;
