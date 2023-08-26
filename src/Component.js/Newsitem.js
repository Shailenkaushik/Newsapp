import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let { title, description,imageUrl,newsUrl,author,date,source } = this.props;
    return (
    
    <div>
      <div className="card" >
      
  <span class="position-absolute top-0  translate middle badge rounded-pill bg-danger" style={{zIndex:1,right: '0%'}}>{source} <span class="visually-hidden">unread </span></span>
         
        <img src={imageUrl?imageUrl:"https://img.asmedia.epimg.net/resizer/kqsqoEmYfNOMeuw4F3n1GSjuIAw=/644x362/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/LGFDOIWHTVBK7ELW7IGG5JGHXE.jpg"} className="card-img-top" alt="..." />
        <div className="card-body">
        
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p class="card-text"><small class="text-muted">Author- {author?author:"Unknown"}, Date- {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
         
        </div>
      </div>
    </div>
    )
  }
}

export default Newsitem
