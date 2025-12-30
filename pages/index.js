import { useRouter } from 'next/router'
import React from 'react'
import Components from './components'
import SectionBasics from '../pages-sections/Components-Sections/SectionBasics'
import api from '../apis'

export default function Index() {
  const router = useRouter()
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    const pathParts = router.asPath.split('/')
    const dynamicId = pathParts[1] // the segment after "/"

    if (!dynamicId) {
      router.push('/400')
      return
    }

    fetchData(dynamicId)
  }, [router.asPath])

  const fetchData = async (id) => {
    console.log("fetrch iddd:",id);
    try {
      const response = await api(`/product-code-generation?id=${id}`)
      if (response.status === 200) {
        setData(response.data.data)
      } else {
        router.push('/404')
      }
    } catch (err) {
      router.push('/500')
    }
  }

  return data ? <SectionBasics data={data} /> : <div>Loading..</div>
}