const attributes = {
	// blockId attribute for making unique className and other uniqueness
	blockId: {
		type: "string",
	},
	media: {
		type: 'object'
	},
	images: {
		type: 'array',
		default: []
	},
	sources: {
		type: "array",
		default: [],
	},
	newImage: {
		type: "string",
	},
	filter: {
		type: 'boolean',
		default: false
	},
	categories: {
		type: 'array',
		default: []
	},
	catText: {
		type: 'string',
		default: ''
	}
};

export default attributes;
