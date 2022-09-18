import { useBlockProps } from "@wordpress/block-editor";
// import { useState, useEffect } from "@wordpress/element";
/**
 * Internal depencencies
 */
import classnames from "classnames";

const Save = (props) => {
    const { attributes } = props;
    const { images, filter } = attributes;

    // const [tag, setTag] = useState('All');
    // const [filteredImages, setFilteredImages] = useState(images);

    // useEffect( () => {
    // 	tag === 'All' ? setFilteredImages(images) : setFilteredImages( images.filter(image=> image.catText === tag ))
    // }, [tag, images] );

    // const blockProps = useBlockProps({
    // 	className: classnames(className, `custom-class`),
    // });

    let urls = [];
    images.map((image) => urls.push(image.url));
    let cats = ["All"];
    images.map((item) => cats.push(item.catText));
    console.log(urls.length, "from frontend");
    cats = cats.filter((e, i, a) => a.indexOf(e) === i);
    // console.log(cats);

    return (
        <div {...useBlockProps.save()}>
            <div className={`block-wrapper`}>
                {images?.length > 0 && (
                    <>
                        {cats.length > 0 && filter && (
                            <div className={`categories`}>
                                {cats.map((cat) => (
                                    <TagButton name={cat} />
                                ))}
                            </div>
                        )}
                        <div className={`img-block-wrapper`}>
                            {images.map((image, index) => (
                                <a key={index} className={`gallery-img`}>
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
    return <button className={`tag`}>{name}</button>;
};
export default Save;
