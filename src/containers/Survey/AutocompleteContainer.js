import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Province} from '../../json/province.js';

import Site_Logo from'../../assets/register_template/css/autocompleted.scss';

class AutocompleteContainer extends React.Component {
	constructor ( props, context ) {
		super( props, context );
		this.state = {
			results: [ ],
			loading: false,
			selected: '',
      data: ''
		};

	}

  onchangevalue ( value ) {
    this.state.selected = value;
  }

	search ( value ) {
		return this.state.data.filter( function( item ) {
			return ( new RegExp(value, 'i') ).test( item );
		} );
	}

	onSearch( value ) {
		var time = this.time = (new Date( )).getTime( );
		this.state.results = [ ];

		value = value.trim( );
		if( value == "" ) {
			this.state.loading = false;
			this.setState( this.state );
			return;
		}

		this.state.loading = true;
		this.setState( this.state );

		setTimeout( function( ) {
			if( this.time != time ) return;
			this.state.loading = false;
			this.state.results = this.search( value ) || [ ];
			this.setState( this.state );
		}.bind( this ), 1000 );
	}

	onSelect( result, index ) {
		this.state.selected = result;
		this.state.results = [ ];
		this.setState( this.state );
	}

  GetListData(){
    this.state.data = this.props.List;
  }

	render( ) {

    this.GetListData()

		return (
				<div className="autocomplete_container">
					<Autocomplete
						name={this.props.name}
            placeholder_value={this.props.placeholder_value}
            onchangevalue={this.onchangevalue.bind( this )}
            dataselect={( this.state.selected )}
  					onSearch={this.onSearch.bind( this )}
  					onSelect={this.onSelect.bind( this )}
  					results={this.state.results}
  					loading={this.state.loading}>
  						{item => {
  							return <div key={item}>{item}</div>;
  						}}
					</Autocomplete>
				</div>
		);
	}
}

class Autocomplete extends React.Component {

	constructor ( props, context ) {
		super( props, context );

		this.state = {
			selected: false,
			hover: false,
			results: this.props.results,
			loading: this.props.loading,
      dataselect: ""
		};
	}

	componentWillReceiveProps( nextProps ) {
		this.setState( {
			selected: false,
			hover: false,
			results: nextProps.results,
			loading: nextProps.loading,
      dataselect: nextProps.dataselect
		} );
	}

	onChange( e ) {
		this.props.onSearch( e.target.value );
    this.props.onchangevalue( e.target.value )
    //this.state.dataselect = e.target.value
	}

	onKeyUp( e ) {
		var
			keyCode = e.keyCode || e.which
		,	hover = false
		,	selected = false
		,	state = {
				results: this.state.results,
				loading: this.state.loading
			}
		;

		if( this.state.results.length ) {
			switch( keyCode ) {
				case 38: // up
					if(
						this.state.hover === false ||
						( this.state.hover - 1 ) < 0
					) {
						hover = this.state.results.length - 1;
					} else {
						hover = this.state.hover - 1;
					}

					break;

				case 40: // down
					if(
						this.state.hover === false ||
						( this.state.hover + 1 ) > ( this.state.results.length - 1 )
					) {
						hover = 0;
					} else {
						hover = this.state.hover + 1;
					}

					break;

				case 13: // enter
					if( this.state.hover !== false )
						selected = this.state.hover;
					break;
			}
		}

		if( selected === false ) {
			state.selected = false;
			state.hover = hover;

			this.setState( state );
		} else {
			this.select( selected );
		}
	}

	onBlur( e ) {
		setTimeout( function(){
			var state = { };
			state.selected = false;
			state.hover = false;
			state.results = [ ];

			this.setState( state );
		}.bind( this ), 250 );
	}

	select( index ) {
		var state = { };
		state.selected = index;
		state.hover = false;
		ReactDOM.findDOMNode( this.refs.input ).value = "";

		// call the callback
		this.props.onSelect( this.state.results[ state.selected ], state.selected );
		state.results = [ ];

		this.setState( state );
	}

	render( ) {

		return (
			<div className="autocomplete">
        <i className="icon-prepend fa-home"></i>
				<input ref="input" name={this.props.name} onBlur={this.onBlur.bind(this)} onKeyUp={this.onKeyUp.bind( this )} onChange={this.onChange.bind( this )} placeholder={this.props.placeholder_value} value={this.state.dataselect}/>
				{function( ){
					if( this.state.loading ) {
						return (
							<div className="autocomplete-loading">
								<div className="cssload-loader">
									<div className="cssload-inner cssload-one"></div>
									<div className="cssload-inner cssload-two"></div>
									<div className="cssload-inner cssload-three"></div>
								</div>
							</div>
						);
					}
					return "";
				}.bind( this )( )}
				<div style={{clear: "both"}} />
				{function(){
					if( this.state.results.length ) {
						return <div className="autocomplete-list">{( !this.state.selected ) ? this.state.results.map(function( item, index ){
							return React.cloneElement( this.props.children( item ), {
								className: "autocomplete__item " + ( ( this.state.hover !== false && this.state.hover == index ) ? 'hover' : '' ),
								onClick: this.select.bind( this, index )
							} );
						}.bind( this )) : ''}</div>
					} else return "";
				}.bind(this)()}
			</div>
		);
	}
}


export default AutocompleteContainer
