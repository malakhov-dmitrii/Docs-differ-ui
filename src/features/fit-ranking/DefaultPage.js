import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import AppBar from '@material-ui/core/AppBar';
import { Card, CardContent, CardHeader, Container, Toolbar, Typography } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { random } from 'lodash';

export class DefaultPage extends Component {
  static propTypes = {
    fitRanking: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  const;
  ex = [
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },

    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },

    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },

    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },

    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
    {
      'tags': [
        'Boxer shorts',
        'AAPE By A Bathing Ape',
        'Add them to your everyday line-up',
        'Branded waistband',
        'Logo print',
      ],
      'about': [
        'Crisp cotton',
        'It\'s light and breathable',
        'Fabric: 100% Cotton.',
      ],
      'url': 'https://www.asos.com/aape-by-a-bathing-ape/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/prd/11913377?clr=black&colourWayId=16396869&SearchQuery=&cid=19953',
      'image_url': 'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
      'images': [
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-4?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-1-black?$XXL$&wid=513&fit=constrain',
        'https://images.asos-media.com/products/aape-by-a-bathing-ape-side-logo-boxer-short-in-black/11913377-2?$XXL$&wid=513&fit=constrain'],
      'sizes': ['S', 'M', 'L'],
      'color': 'Black',
      'gender': ['Men'],
      'cid': '11913377',
      'currency': 'GBP',
      'current_price': 25,
      'previous_price': 25,
    },
  ];

  render() {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <h2>OutFit Guru</h2>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <div className="root">
          <GridList cellHeight={160} className="gridList" cols={4}>
            {this.ex.map(tile => (
              <GridListTile key={random(0, 4084)} cols={random(1, 2)}>
                <img src={tile.image_url} alt={tile.tags.join(', ')} />
              </GridListTile>
            ))}
          </GridList>
          </div>
        </Container>
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    fitRanking: state.fitRanking,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DefaultPage);
