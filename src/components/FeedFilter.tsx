import VectorRight from '../assets/Vector-right.png';
import VectorLeft from '../assets/Vector-left.png';


const filterItems = [
    'All',
    'News',
    'Real Madrid CF',
    'FC Barcelona',
    'Sports leagues',
    'Music',
    'Nollywood',
    'Sketch comedy',
    'Javscript',
    'Python',
    'Java',
    'Java',
    'Nollywood',
    'Nollywood',
    'Nollywood',
    'Nollywood',
    'Java',
]

const FeedFilter = () => {

    const slideLeft = () => {
        let slider = document.getElementById('slider') as HTMLDivElement | null;

        if (slider !== null) {
            slider.scrollLeft = slider.scrollLeft - 500;
        }
    };

    const slideRight = () => {
        let slider = document.getElementById('slider') as HTMLDivElement | null;

        if (slider !== null) {
            slider.scrollLeft = slider.scrollLeft + 500;
        }
    };

  return (
    <>
        <div className="bg-[#212121] fixed top-14 left-60 right-0 z-40 h-14">
            <div className='bg-[#212121] flex items-center relative border-t border-[#303030] border-solid'>
                <span className="absolute left-0 w-[50px] h-full flex items-center justify-center bg-[#212121] cursor-pointer z-50">
                    <img
                        src={VectorLeft}
                        alt='vector'
                        onClick={slideLeft}
                        className='rounded-full hover:bg-[#726a6a] inline-block py-2 px-3 duration-300'
                    />
                </span>
                
                <div
                    id={'slider'}
                    className='flex items-center justify-start w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                    {filterItems.map((item, index) => (
                        <span 
                            key={`${item} + ${index}`} 
                            className={`w-auto h-[32px] bg-[#303030] border-[0.2px] border-[#AAAAAA] cursor-pointer text-sm font-normal 
                            border-solid rounded-[32px] my-3 mr-3 px-3 inline-flex items-center ${index === 0 ? 'ml-[50px]' : null} 
                            ${index === filterItems.length - 1 ? 'mr-[50px]' : null} hover:bg-white hover:text-black duration-500 text-white`}
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <span className="absolute right-0 w-[50px] h-full flex items-center justify-center bg-[#212121] cursor-pointer z-50">
                    <img
                        src={VectorRight}
                        alt='vector'
                        onClick={slideRight}
                        className='rounded-full hover:bg-[#726a6a] inline-block py-2 px-3 duration-300'
                    />
                </span>
            </div>
        </div> 
    </>
  )
}

export default FeedFilter