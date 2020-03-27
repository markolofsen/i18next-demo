import React from 'react'
import PropTypes from 'prop-types'

import { i18n, Link, withTranslation } from '../i18n'


const Homepage = ({ t }) => (
  <React.Fragment>
    <main>
      <div>
        {t('change-locale')}
      </div>
    </main>
  </React.Fragment>
)

Homepage.getInitialProps = async ({query}) => {
	
	console.warn('query',query);

	return {
	  namespacesRequired: ['common'],
	};
}

Homepage.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Homepage)
