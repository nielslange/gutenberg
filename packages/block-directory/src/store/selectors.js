/**
 * External dependencies
 */
import { get } from 'lodash';

/**
 * Returns true if application is requesting for downloable blocks.
 *
 * @param {Object} state       Global application state.
 *
 * @return {Array} Downloadable blocks
 */
export function isRequestingDownloadableBlocks( state ) {
	return state.downloadableBlocks.isRequestingDownloadableBlocks;
}

/**
 * Returns the available uninstalled blocks
 *
 * @param {Object} state       Global application state.
 * @param {string} filterValue Search string.
 *
 * @return {Array} Downloadable blocks
 */
export function getDownloadableBlocks( state, filterValue ) {
	if ( ! state.downloadableBlocks.results[ filterValue ] ) {
		return [];
	}
	return state.downloadableBlocks.results[ filterValue ];
}

/**
 * Returns true if user has permission to install blocks.
 *
 * @param {Object} state Global application state.
 *
 * @return {boolean} User has permission to install blocks.
 */
export function hasInstallBlocksPermission( state ) {
	return state.downloadableBlocks.hasPermission;
}

/**
 * Returns the block types that have been installed on the server.
 *
 * @param {Object} state Global application state.
 *
 * @return {Array} Block type items.
 */
export function getInstalledBlockTypes( state ) {
	return get( state, [ 'downloadableBlocks', 'installedBlockTypes' ], [] );
}
