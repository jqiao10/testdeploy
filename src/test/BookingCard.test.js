/*******************************************************************************
     * Junya Qiao: test the bookingCard, for current tenant, upcoming tenant and previous tenant.
     * Test the upcoming page layout
     * 1. If there is item
     * Test the card layout - All information is listed 
     * 
     * *******************************************************************************/

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingCard from "../Components/BookingCard";
import Current from "../Pages/LandlordSection/Current";

describe('BookingCard', () => {
    test('renders BookingCard with props', () => {
      const props = {
        propertyImg: "test-image.jpg",
        title: "Test Title",
        city: "Test City",
        state: "Test State",
        country: "Test Country",
        guest_firstname: "testFirstName",
        guest_lastname: "testLastName",
        guest_email: "fistnamelastname@example.com",
        startDate: "2024-01-01",
        endDate: "2024-01-07"
      };
  
      render(<BookingCard {...props} />);
      
      expect(screen.getByText(props.title)).toBeInTheDocument();
      expect(screen.getByText(`Address: ${props.city}, ${props.state}, ${props.country}`)).toBeInTheDocument();
      expect(screen.getByText(`Guest: ${props.guest_firstname}, ${props.guest_lastname}`)).toBeInTheDocument();
      expect(screen.getByText(`Contact: ${props.guest_email}`)).toBeInTheDocument();
      expect(screen.getByText(`Duration: ${props.startDate} to ${props.endDate}`)).toBeInTheDocument();
      
    });


});