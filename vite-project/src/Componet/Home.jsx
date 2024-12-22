import img1 from "../assets/images/img2.png"
export default function Home(){
    return(
        <>
        <div className="hero h-[800px] bg-center bg-cover md:bg-contain ">
            <div>
                <div>
                    <div>
                        <div></div>
                    </div>
                    <div>
                        <div className="pl-[1300px] pt-6 w-[100%] ">
                            <img src={img1} alt=""  />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}