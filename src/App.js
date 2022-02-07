import "./App.css"
import Banner from "./component/Banner"
import Navbar from "./component/Navbar"
import Row from "./component/Row"
import requests from "./request"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Banner />

			<header className="App-header">
				<Row
					title="NETFLIX ORIGINAL"
					fetchUrl={requests.fetchNetflixOriginals}
					isLargeRow
				/>
				<Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
				<Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
				<Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
				<Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
				<Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
				<Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
			</header>
		</div>
	)
}

export default App
