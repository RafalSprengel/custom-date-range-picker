import { useEffect, useState } from 'react';
import { formatDate } from '../utils/utils';
import Day from './Day';

const Month = ({ currentDate, dbDates, selectedStart, selectedEnd, setSelectedStart, setSelectedEnd }) => {

    const res = [];
    let currentDay = 0;
    let firstDayOfTheMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    if (firstDayOfTheMonth == 0) firstDayOfTheMonth = 7; // allows to start week from monday not sunday
    const numberOfDaysCurrentMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const [hoveredDate, setHoveredDate] = useState(null)

    for (let i = 1; i < 42; i++) {
        if (i >= firstDayOfTheMonth && i < numberOfDaysCurrentMonth + firstDayOfTheMonth) {
            currentDay++;
            let isSelectedBetween = false;
            let isReserved=false;
            let currentDateFormatted = new Date(currentDate);
            currentDateFormatted.setDate(currentDay);
            currentDateFormatted = formatDate(currentDateFormatted)
            const todayFormatted = formatDate(new Date());
            const isPast = Boolean(new Date(currentDateFormatted + 'T23:59:59') < new Date())
            const isToday = Boolean(todayFormatted == currentDateFormatted);
            const isSunday = Boolean(new Date(currentDateFormatted).getDay() == 0);
            const isSaturday = Boolean(new Date(currentDateFormatted).getDay() == 6);
            let isSelectedAsStart = Boolean(selectedStart === currentDateFormatted)
            let isSelectedAsEnd = Boolean(selectedEnd == currentDateFormatted)
            if (dbDates) isReserved = Boolean(dbDates.find(el => el.date === currentDateFormatted));

            let isHovered = Boolean(new Date(currentDateFormatted) > new Date(selectedStart) && new Date(currentDateFormatted) < new Date(hoveredDate))

            if (selectedStart && selectedEnd) {
                if (Boolean(new Date(currentDateFormatted) > new Date(selectedStart)) &&
                    Boolean(new Date(currentDateFormatted) < new Date(selectedEnd))) {
                    isSelectedBetween = true
                }
                else isSelectedBetween = false;
            }

            const handleClickOnDay = (currentDate) => {

                if (!isPast && (!selectedStart || selectedStart && selectedEnd)) {
                    setSelectedStart(currentDate);
                    setSelectedEnd(null)
                }
                if (!isPast && selectedStart && !selectedEnd) {
                    if (new Date(currentDateFormatted) < new Date(selectedStart)) {
                        setSelectedEnd(selectedStart);
                        setSelectedStart(currentDate)
                    }
                    else
                        setSelectedEnd(currentDate)
                }
            }

            const handleMouseHoverDay = (currDate) => {
                if (selectedStart && !selectedEnd) {
                    setHoveredDate(currDate)
                }
            }

            res.push(<Day
                key={i}
                index={i}
                currentDay={currentDay}
                currentDate={currentDateFormatted}
                isPast={isPast}
                isToday={isToday}
                isSelectedAsStart={isSelectedAsStart}
                isSelectedAsEnd={isSelectedAsEnd}
                isSelectedBetween={isSelectedBetween}
                isReserved={isReserved}
                isSunday={isSunday}
                isSaturday={isSaturday}
                selectedStart={selectedStart}
                setSelectedStart={setSelectedStart}
                setSelectedEnd={setSelectedEnd}
                handleClickOnDay={handleClickOnDay}
                handleMouseHoverDay={handleMouseHoverDay}
                isHovered={isHovered}
            />)
        } else res.push(<div className='day__blank' key={i} ></div>)
    }
    return (res)
}
export default Month