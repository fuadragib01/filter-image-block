import { useBlockProps } from "@wordpress/block-editor";
// import { useState, useEffect } from "@wordpress/element";
/**
 * Internal depencencies
 */
import classnames from "classnames";

const Save = (props) => {
    const { attributes } = props;
    const { images, filter, categories } = attributes;

    let cats = ["All"];
    images.map((item) => {
        if (item.catText !== undefined) {
            cats.push(item.catText);
        }
    });
    cats = cats.filter((e, i, a) => a.indexOf(e) === i);

    return (
        <div {...useBlockProps.save()}>
            <div className={`block-wrapper`}>
                {images?.length > 0 && (
                    <>
                        {cats.length > 1 && filter && (
                            <div className={`categories`}>
                                {cats.map((cat) => (
                                    <TagButton name={cat} />
                                ))}
                            </div>
                        )}
                        <div className={`img-block-wrapper`}>
                            {images.map((image, index) => (
                                <a
                                    key={index}
                                    className={`gallery-img all ${image?.catText} ${image.catClass}`}
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
                    </>
                )}
            </div>
        </div>
    );
};

const TagButton = ({ name }) => {
    return <button className={name}>{name}</button>;
};
export default Save;
