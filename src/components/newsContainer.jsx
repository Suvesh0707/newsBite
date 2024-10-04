import React, { Component } from 'react';
import NewsCard from './newsCard';
import PropTypes from 'prop-types';

export class NewsContainer extends Component {
    static defaultProps = {
        q: 'ind',
        pageSize: 20,
    };

    static propTypes = {
        q: PropTypes.string,
        pageSize: PropTypes.number,
    };

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        };
    }

    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async fetchArticles() {
        const { q, pageSize } = this.props;
        const { page } = this.state;
        this.setState({ loading: true });

        try {
            let url = `https://newsapi.org/v2/top-headlines?apiKey=cef7095865b643b49ad01f97dfaf99d9&q=${q}&page=${page}&pageSize=${pageSize}`;
            let data = await fetch(url);
            let parseData = await data.json();
            console.log(parseData);
            this.setState({
                articles: parseData.articles,
                totalResults: parseData.totalResults,
                loading: false,
            });
            document.title = `${this.capitalizeFirstLetter(this.props.q)} - NewsBite`;
        } catch (error) {
            console.error("Fetch error:", error);
            this.setState({ loading: false });
        }
    }

    async componentDidMount() {
        await this.fetchArticles();
    }

    async componentDidUpdate(prevProps) {
        if (prevProps.q !== this.props.q) {
            this.setState({ page: 1 }, () => this.fetchArticles());
        }
    }

    handlePrevClick = async () => {
        if (this.state.page > 1) {
            this.setState((prevState) => ({ page: prevState.page - 1 }), () => {
                this.fetchArticles();
            });
        }
    };

    handleNextClick = async () => {
        if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
            this.setState((prevState) => ({ page: prevState.page + 1 }), () => {
                this.fetchArticles();
            });
        }
    };

    render() {
        return (
            <>
                <h1 className="text-5xl font-extrabold text-center mt-3 mx-auto text-white tracking-wide leading-tight p-4 rounded-lg uppercase">
                    NewsBite - Top {this.capitalizeFirstLetter(this.props.q)} Category
                </h1>

                {this.state.loading && <div className="text-center text-white flex justify-center items-center text-2xl font-extrabold mt-3 mx-auto tracking-wide leading-tight p-4 rounded-lg uppercase">Loading...</div>}

                <div className='flex flex-wrap ml-4 md:ml-12 lg:ml-36'>
                    {this.state.articles.length > 0 ? (
                        this.state.articles.map((element) => (
                            <NewsCard
                                key={element.url}
                                title={element.title}
                                description={element.description}
                                imageUrl={element.urlToImage}
                                newsUrl={element.url}
                                author={element.author}
                                time={element.publishedAt}
                            />
                        ))
                    ) : (
                        !this.state.loading && <div className="text-center text-white">No articles found.</div>
                    )}

                    {/* Next and previous button */}
                    <div className="container flex justify-evenly my-4">
                        <button
                            disabled={this.state.page <= 1}
                            onClick={this.handlePrevClick}
                            className={`${
                                this.state.page <= 1
                                    ? 'bg-gray-600 text-gray-700 cursor-not-allowed'
                                    : 'bg-white hover:scale-105 transform transition duration-200 text-black'
                            } font-bold py-2 px-4 rounded mr-2`}
                        >
                            &larr; Previous
                        </button>
                        <button
                            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
                            onClick={this.handleNextClick}
                            className={`${
                                this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)
                                    ? 'bg-gray-600 text-gray-700 cursor-not-allowed'
                                    : 'bg-white hover:scale-105 transform transition duration-200 text-black'
                            } font-bold py-2 px-4 rounded ml-2`}
                        >
                            Next &rarr;
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default NewsContainer;
