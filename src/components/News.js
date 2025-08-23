import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News =(props)=> {  
  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults] = useState(0)
  
  
  const updateNews= async()=>{
    props.setProgress(0);
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c5205946daee484887e5b6c6c491c9b6&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    props.setProgress(20);
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData= await data.json()
    console.log(parsedData);

    setArticles( parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false);
    props.setProgress(100);
  }
  
  useEffect(()=>{
     document.title= `${props.category}-Daily news`
    updateNews();
     // eslint-disable-next-line
  },[]);

  
//  const handleprevClick= async()=>{
//       setPage(page -1);
//     updateNews();

//   }

//  const handleNextClick= async()=>{
//     setPage(page +1)
//     updateNews();
    
//   }

 const fetchMoreData= async()=>{
    
    let url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=c5205946daee484887e5b6c6c491c9b6&page=${page+1}&pageSize=${props.pageSize}`;
    // setLoading(true);
    setPage(page +1)
    let data = await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    setArticles( articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)   
  }

    return (
    <>      
        <h1 className="text-center " style={{margin:"25px 0px", marginTop:"80px"}} >DailyNews-Top {props.category} headlines</h1>
        {loading && <Spinner/>}

        <InfiniteScroll
        dataLength={articles.length} 
        next={fetchMoreData}
        hasMore={articles.length !==totalResults}
        loader={<Spinner/>}>
          <div className="container">
          <div className="row">
        {articles.map(
          (element)=>{
          return <div className="col-md-3" key={element.url}>
          <NewsItem           
          title={element.title?element.title : ""} 
          description={element.description?element.description: ""} 
          imageUrl={element.urlToImage}
          newsUrl={element.url}
          author={element.author}
          source={element.source.name}
          publishedAt={element.publishedAt}
           />
        </div>
          })}
      </div>
    </div>
      </InfiniteScroll>

      </>
    )
  
}
export default News

News.defaultProps={
  country:"us",
  pageSize: 8 ,
  category: "general",

};

 News.propTypes={
  country: PropTypes.string,
  pageSize:PropTypes.number,
  category: PropTypes.string,

};


 