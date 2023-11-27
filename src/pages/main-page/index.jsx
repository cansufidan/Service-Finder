import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function MainPage() {
    const categoryState = useSelector(state => state.categoryState)

    return (
    <>
    <main>
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal text-body-emphasis">
        Welcome To Service Finder Project
    </h1>
      <p className="fs-5 text-body-secondary">
        Quickly build an effective pricing table for your potential 
        customers with this Bootstrap example. It’s built with default 
        Bootstrap components and utilities with little customization.
        </p>
    </div>

    <hr/>

    <h1 className="mb-5 display-4 fw-normal text-body-emphasis text-center">
        Category List
    </h1>

    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryState.categories.map((category) => {
            return ( 
            <div className="col-md-3" key={category.id}>
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary" 
              style={{height: "100px"}}
              >
                <h4 className="my-0 fw-normal">
                    {category.name}
                </h4>
              </div>
              <div className="card-body">
                <img src={category.image}
                style={{width: "100%", margin: "10px", aspectRatio: 1}}
                />
                <h1 
                className="card-title pricing-card-title">$29
                <small className="text-body-secondary fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>

                <Link 
                to={`/category/${category.slug}`} 
                className="w-100 btn btn-lg btn-primary"
                >
                <i className="fa-solid fa-circle-right"/>
                &nbsp;Details
                </Link>
              </div>
            </div>
          </div>
          )
        })}
    </div>
    </main>
    </>
    )
}