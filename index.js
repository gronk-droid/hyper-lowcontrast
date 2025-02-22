const backgroundColor = '#2D2A2E'
const foregroundColor = '#978C8C'
const borderColor = '#2D2A2E'
const cursorColor = '#3F3A3F'
const colors = {
	black: '#3F3A3F',
	red: '#FC5C65',
	green: '#C3E69F',
	yellow: '#F7D794',
	blue: '#7ED6DF',
	magenta: '#F78FB3',
	cyan: '#87DCC6',
	white: '#EEEDE0',
	lightBlack: '#514A50',
	lightRed: '#FDAEAB',
	lightGreen: '#E0F3C8',
	lightYellow: '#FAEBC3',
	lightBlue: '#BEEAE8',
	lightMagenta: '#FAC7D2',
	lightCyan: '#C2EDDB',
	lightWhite: '#FDFFF1',
}

exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor: config.backgroundColor || backgroundColor,
		foregroundColor,
		borderColor,
		cursorColor,
		colors,
		termCSS: `
      ${config.termCSS || ''}
    `,
		css: `
      ${config.css || ''}
      .tabs_list .tab_tab.tab_active .tab_text  {
        background: ${backgroundColor};
      }
      .tab_active:before {
        border-color: ${borderColor};
      }
    `,
	})
}