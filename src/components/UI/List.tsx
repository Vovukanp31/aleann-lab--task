import React from 'react';
import ListItemSvg from '../../assets/svg/listItemSvg';

interface Props {
    listArr: string[];
    title?: string;
}

const List = ({listArr, title}: Props) => {
    return (
        <>
            {title && <p>{title}</p>}
            <ul>
               {listArr.map((li, i) => <li key={i} className='flex items-center gap-2'><ListItemSvg/>{li}</li>)}
            </ul>
        </>
    );
};

export default List;