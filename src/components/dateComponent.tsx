import React from 'react';

interface Props {
    date: Date;
    title: string
}

const DateComponent = ({date, title}: Props) => {

    const diff: string = Number((new Date().getTime() - new Date(date).getTime())).toFixed(0);

    const diffYears = Math.floor(+diff / 31536000000);// years
    const diffDays = Math.floor((+diff % 31536000000) / 86400000); // days
    const diffHrs = Math.floor((+diff % 86400000) / 3600000); // hours
    const diffMins = Math.round(((+diff % 86400000) % 3600000) / 60000); // minutes

    const isShowDate = (date: number, text: string): string => date > 0 ? ` ${date} ${text}` : '';

    return (
        <>
            {diffYears >= 1 ? `${title} ${diffYears} years ago` : `${title} ${isShowDate(diffDays, 'days')}, ${isShowDate(diffHrs, 'hours')}, ${isShowDate(diffMins, 'minutes')} ago`}
        </>
    );
};

export default DateComponent;