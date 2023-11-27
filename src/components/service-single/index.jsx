import { Link } from "react-router-dom"
import ImgFallBack from "../img-fallback"

export default function ServiceSingle(props){
    return (
    <>
        <div className="col-md-3" key={props.service.id}>
            <div className="card mb-4 rounded-3 shadow-sm border-success">
              <div className="card-header py-3 text-bg-success border-success" 
              style={{height: "100px"}}
              >
                <h4 className="my-0 fw-normal">
                    {props.service.name}
                </h4>
              </div>
              <div className="card-body">

                <ImgFallBack 
                src={props.service.image} 
                style={{width: "100%", margin: "10px", aspectRatio: 1}}
                />

                <Link 
                to={`/services/${props.service.slug}`} 
                className="w-100 btn btn-lg btn-success"
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