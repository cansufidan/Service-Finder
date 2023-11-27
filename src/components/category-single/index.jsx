import { Link } from "react-router-dom"
import ImgFallBack from "../img-fallback"


export default function CategorySingle(props){
    return (
    <>
        <div className="col-md-3" key={props.category.id}>
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-bg-primary border-primary" 
              style={{height: "100px"}}
              >
                <h4 className="my-0 fw-normal">
                    {props.category.name}
                </h4>
              </div>
              <div className="card-body">
                
                <ImgFallBack 
                src={props.category.image} 
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
                to={`/category/${props.category.slug}`} 
                className="w-100 btn btn-lg btn-primary"
                >
                <i className="fa-solid fa-circle-right"/>
                &nbsp;Details
                </Link>
              </div>
            </div>
          </div>
    </>
    )
}