import Info from "./Info";

const SentimentComponent = () => {
    return <div className="flex flex-col">
        <p className="font-bold text-2xl">Sentiment</p>
        <Info text={'Key Events'} />
        <div>

        </div>
        <Info text={'Analyst Estimates'} />
        <div className="flex gap-12">
           <div className="flex items-center justify-center h-32 w-32 bg-green-50 text-green-500 rounded-full text-4xl font-semibold">
               76%
           </div>
           <div className="flex flex-col gap-4 justify-center"> 
               <div className="flex items-center"> 
                  <p className="mr-6">Buy</p>
                  <div className="h-2 w-80 bg-green-500 rounded-sm  mr-2"></div>
                  <p>76%</p>
               </div>
               <div className="flex items-center"> 
                  <p className="mr-4">Hold</p>
                  <div className="h-2 w-8 bg-gray-500 rounded-sm mr-2"></div>
                  <p>8%</p>
               </div>
               <div className="flex items-center"> 
                  <p className="mr-6">Sell</p>
                  <div className="h-2 w-16 bg-red-500 rounded-sm mr-2"></div>
                  <p>16%</p>
               </div>
           </div>
        </div>
    </div>
}

export default SentimentComponent;