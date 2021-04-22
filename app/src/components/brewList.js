import { connect } from 'react-redux';



const BrewList = (props) => {
    return (
        <div className="brew-wrapper">
            {props.breweries.map(brewery => (
                <p key={brewery.id}>{brewery.name}</p>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        breweries: state.breweries
    };
};

export default connect(mapStateToProps, {})(BrewList);