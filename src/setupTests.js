// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';
import { configure as configureReact } from '@testing-library/react';

configure({ testIdAttribute: 'data-test' });
configureReact({ testIdAttribute: 'data-test' });
