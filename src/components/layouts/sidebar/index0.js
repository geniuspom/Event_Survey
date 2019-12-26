import React, { Component } from 'react';
import '../../../assets/styles/index.scss';
import $ from 'jquery';

class Sidebar extends Component {

  componentDidMount(){
    // Sidebar links
    $('.sidebar .sidebar-menu li a').on('click', function () {
      const $this = $(this);

      if ($this.parent().hasClass('open')) {
        $this
          .parent()
          .children('.dropdown-menu')
          .slideUp(200, () => {
            $this.parent().removeClass('open');
          });
      } else {
        $this
          .parent()
          .parent()
          .children('li.open')
          .children('.dropdown-menu')
          .slideUp(200);

        $this
          .parent()
          .parent()
          .children('li.open')
          .children('a')
          .removeClass('open');

        $this
          .parent()
          .parent()
          .children('li.open')
          .removeClass('open');

        $this
          .parent()
          .children('.dropdown-menu')
          .slideDown(200, () => {
            $this.parent().addClass('open');
          });
      }
    });

    // Sidebar Activity Class
    const sidebarLinks = $('.sidebar').find('.sidebar-link');

    sidebarLinks.each((index, el) => {
        $(el).removeClass('active');
      })
      .filter(function () {
        const href = $(this).attr('href');
        const pattern = href[0] === '/' ? href.substr(1) : href;
        return pattern === (window.location.pathname).substr(1);
      })
      .addClass('active');

    // ٍSidebar Toggle
    $('.sidebar-toggle').on('click', e => {
      $('.app').toggleClass('is-collapsed');
      e.preventDefault();
    });

    /**
     * Wait untill sidebar fully toggled (animated in/out)
     * then trigger window resize event in order to recalculate
     * masonry layout widths and gutters.
     */
    $('#sidebar-toggle').click(e => {
      e.preventDefault();
      setTimeout(() => {
        window.dispatchEvent(window.EVENT);
      }, 300);
    });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-inner">
          {/*Sidebar Header*/}
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="index.html">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src="assets/static/images/logo.png" alt="" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">Adminator</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="" className="td-n">
                    <i className="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/*Sidebar Menu*/}
          <ul className="sidebar-menu scrollable pos-r">
            <li className="nav-item mT-30 active">
              <a className="sidebar-link" href="index.html">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-home"></i>
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a class='sidebar-link' href="email.html">
                <span className="icon-holder">
                  <i className="c-brown-500 ti-email"></i>
                </span>
                <span className="title">Email</span>
              </a>
            </li>
            <li className="nav-item">
              <a class='sidebar-link' href="compose.html">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-share"></i>
                </span>
                <span className="title">Compose</span>
              </a>
            </li>
            <li className="nav-item">
              <a class='sidebar-link' href="calendar.html">
                <span className="icon-holder">
                  <i className="c-deep-orange-500 ti-calendar"></i>
                </span>
                <span className="title">Calendar</span>
              </a>
            </li>
            <li className="nav-item">
              <a class='sidebar-link' href="chat.html">
                <span className="icon-holder">
                  <i className="c-deep-purple-500 ti-comment-alt"></i>
                </span>
                <span className="title">Chat</span>
              </a>
            </li>
            <li className="nav-item">
              <a class='sidebar-link' href="charts.html">
                <span className="icon-holder">
                  <i className="c-indigo-500 ti-bar-chart"></i>
                </span>
                <span className="title">Charts</span>
              </a>
            </li>
            <li className="nav-item">
              <a class='sidebar-link' href="forms.html">
                <span className="icon-holder">
                  <i className="c-light-blue-500 ti-pencil"></i>
                </span>
                <span className="title">Forms</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="sidebar-link" href="ui.html">
                <span className="icon-holder">
                    <i className="c-pink-500 ti-palette"></i>
                  </span>
                <span className="title">UI Elements</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href={undefined}>
                <span className="icon-holder">
                  <i className="c-orange-500 ti-layout-list-thumb"></i>
                </span>
                <span className="title">Tables</span>
                <span className="arrow">
                  <i className="ti-angle-right"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a class='sidebar-link' href="basic-table.html">Basic Table</a>
                </li>
                <li>
                  <a class='sidebar-link' href="datatable.html">Data Table</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href={undefined}>
                <span className="icon-holder">
                    <i className="c-purple-500 ti-map"></i>
                  </span>
                <span className="title">Maps</span>
                <span className="arrow">
                    <i className="ti-angle-right"></i>
                  </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="google-maps.html">Google Map</a>
                </li>
                <li>
                  <a href="vector-maps.html">Vector Map</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href={undefined}>
                <span className="icon-holder">
                    <i className="c-red-500 ti-files"></i>
                  </span>
                <span className="title">Pages</span>
                <span className="arrow">
                    <i className="ti-angle-right"></i>
                  </span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a class='sidebar-link' href="blank.html">Blank</a>
                </li>
                <li>
                  <a class='sidebar-link' href="404.html">404</a>
                </li>
                <li>
                  <a class='sidebar-link' href="500.html">500</a>
                </li>
                <li>
                  <a class='sidebar-link' href="signin.html">Sign In</a>
                </li>
                <li>
                  <a class='sidebar-link' href="signup.html">Sign Up</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="dropdown-toggle" href={undefined}>
                <span className="icon-holder">
                  <i className="c-teal-500 ti-view-list-alt"></i>
                </span>
                <span className="title">Multiple Levels</span>
                <span className="arrow">
                  <i className="ti-angle-right"></i>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li className="nav-item dropdown">
                  <a href={undefined}>
                    <span>Menu Item</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a href={undefined}>
                    <span>Menu Item</span>
                    <span className="arrow">
                      <i className="ti-angle-right"></i>
                    </span>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href={undefined}>Menu Item</a>
                    </li>
                    <li>
                      <a href={undefined}>Menu Item</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
