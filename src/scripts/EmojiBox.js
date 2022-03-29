import React from 'react'

class EmojiBox extends React.Component
{
    constructor(props)
    {
        super(props)
        this.tex = { value: 'lorem ipsum dolor sit amet' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        this.setState({tex: event.target.tex})
        console.log(event.target.tex)
    }

    render()
    {
        return(
            <form>
                <label>
                    Name:
                    <textarea cols="50" rows="3" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default EmojiBox