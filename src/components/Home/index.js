import {Component} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosSearch} from 'react-icons/io'
import {MdFavorite} from 'react-icons/md'
import {FaAngleRight, FaLongArrowAltRight, FaMapMarkerAlt} from 'react-icons/fa'

import {IoPerson} from 'react-icons/io5'

import {Spinner} from 'react-bootstrap'
import './index.css'

const recommendList = [
  {
    cityName: 'West Douglas',
    date: '2024-03-24T00:00:00.000Z',
    distanceKm: '4264.1226847222415',
    eventName: 'Winter Wonderland Fair',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885807/Rectangle_2_tzomv2.svg',
    weather: 'Snowy 26C',
  },
  {
    cityName: 'North Amy',
    date: '2024-03-25T00:00:00.000Z',
    distanceKm: '3864.065400248832',
    eventName: 'Spring Clouds Art Exhibit',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885804/Rectangle_4-1_1_wcn3r5.svg',
    weather: 'Cloudy 7C',
  },
  {
    cityName: 'Rayville',
    date: '2024-03-26T00:00:00.000Z',
    distanceKm: '14188.240054906337',
    eventName: 'Snowy Peaks Photography Workshop',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885713/Rectangle_4_1_u259mn.svg',
    weather: 'Snowy 18C',
  },
  {
    cityName: 'Hartville',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '9022.823129623723',
    eventName: 'Sunny Days Marathon',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885782/Rectangle_5-1_u6rbjq.svg',
    weather: 'Sunny 2C',
  },
  {
    cityName: 'South Andrew',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '14311.615540703924',
    eventName: 'Tropical Tunes Music Festival',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885709/Rectangle_5-2_wyczm1.svg',
    weather: 'Cloudy 30C',
  },
  {
    cityName: 'Port Markton',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '12476.33705344043',
    eventName: 'Frozen Harmony Concert',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885638/Rectangle_5_otingq.svg',
    weather: 'Sunny -3C',
  },
  {
    cityName: 'Lake Matthew',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '6515.755364660444',
    eventName: 'Cloudy Skies Book Fair',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885896/Rectangle_34_rlbq8y.svg',
    weather: 'Cloudy 14C',
  },
  {
    cityName: 'West Erika',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '4544.261026003867',
    eventName: 'Sunlit Path Charity Run',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885713/Rectangle_4_1_u259mn.svg',
    weather: 'Sunny -4C',
  },
]

