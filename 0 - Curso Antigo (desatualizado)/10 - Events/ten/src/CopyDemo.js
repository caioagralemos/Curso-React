import React, { Component } from 'react'

class CopyDemo extends Component {

    handleCopy = () => {
        alert('Pare de tentar roubar meu texto!')
    }

    render(){
        return(
            <div>
                <h4>Tente copiar algo desse texto</h4>
                <section onCopy={this.handleCopy} style={{ width: '300px', display: 'inline-block' }}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe explicabo similique deleniti tenetur odit, exercitationem commodi eius temporibus nihil dolorem minus, dolorum quos dolor, modi aperiam repellat suscipit blanditiis numquam?
                    Dolores quod alias, accusamus reiciendis quisquam officia molestiae nostrum quidem qui eius recusandae ex deserunt doloribus veniam nulla corporis magnam odio consequuntur tenetur, fugiat natus quae facere! Accusamus, fuga modi.
                </section>
            </div>
        )
    }
}

export default CopyDemo