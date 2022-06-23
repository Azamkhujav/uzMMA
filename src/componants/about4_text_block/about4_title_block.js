import './main.scss'
const TitleBlock = ({title, description}) => {
    return ( 
        <div className='title_block_about4'>
            <h6 className="title_block_about4_title">{title}</h6>
            <p className="title_block_about4_description">{description}</p>
        </div>
     );
}
 
export default TitleBlock;