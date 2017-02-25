import React, {PropTypes, Component} from 'react'

const years = [2014, 2015, 2016]

export default class Page extends Component {
    static propTypes = {
        year: PropTypes.number.isRequired,
        photos: PropTypes.array.isRequired,
        setYear: PropTypes.func.isRequired
    };

    render() {
        const {year, photos, setYear} = this.props
        return <div>
            <p>
                {
                    years.map(year => {
                        return <button key= { year } onClick={() => setYear(year)}>{ year }</button>
                    })
                }
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото.</p>
        </div>
    }
}

