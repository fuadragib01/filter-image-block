/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { InspectorControls, PanelColorSettings } from "@wordpress/block-editor";
import {
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
	ButtonGroup,
	BaseControl,
	TabPanel,
	TextControl
} from "@wordpress/components";
import { useEffect, useState } from "@wordpress/element";
import { select } from "@wordpress/data";

/**
 * Internal depencencies
 */

import objAttributes from "./attributes";

import {
	TEXT_ALIGN,
	UNIT_TYPES,
} from "./constants";

function Inspector(props) {
	const { attributes, setAttributes } = props;
	const {
		blockId,
		filter,
		images,
		categories,
	} = attributes;


	const [catText, setCatText] = useState('');

	const handleCatText = (catText, id) => {
		const validUrl = catText.length > 0;
		let updatedImageArray = images.map((item) => {
			if (item.id == id) {
				return {
					...item,
					catText: catText,
					isValidUrl: validUrl,
				};
			}
			return item;
		});
		
		// console.log(id, catText, updatedImageArray);
		// console.log('categories---', id, catText, updatedImageArray2);
		setAttributes({ images: updatedImageArray });
		// setAttributes({ categories: updatedImageArray2 });
	};

	const catTextHandle = (text) => {

		// setAttributes({catText: text?.target?.value});
		// setAttributes({catText: text});
		setCatText(text)
	};
	const handleCatSubmit = (e) => {
		e.preventDefault();
		setCatText( '')

		const newArr = [
			...categories,
			catText
		]

		// alert(catText);
		console.log(newArr);
		setAttributes({categories:newArr})

	}

	
	return (
		<InspectorControls key="controls">
			<div className="plugin-panel-control">
				<PanelBody
					title={__("General", "gutenberg-plugin-prototype")}
					initialOpen={true}
				>
					<ToggleControl
						label={__("Image Filter", "gutenberg-plugin-prototype")}
						checked={filter}
						onChange={() =>
							setAttributes({ filter: !filter })
						}
					/>
				</PanelBody>
				<PanelBody title={__("Categories", "image-filter")}>
					<>
						<form onSubmit={handleCatSubmit}>
							{/* <label >Categories<br />
							<input type="text" value={catText} name="catText" onChange={catTextHandle} />
							</label> */}
							<TextControl
								label={__("Category", "essential-blocks")}
								value={catText}
								onChange={(catText) => setCatText(catText)}
							/>
							<input type="submit" name="catBtn" value="Add" />
						</form>
						{categories.length > 0 && 
							<span className={`cats`}>
								{categories.map((cat) => (
									<span>{cat}</span>
								))}
							</span>
						}
					</>
				</PanelBody>

				<PanelBody title={__("Images", "essential-blocks")}>
					{images.map((item, index) => {
						console.log('item----', item.catText);
						return (
							<PanelBody
								title={
									"Image " + (index + 1)
								}
								initialOpen={false}
								onToggle={() =>
									setAttributes({ initialSlide: index })
								}
								className="eb-slider-item-single-panel"
								key={index}
							>
									<>
										<SelectControl
											label={__("Category", "essential-blocks")}
											value={item.catText}
											options={categories.map( (cat) => {
												const newObj = {label: cat, value: cat};
												return newObj;
											})}
											onChange={(text) =>
												handleCatText(text, item.id)
											}
										/>
									</>
							</PanelBody>
						);
					})}
				</PanelBody>
			</div>
		</InspectorControls>
	);
}

export default Inspector;
