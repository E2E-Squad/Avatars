import * as React from 'react'
// import { Avatar, AvatarStyle, Piece, Option, OptionContext, allOptions } from 'avataaars';
import Avatar from 'avataaars'
import { Avatar as Avatar2 } from 'avataaars'

export default class AvatarRendered extends React.Component {

  render () {
    return (
      <div>
        <Avatar
          style={{width: '100px', height: '100px'}}
          avatarStyle='Circle'
          topType='LongHairMiaWallace'
          accessoriesType='Prescription02'
          hairColor='BrownDark'
          facialHairType='Blank'
          clotheType='Hoodie'
          clotheColor='PastelBlue'
          eyeType='Happy'
          eyebrowType='Default'
          mouthType='Smile'
          skinColor='Light'
        />
      </div>
    )
  }
}