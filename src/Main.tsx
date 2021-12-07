import * as React from 'react'
import * as PropTypes from 'prop-types'
import { Avatar, AvatarStyle, OptionContext, allOptions } from 'avataaars'
import AvatarForm from './AvatarForm'

interface Props {
    __render__?: string
    avatarStyle: AvatarStyle
    onChangeUrlQueryParams: (params: any, updateType: string) => void
    onChangeAvatarStyle: (avatarStyle: AvatarStyle) => void
}

function capitalizeFirstLetter(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export default class Main extends React.Component<Props>
{
    private optionContext: OptionContext = new OptionContext(allOptions)

    static defaultProps = {
        avatarStyle: AvatarStyle.Circle,
    }
    static childContextTypes = {
        optionContext: PropTypes.instanceOf(OptionContext),
    }

    getChildContext() {
        return { optionContext: this.optionContext }
    }

    UNSAFE_componentWillMount() {
        this.optionContext.addValueChangeListener(this.onOptionValueChange)
        this.updateOptionContext(this.props)
    }

    render () {
        const avatarStyle = AvatarStyle.Circle
        return (
            <div>
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                    <Avatar avatarStyle={avatarStyle} />
                </div>
                <AvatarForm
                    optionContext={this.optionContext}
                    avatarStyle={avatarStyle}
                    displayingCode={false}
                    displayingImg={false}
                    onDownloadPNG={this.onDownloadPNG}
                    onDownloadSVG={this.onDownloadSVG}
                    onAvatarStyleChange={this.onAvatarStyleChange}
                    onToggleCode={this.onToggleCode}
                    onToggleImg={this.onToggleImg}
                />
            </div>
        )
    }

    private updateOptionContext(nextProps: Props) {
        this.optionContext.setData(nextProps as any)
    }

    private onOptionValueChange = (key: string, value: string) => {
        const name = capitalizeFirstLetter(key)
        const handlerName = `onChange${name}`
        const updateHandler = this.props[handlerName] as (value: string) => void
        updateHandler(value)
    }

    private onDownloadPNG = () => {
        console.log("DL png");
    }
    
    private onDownloadSVG = () => {
        console.log("DL svg");
    }

    private onToggleCode = () => {
        console.log("Toggle code")
    }
    
    private onToggleImg = () => {
        console.log("Toggle img")
    }

    private onAvatarStyleChange = () => {
        console.log("Avatar style chage")
    }
}