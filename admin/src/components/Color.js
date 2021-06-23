import React, { useEffect, useState } from 'react';
import instance from '../axiosService';
import SelectorForm from './SelectorForm';

function Color(props) {
  return <SelectorForm selectorName="colors" />;
}

export default Color;
