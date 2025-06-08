import { useState } from 'react';
import Calendar from './components/Calendar';
import { useFetch } from './utils/useFetch';

function App() {
  const { data, isPending, error } = useFetch('/data.json')
  const [dates, setDates] = useState(null)
  console.log('Rendereowanie app.js')
  return (
    <div className="calendar__container">
      <div className="calendar" >
        {isPending && <div>Loading...</div>}
        {data && <Calendar dbDates={data} setDates={setDates} />}
        {error && <div>Can't connect to the database ;(</div>}
      </div>
      <div className='summary'>
        <div className='summary__start-date'>
          {dates && dates.start && <> Start: {dates.start}</>}
        </div>
        <div className='summary__end-date'>
          {dates && dates.end && <>End: {dates.end}</>}
        </div>
      </div>
    </div>
  );
}

export default App;
