import './about_images.scss'
const AboutImages11 = ({title, images}) => {
    return ( 
        <div className='about11_images_item'>
            <img src={images} alt="" className="about11_images_item_icon" />
            <p className="about11_images_item_title">{title}</p>
        </div>
     );
}
 
export default AboutImages11;