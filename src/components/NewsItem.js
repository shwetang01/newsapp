import React from 'react'

const NewsItem =(props)=> {
 
    let {title,description,imageUrl,newsUrl,author,publishedAt,source}= props;
    return (
      <div className="my-3 mx-3">
        <div className="card text-center" >
  <img src={!imageUrl?"https://media.istockphoto.com/id/1369150014/vector/breaking-news-with-world-map-background-vector.jpg?s=612x612&w=0&k=20&c=9pR2-nDBhb7cOvvZU_VdgkMmPJXrBQ4rB1AkTXxRIKM=": imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}..</h5>
    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"style={{left:'92%',zIndex:'1'}}>{source}
  </span>
    <p className="card-text">{description}..</p>
    <a href={newsUrl} target="_blank"  rel="noreferrer"  className="btn btn-sm btn-primary">Read more..</a>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(publishedAt).toGMTString()}</small></p>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
