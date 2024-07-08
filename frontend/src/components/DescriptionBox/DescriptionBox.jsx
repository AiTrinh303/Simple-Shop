import React from 'react'
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigation">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (303)</div>
      </div>
      <div className="descriptionbox-description">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, aperiam modi odit totam esse provident sit reprehenderit? Natus doloremque quas distinctio consequuntur repellendus rerum, minus odit numquam voluptates blanditiis velit Lorem ipsum dolor sit amet. </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet assumenda quibusdam recusandae ab, dolor, placeat impedit laboriosam numquam rem fuga iste quis? Quia, repellat magni, vitae quisquam consectetur ex architecto, est repellendus molestiae porro itaque.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
