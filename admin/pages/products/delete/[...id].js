import Layout from "@/components/layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DeleteProductPage() {
    const router = useRouter();
    const [productInfo, setProductInfo] = useState()
    const {id} = router.query;
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/api/products?id='+id).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);
    function goBack() {
        router.push('/products');
    }

    async function DeleteProduct() {
        await axios.delete('/api/products?id='+id);
        goBack();
    }

    return (
        <Layout>
            <h1 className="text-center">Are you sure you want to delete "{productInfo?.title}"?</h1>
            <div className="flex gap-2 justify-center">
                <button onClick={DeleteProduct} className="btn-red">Delete</button>
                <button className="btn-default" onClick={goBack}>Cancel</button>
            </div>
        </Layout>
    );
}