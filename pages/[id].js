import { useRouter } from "next/router";
import React from "react";
import Components from "./components";
import SectionBasics from "../pages-sections/Components-Sections/SectionBasics";
import api from '../apis'
export default function ProductView() {
    const router = useRouter()
    const { id } = router.query
    console.log("id::",id);
    const [data, setData] = React.useState();
    const getProductData = async () => {
        try {

            const response = await api(`/product-code-generation?id=${id}`)
            console.log("response data::",response);
            if (response.status == 200) {
                setData(response.data.data)
            }
            else if (response.status == 500) {
                router.push('/500')
            }
            else {
                router.push('/404')
            }
        }
        catch (error) {
            console.error(error)
            router.push('/500')

        }
    }
    React.useEffect(() => {
        if (id) {
            getProductData()
        }
    }, [id]);
    if (data) {
        return < SectionBasics id={id} data={data} />
    }
}