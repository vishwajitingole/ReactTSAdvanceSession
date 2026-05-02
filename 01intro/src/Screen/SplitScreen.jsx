function SplitScreen({ Left, Right }) {
  return (

    <div className="w-full h-screen flex">
        
        <div className="w-1/8 bg-red-300">      
            <Left />
        </div>

        <div className="w-full bg-brown-400">
            <Right />
        </div>
  
    </div>
  )
}

export default SplitScreen