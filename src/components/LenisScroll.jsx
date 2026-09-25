import Lenis from "lenis"
import { useEffect } from "react"

const LenisScroll = () => {
  
    useEffect(()=>{
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel:true,
            syncTouch:false,
            anchors:{
                offset:-120
            },
        });
        let frameId;
        const raf = (time)=>{
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        }
        frameId = requestAnimationFrame(raf)
        return ()=>{
            cancelAnimationFrame(frameId)
            lenis.destroy()
        }
    },[])
 
  return null
}

export default LenisScroll
