import React, {useState} from "react";
import s from "./Paginator.module.css"
import arrowRight from './../../assets/icons/arrowRightWhite.png'
import arrowLeft from './../../assets/icons/arrowLeftWhite.png'


export const Paginator = ({totalItemsCount, pageSize, onPageChanged, portionSize = 10, currentType, currentSubtype}) => {
    const [pagesCount, setPagesCount] = useState(Math.ceil(totalItemsCount / pageSize))
    const [currentPage, setCurrentPage] = useState(1)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionsCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftBorderPortion = (portionNumber - 1) * portionSize + 1
    let rightBorderPortion = portionNumber * portionSize;
    return (
      <div className={s.pages}>
          {
              portionNumber > 1 && <span className={s.arrowsButton} onClick={() => {
                  setPortionNumber(portionNumber - 1)
              }}><img src={arrowLeft}/> </span>
          }
          {
              pages.filter(page => page >= leftBorderPortion && page <= rightBorderPortion)
                .map(page => {
                    return (<span key={page}
                                  onClick={() => {
                                      setCurrentPage(Number(page))
                                      onPageChanged(currentType, currentSubtype, page, pageSize)
                                  }}
                                  className={s.pageItem + ' ' + (currentPage === page ? s.selectedPageItem : '')}>{page}</span>)
                })
          }
          {
              portionNumber < portionsCount && <span className={s.arrowsButton} onClick={() => {
                  setPortionNumber(portionNumber + 1)
              }}><img src={arrowRight}/></span>
          }
      </div>
    )
}

export default Paginator





