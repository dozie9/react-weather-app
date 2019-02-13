import React from 'react';


function FormComp(props) {

    return(
        <section>
            <form onSubmit={props.handleSubmit}>
                <input type={'text'} onChange={props.handleChange} name={'location'} value={props.data.location}/>
                <button>Get Weather</button>
            </form>
        </section>
    )
}

export default FormComp;