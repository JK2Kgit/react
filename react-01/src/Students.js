import React, { Component } from 'react'

export default class Students extends Component {
    constructor(props){
        super(props)
        this.state = {
            exam: null,
            quiz: null,
        }
    }

    render() {

        console.log(this.props)
        return (
            <div>
                <div>
                    {
                        this.props.studentsList.map((x) => <div>{x.name} <button onClick={() => this.show(x._id)}>Zobacz oceny {x._id}</button></div>)
                    }
                </div>
                <div>
                    exam: {this.state.exam} <br />

                    quiz: {this.state.quiz}
                </div>
            </div>

            
        )
    }

    show(i){
        console.log(i)
        let scores = this.props.studentsList.find((x)=>x._id == i).scores
        console.log(scores.find((x) => x.type == 'exam').score)
        this.setState({
            exam: scores.find((x) => x.type == 'exam').score,
            quiz: scores.find((x) => x.type == 'quiz').score,
        })
    }
}
