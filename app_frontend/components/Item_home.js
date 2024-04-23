import Image from 'next/image';
import Link from 'next/link';

function Item_home({ imgSrc, title }) {
    return (
        <div className="box">
            <div className="col-lg-12 d-flex justify-content-center"> {/* Image container */}
                <Image
                    src={imgSrc} // Prop for image source
                    alt={`Image of ${title.toLowerCase()}`}
                    width={150}
                    height={150}
                />
                <p className="font-bold">{title}</p> {/* Title prop */}
            </div>
        </div>
    );
}

export default Item_home;