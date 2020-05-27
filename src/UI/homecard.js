import React from 'react'

const divStyle = {
    //Style removido por causar bug na resposividade
}

const imgStyle = {
    paddingTop: '3px',
    with: '100px'
}


const HomeCard = (props) => {
    return (
        <div className="col-12 col-sm-4">
            <div className="card" style={divStyle}>
                <img src="https://png.pngtree.com/element_our/20190528/ourlarge/pngtree-financial-icon-image_1174896.jpg" class="card-img-top" style={imgStyle} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="-" className="btn btn-primary" onClick={props.goto}>Go to Somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default HomeCard
