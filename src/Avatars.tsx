import * as React from 'react'
import { Avatar, AvatarStyle, Piece, Option, OptionContext, allOptions } from 'avataaars';

interface SelectorProps {
  type: string
  label: string
  optionContext: OptionContext
}

class PartSelector extends React.Component<SelectorProps> {
  render() {
    const { type, label, optionContext } = this.props
    const typeProp = type + "Type"
    const optionState = optionContext.getOptionState(typeProp)!
    console.log(optionState)
    console.log(optionContext)
    const partOptions = optionState.options.map((partType) => {
      console.log("Test")
      console.log(partType)
      const pieceProps = {
        pieceType: type,
        [typeProp]: partType
      }
      return (
        <Piece avatarStyle="Circle" pieceSize="100" {...pieceProps}/>
      )
    })
    return (
      <>
      <h1>{label}</h1>
      {partOptions}
      </>
    )
  }
}

export default class Pieces extends React.Component {
  private optionContext: OptionContext = new OptionContext(allOptions)

  private onChangeCache: Array<(value: string) => void> = []

  // UNSAFE_componentWillMount() {
  //   this.optionContext.addStateChangeListener(() => {
  //     this.forceUpdate()
  //   })
  //   this.onChangeCache = this.optionContext.options.map((option) =>
  //     this.onChange.bind(this, option)
  //   )
  // }
  private avatarRef: Avatar | null = null
  private onAvatarRef = (ref: Avatar) => {
    this.avatarRef = ref
  }

  render () {
    const avatarParts = this.optionContext.options.map((option, index) => (
      <li key={"key" + index}>{option.label}</li>
    ))
    console.log(allOptions)
    //this.optionContext.setValue('mouth', 'Default')
    this.optionContext.setData({mouthType: 'Default'})
    //const mouthValue = this.optionContext.getValue('mouth')
    const mouthValue = this.optionContext.getOptionState('mouthType')
    const topValue = this.optionContext.getOptionState('topType')
    console.log(mouthValue)
    console.log(topValue)
    return (
      <>
      <div>
        <Piece avatarStyle="Circle" pieceType="mouth" pieceSize="100" mouthType="Eating"/>
        <Piece avatarStyle="Circle" pieceType="eyes" pieceSize="100" eyeType="Dizzy"/>
        <Piece avatarStyle="Circle" pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited"/>
        <Piece avatarStyle="Circle" pieceType="accessories" pieceSize="100" accessoriesType="Round"/>
        <Piece avatarStyle="Circle" pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red"/>
        <Piece avatarStyle="Circle" pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic"/>
        <Piece avatarStyle="Circle" pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red"/>
        <Piece avatarStyle="Circle" pieceType="graphics" pieceSize="100" graphicType="Skull" />
        <Piece avatarStyle="Circle" pieceType="skin" pieceSize="100" skinColor="Brown" />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <Avatar ref={this.onAvatarRef} avatarStyle={AvatarStyle.Circle} />
      </div>
      <div>
        <ul>
          {avatarParts}
        </ul>
        <PartSelector optionContext={this.optionContext} type="mouth" label="Bouche"></PartSelector>
      </div>
      </>
    )
  }

  private onChange(option: Option, value: string) {
    this.optionContext.setValue(option.key, value)
  }
}