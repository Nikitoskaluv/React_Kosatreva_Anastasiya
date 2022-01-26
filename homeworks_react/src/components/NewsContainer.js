import { NewsComponent } from "../routes/News/News"
import { useDispatch, useSelector } from "react-redux";
import { getLoading, getError, getNews } from "../store/news/selectors";
import { getNewsThunk } from "../store/news/actions";
import React, { useEffect } from "react";

export const NewsComponentContainer = () => {
    const isLoading = useSelector(getLoading)
    const isError = useSelector(getError)
    const news = useSelector(getNews)
    console.log(`news:${news}`)

    const dispatch = useDispatch();

    const getData = () => {
        dispatch(getNewsThunk);
    }

    useEffect(() => {
        console.log("useEffect")
        getData();
    }, [])

    const onClickDownload = () => {
        dispatch(getNewsThunk);
    }
    return (
        <NewsComponent
            isLoading={isLoading}
            isError={isError}
            news={news}
            onClickDownload={onClickDownload}
        />
    )
}