const upcomingList = [
  {
    cityName: 'West Douglas',
    date: '2024-03-24T00:00:00.000Z',
    distanceKm: '4264.1226847222415',
    eventName: 'Winter Wonderland Fair',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885938/Rectangle_7_hghles.svg',
    weather: 'Snowy 26C',
  },
  {
    cityName: 'North Amy',
    date: '2024-03-25T00:00:00.000Z',
    distanceKm: '3864.065400248832',
    eventName: 'Spring Clouds Art Exhibit',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885951/Rectangle_9_1_tj1mtm.svg',
    weather: 'Cloudy 7C',
  },
  {
    cityName: 'Rayville',
    date: '2024-03-26T00:00:00.000Z',
    distanceKm: '14188.240054906337',
    eventName: 'Snowy Peaks Photography Workshop',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885919/Rectangle_11_ilrwhv.svg',
    weather: 'Snowy 18C',
  },
  {
    cityName: 'Hartville',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '9022.823129623723',
    eventName: 'Sunny Days Marathon',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885933/Rectangle_15_joidmj.svg',
    weather: 'Sunny 2C',
  },
  {
    cityName: 'South Andrew',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '14311.615540703924',
    eventName: 'Tropical Tunes Music Festival',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885903/Rectangle_16_checpx.svg',
    weather: 'Cloudy 30C',
  },
  {
    cityName: 'Port Markton',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '12476.33705344043',
    eventName: 'Frozen Harmony Concert',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885931/Rectangle_17_olq6mq.svg',
    weather: 'Sunny -3C',
  },
  {
    cityName: 'Lake Matthew',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '6515.755364660444',
    eventName: 'Cloudy Skies Book Fair',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885920/Rectangle_21_sahsok.svg',
    weather: 'Cloudy 14C',
  },
  {
    cityName: 'West Erika',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '4544.261026003867',
    eventName: 'Sunlit Path Charity Run',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885913/Rectangle_22_ad3cfx.svg',
    weather: 'Sunny -4C',
  },
  {
    cityName: 'Terrenceberg',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '6350.197144394632',
    eventName: 'Winter Bliss Ice Sculpture Contest',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885791/Rectangle_23_bkuipq.svg',
    weather: 'Snowy 25C',
  },
  {
    cityName: 'Terrenceberg',
    date: '2024-03-27T00:00:00.000Z',
    distanceKm: '63',
    eventName: 'Winter Baking Contest',
    imgUrl:
      'https://res.cloudinary.com/dwwunc51b/image/upload/v1711885805/Rectangle_37_qlntla.svg',
    weather: 'Snowy 22C',
  },
]

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      //  recommended: [],
      //  upcoming: [],
      loadingRecommended: true,
      loadingUpcoming: true,
    }
  }

   componentDidMount() {
    // Fetch recommended events
    fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco',
    )
      .then(response => response.json())
      .then(data =>
        this.setState({recommended: data.events, loadingRecommended: false}),
      )
      .catch(error =>
        console.error('Error fetching recommended events:', error),
      )

    // Fetch upcoming events
    fetch(
      'https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming',
    )
      .then(response => response.json())
      .then(data =>
        this.setState({upcoming: data.events, loadingUpcoming: false}),
      )
      .catch(error => console.error('Error fetching upcoming events:', error))
  }


  RecommendedEvent = () => {
    // const {recommended} = this.state

    const options = {year: 'numeric', month: 'long', day: 'numeric'}

    return (
      <div className="recommended-container">
        <div className="header-con">
          <div className="head-con">
            <h2 className="recommend">Upcoming events </h2>
            <FaLongArrowAltRight />
          </div>
          <p className="see-all-rec">See all</p>
        </div>
        <div className="recommended-scroll">
          {recommendList.map(event => (
            <div className="recommended-card" key={event.eventName}>
              <div className="image-container">
                <img src={event.imgUrl} alt={event.eventName} className="img" />
                <div className="text-details">
                  <div className="name-date">
                    <h3 className="event">{event.eventName}</h3>
                    <p className="date">
                      {new Date(event.date).toLocaleDateString(
                        'en-US',
                        options,
                      )}
                    </p>
                  </div>
                  <div className="location-dis">
                    <div className="loc-icon">
                      <FaMapMarkerAlt />
                      <p className="city">{event.cityName}</p>
                    </div>
                    <p className="dis">
                      {event.weather} |{' '}
                      {Math.round(parseFloat(event.distanceKm))} km
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  UpComingEvent = () => {
    // const {upcoming} = this.state

    const options = {year: 'numeric', month: 'long', day: 'numeric'}

    return (
      <div className="upcoming-container">
        <div className="header-con">
          <div className="head-con">
            <h2 className="upcoming">Upcoming events </h2>
            <FaLongArrowAltRight />
          </div>
          <p className="see-all">See all</p>
        </div>

        <div className="upcoming-scroll-container">
          <ul className="upcoming-scroll">
            {upcomingList.map(event => (
              <li className="upcoming-card" key={event.eventName}>
                <div className="image-container-upcoming">
                  <img
                    src={event.imgUrl}
                    className="img"
                    alt={event.eventName}
                  />
                </div>

                <div className="date-text">
                  <p className="date">
                    {new Date(event.date).toLocaleDateString('en-US', options)}
                  </p>
                </div>
                <div className="text-details-upcoming">
                  <h3 className="event">{event.eventName}</h3>

                  <div className="location-dis">
                    <div className="loc-icon">
                      <FaMapMarkerAlt className="loc-icons" />
                      <p className="city-up">{event.cityName}</p>
                    </div>
                    <p className="dis-up">
                      {event.weather} |{' '}
                      {Math.round(parseFloat(event.distanceKm))} km
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {loadingRecommended, loadingUpcoming} = this.state
    return (
      <div className="app-container">
        <div className="nav-section-container">
          <div className="filter-section">
            <h1 className="header">BookUsNow</h1>
            <div className="search-section">
              <button type="button" className="category-btn">
                <GiHamburgerMenu /> <p className="cat">categories</p>
              </button>
              <div className="search-icon-container">
                <input
                  type="search"
                  className="search-bar"
                  placeholder="DJI phantom"
                />
                <IoIosSearch className="icon" />
              </div>
            </div>
            <div className="fav-section">
              <MdFavorite className="icon-fav" />
              <h1 className="fav">Favorites</h1>
              <button type="button" className="sign-btn">
                Sign In
              </button>
              <IoPerson className="profile" />
            </div>
          </div>

          <div className="tab-section-container">
            <div className="location-container">
              <FaMapMarkerAlt className="icon3" />
              <p className="city-name">Mumbai,India</p>
              <FaAngleRight className="icon4" />
            </div>
            <div className="tabs-con">
              <p className="tab-name">Live shows</p>
              <p className="tab-name">Streams</p>
              <p className="tab-name">Movies</p>
              <p className="tab-name">Plays</p>
              <p className="tab-name">Events</p>
              <p className="tab-name">Sports</p>
              <p className="tab-name">Activities</p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <h1 className="heading">
            Discover Exciting Events Happening Near You - Stay Tuned for
            Updates!
          </h1>
          <p className="para">
            Dorem ipsum dolor sit amet, consectur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.Class
            aptent taciti sociosque ad litora toruent per conubia nostra, per
          </p>
        </div>

        {loadingRecommended ? (
          <Spinner animation="border" role="status" className="loader">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          this.RecommendedEvent()
        )}

        {loadingUpcoming ? (
          <Spinner animation="border" role="status" className="loader">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          this.UpComingEvent()
        )}
      </div>
    )
  }
}

export default Home
