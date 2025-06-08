import { useEffect, useState } from 'react';
import '../styles/style.scss';
import Month from './Month';



const Calendar = ({ dbDates, setDates }) => {

    const [currentDate, setDate] = useState(new Date());
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthsNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const [selectedStart, setSelectedStart] = useState(null)
    const [selectedEnd, setSelectedEnd] = useState(null)

    const handleNextMonth = () => {
        setDate((prev) => {
            let newDate = new Date(prev)
            newDate.setMonth(newDate.getMonth() + 1);
            return newDate
        })
    }

    const handlePrevMonth = () => {
        setDate((prev) => {
            let newDate = new Date(prev)
            newDate.setMonth(newDate.getMonth() - 1);
            return newDate
        })
    }

    const handleNextYear = () => {
        setDate((prev) => {
            let newDate = new Date(prev)
            newDate.setFullYear(newDate.getFullYear() + 1);
            return newDate
        })
    }

    const handlePrevYear = () => {
        setDate((prev) => {
            let newDate = new Date(prev)
            newDate.setFullYear(newDate.getFullYear() - 1);
            return newDate
        })
    }

    const handleShowToday = () => setDate(new Date())
    const handleClearSelection = () => {
        setSelectedStart('')
        setSelectedEnd('')
    }
    useEffect(() => {
        setDates(
            {
                start: selectedStart,
                end: selectedEnd
            })
    }, [selectedStart, selectedEnd])
    return (
        <div className='calendar'>
            <div className='navigation'>
                <div className='navigation__arrow material-symbols-outlined' onClick={handlePrevYear}>keyboard_double_arrow_left</div>
                <div className='navigation__arrow material-symbols-outlined' onClick={handlePrevMonth}>keyboard_arrow_left</div>
                <div className='navigation__current-month' title="Click to go to today's date" onClick={handleShowToday}>{monthsNames[currentDate.getMonth()]} {currentDate.getFullYear()}</div>
                <div className='navigation__arrow material-symbols-outlined' onClick={handleNextMonth}>keyboard_arrow_right</div>
                <div className='navigation__arrow material-symbols-outlined' onClick={handleNextYear}>keyboard_double_arrow_right</div>
            </div>

            <div className='week-days'>
                {weekDays.map((el, index) => <span className="week-days__names" key={index}>{el}</span>)}
            </div>

            <div className='month-container'>
                <Month
                    currentDate={currentDate}
                    dbDates={dbDates}
                    selectedStart={selectedStart}
                    selectedEnd={selectedEnd}
                    setSelectedStart={setSelectedStart}
                    setSelectedEnd={setSelectedEnd}
                />
            </div>
            <div className='buttons'>
                <button className='buttons__clear' onClick={handleClearSelection}>Clear</button>
                <button className='buttons__add'>Book now</button>
            </div>
        </div>
    )
}

export default Calendar;