import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PrivateRouter: React.FC<PropsWithChildren> = ({children}) => {
    const user = useSelector((state : any) => state.hotelUser)
  return (
    <div>
        {
            user? <div>{children}</div> : <Navigate to="/sign-in" />
        }
    </div>
  )
}

export default PrivateRouter