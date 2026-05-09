import { useEffect, useState } from "react"

const useOnlineViewer = () => {

  const [onlineViewer, setOnlineViewer] = useState(true);
   useEffect(() => {

    window.addEventListener("online", () => {setOnlineViewer(true)});
    window.addEventListener("offline", () => {setOnlineViewer(false)});
  }, [])

  return onlineViewer;
}

export default useOnlineViewer;