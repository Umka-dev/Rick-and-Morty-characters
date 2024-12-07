import React from 'react';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Card from './Card';
import { IProps } from './Card';

// Arrange
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(() => {
    return mockNavigate;
  }),
}));

const mockProps: IProps = {
  id: 5,
  name: 'Rick',
  image: 'https://api.example.com/data',
};

describe('Card', () => {
  test('renders image and name, triggers onClick', async () => {
    //Act
    render(
      // <Card id={mockProps.id} name={mockProps.name} image={mockProps.image} />,
      <Card {...mockProps} />,
    );

    const textElement = screen.getByText(mockProps.name);
    expect(textElement).toBeVisible();

    //Assert
    const imageElement = screen.getByAltText(mockProps.name);
    expect(imageElement).toBeVisible();
    expect(imageElement).toHaveAttribute('src', mockProps.image);

    await userEvent.click(textElement);
    expect(mockNavigate).toHaveBeenCalledTimes(1);
    expect(mockNavigate).toHaveBeenCalledWith(`/character/${mockProps.id}`);
  });
});
