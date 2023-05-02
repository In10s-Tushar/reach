import styled from 'styled-components'

export const SideNavbarMain = styled.div `
    background-color: #0f467c;
    position: fixed;
    color: #fff;
    width: 100%;
    bottom: 0;
    top: 0;
    max-width: 250px;
    -webkit-border-top-left-radius: 20px;
    -moz-border-radius-topleft: 20px;
    border-top-left-radius: 20px;
    -webkit-box-shadow: 7px 0px 7px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: 7px 0px 7px 0px rgba(0,0,0,0.2);
    box-shadow: 7px 0px 7px 0px rgba(0,0,0,0.2);
    .navbar{
        width: 100%;
        padding: 5px;
        .navbar-nav{
            width: 100%;
            .nav-item{
                width: 100%;
                .nav-link{
                    width: 100%;
                    color: #fff;
                    padding: 5px 0;
                }
                .dropdown-menu{
                    width: 100%;
                    background: transparent;
                    border: 0;
                    position: static;
                    .dropdown-item{
                        padding: 5px 0 5px 10px;
                        color: #fff;
                    }
                    .nav-item{
                        padding: 5px 0 5px 10px;
                    }
                }
            }
        }
    }
`