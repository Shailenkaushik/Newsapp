import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import propTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general',
    }
    static propTypes = {
        country: propTypes.string,
        pageSize: propTypes.number,
        category: propTypes.string,
    }

    constructor() {
        super();// yeh likhna cumpolsary hai
        console.log("Hello I am a constructor from News component");
        this.state = {
            page: 1,
            articles: [],
            spinner: false,
              totalResults: 0
        }
    }
    async updateNews(pageNo) {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60005f693085405582a6c7903b7ad152&page=${this.state.page}&pageSize=${this.props.pageSize} `;
        this.setState({ spinner: false });
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })
        this.props.setProgress(100);
    }
    async componentDidMount() {
        this.updateNews();
        
    }
    fetchMoreData=async()=>{
        this.setState({page: this.state.page+1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=60005f693085405582a6c7903b7ad152&page=${this.state.page}&pageSize=${this.props.pageSize} `;
        this.setState({ spinner: false });
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalResults: parsedData.totalResults,loading: false })
    }
    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateNews();

    }
    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateNews();
    }


    render() {
        return (
            <div className='container my-3'>

                <h1 className="text-center" style={{marginTop:'100px'}}>News Monkey-Top headlines</h1>
               {this.state.spinner && <Loading />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                   
                    hasMore={this.state.articles.length!==this.state.totalResults}
                    loader={<Loading/>}

                >
                 <div>
                    <div className='row'>
                        {this.state.articles.map((element) => {
                            return <div className='col-md-4 my-3' key={element.url}>
                                <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                 {/*   <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>*/}
                 </div>
                </InfiniteScroll>


            </div>
        )
    }
}

export default News
