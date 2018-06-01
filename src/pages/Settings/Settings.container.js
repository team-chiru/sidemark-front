/* @flow */

// Dependencies
import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {I18n, setLocale} from 'react-redux-i18n'

// Components
import { Dropdown } from 'semantic-ui-react'

// i18n translations
import {languageOptions} from 'services/i18n'

// Assets
import './Settings.scss'

// Main Component
/**
 * Likemark presentational component which is responsable for the UI.
 * @property {Function} props.setLocale - The function which changes the application language.
 */

type Props = {
  setLocale: Function
}

export class Settings extends React.Component<Props, void> {
  render () {
    return (
      <div id='settings-page'>
        {console.log(this.props)}
        <div>
          <h2>Settings</h2>
        </div>
        <div>
          <Dropdown
            placeholder={I18n.t('likemark.likemarkMenu.language')}
            fluid
            search
            selection
            options={languageOptions}
            onChange={(e, data) => this.props.setLocale(data.value)}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ setLocale }, dispatch)
)(Settings)
