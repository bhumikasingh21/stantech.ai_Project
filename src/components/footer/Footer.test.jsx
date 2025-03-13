import { render, screen, expect } from '@testing-library/react';
import Footer from './Footer'; // Adjust the import based on where the Footer component is located
import { describe, it, expect, vi, test } from 'vitest'

describe('Footer Component', () => {
  test('renders the footer content', () => {
    render(<Footer />);

    const facebookIcon = screen.getByAltText(/facebook/i);
    const instagramIcon = screen.getByAltText(/instagram/i);
    const linkedinIcon = screen.getByAltText(/linkedin/i);
    expect(facebookIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
    expect(linkedinIcon).toBeInTheDocument();

    // Check if the footer links are rendered
    const faqLink = screen.getByText(/faq/i);
    const privacyLink = screen.getByText(/privacy/i);
    const supportLink = screen.getByText(/support/i);
    const contactLink = screen.getByText(/contact/i);
    expect(faqLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(supportLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();

    const copyrightText = screen.getByText(/© 2025 stantech\.ai\. all rights reserved\./i);
    expect(copyrightText).toBeInTheDocument();
  });

  test('does not render the logo if the commented-out code is not active', () => {
    render(<Footer />);
    
    const logoImage = screen.queryByAltText(/logo/i);
    expect(logoImage).not.toBeInTheDocument();
  });
});
