import axios from 'axios'
import { useEffect, useState } from 'react'

const Abus = props => {
  const [paras, setPara] = useState([])
  const [images, setImage] = useState([])
    const fetchAb = () => {
        axios
          .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/AboutUs`)
          .then(response => {
            const para = response.data.para
            const image = response.data.image
            setPara(para)
            setImage(image)
          })
          .catch(err => {
            console.log(err);
          })
    }
    useEffect (() => {
      fetchAb()
    })

    return (
      <>
          <p><img style={{width: "30%", height: "30%"}} src={`${images}`}/></p>
          <p>{paras}</p>
      </>
    )
  }

export default Abus