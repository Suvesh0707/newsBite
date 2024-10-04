import React, { Component } from 'react'
export class NewsCard extends Component {
  render() {
    let{title, description, imageUrl, newsUrl,author,time} = this.props;
    return (
        <>
        <div className="w-[380px] m-4 bg-[#404247] rounded-lg shadow-md overflow-hidden flex flex-col border-2 border-[#ffffff]">
          <img className="w-full h-48 object-cover" src={!imageUrl ? "https://www.shutterstock.com/image-vector/do-not-look-eye-icon-260nw-480532234.jpg": imageUrl} alt="News Image" />

          <div className="p-4 flex flex-col justify-between flex-grow">
            <div>
              <h2 className="font-semibold text-lg text-white mb-2">
                {title}
              </h2>
              <p className="text-gray-400 mb-4 text-base">
                {description}
              </p>
            </div>
                
            <div className=" justify-between items-center">
            <div className='my-3'>
            <h2 className="text-sky-500 font-medium title-font tracking-wider text-base">{author ?author :"unknown"}</h2>
            <p className="text-gray-400">{new Date(time).toGMTString()}</p>
            </div>

              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
                <a href={newsUrl} target='_blank'>Read More</a>
              </button>
            </div>
          </div>
        </div>
        </>
        
    )
  }
}

export default NewsCard
