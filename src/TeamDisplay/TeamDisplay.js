import React from 'react'
import './TeamDisplay.scss'
import { connect } from 'react-redux'
import { Loader } from '../Loader/Loader'
import { addFavorite } from '../Actions'
import { NavLink, Link } from 'react-router-dom'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import PropTypes from 'prop-types'

export const TeamDisplay = ({team, name, memberOne, memberTwo, memberThree, addFavorite}) => {
  if(!memberOne && !memberTwo && !memberThree) {
    return <Loader />
  } else if (memberOne === undefined || memberTwo === undefined || memberThree === undefined) {
    return <ErrorMessage />
  } else {
    return (
    <>
      <div className='screen-top'>
        <NavLink type='button' to='/favorites' className='whack-fav-btn'>Favorites</NavLink>
        <h1 className='team-title'>{name}</h1>
        <button type='button' className='fav-btn' onClick={() => addFavorite(team)}>Add to Favorites</button>
      </div>
      <section className='team-container'>
      <section className='members-container'>
        <Link to={{pathname:'/team/memberInfo', state: {member: memberOne}}} className='member-div'>
          <h2>{memberOne.name}</h2>
          <img className='member-image' src={memberOne.image.url} alt='member one'/>
          <ul className='powers-list'>Stats:
            <li>Intelligence: {memberOne.powerstats.intelligence}</li>
            <li>strength: {memberOne.powerstats.strength}</li>
            <li>Speed: {memberOne.powerstats.speed}</li>
            <li>Durability: {memberOne.powerstats.durability}</li>
            <li>Power: {memberOne.powerstats.power}</li>
            <li>Combat: {memberOne.powerstats.combat}</li>
          </ul>
        </Link >
        <Link to={{pathname:'/team/memberInfo', state: {member: memberTwo}}} className='member-div'>
          <h2>{memberTwo.name}</h2>
          <img className='member-image' src={memberTwo.image.url} alt='member two'/>
          <ul className='powers-list'>Stats:
            <li>Intelligence: {memberTwo.powerstats.intelligence}</li>
            <li>strength: {memberTwo.powerstats.strength}</li>
            <li>Speed: {memberTwo.powerstats.speed}</li>
            <li>Durability: {memberTwo.powerstats.durability}</li>
            <li>Power: {memberTwo.powerstats.power}</li>
            <li>Combat: {memberTwo.powerstats.combat}</li>
          </ul>
        </Link>
        <Link to={{pathname:'/team/memberInfo', state: {member: memberThree}}} className='member-div'>
          <h2>{memberThree.name}</h2>
          <img className='member-image' src={memberThree.image.url} alt='member three'/>
          <ul className='powers-list'>Stats:
            <li>Intelligence: {memberThree.powerstats.intelligence}</li>
            <li>strength: {memberThree.powerstats.strength}</li>
            <li>Speed: {memberThree.powerstats.speed}</li>
            <li>Durability: {memberThree.powerstats.durability}</li>
            <li>Power: {memberThree.powerstats.power}</li>
            <li>Combat: {memberThree.powerstats.combat}</li>
          </ul>
        </Link>
      </section>
        <div className='team-stats'>
          <ul>Team Stats:
            <li>Intelligence: {parseInt(memberOne.powerstats.intelligence) + parseInt(memberTwo.powerstats.intelligence) + parseInt(memberThree.powerstats.intelligence)}</li>
            <li>strength: {parseInt(memberOne.powerstats.strength) + parseInt(memberTwo.powerstats.strength) + parseInt(memberThree.powerstats.strength)}</li>
            <li>Speed: {parseInt(memberOne.powerstats.speed) + parseInt(memberTwo.powerstats.speed) + parseInt(memberThree.powerstats.speed)}</li>
            <li>Durability: {parseInt(memberOne.powerstats.durability) + parseInt(memberTwo.powerstats.durability) + parseInt(memberThree.powerstats.durability)}</li>
            <li>Power: {parseInt(memberOne.powerstats.power) + parseInt(memberTwo.powerstats.power) + parseInt(memberThree.powerstats.power)}</li>
            <li>Combat: {parseInt(memberOne.powerstats.combat) + parseInt(memberTwo.powerstats.combat) + parseInt(memberThree.powerstats.combat)}</li>
          </ul>
        </div>
      </section>
    </>
    )
  }
}

export const mapStateToProps = state => ({
  team: state.team,
  name: state.team.name,
  memberOne: state.team.memberOne,
  memberTwo: state.team.memberTwo,
  memberThree: state.team.memberThree,
})

export const mapDispatchToProps = dispatch => ({
  addFavorite: team => dispatch(addFavorite(team)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TeamDisplay)

TeamDisplay.propTypes = {
  team: PropTypes.object, 
  name: PropTypes.string, 
  memberOne: PropTypes.object, 
  memberTwo: PropTypes.object, 
  memberThree: PropTypes.object,
  addFavorite: PropTypes.func,
}