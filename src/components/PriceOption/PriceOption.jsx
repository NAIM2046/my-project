


const PriceOption = ({option}) => {
    const {name , price ,facilities} = option  ;
    return (
        <div className="bg-emerald-600 ml-3 p-4 rounded-md text-white flex flex-col mb-6">
            <p className="text-3xl text-center font-bold">{price}<span className="text-sm">/ Month</span> </p>
            <p className="text-2xl text-center"> {name}</p>
            <div className="pl-5 flex-grow">
            <ol>
            {
                facilities.map(facilitie => <li>{facilitie}</li>)
            }
            
            </ol>
            </div>
           
            <button className="bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900 ">Buy Now</button>
            
        </div>
    );
};

export default PriceOption;