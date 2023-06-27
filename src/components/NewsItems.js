import React, { Component } from 'react'

export default class NewsItems extends Component {
   
    render() {
        let {title,description,imageUrl,newsUrl,author,date}=this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={!imageUrl?"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/ezgif.com-gif-maker-85-sixteen_nine.jpg":imageUrl} className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toUTCString()}</small></p>
                            <a rel="noreferrer"  href={newsUrl} target ="_blank"className="btn btn-sm btn-dark">Read More</a>
                            
                        </div>
                </div>
            </div>
        )
    }
}



