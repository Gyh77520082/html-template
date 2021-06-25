if (document.body.clientWidth > 767) {
						$('.navbar-toggle').css({
							'display': 'none'
						});
					}
					if (document.body.clientWidth < 767) {
						$('#g-nav').css({
							'display': 'none'
						});
						$('body').click(function() {
							$('#g-nav').css({
								'display': 'none'
							});
							e.stopPropagation();
						});
						$('.navbar-toggle').click(function(e) {
							if ($('#g-nav').is(':hidden')) {
								$('#g-nav').css({
									'display': 'block'
								});
							} else {
								$('#g-nav').css({
									'display': 'none'
								});
							}
							e.stopPropagation();
						});
						$('#g-nav li').click(function(e) {
							$('#g-nav li ul').css({
								'left': '142px',
								'top': '0',
								'border': 'none'
							});
							if ($(this).find('ul').length > 0) {
								$(this).find('a').attr('href', 'javascript:;');
							}
							e.stopPropagation();
						})
					}