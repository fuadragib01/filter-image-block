/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
	BlockControls,
	useBlockProps,
	MediaUpload,
	MediaPlaceholder,
} from "@wordpress/block-editor";
import {
	ToolbarGroup,
	ToolbarItem,
	ToolbarButton,
	Button,
} from "@wordpress/components";
import { useState, useEffect } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit(props) {
	const { attributes, setAttributes, className, clientId, isSelected } = props;
	const {
		blockId,
		images,
		sources,
		newImage,
		filter,
	} = attributes;

	// 
	// useEffect(() => {
	// 	setAttributes({
	// 		blockId: clientId,
	// 	});
	// }, []);

	const [tag, setTag] = useState('All');
	const [filteredImages, setFilteredImages] = useState(images);

	useEffect( () => {
		tag === 'All' ? setFilteredImages(images) : setFilteredImages( images.filter(image=> image.catText === tag ))
 	}, [tag, images] );

	const blockProps = useBlockProps({
		className: classnames(className, `custom-class`),
	});

	function onImageSelect(images) {
		let sources = [];
		images.map((image) => {
			let item = {};
			item.url = image.url;
			sources.push(item);
		});
		setAttributes({ images, sources });
	}
	
	let urls = [];
	filteredImages.map((image) => urls.push(image.url));
	let cats = ['All'];
	images.map((item) => cats.push(item.catText));
	cats = cats.filter((e, i, a) => a.indexOf(e) === i);

	console.log(filteredImages, tag);
	console.log(urls, tag);
	console.log(filteredImages, tag);

	return (
		<>
			{isSelected && (
				<Inspector attributes={attributes} setAttributes={setAttributes} />
			)}
			<>
				{urls.length === 0 && (
					<MediaPlaceholder
						onSelect={(images) => onImageSelect(images)}
						accept="image/*"
						allowedTypes={["image"]}
						multiple
						labels={{
							title: "Images",
							instructions:
								"Drag media files, upload or select files from your library.",
						}}
					/>
				)}
			</>
			<div {...blockProps}>
				<div className={`block-wrapper ${blockId}`} data-id={blockId}>
					{/* <h2>Block Prototype</h2> */}
					{/* ... */}
					{urls.length > 0 && (
						<Fragment>
							{cats.length > 0 && filter &&
								<div className={`categories`}>
									{cats.map((cat) => (
										<TagButton name={cat} handleSetTag={setTag} />
									))}
								</div>
							}
							<div className={`img-block-wrapper`}>
								{filteredImages.map((source, index) => (
									<a key={index} className={`gallery-img`}>
										<span className="gallery-wrapper">
											<img
												className="gallery-img"
												src={source.url}
												image-index={index}
											/>
										</span>
									</a>
								))}
							</div>
							<MediaUpload
								onSelect={(newImage) => {
									let updatedImages = [...images, ...newImage];
									let sources = [];

									updatedImages.map((image) => {
										let item = {};
										item.url = image.url;
										sources.push(item);
									});
									
									setAttributes({ images: updatedImages, sources });
								}}
								accept="image/*"
								allowedTypes={["image"]}
								multiple
								value={newImage}
								render={({ open }) =>
									!newImage && (
										<Button
											className="eb-gallery-upload-button"
											label={__("Add Image", "essential-blocks")}
											icon="plus-alt"
											onClick={open}
										>
											Add More Images
										</Button>
									)
								}
							/>
					</Fragment>
					)}
				</div>
			</div>
		</>
	);
}


const TagButton = ( { name, handleSetTag } ) => {
	return (
		<button className={`tag`} onClick={ () => handleSetTag(name) }>{ name }</button>
	);
}