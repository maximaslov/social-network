import React, { useEffect, useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
    portionSize, 
    totalItemsCount, 
    pageSize,
    currentPage,
    onPageChanged}) => {

    const [portionSizeValue, setPortioonSizeValue] = useState(portionSize);
    const [windowSize, setWindowSize] = useState(getWindowSize());

    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    const padgesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
        for(let i = 1; i <= padgesCount; i++) {
            pages.push(i);
        };

    const portionCount = Math.ceil(padgesCount / portionSizeValue);
    const [portionNumber, setPortionNumber] = useState(Math.floor(currentPage /10) + 1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSizeValue + 1;
    const rightPortionPageNumber = portionNumber * portionSizeValue;
    
    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };

    }, [windowSize]);
    
    useEffect(() => {
        if(windowSize.innerWidth > 560) {
            setPortioonSizeValue(portionSize);
        }
        if(windowSize.innerWidth <= 560) {
            setPortioonSizeValue(5);
        }
        if(windowSize.innerWidth <= 400) {
            setPortioonSizeValue(3);
        }
    }, [windowSize, portionSize]);
    
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
                    onClick={() => {onPageChanged(e)}} 
                    className={currentPage === e ? `${styles.page} ${styles.selectedPage}` : [styles.page]}
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