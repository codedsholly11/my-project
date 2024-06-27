// import React, {useState} from 'react'

// const counter = () => {
//   const [count, setCount] = useState(0);
//   const [isEven, setIsEven] = useState(false);

//  export default function App(){
//   const[weight,setWeight]= useState(0)
//   function Coded(e){
//     const myweight= e.target.value;
//     setWeight(myweight)
//   }
//   function Sub(e){
//     e.preventDefault()
//     if (weight<5) {
//       alert('eat good food')
//     }
//       else {
//       alert ('you are doing well')
//     }
//   }

//   return(
//     <>
//    <div>
//     <h1>calculate bmi</h1>
//     <form onSubmit={Sub}>
//       <input type="text" onChange={Coded}  placeholder='enter your weight'/>
//       <button>ckeck bmi</button>
//     </form>
//    </div>
    
    
//     </>
//   )

//  }

import React, {useState} from 'react'


const Bmi = () => {
const [weight, setWeight] = useState('')
const [height, setHeight] = useState('')

// function handleWeight(e){
//   const userWeight = e.target.value;
//   setWeight(userWeight)
// }
function handleHeight(e){
  const userHeight = e.target.value;
  setHeight(userHeight)
}
function handleSubmit(e){
  e.preventDefault()
  const bmi = weight / (height * height) *100
  return alert(bmi)

}

  return (
    <div className='flex flex-col items-center justify-center h-[100vh]'>
        <div className=' bg-cyan-300 flex flex-col px-[20px] py-[20px] w-[30vw] h-[50vh] gap-[20px]'>
          <h1 className='text-4xl font-bold'>BMI calculator</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-[20px]'>
              <div>
                    <h4>weight (kg)</h4>
                    <input className='h-[30px] w-[220px] rounded-sm' type="text"value={weight}onChange={(e) => setWeight(e.target.value) }  />
              </div>
              <div className='flex flex-col '>
                    <h4>height (cm)</h4>
                    <input className='w-[130px]' type="range" />
                    <input className='h-[30px] w-[220px] rounded-sm' type="text"value={height}onChange={handleHeight} />
              </div>
              <div className='flex gap-[20px] pt-[25px]'>
                  <button className='bg-blue-500 h-[30px] rounded-sm w-[130px]'>calculate BMI</button>
                  <button className='bg-gray-400 h-[30px] w-[70px] rounded-sm '>clear</button>
              </div>
            </div>
           
          </form>

        </div>
    </div>
   
  )
}

export default Bmi

