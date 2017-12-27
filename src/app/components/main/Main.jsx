import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import GeneratorForm from '../generatorForm/GeneratorForm.jsx';
import ParentsAccordion from '../accordions/ParentsAccordion.jsx';
import SiblingsAccordion from '../accordions/siblings/SiblingsAccordion.jsx';
import FamilyAndFriendsAccordion from '../accordions/FamilyAndFriendsAccordion.jsx';

export default class Main extends Component {

  render() {
    return (
      <div className='container main mainContainer'>
        <GeneratorForm/>
        <ParentsAccordion/>
        <SiblingsAccordion/>
        <FamilyAndFriendsAccordion/>
      </div>
    )
  };
}
