const Day = ({
    currentDay,
    currentDate,
    isPast,
    isToday,
    isSelectedAsStart,
    isSelectedAsEnd,
    isSelectedBetween,
    isHovered,
    isReserved,
    isSunday,
    isSaturday,
    handleClickOnDay,
    handleMouseHoverDay,
}) => {

    const dayClasses = [
        'day',
        isPast ? 'day__past' : '',
        isToday ? 'day__today' : '',
        isReserved ? 'day__reserved' : '',
        isSaturday ? 'day__saturday' : '',
        isSunday ? 'day__sunday' : '',
        isSelectedAsStart ? 'day__selected-as-start' : '',
        isSelectedAsEnd ? 'day__selected-as-end' : '',
        isSelectedBetween ? 'day__selected-between' : '',
        isHovered ? 'day__hovered' : ''
    ].join(' ');

    return (<div
        className={dayClasses}
        onClick={() => handleClickOnDay(currentDate)}
        onMouseEnter={() => handleMouseHoverDay(currentDate)}
    >{currentDay}

    </div>)
}

export default Day