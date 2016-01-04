AppHeader = React.createClass({
	mixins: [ ReactMeteorData ],
	getMeteorData() {
		return {
			userId: Meteor.userId()
		};

	},
	brandLink() {
		if (!Meteor.loggingIn() && !this.data.userId ) {
			return FlowRouter.path( 'login' );
		} 
		return FlowRouter.path( 'index' );
	},
	navigationItems() {
		if (!Meteor.loggingIn() && Meteor.user() ) {
			return <AuthenticatedNavigation />;
		} else {
			return <PublicNavigation />;
		}
	},
	render() {
		return (
			<nav className="navbar navbar-default" role="navigation">
			  <div className="container">
			    <div className="navbar-header">
			      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			      </button>
			      <a className="navbar-brand" href={this.brandLink()}>Application Name in React</a>
			    </div>
			    {this.navigationItems()}
			  </div>
			</nav>
		);
	}
});