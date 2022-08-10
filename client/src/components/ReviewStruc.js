import React from 'react'

const ReviewStruc = (props) => {
    const {review} = props;

  return (
    <div className="card" id={`${review._id}`} style={{width: "18rem", display:"inline-block", padding: "20px", margin: "40px"}}>
            <div className="card-body">
                <p className="card-title"> <b>By: </b> {review.userName}</p>
                <p className="card-text"><b>Rating: </b>{review.rating}/5</p>
                <p className="card-text"><b>Review: </b>{review.review}</p>
                <p className="card-text"><b>Time: </b>{Date(review.date).toString()}</p>

                
            </div>
        </div>
  )
}

export default ReviewStruc