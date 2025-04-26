import '@testing-library/jest-dom';

jest.mock('provider', () => jest.fn(), { virtual: true });

jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => children,
  SwiperSlide: ({ children }) => children,
}));

jest.mock('swiper/modules', () => ({
  Autoplay: jest.fn(),
  Grid: jest.fn(),
  Pagination: jest.fn(),
}));

jest.mock('@/lib/constants', () => ({
  BASE_URL: '/',
}));
