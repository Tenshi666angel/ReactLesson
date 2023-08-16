import { useMemo } from "react"

export const usePagination = (pagesCount: number) => {
    const pagesArray = useMemo(() => {
        let arr = [];
        for (let i = 0; i < pagesCount; i++) {
            arr.push(i + 1);
        }
        return arr;
    }, [pagesCount]);
    return pagesArray;
}