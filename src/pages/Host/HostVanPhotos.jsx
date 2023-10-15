import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {

  const { hostVanDetail } = useOutletContext();

  return (
    <>
      <img 
        src={hostVanDetail.imageUrl} 
        alt="a van" 
        className="host-van-photo"/>
    </>
  )
}
