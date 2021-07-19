import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { useHistory, useParams } from 'react-router';

import { ReactComponent as ArrowBackIcon } from '_assets/arrow-back.svg';
import { IWheatherCityResponse } from '../HomePage/redux/types';

const TempIdicator: React.FunctionComponent<{ value: number; title: string }> =
  ({ value, title }) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 28,
            color: '#fff',
          }}
        >
          {Math.round(value)}°
        </span>
      </div>
      <div>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 'bold',
            fontSize: 12,
            color: '#fff',
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );

const OtherIdicator: React.FunctionComponent<{ value: string; title: string }> =
  ({ value, title }) => (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontSize: 14,
            color: '#fff',
          }}
        >
          {value}
        </span>
      </div>
      <div>
        <span
          style={{
            fontFamily: 'Lato, sans-serif',
            fontWeight: 'bold',
            fontSize: 12,
            color: '#fff',
          }}
        >
          {title}
        </span>
      </div>
    </div>
  );

export const DetailsPage: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [wheatherData, setWheatherData] =
    useState<IWheatherCityResponse | null>(null);

  if (Number.isNaN(+id)) {
    history.push('/');
  }

  useEffect(() => {
    setLoading((prev) => !prev);
    const requestUrl = `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=7679cebcac872f7625f7fae03cb17e07&units=metric`;

    try {
      const data = axios
        .get<IWheatherCityResponse>(requestUrl)
        .then((response) =>
          response.status === 200
            ? setWheatherData(response.data)
            : history.push('/notfound')
        )
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }

    setLoading((prev) => !prev);
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          margin: 30,
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => history.push('/')}
        aria-hidden="true"
        role="button"
        tabIndex={0}
      >
        <div style={{ marginRight: 15 }}>
          <span>
            <ArrowBackIcon />
          </span>
        </div>
        <div>
          <span
            style={{
              fontFamily: 'Lato, sans-serif',
              fontWeight: 500,
              fontSize: 18,
              color: '#fff',
            }}
          >
            Back to Main page
          </span>
        </div>
      </div>
      {wheatherData !== null ? (
        <div
          style={{
            margin: '60px 30px 0 30px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div>
              <div>
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: 50,
                    color: '#fff',
                  }}
                >
                  {wheatherData.name}, {wheatherData.sys.country}
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'Lato, sans-serif',
                    fontWeight: 600,
                    fontSize: 20,
                    color: '#fff',
                  }}
                >
                  {new Date().toLocaleString('en-GB', {
                    weekday: 'long',
                    day: '2-digit',
                    month: 'long',
                  })}
                </span>
              </div>
            </div>
            <div style={{ marginTop: 30 }}>
              <div>
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: 60,
                    color: '#fff',
                  }}
                >
                  {Math.round(wheatherData.main.temp)}°
                </span>
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: 16,
                    color: '#fff',
                  }}
                >
                  Clouds
                </span>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.2)',
              boxShadow: '0px 0px 15px rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: 7,
              padding: 40,
              width: '100%',
              maxWidth: 600,
              minWidth: 400,
              height: 250,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
              }}
            >
              <TempIdicator
                title="Hight"
                value={Math.round(wheatherData.main.temp_max)}
              />
              <TempIdicator
                title="Low"
                value={Math.round(wheatherData.main.temp_min)}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                paddingTop: 18,
              }}
            >
              <OtherIdicator
                title="Wind"
                value={`${wheatherData.wind.speed} m/s`}
              />
              <OtherIdicator
                title="Humidity"
                value={`${wheatherData.main.humidity} %`}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                paddingTop: 18,
              }}
            >
              <OtherIdicator
                title="Pressure"
                value={`${wheatherData.main.pressure}hPa`}
              />
              <OtherIdicator
                title="Visibility"
                value={`${wheatherData.visibility} m`}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                justifyContent: 'space-between',
                paddingTop: 18,
              }}
            >
              <OtherIdicator title="Dew point" value="-1°C" />
              <OtherIdicator
                title="Clouds"
                value={`${wheatherData.clouds.all} %`}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1
            style={{
              textAlign: 'center',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: 50,
              color: '#fff',
            }}
          >
            Loading...
          </h1>
        </div>
      )}
    </React.Fragment>
  );
};

export default DetailsPage;
