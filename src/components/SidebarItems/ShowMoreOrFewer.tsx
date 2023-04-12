

interface MyProps {
    icon: string
    text: string
}

const ShowMoreOrFewer = ({ icon, text }: MyProps) => {

  return (
    <>
        <div className="w-full h-10 flex items-center rounded-xl hover:bg-[#303030] cursor-pointer">
            <div className="w-full h-full px-2.5 flex items-center space-x-3 text-white">
                <span className="inline-block w-6 h-6">
                    <img src={icon} alt="/" className='w-full h-full' />
                </span>

                <h3 className="text-sm font-normal">{text}</h3>
            </div>
        </div>
    </>
  )
}

export default ShowMoreOrFewer