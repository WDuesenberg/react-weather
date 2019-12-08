import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import moment from 'moment';
import SearchBar from "./components/SearchBar";
import DayDetails from "./components/DayDetails";
import DayCard from "./components/DayCard";
import sampleData from "./data/sample.json";
import API from './utils/API';



const App = () => {

  const [data, setData] = useState({
    days: sampleData.data,
    location: 'Denver, CO',
    selectedNull: null,
    searchTerm: ''
  });
  const { days, location, selectedDay, searchTerm } = data;

  // only on initial render, trigger getWeather with Denver, CO
  useEffect(() => {
    API.getWeather('Denver, CO')
  }, []);

  useEffect(() => {
    document.title = `This week's weather ${location ? "for " + location : ""}`;
  }, [location]);

  const getWeather = city => {
    API.getWeather(city)
      .then(res => {
        console.log(res);
        setData({
          searchTerm: '',
          selectedDay: null,
          days: res.data.data,
          location: res.data.city_name + ", " + res.data.state_code
        })
      })
      .catch(err => console.log(err));
  }

  const setSelectedDay = day => {
    setData({
      ...data, // copy in the existing state so we don't lose it 
      selectedDay: day // add our change on top of it!!!
    })
  }

  const handleInputChange = event => {
    setData({
      ...data,
      searchTerm: event.target.value
    });
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      getWeather(searchTerm);
    } else {
      alert("You must type a city to search!");
    }
  }
  
  return (
    <Container>
      <Row>
        <Col md={8}><h1>Weather for {location}</h1></Col>
        <Col md={4}><h2> </h2>
          <SearchBar
            searchTerm={searchTerm}
            handleInputChange={handleInputChange}
            handleFormSubmit={handleFormSubmit}
          />
        </Col>
      </Row>
      <Row>
        {days.map(day => (
          <DayCard
            key={day.ts}
            day={moment(day.valid_date, "YYYY-MM-DD").format('dddd')}
            current={day.temp}
            high={day.max_temp}
            low={day.min_temp}
            icon={day.weather.icon}
            description={day.weather.description}
            setSelectedDay={() => setSelectedDay(day)}
            isActive={day === selectedDay}
          />
        ))}
      </Row>
      <Row>
        <Col>
          {selectedDay ? (
            <DayDetails
              day={moment(selectedDay.valid_date, "YYYY-MM-DD").format('dddd, MMMM Do, YYYY')}
              current={selectedDay.temp}
              high={selectedDay.max_temp}
              low={selectedDay.min_temp}
              uvIndex={selectedDay.uv}
              icon={selectedDay.weather.icon}
              description={selectedDay.weather.description}
              windSpeed={selectedDay.wind_spd}
              windGust={selectedDay.wind_gust_spd}
              windDir={selectedDay.wind_cdir_full}
              probPrecip={selectedDay.pop}
              humidity={selectedDay.rh}
            />
          ) : (
              <h3>Click on a day above to get weather details!</h3>
            )}
        </Col>
      </Row>
    </Container>

  );
}


export default App;
