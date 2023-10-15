import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {

  const { hostVanDetail } = useOutletContext();

  return (
    <>
      <div className="host-van-detail--details">
       
        <p><span>Name: </span>{hostVanDetail.name}</p>

        <p><span>Category: </span>{hostVanDetail.type}</p>

        <p><span>Description: </span>{hostVanDetail.description}</p>

        <p><span>Visibility: </span>Public</p>
      </div> 
    </>
  )
}
