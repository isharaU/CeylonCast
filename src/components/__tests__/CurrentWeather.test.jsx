import { render, screen } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';
import '@testing-library/jest-dom';

describe('CurrentWeather component', () => {
  const mockWeather = {
    icon: 'https://cdn.weatherapi.com/weather/64x64/day/116.png',
    description: 'Partly cloudy',
    temperature: 28,
    city: 'Colombo',
    country: 'Sri Lanka',
  };

  test('renders loading spinner initially when no weather data is provided', () => {
    render(<CurrentWeather weather={null} />);
    const loadingImage = screen.getByAltText(/loading/i);
    expect(loadingImage).toBeInTheDocument();
  });

  test('shows loading spinner briefly when weather data is provided', async () => {
    jest.useFakeTimers(); // control time
    render(<CurrentWeather weather={mockWeather} />);
    
    // Should see spinner first
    expect(screen.getByAltText(/loading/i)).toBeInTheDocument();

    // Advance time by 400ms to simulate useEffect delay
    jest.advanceTimersByTime(400);

    // Re-render or wait for updated state
    expect(await screen.findByText(/Colombo/)).toBeInTheDocument();

    jest.useRealTimers();
  });

  test('displays weather info after loading finishes', async () => {
    jest.useFakeTimers();
    render(<CurrentWeather weather={mockWeather} />);

    jest.advanceTimersByTime(400);

    expect(await screen.findByText(/28°C/)).toBeInTheDocument();
    expect(screen.getByText(/Partly cloudy/)).toBeInTheDocument();
    expect(screen.getByText(/Colombo, Sri Lanka/)).toBeInTheDocument();

    const weatherIcon = screen.getByAltText(/Partly cloudy/);
    expect(weatherIcon).toHaveAttribute('src', mockWeather.icon);

    jest.useRealTimers();
  });
});
