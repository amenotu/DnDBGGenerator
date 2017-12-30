import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Accordion, Icon, Segment } from 'semantic-ui-react';

function mapStateToProps(state) {
  return {
    alignment: state.getIn(['familyAndFriends', 'Alignment']),
    family: state.getIn(['familyAndFriends', 'Family']),
    attitude: state.getIn(['familyAndFriends', 'Attitude']),
    occupation: state.getIn(['familyAndFriends', 'Occupation']),
    absentParentFate: state.getIn(['familyAndFriends', 'AbsentParentFate']),
    race: state.getIn(['familyAndFriends', 'Race']),
    childhoodHome: state.getIn(['familyAndFriends', 'ChildhoodHome']),
    childhoodMemories: state.getIn(['familyAndFriends', 'ChildhoodMemories']),
    familyClass: state.getIn(['familyAndFriends', 'Class']),
  };
}

@connect(mapStateToProps, null)
export default class FamilyAndFriendsAccordion extends Component {
  static PropTypes = {
    alignment: PropTypes.String,
    family: PropTypes.String,
    attitude: PropTypes.String,
    occupation: PropTypes.String,
    absentParentFate: PropTypes.Object,
    race: PropTypes.String,
    childhoodHome: PropTypes.String,
    childhoodMemories: PropTypes.String,
    familyClass: PropTypes.String,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeIndex: {
        0: false,
      },
    };
  }

  handleClick = (e, titleProps) => {
    const { activeIndex } = this.state;
    const index = titleProps;
    const newIndex = activeIndex[index] ? false : true;
    activeIndex[index] = newIndex;

    this.setState({ activeIndex });
  }

  render() {
    const {
      alignment,
      family,
      attitude,
      occupation,
      absentParentFate,
      race,
      childhoodHome,
      childhoodMemories,
      familyClass,
    } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        { familyClass.length &&
          <Segment inverted>
            <Accordion inverted>
              <Accordion.Title
                active={ activeIndex[0] }
                onClick={ this.handleClick }>
                <Icon name='dropdown' />
                Family & Friends
              </Accordion.Title>
              <Accordion.Content active={ activeIndex[0] }>
                <h4>Family & Friends Alignment</h4>
                <p>
                  { alignment }
                </p>
                <h4>Family</h4>
                <p>
                  { family }
                </p>
                <h4>Family & Friends Attitude</h4>
                <p>
                  { attitude }
                </p>
                <h4>Family & Friends Alignment</h4>
                <p>
                  { alignment }
                </p>
                <h4>Family & Friends Occupation</h4>
                <p>
                  { occupation }
                </p>
                <h4>Family & Friends Alignment</h4>
                <p>
                  { alignment }
                </p>
                <h4>Absent Parent Fate</h4>
                <p>
                  { absentParentFate }
                </p>
                <h4>Family & Friends Race</h4>
                <p>
                  { race }
                </p>
                <h4>Childhood Home</h4>
                <p>
                  { childhoodHome }
                </p>
                <h4>Childhood Memories</h4>
                <p>
                  { childhoodMemories }
                </p>
                <h4>Family & Friends Alignment</h4>
                <p>
                  { alignment }
                </p>
                <h4>Family & Friends Class</h4>
                <p>
                  { familyClass }
                </p>
              </Accordion.Content>
            </Accordion>
          </Segment>
        }
      </div>
    )
  };
}
