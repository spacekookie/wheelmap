const React = require('react');
const I18n = require('./common.i18n');

const { string, func } = React.PropTypes;
const { section } = require('./misc.types');

class Section extends React.Component {
  static propTypes = {
    actionLabel: string.isRequired, // @TODO Use scope,
    section: section.isRequired,
    onClickAction: func.isRequired
  };

  static defaultProps = {
    actionLabel: 'Weiter'
  };

  onClickAction = (event) => {
    event.preventDefault();

    this.props.onClickAction(this.props.section);
  };

  render() {
    let { section, children, actionLabel, onClickAction } = this.props;

    return (
      <section className="nodes-new-content-section">
        <h2><I18n scope={`nodes.new.form.section.${section.key}.title`}/></h2>
        <div className="nodes-new-content-section-form">
          {children}
        </div>
        <div className="form-actions">
          <button className="btn btn-primary pull-right submit" onClick={this.onClickAction}>{actionLabel}</button>
        </div>
      </section>
    );
  }
}

module.exports = Section;