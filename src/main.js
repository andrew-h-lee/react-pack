
import React from 'react';
import { render } from 'react-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  render(
    React.createElement(Counter),
    document.getElementById('mount')
  );
});
