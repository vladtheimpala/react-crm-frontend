'use strict';
var classNames = require('classnames');
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


exports.MenuLink = React.createClass({
    displayName: 'MenuLink',

    propTypes: {
        className: React.PropTypes.string,
    },

    render() {
        var {className, ...props} = this.props;

        return (
            <Link className={classNames('pure-menu-link', className)} to={props.to} {...props}>
                {props.children}
            </Link>
        );
    },
});
