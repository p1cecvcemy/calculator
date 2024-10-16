import './App.css';
import 'tailwindcss/tailwind.css'

const App: React.FC = () => {
  return (
    <div className="App bg-[#F5F5F5] size-full">
      <header className="App-header">
        {/* <h1>Привет мир</h1>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 px-4 py-2 rounded">Click Me</button>
        </div> */}
      </header>
      <body className='flex justify-center items-center'>
        <div>
          <h1 className=' text-9xl w-5/6 font-extrabold mb-16'>Websites& Branding</h1>
          <div className=' flex w-full justify-between'>
            <div>
              <h4 className= "text-2xl font-semibold">Let’s Talk</h4>
              <p className=' text-xl'>hello@joey.co</p>
            </div>
            <p className="w-96 text-xl">Hello, I'm Joey, an online product designer focusing on brand identity, advertising, and no-code instruments.</p>
          </div>
          <div className='mt-32 flex justify-between'>
            <div className='flex flex-col gap-y-5'>
              <h4 className= "text-5xl font-semibold">Projects</h4>
              <p className= "w-96">As a seasoned creator of contemporary, user-friendly web designs and digital solutions, I aim to assist you in constructing the brand of your fantasies.</p>
            </div>
            <div className='flex items-center gap-x-2'>
              <h4>See more </h4>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_0_520)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6657 6.47278C12.3537 6.1855 11.9914 5.83831 11.6103 5.44627C10.5057 4.3102 9.20094 2.755 8.53846 1.165L9.46154 0.7804C10.0491 2.1905 11.2443 3.63526 12.3272 4.74919C12.8634 5.3007 13.3617 5.76069 13.7257 6.08253C13.9076 6.24332 14.0555 6.36929 14.1574 6.45459C14.2083 6.49723 14.2477 6.52968 14.2741 6.55122L14.3036 6.57523L14.3106 6.58091L14.3122 6.58215L14.8004 6.97273L14.3124 7.3631L14.3106 7.36455L14.3036 7.37024L14.2741 7.39425C14.2477 7.41578 14.2083 7.44823 14.1574 7.49088C14.0555 7.57617 13.9076 7.70214 13.7257 7.86293C13.3617 8.18477 12.8634 8.64476 12.3272 9.19627C11.2443 10.3102 10.0491 11.755 9.46154 13.165L8.53846 12.7804C9.20094 11.1905 10.5057 9.63526 11.6103 8.49919C11.9914 8.10719 12.3537 7.76004 12.6656 7.47278L-2.48817e-07 7.47278L-2.92528e-07 6.47278L12.6657 6.47278Z" fill="black" stroke="black"/>
                </g>
                <defs>
                <clipPath id="clip0_0_520">
                <rect width="13" height="15" fill="white" transform="translate(0 13.5) rotate(-90)"/>
                </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className='w-full flex justify-between'>
            <div className='flex flex-col'>
              <div>
                <img width={500} src="/images/Element-1.png" />
              </div>
              <div>
                <img width={500} src="/images/Element-2.png" />
              </div>
                
            </div>
            <div className='flex flex-col'>
              <div>
                <img width={500} src="/images/Element-3.png" />
              </div>
              <div>
                <img width={500} src="/images/Element-4.png" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
      