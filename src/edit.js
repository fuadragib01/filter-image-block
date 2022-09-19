/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
    useBlockProps,
    MediaUpload,
    MediaPlaceholder,
} from "@wordpress/block-editor";
import { Button } from "@wordpress/components";

/**
 * Internal depencencies
 */
import classnames from "classnames";

import Inspector from "./inspector";

export default function Edit(props) {
    const {
        attributes,
        setAttributes,
        className,
        clientId,
        isSelected,
    } = props;
    const { images, newImage, filter, categories } = attributes;

    const handleBtnClick = (name) => {
        let updatedImageArray = images.map((item) => {
            if (name === "All") {
                return {
                    ...item,
                    catClass: "show",
                };
            }
            if (item.catText == name) {
                return {
                    ...item,
                    catClass: "show",
                };
            } else {
                return {
                    ...item,
                    catClass: "hide",
                };
            }
        });

        setAttributes({ images: updatedImageArray });
    };

    const blockProps = useBlockProps({
        className: classnames(className, `custom-class`),
    });

    function onImageSelect(images) {
        let updatedImageArray = images.map((item) => {
            return {
                ...item,
                catClass: "show",
            };
        });

        setAttributes({ images: updatedImageArray });
    }

    let cats = ["All"];
    images.map((item) => {
        if (item.catText !== undefined) {
            cats.push(item.catText);
        }
    });
    cats = cats.filter((e, i, a) => a.indexOf(e) === i);

    return (
        <>
            {isSelected && (
                <Inspector
                    attributes={attributes}
                    setAttributes={setAttributes}
                />
            )}

            {images?.length === 0 && (
                <>
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
                </>
            )}

            <div {...blockProps}>
                <div className={`block-wrapper`}>
                    {images?.length > 0 && (
                        <Fragment>
                            {cats.length > 1 && filter && (
                                <div className={`categories`}>
                                    {cats.map((cat) => (
                                        <TagButton
                                            name={cat}
                                            handleBtnClick={handleBtnClick}
                                        />
                                    ))}
                                </div>
                            )}
                            <div className={`img-block-wrapper`}>
                                {images.map((image, index) => (
                                    <a
                                        key={index}
                                        className={`gallery-img ${image?.catClass} ${image.catText}`}
                                    >
                                        <span className="gallery-wrapper">
                                            <img
                                                className="gallery-img"
                                                src={image.url}
                                                image-index={index}
                                            />
                                        </span>
                                    </a>
                                ))}
                            </div>
                            <MediaUpload
                                onSelect={(newImage) => {
                                    newImage[0].catClass = "show";
                                    let updatedImages = [
                                        ...images,
                                        ...newImage,
                                    ];

                                    setAttributes({
                                        images: updatedImages,
                                    });
                                }}
                                accept="image/*"
                                allowedTypes={["image"]}
                                multiple
                                value={newImage}
                                render={({ open }) =>
                                    !newImage && (
                                        <Button
                                            className="eb-gallery-upload-button"
                                            label={__(
                                                "Add Image",
                                                "essential-blocks"
                                            )}
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

const TagButton = ({ name, handleBtnClick }) => {
    return (
        <button className={`tag`} onClick={() => handleBtnClick(name)}>
            {name}
        </button>
    );
};
