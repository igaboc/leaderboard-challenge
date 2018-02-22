import React from 'react'
import './Leaderboard.css';
import profileImage from '../assets/person-placeholder.png'


function ListData({
  rankByCertification,
  profileData,
  certificationCount
}) {

  // Logic to display userCertification data or Forum Votes data based on rankByCertification
  const renderData = 
    rankByCertification === true ? 
    certificationCount
      .sort((a,b) => b.count - a.count)
      .map((entry) => {
        return (
          // userId used as the unique key for each row, assuming that the userId is unique
          <tr key={entry.userId}>
            {/* <td><img src={entry.picture} className='rounded' onError={(e)=>{e.target.src=`${profileImage}`}} alt='User Profile'/></td> */}
            <td>{entry.displayname}<br/><small>{entry.jobTitle}<br/> {entry.employer}</small></td>
            <td>{entry.count}<br/>certificates</td>
          </tr>
        )
      })
    :
    profileData
      .sort((a,b) => b.voteSum - a.voteSum)
      .map((entry) => {
        return (
        <tr key={entry.userId}>
          {/* <td><img src={entry.picture} className='rounded' onError={(e)=>{e.target.src=`${profileImage}`}} alt='User Profile'/></td> */}
          <td>{entry.displayname}<br/><small>{entry.jobTitle}<br/> {entry.employer}</small></td>
          <td>{entry.voteSum}<br />forum votes</td>
        </tr>
        )
      })  

  return (
    <table className='table'>
      <tbody>
        { renderData === null ? "No Data Available" : renderData }
      </tbody>
    </table>
  )
}

export default ListData