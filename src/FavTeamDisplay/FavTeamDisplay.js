import React from 'react'
import './FavTeamDisplay.scss'

export const FavTeamDisplay = (props) => {
  let {name, memberOne, memberTwo, memberThree} = props.location.state.team;
  return ( 
      <>
        <h1 className='creation-title'>{name}</h1>
        <section className='team-container'>
          <div>
            <h3>{memberOne.name}</h3>
            <img className='member-image' src={memberOne.image.url} alt='member one'/>
            <ul>Stats:
              <li>Intelligence: {memberOne.powerstats.intelligence}</li>
              <li>strength: {memberOne.powerstats.strength}</li>
              <li>Speed: {memberOne.powerstats.speed}</li>
              <li>Durability: {memberOne.powerstats.durability}</li>
              <li>Power: {memberOne.powerstats.power}</li>
              <li>Combat: {memberOne.powerstats.combat}</li>
            </ul>
          </div>
          <div>
            <h3>{memberTwo.name}</h3>
            <img className='member-image' src={memberTwo.image.url} alt='member two'/>
            <ul>Stats:
              <li>Intelligence: {memberTwo.powerstats.intelligence}</li>
              <li>strength: {memberTwo.powerstats.strength}</li>
              <li>Speed: {memberTwo.powerstats.speed}</li>
              <li>Durability: {memberTwo.powerstats.durability}</li>
              <li>Power: {memberTwo.powerstats.power}</li>
              <li>Combat: {memberTwo.powerstats.combat}</li>
            </ul>
          </div>
          <div>
            <h3>{memberThree.name}</h3>
            <img className='member-image' src={memberThree.image.url} alt='member three'/>
            <ul>Stats:
              <li>Intelligence: {memberThree.powerstats.intelligence}</li>
              <li>strength: {memberThree.powerstats.strength}</li>
              <li>Speed: {memberThree.powerstats.speed}</li>
              <li>Durability: {memberThree.powerstats.durability}</li>
              <li>Power: {memberThree.powerstats.power}</li>
              <li>Combat: {memberThree.powerstats.combat}</li>
            </ul>
          </div>
          <div>
            <h3>Team Stats:</h3>
            <ul>Stats:
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

export default FavTeamDisplay