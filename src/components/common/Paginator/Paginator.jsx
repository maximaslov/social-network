import React, { useEffect, useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = (props) => {
    const [portionSize, setPortioonSize] = useState(props.portionSize);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    useEffect(() => {
        function handleWindowResize() {
        setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
        window.removeEventListener('resize', handleWindowResize);
        };
    }, [windowSize]);

    const padgesCount = Math.ceil(props.totalItemsCount / props.pageSize);
    let pages = [];
        for(let i = 1; i <= padgesCount; i++) {
            pages.push(i);
        };

    const portionCount = Math.ceil(padgesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(Math.floor(props.currentPage /10) + 1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;
    
    useEffect(() => {
        if(windowSize.innerWidth > 560) {
            setPortioonSize(props.portionSize);
        }
        if(windowSize.innerWidth <= 560) {
            setPortioonSize(5);
        }
        if(windowSize.innerWidth <= 400) {
            setPortioonSize(3);
        }
    }, [windowSize])

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



