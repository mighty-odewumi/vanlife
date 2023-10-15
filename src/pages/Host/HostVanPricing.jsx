import { useOutletContext } from "react-router-dom";


export default function HostVanPricing() {

  const { hostVanDetail } = useOutletContext();

  return (
    <>
      <p><span className="host-van-detail-price">${hostVanDetail.price}</span>/day</p>
    </>
  )
}
