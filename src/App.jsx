import { NewsProvider } from "./NewsContext";
import { Lobby } from "./Lobby";
import "./index.module.css";
import News from "./[news]";

function App() {

  const router = useRouter();
  const { query } = router;
  
  let pageComponent;
  if (query.page === "News") {
    // pageComponent = <News newsCityInput={cityInput} newsResult={result} />;
    pageComponent = <News />;
  } else {
    // pageComponent = <Lobby cityInput={cityInput} setCityInput={setCityInput} result={result} setResult={setResult} />;
    pageComponent = <Lobby />;
  }

  return (
    <>
    <NewsProvider>
      <div>
        <Head>
          <title>Local News GPT</title>
          <link rel="icon" href="/dog.png" />
        </Head>
        {pageComponent}
        {/* {result && result[0].title} */}
      </div>
    </NewsProvider>

    </>
  )
}

export default App