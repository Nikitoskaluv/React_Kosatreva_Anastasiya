import { Button } from "@material-ui/core";
import { ErrorLoading } from "../../components/ErrorLoading";
import { Loading } from "../../components/Loading";



export const NewsComponent = ({ isError, isLoading, news, onClickDownload }) => {
    console.log(news.articles);


    return (<div className="newsContainer">
        <h1>Новости</h1>
        {!isError &&
            <Button variant="outlined" color="primary" size="medium" style={{
                marginLeft: '20px'
            }} onClick={onClickDownload}>Статьи</Button>}

        {
            isError &&
            <ErrorLoading onClickDownload={onClickDownload} />
        }
        {
            isLoading &&
            <Loading />
        }

        {

            news.articles && news.articles.length && news.articles.map((article) => {
                return <li key={article.publishedAt}>
                    <h2>
                        {article.title}
                    </h2>
                    <p>
                        {article.content}
                    </p>
                </li>
            })
        }
    </div>
    )
}
