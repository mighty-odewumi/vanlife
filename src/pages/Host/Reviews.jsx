export default function Reviews() {
  
  return (
    <>
      <div className="reviews">
        <div className="reviews-top">
          <h1>Your reviews</h1>
          <span>last 30 days</span>
        </div>

        {/* <div className="review-count-bold">
          <h3>5.0</h3>
          <img src="/assets/star.svg" alt="a star" />
          <span>overall rating</span>
        </div> */}

        <img 
          src="/assets/ratings.svg" 
          alt="reviews" 
          className="ratings-img"
        />

        <div className="reviews-text">
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />

          <p className="reviewer"><span className="reviewer-name">Elliot</span>
          &nbsp;December 1, 2022
          </p>

          <p className="review-text-main">
            The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
          </p>

          <hr />
        </div>

        <div className="reviews-text">
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />
          <img src="/assets/star.svg" alt="a star" />

          <p className="reviewer"><span className="reviewer-name">Sandy</span>
            &nbsp;November 12, 2022
          </p>

          <p className="review-text-main">
            The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
          </p>
        </div>
      </div>
    </>
  )
}
