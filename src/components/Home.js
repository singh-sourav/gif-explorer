import React from "react";
import { connect } from "react-redux";
import { startGiphyFetch, startGiphyTrendingFetch,fetchGiphyInProgress } from "../actions/giphy";
import { bindActionCreators } from "redux";
import useDebouncedCallback from "../hooks/useDebouncedCallback";
import "./styles/Home.css";
import { useThemeContext } from "../contexts/ThemeProvider";
import ThemeToggler from "./ThemeToggler";
import GIFContainer from "./GIFContainer";
import CustomInput from "./CustomInput";

function Home(props) {
  const { startGiphyFetch, startGiphyTrendingFetch, newItemsAdded ,loading,fetchGiphyInProgress} = props;
  const loaderref = React.useRef();
  const observer = React.useRef();
  const [offset, setOffset] = React.useState(1);
  const [query, setQuery] = React.useState("");

  /**
   * Custom React Context to get the theme
   */
  const { theme } = useThemeContext();

  /**
   * Debouncing the Query Search to save extra network calls
   */
  const debouncedQuerySearch = useDebouncedCallback((e) => {
    const searchText = e.target.value;
    setQuery(searchText);
  }, 200);

  /**
   * Effect based upon query search
   * Reset the offset to 1.
   * Triggers the actions for offset 1
   */
  React.useEffect(() => {
    setOffset(1);
    fetchGiphyInProgress()
    if (query) startGiphyFetch(1, query);
    else startGiphyTrendingFetch(1);
  }, [query, startGiphyFetch, startGiphyTrendingFetch]);

  /**
   *
   * Infinite Scrolling :
   * Effect based upon offset ( >1 )
   * Keeping 'query' same when offset changes
   * If query is empty, it fetches the trending GIFS
   *
   */
  React.useEffect(() => {
    if (offset > 1) {
      if (query) startGiphyFetch(offset, query);
      else startGiphyTrendingFetch(offset);
    }
  }, [offset, startGiphyFetch, startGiphyTrendingFetch]);

  /**
   * Optimised Intersection Callback :
   * useCallback prevents re-creation of this callback across re-renders
   */
  const intersectionCallback = React.useCallback((entries) => {
    if (entries[0].isIntersecting) {
      setOffset((offset) => offset + 1);
    }
  }, []);

  /**
   * This callback would be called when target is in viewport.
   * Debouncing it, to avoid extra calls.
   */
  const debouncedIntersectionCallback = useDebouncedCallback(
    intersectionCallback,
    5
  );

  /**
   * Effect :
   * Intersection Observer will observe the last GIF (target) on web page.
   * The Observer should be re-created when the last GIF on webpage changes.
   * So, using [items] as dependency of this hook
   */
  React.useEffect(
    () =>
      setTimeout(() => {
        const toBeObserved = loaderref.current;
        observer.current = new IntersectionObserver(
          debouncedIntersectionCallback,
          {
            root: null,
            rootMargin: "100px",
            threshold: 0,
          }
        );

        if (toBeObserved) observer.current.observe(toBeObserved);

        return () => {
          if (toBeObserved) observer.current.unobserve(toBeObserved);
        };
      }, 0),
    [debouncedIntersectionCallback, newItemsAdded, loaderref]
  );

  /**
   * Global Theme Logic is present in Theme provider
   * Any custom Logic/Overriding can be used like this in child components
   */
  React.useEffect(() => {
    document.querySelector("#theme-toggler").className = theme;
    document.querySelector("input").className = theme;
  }, [theme]);

  return (
    <div id="gif-dashboard">
      <div className="gif-query-container">
        <CustomInput
          id="gif-query-input"
          placeholder="Search your favourite GIFs"
          onChangeCallback={debouncedQuerySearch}
        />
        <ThemeToggler
          darkText="Switch to Dark Mode"
          lightText="Switch to Light Mode"
        />
      </div>
      <GIFContainer
        gifsToAppend={newItemsAdded}
        offset={offset}
        loaderref={loaderref}
        loading={loading}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    newItemsAdded: state.newItemsAdded,
    loading:state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      startGiphyFetch,
      startGiphyTrendingFetch,
      fetchGiphyInProgress
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
