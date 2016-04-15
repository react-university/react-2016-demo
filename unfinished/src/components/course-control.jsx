import                 'jquery-ui/autocomplete';
import React           from 'react';
import ReactDOM        from 'react-dom';
import shallowCompare  from 'react-addons-shallow-compare';

export default class CourseControl extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  componentDidMount() {
    this.autocomplete();
  }

  componentDidUpdate() {
    this.autocomplete();
  }

  autocomplete() {
    const starData = this.props.starData;
    const starNames = starData.map((star) => star.name);
    $(this.refs.search).autocomplete({
      source: starNames,
      minLength: 3,
      select: (event, ui) => {
        const starName  = ui.item.value;
        const system = this.findSystem(starData, starName);
        this.props.updateDestination(system);
      },
      messages: {
        noResults: '',
        results: () => {}
      }
    });
  }

  findSystem(starData, starName) {
    return starData.filter((star) => star.name === starName )[0];
  }

  render() {
    return <div className="course-control">
      <h2>Course Control</h2>
      <input type="text"
        className="search"
        placeholder="Star System"
        ref="search"/>
    </div>
  }
}
