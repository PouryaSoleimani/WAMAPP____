import { render } from '@testing-library/react';
import CategoryFlexBoxComponent from './CategoryFlexBoxComponent';
import '@testing-library/jest-dom';


test('renders CategoryFlexBoxComponent', () => {
  const { getByText } = render(<CategoryFlexBoxComponent id="test-id" title="Test Title" />);
  const element = getByText(/some text/i);
  expect(element).toBeInTheDocument();
});