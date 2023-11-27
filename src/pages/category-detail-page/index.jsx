import { useParams } from "react-router-dom"
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import CategorySingle from "../../components/category-single";
import ServiceSingle from "../../components/service-single";

export default function CategoryDetailPage() {
    const params = useParams();
    const api = useApi();
    const [categoryDetail, setCategoryDetail] = useState(null);

    useEffect(() => {
        if(categoryDetail !== null) {
            setCategoryDetail(null);
        }

        (async () => {
            const response = await api.get(
            `public/categories/getBySlug/${params.slug}`
            );
            setCategoryDetail(response.data.data)
        })();
    },[params.slug]);

    if(categoryDetail === null){
        return <>Yükleniyor...</>
    }

    return (
    <>
    <h1>Category: {categoryDetail.category.name}</h1>
    <p>{categoryDetail.category.description}</p>
    <hr/>
    {categoryDetail.category.children.length > 0 ? (
    <>
        <h1>Sub Categories</h1>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    {categoryDetail.category.children.map((category) => {
        return <CategorySingle category={category}/>
    })}
    </div>
    </>
    ) : null}
    {categoryDetail.services.length > 0 ? (
        <>
        <h1>Services</h1>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
    {categoryDetail.services.map((service) => {
        return <ServiceSingle service={service}/>
    })}
    </div>
        </>
    ) : null}
    <br/>
    slug: {params.slug}
    </>
    )
}