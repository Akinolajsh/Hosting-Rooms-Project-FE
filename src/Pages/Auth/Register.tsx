import pix from "../../assets/auth-bg-pix.jpg"

const Register = () => {
  return (
    <div className="w-full h-[100vh] flex bg-cover bg-center bg-no-repeat" 
    style={{backgroundImage : `url(${pix})`}}
    >
      {/* cover */}
      <div className="w-full h-[100vh] bg-green-950 bg-opacity-30 flex justify-center items-center">
        {/* card */}
        <div className="w-[600px] h-[200px] bg-slate-600 flex">
                {/* left */}
                <div className="w-[50%] h-[100%] flex flex-col items-center border-green-100 border">
                            left
                </div>

                {/* right */}
                <div className="w-[50%] h-[100%] flex flex-col items-center  border-green-100 border">
                            Right
                </div>
        </div>
      </div>
    </div>
  )
}

export default Register
