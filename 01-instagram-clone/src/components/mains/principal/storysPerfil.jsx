import React from 'react'

const StorysPerfil = ({img, user}) => {
  return (
    <div className='storysPerfil'>
      <div className="imgStorysPerfil">
        <img src={img} alt={user}/>
      </div>
      <div className="userStorysPerfil">
        <span>{user}</span>
      </div>
    </div>
  )
}

export default StorysPerfil
