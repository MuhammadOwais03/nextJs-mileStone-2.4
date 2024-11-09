import Image from 'next/image'

function Home() {
    return (
        <div className="flex flex-row justify-center items-center gap-24 bg-gray-600 h-dvh">
            <div className="object-contain">
                <Image
                    src="/images/hero-imageB.png"  // Path relative to the public folder
                    alt="Example Image"
                    width={600}  // Specify the width of the image
                    height={500} // Specify the height of the image
                />
            </div>
            <div className="text-4xl">
                <h2>This is<br/> Muhammad Owais.</h2>
            </div>
        </div>
    )
}

export default Home;
