 
 import GalleryItem from '../components/Item.jsx'

function Gallery() {
 
    return (
        
        <div className="Gallery"> 
            <GalleryItem text = {'text1'} img = {'img1.png'} header = {'Header1'} />
            <GalleryItem text = {'text2'}   img = {'img2.png'} header = {'Header2'}/>
        </div>
    )
}

export default Gallery;