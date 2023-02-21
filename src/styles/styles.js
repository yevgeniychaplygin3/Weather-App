
import { css, Global } from '@emotion/react'
import styled  from '@emotion/styled'


export const globalStyles = css`
    body{
        background-color: #659DBD;
        color: #efefec;
        margin: 0;
        height: 100%;
    }
    img{
        width: 100px;
    }
`
export const ForecastCard = styled.div`
    color: black;
    width: 200px;
    margin: 20px;
    margin-inline-end: 20px; 
    padding: 20px;
    background-color:  #DAAD86;
    border: 5px solid white;
    border-radius: 25px;
    box-shadow: 10px 10px 5px lightblue;

`

export const FlexContainer = css`
    display: flex;
    flex-wrap: wrap;

    @media(max-width: 786px){
        margin: 10px;
        padding-bottom: 100px;
    }
`


export const LoadingStyle = styled.div`
    text-align: center;
    font-size: 60px;
`

export const ErrorStyle = styled.div`
    font-size: 20px;
    margin: 30px 500px 10px 540px;
    text-align: center;

    @media (min-width: 1200px)
    {
        width: 30%;
    }

    @media (max-width: 600px)
    {
        margin: 20px 65px;
        width: 90%;
    }

    @media (max-width: 900px)
    {
        margin: 10px 65px;
        padding: 100px;
        width: 70%;
    }

    @media (max-width: 500px)
    {

        width: 60%;
        margin: 50px;
        padding: 50px;
    }

    @media (min-width: 500px)
    {
        margin: auto;
        width: 60%;
        margin-bottom: 50px;
    }

    
`

export const Top = styled.div`
    margin-top: -62px;
    top: 0;
    background-image: 
        linear-gradient( rgba(30, 75, 115, 1), rgba(255, 255, 255, 0));
    width: 100%;
    p{
        text-align: center;
        font-size: 60px;
        padding-top: 55px;
    }
`


export const SearchCss = styled.div`
        width: 30%;
        margin: auto;
        height: 100%;
        position: relative;
        border: 10px solid white;
        border-radius: 25px;
        font-size: 100%;
        background-color: white;
        margin-bottom: 50px;

    input, textarea:focus, input:focus {
        background-color: white;
        border: 0px solid;
        outline: none;
        margin: 0;
        width: 80%;

    }
    

    input{
        font-size: 20px;
        padding: 10px;
        
        

    }
    button {
        background-color: #2c5601;
        color: white;
        float: right;
        border-radius: 25px;
        font-size: 25px;
        padding: 7px 15px;
        padding-left: 8px;
        margin-right: 3px;

        @media (max-width: 1200px){
            margin-right: 3px;
         }

        @media (max-width: 600px) || (min-width: 400px){
        margin-right: 30px;
        }

    }

    button:hover{
        padding-left: 10px;
        margin-right: 3px;
        color: white;
        background-color: #264A01;
        font-size: 27px;
    }

    @media (min-width: 600px){
        width: 90%;
     }

    @media (max-width: 600px){
        color: pink;
        width: 90%;
     }

     @media (max-width: 900px){
        width: 90%;
     }

     @media (min-width: 1200px){
        width: 30%;
     }


   
    
`


export const ForecastCardCSS = css`

    margin-bottom: 35px;
    position: relative;

    font-family: 'Bitter', serif;

    a:hover{
        color: #ffffff;
        padding-left: 8px;
    }

    .forecastCard .a{
        text-align: center;
    }


    .forecastCard .a:hover{
    }
   
    ul{
        list-style: none;
    }

    h2{
        font-size: 30px;
    }

    p{
        
    }

    svg{
        color: white;
    }
    #clock{
        margin-left: -30px;
        --fa-animation-duration: 1.5s;
    }


    #short, #temp{
        font-size: 33px
    }
    #temp {
        text-decoration-line: underline;
    }
    #max{
        font-size: 20px;

    }
    #min{
        font-size: 20px;

    }

    #maxIcon{
        color:red;
    }
    #minIcon{
        color:blue;
    }
    #long{
    }

    @media (max-width: 768px){
        font-size: 30px

    }


    @media (mix-width: 400px){
        font-size: 30px
        height: 30%;
    }
`

export const NavbarCSS = css`
    background-color: white;
    height: auto;
    display: flex;
    font-size: 20px;
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        
      }
      .home{
        padding-top: 10px;
        height: 100%;
        
      }
      
      li {
        float: left;
      }
      
      li a {
        display: block;
        text-align: center;
        padding: 10px 15px;
        margin: 36px 20px;
        text-decoration: none;
        transition: all 0.3s ease;
        border-radius: 25px;
        margin-left: 40px;
      }
      
      li a:hover {
        background-color: #A5A5AF
      }
      .active:not(.home){
      }
    img{
            height: auto;
        }
    
`

export const FooterCss = css`

	background-color: #24262b;
    padding: 70px 0;

    p{
        visibility: hidden;
    }

    .footer-col{
        width: 25%;
        padding: 0 15px;
        height: 200px;
     }

     .footer-col h4{
        font-size: 18px;
        color: #ffffff;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
    }


    .footer-col h4::before{
        content: '';
        position: absolute;
        left:0;
        bottom: -10px;
        background-color: #e91e63;
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child){
        margin-bottom: 10px;
    }

    .footer-col ul li a{
        font-size: 16px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        color: #bbbbbb;
        display: block;
        transition: all 0.3s ease;
    }

    .footer-col ul li a:hover{
        color: #ffffff;
        padding-left: 8px;
    }

    .footer-col .social-links a{
        display: inline-block;
        height: 40px;
        width: 40px;
        background-color: rgba(255,255,255,0.2);
        margin:0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: #ffffff;
        transition: all 0.5s ease;
    }


    .footer-col .social-links a:hover{
        color: #24262b;
        background-color: #ffffff;
    }

    .container{
        max-width: 1170px;
        margin:auto;
    }
    .row{
        display: flex;
        flex-wrap: wrap;
    }
    ul{
        list-style: none;
    }

    
`

export const HomeCss = styled.div`
    text-align: center;
    padding: 10px 20px;
    height: 200px;

    @media (max-width: 768px){
        font-size: 30px;
        margin-bottom: 90px;
    }

    @media (min-width: 400px){
        font-size: 30px;
        margin-bottom: 200px;
    }
`
