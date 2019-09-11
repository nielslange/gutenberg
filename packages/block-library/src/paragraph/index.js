/**
 * WordPress dependencies
 */
import blockMetadata from '@wordpress/babel-block.macro';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import deprecated from './deprecated';
import edit from './edit';
import icon from './icon';
import save from './save';
import transforms from './transforms';

const { name, ...metadata } = blockMetadata( './block.json' );

export { metadata, name };

export const settings = {
	icon,
	example: {
		attributes: {
			content: __( 'Start writing, no matter what. The water does not flow until the faucet is turned on.' ),
		},
	},
	supports: {
		className: false,
	},
	transforms,
	deprecated,
	merge( attributes, attributesToMerge ) {
		return {
			content: ( attributes.content || '' ) + ( attributesToMerge.content || '' ),
		};
	},
	getEditWrapperProps( attributes ) {
		const { width } = attributes;
		if ( [ 'wide', 'full', 'left', 'right' ].indexOf( width ) !== -1 ) {
			return { 'data-align': width };
		}
	},
	edit,
	save,
};
