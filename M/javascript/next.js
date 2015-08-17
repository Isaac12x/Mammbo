(function() {
	var container = document.querySelector( 'div.container' ),
		triggerLink = document.getElementById( 'trigger-inlay' ),
		inlay = document.querySelector( 'div.inlay' ),
		closeLink = inlay.querySelector( 'link.inlay-close' );
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		support = { transitions : Modernizr.csstransitions };

	function toggleInlay() {
		if( classie.has( inlay, 'open' ) ) {
			classie.remove( inlay, 'open' );
			classie.remove( container, 'inlay-open' );
			classie.add( inlay, 'close' );
			var onEndTransitionFn = function( ev ) {
				if( support.transitions ) {
					if( ev.propertyName !== 'visibility' ) return;
					this.removeEventListener( transEndEventName, onEndTransitionFn );
				}
				classie.remove( overlay, 'close' );
			};
			if( support.transitions ) {
				inlay.addEventListener( transEndEventName, onEndTransitionFn );
			}
			else {
				onEndTransitionFn();
			}
		}
		else if( !classie.has( inlay, 'close' ) ) {
			classie.add( inlay, 'open' );
			classie.add( container, 'inlay-open' );
		}
	}

	triggerLink.addEventListener( 'click', toggleInlay );
	closeBttn.addEventListener( 'click', toggleInlay );
})();