import React from 'react'


//Idk if this works lol
export default class TouchableOpactiy extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            isPressed: false,
            isLongPressed: false,
            isLongPressedTimer: 0,
        }
    }

    onPressed = ()=> {
        this.setState({
            isPressed: true,
        })
        this.props.Pressed();
    }

    onLongPressed = ()=> {
        this.setState({
            isLongPressed: true,
        })

        if (this.LongPressed > 2000){
            this.props.LongPressed();
        }

        this.LongPressedTimer = setInterval(()=> {
            this.setState({
                isLongPressedTimer: this.state.isLongPressedTimer + 100,
            })
        }
    )
    }

    

 
 render()
{
    return (
        {
            ...this.props.children
        }
      )
}  
}
