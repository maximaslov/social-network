import React, { useEffect, useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    const padgesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
        for(let i = 1; i <= padgesCount; i++) {
            pages.push(i);
        };
    const portionCount = Math.ceil(padgesCount / props.portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.floor(props.currentPage /10) + 1);
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    const rightPortionPageNumber = portionNumber * props.portionSize;
    
    return (
        <div className={styles.paginator}>
            {portionNumber > 1 && 
            <button 
                className={styles.paginatorBtn}
                onClick={() => setPortionNumber(portionNumber -1)}>
             prev
            </button>}
            {pages.filter(e => e >= leftPortionPageNumber && e <= rightPortionPageNumber)
                .map(e => {
                return <button 
                    key={e} 
                    onClick={() => {props.onPageChanged(e)}} 
                    className={props.currentPage === e ? `${styles.page} ${styles.selectedPage}` : [styles.page]}
                >
                    {e}
                </button>
            })}
            {portionCount > portionNumber &&
            <button 
                className={styles.paginatorBtn}
                onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
            </div>
    )
}

export default Paginator;



