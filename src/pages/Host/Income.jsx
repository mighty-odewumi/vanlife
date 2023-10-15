export default function Income() {
  return (
    <>
      <div className="income">
        <h2>Income</h2>
        <p>Last <span>30 days</span></p>

        <span className="income-amount">
          $2,260
        </span>

        <img src="/assets/graph.svg" alt="a graph" />

        <div className="income-listing">
          <div className="income-listing-top">
            <h3>Your transactions (3)</h3>
            
            <p>Last <span>30 days</span></p>
          </div>

          <div className="income-listing-card">
            <span className="income-listing-price">$720</span>
            <span>1/12/22</span>
          </div>

          <div className="income-listing-card">
            <span className="income-listing-price">$560</span>
            <span>10/11/22</span>
          </div>

          <div className="income-listing-card">
            <span className="income-listing-price">$980</span>
            <span>12/12/22</span>
          </div>
        </div>
      </div>
    </>
  )
}
