/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react'
import { Global } from '@emotion/react'
import { useSearchParams } from 'react-router-dom'
import { Routes, Route, Navigate, NavLink } from 'react-router-dom'

import Spinner from './components/Spinner'
import ErrorContainer from './components/ErrorContainer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight,  faTemperatureLow,faTemperatureHigh, faWind, faClock, faCloudRain } from '@fortawesome/free-solid-svg-icons'

import {
    globalStyles,
    Top,
    SearchCss,
    ErrorStyle,
    LoadingStyle,
    FlexContainer,
    ForecastCardCSS,
    ForecastCard,
    HomeCss,
    NavbarCSS,
    FooterCss

} from './styles/styles'

function useForecastSearch(query){

    const [ forecast, setForecast ] = useState([])
    const [ loading, setLoading ] = useState(false)
    const [ error, setError ] = useState("")

    
    useEffect(() => {
        let ignore = false
        const controller = new AbortController()
        async function fetchSearchResults() {
            setLoading(true)
            let responseBody = {}
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=a34069f811f36d5c99752b76ac63e51a&units=imperial`,
                    { signal: controller.signal }
                )
                if (response.status !== 200) {
                    setError(response.status)
                } else {
                    setError("")
                    responseBody = await response.json()
                }
            } catch (e) {
                if (e instanceof DOMException) {
                } else {
                    setError(true)
                    throw e
                }
            }

            if (!ignore) {
                setForecast(responseBody.list || [])
                setLoading(false)
            }
        }
        if (query) {
            fetchSearchResults()
        }
        return () => {
            ignore = true
            controller.abort()
        }
    }, [ query ])

    return [ forecast, loading, error ]
}






function Search(){
    const [ searchParams, setSearchParams] = useSearchParams()
    const [ searchQuery, setSearchQuery ] = useState(searchParams.get("q") || "")
    const [ forecast , isLoading, error ] = useForecastSearch(searchParams.get("q"))

    return (
        <div >
            <Top>
            <div >
                <form onSubmit={ e => {
                    e.preventDefault()
                    setSearchParams({q: searchQuery})
                }}>
                    <p>Search Weather Forecast Here</p>
                    <SearchCss>
                    <input type='text' value={searchQuery} placeholder="Search for City" onChange={e=>{
                       
                        setSearchQuery(e.currentTarget.value)
                    }}></input>
                    <button ><FontAwesomeIcon icon={faArrowRight} className='fa-beat'/></button>
                    </SearchCss>
                </form>
            </div>
            </Top>
                {error === 404 &&  <ErrorStyle><ErrorContainer>Could not find city. Check the name entered</ErrorContainer></ErrorStyle>}
                {error === 401 && <ErrorContainer>Could connect to the weather service. Try again later.</ErrorContainer>}
            {isLoading ? <LoadingStyle><Spinner /></LoadingStyle> : 
                    <Forecast forecast={forecast}/>
            }
        </div>
    )
}







function formatForecastDate(f){
    
    var date = f
    date = new Date(date)


    var hours = date.getHours();
    date = date.toLocaleDateString()

    var amOrpm = ""
    if(hours > 12){
        hours -= 12
        amOrpm = "pm"
    }else if(hours === 0 ){
        hours = 12
        amOrpm = "am"
    }
    else{
        amOrpm = "am"
    }
    hours = hours + ":00" + amOrpm 

    let dateReturn = {
            hours: hours,
            day: date,
        }
        
    return dateReturn
}

function Forecast(forecast){
    forecast = forecast.forecast
    console.log("== f", forecast)

    
    return (
        <div css={FlexContainer}>
                    {Object.keys(forecast).map(i => (
                        <div css={ForecastCardCSS}>
                            <div class="forecastCard">
                                
                                <ul>
                                    <li>
                                        <div className='a'>
                                            <ForecastCard>
                                            <div className='content'>
                                                
                                                <h2><FontAwesomeIcon id='clock' icon={faClock} className="fa-bounce"/> {formatForecastDate(forecast[i].dt_txt).hours}</h2>
                                                <h3>{formatForecastDate(forecast[i].dt_txt).day}</h3>
                                                <p id='short'>
                                                    {forecast[i].weather[0].main}
                                                    <br></br>
                                                    <img src={`http://openweathermap.org/img/wn/${forecast[i].weather[0].icon}@2x.png`}/>    
                                                </p>
                                                <p id='long'>{forecast[i].weather[0].description}</p>
                                                <p id='temp'>Temp</p>
                                                <p id='max'>Max: {forecast[i].main.temp_max} <FontAwesomeIcon id='maxIcon' icon={faTemperatureHigh} />F</p>
                                                <p id='min'>Min: {forecast[i].main.temp_min} <FontAwesomeIcon id='minIcon' icon={faTemperatureLow} className="fa-shake" />F</p>
                                                <p>Feels like {forecast[i].main.feels_like}°F</p>
                                                <p>Humididty: {forecast[i].main.humidity}</p>
                                                <p>Percipitation: {Math.round(forecast[i].pop * 100)}%<FontAwesomeIcon id='minIcon' icon={faCloudRain}  /></p>
                                               
                                                <p id='temp'>Wind</p>
                                                <p id='w-degree'>Degree: {forecast[i].wind.deg}</p>
                                                <p id='w-gust'>Gust: {forecast[i].wind.gust}</p>
                                                <p id='w-speed'>Speed: {forecast[i].wind.speed}mph <FontAwesomeIcon id='windIcon' icon={faWind} /></p>
                                            </div>
                                            </ForecastCard> 
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
        </div>
    )
}






function Home() { 
    return(
        <>
        <HomeCss>
            <h1> Hmm... I wonder what the forecast is...</h1>
            <h2>Find out <NavLink  to="/search">Here</NavLink></h2>
        </HomeCss>
        </>
    )
}

function App() {
    return (
        <>
        <div>
            <Global styles={globalStyles}/>
            <div css={NavbarCSS}>
                         <NavLink  className={'home'} to="/home"><img alt='Weather Home Page' src='https://th.bing.com/th/id/OIP.ueV4jMS9VqVehmZ8gaH4XQHaHI?pid=ImgDet&rs=1'/> </NavLink>
                <ul>
                    <li>
                        <NavLink  to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink  to="/search">Search</NavLink>
                    </li>
                </ul>
            </div>
            <div > 
            <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/search" element={<Search />}>
                    </Route>

            </Routes>
            </div>
            </div>
            <footer css={FooterCss}>
                <p>Easter egg</p>
                <p>For footer styling</p>
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Credit</h4>
                            <ul>
                            <li><a href="https://www.logolynx.com/topic/weather"><i>Logo: logolynx.com</i></a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Docs</h4>
                            <ul>
                                <li><a href="https://openweathermap.org/api">Weather API</a></li>
                                <li><a href="https://web.engr.oregonstate.edu/~hessro/teaching/cs494-w23">Course Info</a></li>

                            </ul>
                        </div>
                        <div className="footer-col">
                            
                        </div>

                        <div className="footer-col">
                        <h4>Source Code</h4>
                            <div className="social-links">
                            <ul>
                            <li><a href="https://github.com/osu-cs494-w23/assignment-3-yevgeniychaplygin3"><i class="fab fa-github">  </i></a></li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default App
