import React, { FC } from 'react';
import { usePagination } from '../../../hooks/usePagination';

type PaginationProps = {
    totalPages: number
    page: number
    changePage: (page: number) => void
}

export const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {

    const pagesArray = usePagination(totalPages);

    return <div style={{ marginTop: 10 }}>
        {pagesArray.map(p => 
                    <button onClick={() => changePage(p)}
                            className={p === page ? 'currentPage' : 'page'}
                            key={p}>{p}</button>)}
    </div>
}