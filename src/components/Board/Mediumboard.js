import React, { useEffect } from "react";
// import { Link, useContext } from 'react-router-dom';
import { useHistory } from "react-router-dom";
// import { mainContext } from '../MainProvider/MainProvider';

function MediumBoard(props) {

  let numberOfRenders = props.numRenders;
  console.log("mediumboard>>>1", numberOfRenders);
  const history = useHistory();
  
 
  function boardClick(){
    props.setNumRenders((numberOfRenders)=>numberOfRenders + 1);
    console.log("mediumboard>>>2", numberOfRenders);
    history.push('/Wheel')
  }
  

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsOsb="http://www.openswatchbook.org/uri/2009/osb"
      id="svg8"
      version="1.1"
      viewBox="0 0 220.011 125.006"
      preserveAspectRatio="none"
    >
      <defs id="defs2">
        <linearGradient id="linearGradient3368" osbPaint="solid">
          <stop
            id="stop3366"
            offset="0"
            stopColor="#df5"
            stopOpacity="1"
          ></stop>
        </linearGradient>
        <filter
          id="filter1414"
          width="2.957"
          height="1.039"
          x="-0.978"
          y="-0.02"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur1416"
            stdDeviation="0.617"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1668"
          width="1.008"
          height="1.03"
          x="-0.004"
          y="-0.015"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur1670"
            stdDeviation="0.063"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter1816"
          width="1.02"
          height="1.26"
          x="-0.01"
          y="-0.13"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur1818"
            stdDeviation="0.152"
          ></feGaussianBlur>
        </filter>
        <clipPath id="clipPath2773" clipPathUnits="userSpaceOnUse">
          <rect
            id="rect2775"
            width="139.953"
            height="96.038"
            x="4.375"
            y="144.283"
            fill="olive"
            fillOpacity="0.331"
            stroke="none"
            strokeDasharray="0.20001, 0.20001"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeWidth="0.2"
            clip-path="none"
            opacity="0.743"
            paintOrder="markers fill stroke"
            rx="0"
          ></rect>
        </clipPath>
        <clipPath id="clipPath2777" clipPathUnits="userSpaceOnUse">
          <rect
            id="rect2779"
            width="139.953"
            height="96.038"
            x="4.375"
            y="144.283"
            fill="olive"
            fillOpacity="0.331"
            stroke="none"
            strokeDasharray="0.20001, 0.20001"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeWidth="0.2"
            clip-path="none"
            opacity="0.743"
            paintOrder="markers fill stroke"
            rx="0"
          ></rect>
        </clipPath>
        <filter
          id="filter3316"
          width="1.002"
          height="1.003"
          x="-0.001"
          y="-0.002"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur3318"
            stdDeviation="0.017"
          ></feGaussianBlur>
        </filter>
        <clipPath id="clipPath4011" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4013"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4015" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4017"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4019" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4021"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4023" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4025"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4027" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4029"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4031" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4033"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4035" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4037"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4039" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4041"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.536 0 0 1.64856 59.801 -146.969)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4043" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4045"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4047" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4049"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4051" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4053"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4055" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4057"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4059" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4061"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4063" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4065"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4067" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4069"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4071" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4073"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4075" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4077"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4079" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4081"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4083" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4085"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4087" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4089"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4091" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4093"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(.86047 0 0 1.13776 -23.835 -13.787)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4095" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4097"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
            transform="matrix(1.24008 0 0 2.59809 22.877 -383.34)"
          ></path>
        </clipPath>
        <clipPath id="clipPath4099" clipPathUnits="userSpaceOnUse">
          <path
            id="rect4101"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            filter="url(#filter3316)"
            opacity="1"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath5554" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5556"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.15095 0 0 6.6393 205.112 -1370.145)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5558" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5560"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.15095 0 0 6.6393 200.098 -1368.616)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5562" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5564"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.15095 0 0 6.6393 200.098 -1368.616)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5566" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5568"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 54.975 -212.432)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5570" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5572"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(2.81079 0 0 4.10308 562.7 -904.203)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5574" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5576"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.38523 0 0 3.9001 636.558 -856.191)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5578" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5580"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.38523 0 0 3.9001 636.558 -856.191)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5582" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5584"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 41.613 -237.225)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5586" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5588"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 69.272 -219.22)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5590" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5592"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 69.272 -219.22)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5594" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5596"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(5.03096 0 0 5.82328 384.236 -1183.31)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5598" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5600"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.08348 0 0 2.48897 3.022 -372.688)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5602" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5604"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(2.84761 0 0 3.53941 171.065 -571.456)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5606" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5608"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.67447 0 0 4.16112 270.877 -708.074)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5610" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5612"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(5.11973 0 0 9.4579 723.34 -2284.414)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5614" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5616"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.38523 0 0 3.9001 636.558 -856.191)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5618" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5620"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5622" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5624"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5626" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5628"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 41.613 -237.225)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5630" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5632"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5634" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5636"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5638" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5640"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5642" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5644"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.536 0 0 1.64856 59.801 -146.969)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5646" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5648"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5650" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5652"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5654" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5656"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5658" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5660"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5662" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5664"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5666" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5668"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5670" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5672"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5674" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5676"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5678" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5680"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5682" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5684"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5686" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5688"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5690" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5692"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.51144 0 0 1.92316 57.38 -213.023)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5694" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5696"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(.86047 0 0 1.13776 -23.835 -13.787)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5698" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5700"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(1.24008 0 0 2.59809 22.877 -383.34)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5702" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5704"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.38523 0 0 3.9001 636.558 -856.191)"
          ></path>
        </clipPath>
        <clipPath id="clipPath5706" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5708"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath5710" clipPathUnits="userSpaceOnUse">
          <path
            id="rect5712"
            fill="#af983d"
            fillOpacity="0.899"
            stroke="none"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0"
            d="M-134.448 222.776H-92.99600000000001V247.75300000000001H-134.448z"
            clip-path="url(#clipPath4099)"
            filter="url(#filter3316)"
            paintOrder="markers fill stroke"
            transform="matrix(3.38523 0 0 3.9001 636.558 -856.191)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6355" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6361" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6367" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6373" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6379" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6385" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6391" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6397" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6403" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6409" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6415" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6421" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6427" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6433" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6439" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6445" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6451" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6457" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6463" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6469" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6475" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6481" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6487" clipPathUnits="userSpaceOnUse"></clipPath>
        <clipPath id="clipPath6663" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6665"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-152.634 215.442H-90.60199999999999V262.406H-152.634z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6667" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6669"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-157.578 212.048H-95.546V259.012H-157.578z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6671" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6673"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-154.371 212.491H-92.33900000000001V259.45500000000004H-154.371z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6675" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6677"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-158.246 215.59H-96.21400000000001V262.554H-158.246z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6679" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6681"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-158.246 209.539H-96.21400000000001V256.503H-158.246z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6683" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6685"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.322"
            d="M-186.448 206.438H-115.739V305.688H-186.448z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6687" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6689"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.322"
            d="M-186.905 173.38H-116.196V272.63H-186.905z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6691" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6693"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.322"
            d="M-191.17 206.75H-120.46099999999998V306H-191.17z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6695" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6697"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.336"
            d="M54.034 19.471H132.326V117.302H54.034z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6699" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6701"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.322"
            d="M-186.448 206.438H-115.739V305.688H-186.448z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6703" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6705"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.322"
            d="M-186.448 206.438H-115.739V305.688H-186.448z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6707" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6709"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-145.285 215.885H-83.253V262.849H-145.285z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6711" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6713"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-145.285 215.885H-83.253V262.849H-145.285z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6715" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6717"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M182.643 13.618H321.578V108.859H182.643z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6719" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6721"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.386"
            d="M-211.014 218.186H-94.14300000000001V304.619H-211.014z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6723" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6725"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-145.285 215.885H-83.253V262.849H-145.285z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6727" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6729"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.14"
            d="M95.123 221.314H130.29000000000002V258.951H95.123z"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="scale(-1 1)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6731" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6733"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M-145.285 215.885H-83.253V262.849H-145.285z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6735" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6737"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M182.643 13.618H321.578V108.859H182.643z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6739" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6741"
            fill="#806600"
            fillOpacity="0.94"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath6773" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6775"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -158.017 197.659)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6777" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6779"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -154.81 198.102)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6781" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6783"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -158.685 195.15)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6785" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6787"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.50894 0 0 1.04209 -186.948 176.03)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6789" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6791"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.50894 0 0 1.04209 -187.405 142.971)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6793" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6795"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.50894 0 0 1.04209 -191.67 176.341)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6797" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6799"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.56352 0 0 1.0272 53.48 -10.503)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6801" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6803"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.50894 0 0 1.04209 -186.948 176.03)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6805" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6807"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.50894 0 0 1.04209 -186.948 176.03)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6809" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6811"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -145.724 201.496)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6813" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6815"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -145.724 201.496)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6817" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6819"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="translate(181.66 -15.562)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6821" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6823"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -145.724 201.496)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6825" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6827"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -153.073 201.053)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6829" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6831"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -158.685 201.2)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6833" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6835"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.84119 0 0 .90752 -211.841 191.703)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6837" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6839"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(-.25312 0 0 .39518 -94.874 209.783)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6841" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6843"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="matrix(.44648 0 0 .4931 -145.724 201.496)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6845" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6847"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
            transform="translate(181.66 -15.562)"
          ></path>
        </clipPath>
        <clipPath id="clipPath6849" clipPathUnits="userSpaceOnUse">
          <path
            id="rect6851"
            fill="#806600"
            fillOpacity="0.95"
            stroke="#786721"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="0.442"
            d="M0.983 29.779H139.918V125.02H0.983z"
            clip-path="url(#clipPath6739)"
            opacity="0.588"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath2231" clipPathUnits="userSpaceOnUse">
          <path
            id="rect2233"
            fill="#decd87"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.671"
            strokeWidth="1.006"
            d="M0.828 22.94H141.621V117.731H0.828z"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <clipPath id="clipPath3833" clipPathUnits="userSpaceOnUse">
          <path
            id="rect3835"
            fill="#decd87"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.671"
            strokeWidth="1.001"
            d="M0.143 40.346H151.074V127.898H0.143z"
            paintOrder="markers fill stroke"
          ></path>
        </clipPath>
        <filter
          id="filter3841"
          width="1.041"
          height="1.057"
          x="-0.02"
          y="-0.029"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur3843"
            stdDeviation="0.977"
          ></feGaussianBlur>
        </filter>
        <filter
          id="filter3893"
          width="1.431"
          height="1.457"
          x="-0.215"
          y="-0.229"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur
            id="feGaussianBlur3895"
            stdDeviation="6.01"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g
        id="layer1"
        style={{ mixBlendMode: "darken" }}
        transform="translate(-.27 -.636)"
      >
        <path
          id="rect1154"
          fill="#decd87"
          stroke="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity="0.671"
          strokeWidth="1.292"
          d="M0.489 25.147H219.916V125.483H0.489z"
          paintOrder="markers fill stroke"
        ></path>
        <path
          id="rect1894"
          fill="#0ff"
          fillOpacity="0.335"
          stroke="olive"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.049"
          d="M0.591 0.753H220.186V25.294H0.591z"
          opacity="0.614"
        ></path>
        <circle
          id="path2857"
          cx="80.958"
          cy="53.23"
          r="0.017"
          fill="#b6a48c"
          stroke="#000"
          strokeWidth="0.2"
        ></circle>
        <circle
          id="path3714"
          cx="115.235"
          cy="101.543"
          r="0.029"
          fill="#b6a48c"
          stroke="#000"
          strokeWidth="0.2"
        ></circle>
        <path
          id="path3431"
          fill="#ff0"
          fillOpacity="1"
          stroke="#7f6462"
          strokeDasharray="none"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="0.18"
          d="M37.94 18.855l10.85-2.564-9.783 5.345 11.043 1.529-11.054 1.449 9.745 5.415-10.83-2.642 7.13 8.57-9.145-6.376 3.554 10.566-6.225-9.248-.503 11.136-2.463-10.872-4.493 10.203 1.631-11.029-7.874 7.892 5.504-9.695-10.193 4.514 8.634-7.052-11.135.527 10.599-3.456-10.574-3.532 11.132.607-8.584-7.113 10.16 4.586-5.434-9.733 7.817 7.947-1.551-11.04 4.419 10.235L32.858 4.17l.423 11.14 6.291-9.204-3.63 10.54 9.191-6.309z"
          opacity="0.997"
          transform="matrix(.51735 0 0 .46724 19.507 1.273)"
        ></path>
        {/* <Link to="/Wheel"> */}
        <g
          onClick = {boardClick}
          id="boardClickBtn"
          fillOpacity="1"
          strokeDasharray="none"
          strokeMiterlimit="4"
          transform="translate(24.226 1.196)"
        >
          <rect
            style={{ mixBlendMode: "normal" }}
            id="rect2996"
            width="50"
            height="13.375"
            x="98.306"
            y="94.592"
            fill="#e3dec3"
            stroke="#96853f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="1"
            strokeWidth="1.054"
            display="inline"
            opacity="0.994"
            paintOrder="markers fill stroke"
            ry="5.23"
          ></rect>
          <text
            id="text112"
            x="110"
            y="99.418"
            style={{ lineHeight: "1.25" }}
            fill="#1a1a1a"
            strokeWidth="1"
            fontFamily="sans-serif"
            fontSize="4"
            letterSpacing="0"
            transform="scale(1.03345 .96763)"
            xmlSpace="preserve"
          >
            <tspan
              id="tspan122"
              style={{}}
              x="110"
              y="105.76"
              fill="#1a1a1a"
              fillOpacity="1"
              strokeDasharray="none"
              strokeMiterlimit="4"
              strokeWidth="1"
              fontFamily="sans-serif"
              fontStretch="normal"
              fontStyle="normal"
              fontVariant="normal"
              fontWeight="bold"
            >
              Click Here!
            </tspan>
          </text>
        </g>
        {/* </Link> */}
        <path
          id="path1989"
          fill="#269226"
          fillOpacity="1"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="1"
          strokeWidth="0.2"
          d="M89.486 32.976c-.862 2.884-1.252 5.94-.836 8.922.331 2.375 1.19 4.705 2.671 6.592 1.481 1.886 3.61 3.304 5.971 3.723 1.564.278 3.167.122 4.75.008 1.584-.113 3.207-.178 4.73.271 1.966.58 3.6 1.977 4.898 3.565 1.298 1.587 2.312 3.383 3.465 5.078 1.152 1.693 2.475 3.317 4.189 4.437.857.56 1.806.987 2.807 1.201 1.001.214 2.055.212 3.041-.062 1.792-.498 3.263-1.875 4.13-3.521.866-1.647 1.175-3.54 1.167-5.4-.008-2.107-.403-4.19-.633-6.284-.23-2.094-.289-4.257.354-6.262a9.336 9.336 0 013.07-4.434 9.351 9.351 0 015.016-1.979c1.112-.09 2.23.02 3.345 0 3.63-.064 7.23-1.577 9.758-4.182 2.93-3.019 4.316-7.382 3.997-11.578-.32-4.195-2.26-8.19-5.112-11.283-3.466-3.757-8.226-6.207-13.225-7.279-4.998-1.071-10.225-.813-15.212.309-10.313 2.32-19.708 8.391-26.207 16.728-2.675 3.43-4.888 7.263-6.134 11.43z"
          clip-path="url(#clipPath2231)"
          filter="url(#filter3893)"
          opacity="0.463"
          transform="matrix(1.72102 0 0 1.23705 -24.795 -2.555)"
        ></path>
        <g id="g3764" transform="translate(-9.404 -3.145)">
          <g id="g2847" transform="matrix(.98482 0 0 .97917 -20.52 2.503)">
            <g
              id="g1061"
              fillOpacity="1"
              strokeOpacity="1"
              transform="matrix(.58113 0 0 .49025 56.415 4.462)"
            >
              <g id="g71" transform="matrix(.58763 0 0 .63396 50.081 -1.416)">
                <path
                  id="path2605"
                  fill="#d5c0a5"
                  stroke="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeWidth="1.414"
                  d="M704.363 77.07l-3.306 2.133h3.324zm.24 29.608v12.504l.102-.004zm.256 31.48l-109.773 4.65v4.762l-.098.063v27.787h-40.683v-1.514l-1.768 1.143v26.646h-40.682v26.276h-40.68v24.732H432.42l-1.924 1.244v26.578h-40.682v-.21l-1.767 1.146v26.885h-40.682v26.277h-40.681v27.82h-5.036l-34.95 9.075-1.126-4.334v32.584l442.35 115.287zM224.891 388.295c-.546.385-.897.639-.897.639l.897.232z"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2966"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="5.227"
                  d="M586.867 174.182l-33.775.593 152.676 29.338-.561-7.191z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2968"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="6.059"
                  d="M511.748 199.775l.012 1.479 193.865 40.08-.064-7.55-156.446-32.345z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2970"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="2.501"
                  d="M60.953 63.736v.103l.238-.052zm7.88 1.688L61.7 67.003l79.418 17.013V80.91z"
                  opacity="0.939"
                ></path>
                <path
                  id="rect2972"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="11.103"
                  d="M387.664 302.773l.014.245-40.184 4.152v.818l359.008 75.559v-13.668z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2974"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="7.406"
                  d="M509.436 227.03l-38.338.878v.049l235.46 51.264v-9.274z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2976"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="8.313"
                  d="M468.26 251.91l-37.996.871-.012 1.15 276.19 57.686.101-9.94z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2978"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="9.93"
                  d="M429.701 277.95l-41.252 1.894v1.6l318.164 68.197v-12.336z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="rect2964"
                  fill="#795f5d"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="2.827"
                  d="M59.563 72.398l-1.968.51-4.862 1.542 88.732 19.225v-3.532z"
                  opacity="0.939"
                ></path>
                <path
                  id="path2946"
                  fill="#b6a48c"
                  stroke="#ebe0d3"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeWidth="3.312"
                  d="M121.76 35.304C77.669 92.926 77.06 94.076 77.06 94.076l34.294 8.959 20.129-65.976z"
                ></path>
                <path
                  id="path2948"
                  fill="#c7b199"
                  stroke="#b6a48c"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeWidth="0.183"
                  d="M133.391 35.875l-20.638 69.003c9.693-6.727 10.189-6.68 10.189-6.68l.037-.185-.13.009-.504-11.983 2.927-.213v-8.259h1.78v-6.802h1.114v-6.342h1.336V57.62h1.447v-6.687h1.336v-6.226h1.35l.102-.503.24-6.788 1.108.042.317-1.583zm-8.09 50.34l.006.15.03-.15z"
                ></path>
              </g>
              <g id="g95" transform="matrix(-.58763 0 0 .63396 215.679 -1.33)">
                <path
                  id="path73"
                  fill="#d5c0a5"
                  stroke="none"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeWidth="1.414"
                  d="M704.363 77.07l-3.306 2.133h3.324zm.24 29.608v12.504l.102-.004zm.256 31.48l-109.773 4.65v4.762l-.098.063v27.787h-40.683v-1.514l-1.768 1.143v26.646h-40.682v26.276h-40.68v24.732H432.42l-1.924 1.244v26.578h-40.682v-.21l-1.767 1.146v26.885h-40.682v26.277h-40.681v27.82h-5.036l-34.95 9.075-1.126-4.334v32.584l442.35 115.287zM224.891 388.295c-.546.385-.897.639-.897.639l.897.232z"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="path75"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="1.039"
                  d="M117.388 34.838l-6.764.117 30.574 5.637-.112-1.42z"
                  opacity="0.939"
                ></path>
                <path
                  id="path77"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="6.059"
                  d="M511.748 199.775l.012 1.479 194.653 39.292-.458-7.945-156.84-31.162z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="path79"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="2.501"
                  d="M60.953 63.736v.103l.238-.052zm7.88 1.688L61.7 67.003l79.812 16.777-.071-3.186z"
                  opacity="0.939"
                ></path>
                <path
                  id="path81"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="11.103"
                  d="M387.664 302.773l.014.245-40.184 4.152v.818l359.796 74.377-.394-13.668z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="path83"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="7.406"
                  d="M509.436 227.03l-38.338.878v.049l235.46 49.607v-8.84z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="path85"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="1.661"
                  d="M93.667 50.385l-7.61.173-.002.23 55.236 11.265.1-1.982z"
                  opacity="0.939"
                ></path>
                <path
                  id="path87"
                  fill="#6c5353"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="9.93"
                  d="M429.701 277.95l-41.252 1.894v1.6l318.558 67.014v-12.336z"
                  opacity="0.939"
                  transform="scale(.20001)"
                ></path>
                <path
                  id="path89"
                  fill="#795f5d"
                  stroke="none"
                  strokeLinecap="square"
                  strokeMiterlimit="3.4"
                  strokeWidth="2.827"
                  d="M59.563 72.398l-1.968.51-4.862 1.542 88.811 18.91v-3.611z"
                  opacity="0.939"
                ></path>
                <path
                  id="path91"
                  fill="#b6a48c"
                  stroke="#ebe0d3"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeWidth="3.312"
                  d="M121.76 35.304C77.669 92.926 77.06 94.076 77.06 94.076l34.294 8.959 20.129-65.976z"
                ></path>
                <path
                  id="path93"
                  fill="#c7b199"
                  stroke="#b6a48c"
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  strokeWidth="0.183"
                  d="M133.433 35.466l-20.639 69.003c9.694-6.728 10.189-6.68 10.189-6.68l.037-.186-.13.009-.503-11.983 2.926-.213v-8.259h1.781v-6.802h1.113v-6.342h1.336v-6.802h1.448v-6.687h1.335v-6.227h1.351l.101-.503.24-6.787 1.109.042.316-1.583zm-8.09 50.34l.005.149.03-.15z"
                ></path>
              </g>
            </g>
            <rect
              id="rect137"
              width="1.513"
              height="75.215"
              x="140.272"
              y="26.369"
              fill="#baa58c"
              fillOpacity="0.941"
              stroke="none"
              strokeLinecap="square"
              strokeMiterlimit="3.4"
              strokeWidth="3.024"
              filter="url(#filter1414)"
              opacity="0.939"
              ry="0.581"
              transform="matrix(.22047 0 0 .31142 102.684 3.8)"
            ></rect>
            <g
              id="g1033"
              strokeOpacity="1"
              transform="matrix(.5303 0 0 .38219 61.628 7.167)"
            >
              <g
                id="g1438"
                fill="#b6a48c"
                fillOpacity="1"
                stroke="#76605f"
                strokeDasharray="none"
                strokeLinejoin="bevel"
                strokeMiterlimit="4"
                strokeWidth="0.062"
                filter="url(#filter1668)"
                transform="matrix(.57292 0 .02962 1.23392 37.817 -9.675)"
              >
                <path
                  id="rect117"
                  fill="#b8a58e"
                  fillOpacity="1"
                  stroke="#76605f"
                  strokeDasharray="none"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                  strokeMiterlimit="4"
                  strokeOpacity="1"
                  strokeWidth="0.062"
                  d="M171.617 12.209v.034l-17.9 2.749-.2-.031-.001.062-.024.003.012.838-.052 3.647.103.016.001.05.161-.025 17.898 2.749.001-.07v.041l17.919-2.751.18.027.002-.055.063-.01-.031-2.242.031-2.243-.063-.01-.001-.056-.181.028z"
                  opacity="0.939"
                ></path>
              </g>
              <path
                id="path1440"
                fill="none"
                stroke="#76605f"
                strokeDasharray="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="4"
                strokeWidth="0.078"
                d="M123.738 21.33l18.061 2.733 17.579-2.801"
                filter="url(#filter1816)"
                transform="matrix(.56716 0 0 .85332 57.331 -7.04)"
              ></path>
              <path
                id="path1840"
                fill="#735958"
                fillOpacity="1"
                stroke="#735958"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeWidth="0.151"
                d="M137.214 5.092l-10.67 3.577 10.258 2.36 10.18-2.436z"
              ></path>
            </g>
          </g>
          <rect
            id="rect1462"
            width="3.616"
            height="0.837"
            x="106.822"
            y="-0.261"
            fill="#735958"
            fillOpacity="1"
            stroke="#414141"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeMiterlimit="3.4"
            strokeOpacity="1"
            strokeWidth="0.091"
            opacity="0.441"
            ry="0.132"
            transform="matrix(.98937 .1454 -.19482 .98084 0 0)"
          ></rect>
          <rect
            id="rect1420"
            width="3.438"
            height="0.836"
            x="-111.992"
            y="33.093"
            fill="#735958"
            fillOpacity="1"
            stroke="#414141"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeMiterlimit="3.4"
            strokeOpacity="1"
            strokeWidth="0.089"
            opacity="0.441"
            ry="0.132"
            transform="matrix(-.9882 .1532 .18505 .98273 0 0)"
          ></rect>
        </g>
        <path
          id="path3715"
          fill="olive"
          stroke="#000"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeOpacity="0.883"
          strokeWidth="0.2"
          d="M.516 57.3c3.425-.263 6.938 1.076 9.32 3.55 2.38 2.476 3.584 6.038 3.19 9.45-.192 1.664-.738 3.266-1.025 4.916-.144.825-.222 1.666-.157 2.501.066.835.28 1.666.692 2.395.496.877 1.266 1.58 2.132 2.094.866.515 1.828.852 2.803 1.104 1.951.504 3.997.69 5.858 1.462 2.346.975 4.272 2.872 5.396 5.152.499 1.01.845 2.088 1.298 3.12.453 1.032 1.03 2.04 1.891 2.767 1.152.972 2.715 1.35 4.222 1.322 1.507-.027 2.98-.424 4.427-.848 1.446-.424 2.895-.88 4.395-1.03 1.5-.15 3.078.03 4.372.801.831.496 1.51 1.213 2.089 1.988.578.776 1.065 1.615 1.59 2.427 5.435 8.412 15.048 13.8 25.02 14.718 2.937.27 5.899.182 8.831.49 3.444.363 6.904 1.311 9.717 3.331 1.406 1.01 2.634 2.282 3.522 3.769.888 1.486 1.43 3.19 1.479 4.92.054 1.871-.47 3.744-1.42 5.357-.949 1.613-2.313 2.969-3.891 3.976-3.155 2.014-7.072 2.598-10.795 2.207-7.446-.782-13.965-5.123-20.934-7.86-8.772-3.447-18.664-4.339-27.718-1.717-7.572 2.192-14.367 6.725-22.074 8.383-3.853.828-7.954.895-11.662-.44-1.854-.668-3.592-1.683-5.027-3.033-1.435-1.35-2.563-3.04-3.183-4.91-.343-1.037-.529-2.117-.736-3.19-.88-4.557-2.158-9.027-3.434-13.49-2.426-8.489-4.876-17.202-4.17-26.002.303-3.768 1.185-7.477 2.453-11.038A52.375 52.375 0 01.517 57.299z"
          clip-path="url(#clipPath3833)"
          filter="url(#filter3841)"
          opacity="0.257"
          transform="matrix(1.12468 0 0 1.25319 .926 -35.097)"
        ></path>
        <path
          id="path6875"
          fill="#aa9c65"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="0.81"
          strokeWidth="4.037"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.701"
          paintOrder="markers fill stroke"
          transform="matrix(.39262 .10969 -.16094 .26933 76.782 114.139)"
        ></path>
        <path
          id="path6877"
          fill="#aa9c65"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.143"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.704"
          paintOrder="markers fill stroke"
          transform="matrix(.29412 .22877 .21371 -.23217 99.15 82.795)"
        ></path>
        <path
          id="path6879"
          fill="#958957"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.717"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.707"
          paintOrder="markers fill stroke"
          transform="matrix(.31019 .06696 -.05313 .26538 107.348 90.883)"
        ></path>
        <path
          id="path6881"
          fill="#aa9c65"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="4.96"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.704"
          paintOrder="markers fill stroke"
          transform="matrix(-.06042 -.28088 .2832 -.03647 129.083 72.139)"
        ></path>
        <path
          id="path6885"
          fill="#aa9c65"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="5.744"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.701"
          paintOrder="markers fill stroke"
          transform="matrix(.08654 .2556 .26593 -.08473 82.531 52.233)"
        ></path>
        <path
          id="path6887"
          fill="#aa9c65"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="5.031"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.691"
          paintOrder="markers fill stroke"
          transform="matrix(.09254 -.27988 -.27022 -.04133 94.15 71.51)"
        ></path>
        <path
          id="path6889"
          fill="#baac70"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="5.443"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.698"
          paintOrder="markers fill stroke"
          transform="matrix(.19814 .17161 .1443 -.2176 92.95 51.196)"
        ></path>
        <path
          id="path6893"
          fill="#aa9c65"
          fillOpacity="1"
          stroke="#786721"
          strokeDasharray="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="4"
          strokeOpacity="1"
          strokeWidth="6.058"
          d="M42.768-9.54L3.303 5.276-22.98-27.68.239-62.862l40.635 11.211z"
          opacity="0.704"
          paintOrder="markers fill stroke"
          transform="matrix(-.0437 -.21385 -.27126 .04186 75.982 48.292)"
        ></path>
        <g
          id="lion1"
          className="lion"
          display="none"
          transform="matrix(.21983 0 0 .1724 10.473 81.135)"
        >
          <path
            id="path4305"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4307"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4309"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4311"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4313"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4315"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4317"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4319"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4321"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4323"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4325"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4327"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4329"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4331"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4333"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4335"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4337"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4339"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4341"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4343"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4345"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4347"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4349"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4351"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4353"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4355"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4357"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4359"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4361"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4363"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4365"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4367"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4369"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4371"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4373"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4375"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4377"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4379"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4381"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion2"
          className="lion"
          display="none"
          transform="matrix(.21392 0 0 .16076 30.15 73.657)"
        >
          <path
            id="path4395"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4397"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4399"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4401"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4403"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4405"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4407"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4409"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4411"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4413"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4415"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4417"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4419"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4421"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4423"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4425"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4427"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4429"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4431"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4433"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4435"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4437"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4439"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4441"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4443"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4445"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4447"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4449"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4451"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4453"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4455"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4457"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4459"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4461"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4463"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4465"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4467"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4469"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4471"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion3"
          className="lion"
          display="none"
          transform="matrix(.19205 0 0 .14191 45.254 59.996)"
        >
          <path
            id="path4485"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4487"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4489"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4491"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4493"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4495"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4497"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4499"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4501"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4503"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4505"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4507"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4509"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4511"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4513"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4515"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4517"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4519"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4521"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4523"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4525"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4527"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4529"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4531"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4533"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4535"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4537"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4539"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4541"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4543"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4545"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4547"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4549"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4551"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4553"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4555"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4557"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4559"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4561"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion4"
          className="lion"
          display="none"
          transform="matrix(.17826 0 0 .14328 34.345 59.31)"
        >
          <path
            id="path4575"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4577"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4579"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4581"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4583"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4585"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4587"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4589"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4591"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4593"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4595"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4597"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4599"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4601"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4603"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4605"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4607"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4609"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4611"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4613"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4615"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4617"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4619"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4621"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4623"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4625"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4627"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4629"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4631"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4633"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4635"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4637"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4639"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4641"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4643"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4645"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4647"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4649"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4651"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion5"
          className="lion"
          display="none"
          transform="matrix(.17072 0 0 .12758 24.582 51.387)"
        >
          <path
            id="path4665"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4667"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4669"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4671"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4673"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4675"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4677"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4679"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4681"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4683"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4685"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4687"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4689"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4691"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4693"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4695"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4697"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4699"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4701"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4703"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4705"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4707"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4709"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4711"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4713"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4715"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4717"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4719"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4721"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4723"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4725"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4727"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4729"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4731"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4733"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4735"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4737"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4739"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4741"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion6"
          className="lion"
          display="none"
          transform="matrix(.15666 0 0 .12736 14.972 49.292)"
        >
          <path
            id="path4755"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4757"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4759"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4761"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4763"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4765"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4767"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4769"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4771"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4773"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4775"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4777"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4779"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4781"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4783"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4785"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4787"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4789"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4791"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4793"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4795"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4797"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4799"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4801"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4803"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4805"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4807"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4809"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4811"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4813"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4815"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4817"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4819"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4821"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4823"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4825"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4827"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4829"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4831"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion7"
          className="lion"
          display="none"
          transform="matrix(.14935 0 0 .12312 24.947 36.051)"
        >
          <path
            id="path4845"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path4847"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path4849"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path4851"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4853"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path4855"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path4857"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path4859"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path4861"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path4863"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path4865"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path4867"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path4869"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path4871"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path4873"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path4875"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path4877"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4879"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4881"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4883"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path4885"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path4887"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path4889"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path4891"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path4893"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path4895"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path4897"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4899"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4901"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4903"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4905"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4907"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4909"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4911"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4913"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4915"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path4917"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4919"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path4921"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="lion0"
          className="lion"
          display="none"
          transform="matrix(.2628 0 0 .18247 -15.514 96.152)"
        >
          <path
            id="path6956"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.194"
            d="M368.78 69.579c-1.744-.153-3.522.485-4.843 1.634-1.346 1.17-2.229 2.871-2.362 4.65-.124 1.644.373 3.278 1.063 4.776.58 1.261 1.318 2.478 2.362 3.394.218.19.448.368.658.568.21.2.402.425.523.689.055.12.096.247.102.38a.6.6 0 01-.102.374.594.594 0 01-.337.22.972.972 0 01-.408.006c-.27-.047-.522-.171-.79-.226-.398-.082-.816-.008-1.193.144-.376.152-.718.378-1.052.61-1.045.725-2.068 1.544-2.716 2.64a4.518 4.518 0 00-.634 1.922 3.54 3.54 0 00.398 1.974c.268.492.669.909 1.142 1.21.473.3 1.017.486 1.574.55.353.04.712.032 1.058-.047.346-.078.678-.23.95-.457.113-.093.214-.2.327-.293a.967.967 0 01.382-.21.805.805 0 01.518.066c.16.074.3.187.427.312.287.283.513.626.827.88.329.266.742.42 1.164.462.421.043.85-.023 1.25-.163.8-.279 1.47-.838 2.074-1.43.097-.096.196-.194.318-.253a.482.482 0 01.196-.05.343.343 0 01.195.051.36.36 0 01.115.127.61.61 0 01.06.161c.026.113.031.23.061.34a.824.824 0 00.468.539.834.834 0 00.713-.036 1.04 1.04 0 00.379-.376c.094-.153.157-.323.208-.495.104-.345.166-.71.358-1.014a1.376 1.376 0 011.063-.629 6.534 6.534 0 00-.827-1.005c-.733-.73-1.632-1.277-2.362-2.011-.82-.824-1.404-1.866-1.761-2.972-.357-1.106-.493-2.276-.483-3.438.028-3.5 1.336-6.851 1.89-10.306a24.09 24.09 0 00.236-2.011 6.075 6.075 0 00-3.19-1.257z"
          ></path>
          <path
            id="path6958"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M402.826 70.207c1.85-.16 3.742.46 5.179 1.634 1.403 1.147 2.38 2.844 2.526 4.65.134 1.652-.407 3.289-1.137 4.777-.626 1.276-1.415 2.506-2.526 3.393-.234.187-.482.359-.708.557-.225.198-.43.427-.555.7-.055.12-.094.248-.099.38a.625.625 0 00.099.374.625.625 0 00.358.242c.142.037.293.034.438.008.29-.052.558-.188.846-.25.421-.091.865-.018 1.268.135s.77.384 1.132.62c1.106.718 2.208 1.519 2.905 2.639.361.58.604 1.239.663 1.92a3.425 3.425 0 01-.41 1.976c-.29.511-.729.933-1.237 1.23a4.165 4.165 0 01-1.668.53 3.649 3.649 0 01-1.125-.046 2.518 2.518 0 01-1.023-.457c-.12-.094-.232-.2-.353-.293a1.079 1.079 0 00-.405-.21.893.893 0 00-.548.063 1.677 1.677 0 00-.462.314c-.307.281-.555.625-.884.88a2.441 2.441 0 01-1.238.482c-.446.047-.9-.016-1.327-.155-.852-.278-1.58-.846-2.235-1.458-.106-.099-.212-.2-.344-.26a.515.515 0 00-.209-.05.365.365 0 00-.205.058.384.384 0 00-.116.128.654.654 0 00-.064.161c-.03.112-.04.229-.073.34a.876.876 0 01-.51.555.892.892 0 01-.753-.052 1.118 1.118 0 01-.385-.38 2.265 2.265 0 01-.225-.495c-.117-.344-.197-.71-.4-1.01a1.451 1.451 0 00-1.137-.63c.26-.363.557-.7.884-1.005.789-.733 1.745-1.27 2.526-2.01.852-.808 1.473-1.842 1.86-2.95.386-1.108.544-2.288.54-3.46-.01-3.51-1.425-6.849-2.02-10.307a22.244 22.244 0 01-.253-2.011 6.933 6.933 0 013.41-1.257z"
          ></path>
          <path
            id="path6960"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.216"
            d="M376.32 65.564c-.912.653-1.766 1.397-2.474 2.269-1.552 1.913-2.319 4.328-3.056 6.68-.636 2.03-1.277 4.07-1.6 6.174-.334 2.169-.3 4.49.727 6.428 1.019 1.921 2.917 3.257 4.948 4.033a13.91 13.91 0 004.075.882c2.888.184 5.775-.52 8.665-.376 2.507.125 4.991.885 7.488.628 1.817-.187 3.581-.93 4.948-2.142 1.36-1.206 2.312-2.873 2.62-4.663.417-2.427-.327-4.88-.728-7.31-.278-1.684-.392-3.392-.694-5.072-.302-1.68-.805-3.357-1.78-4.758-.565-.812-1.275-1.513-2.037-2.143-2.917-2.41-6.657-3.8-10.44-3.904-3.782-.105-7.584 1.072-10.662 3.274z"
          ></path>
          <path
            id="path6962"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M377.471 67.805a29.21 29.21 0 00-3.303 17.915c.113.817.261 1.633.25 2.457-.012.824-.198 1.67-.69 2.331-.33.443-.783.784-1.101 1.236-.278.395-.443.862-.534 1.337-.091.474-.113.96-.127 1.443-.017.621-.022 1.251.126 1.855.147.604.464 1.188.975 1.542.199.138.428.24.67.253a.886.886 0 00.355-.051.728.728 0 00.296-.202.988.988 0 00.179-.333c.04-.12.07-.244.11-.364.038-.12.089-.24.168-.339.079-.1.19-.178.314-.2a.501.501 0 01.36.089.808.808 0 01.246.285c.122.222.168.478.275.708.17.364.498.65.88.772.42.134.898.07 1.27-.166.373-.236.636-.635.712-1.07.032-.18.033-.365.087-.54a.675.675 0 01.126-.241.433.433 0 01.228-.145.445.445 0 01.33.065.756.756 0 01.235.249c.12.195.182.425.315.613.102.143.242.257.4.332.159.076.335.112.51.112.351-.002.692-.15.96-.376.269-.226.47-.524.618-.842.15-.317.25-.655.343-.993.127-.465.243-.935.29-1.414.048-.48.026-.97-.117-1.43-.166-.536-.488-1.007-.8-1.472-.314-.465-.627-.944-.772-1.485-.122-.45-.121-.924-.11-1.39.104-4.567 1.105-9.12.691-13.669a23.926 23.926 0 00-1.368-6.013 2.076 2.076 0 00-1.584-1.418 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path6964"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.207"
            d="M392.05 68.18a29.028 29.028 0 00-3.302 17.843c.113.813.26 1.626.248 2.447-.012.82-.197 1.664-.688 2.322-.33.441-.783.78-1.101 1.23-.278.394-.443.859-.534 1.332-.092.472-.113.956-.127 1.437-.017.62-.02 1.247.127 1.849.148.602.465 1.183.974 1.536.198.137.428.238.669.252a.886.886 0 00.356-.051.728.728 0 00.296-.201.989.989 0 00.179-.333c.04-.12.07-.242.11-.363.039-.12.09-.238.168-.337a.527.527 0 01.314-.198.5.5 0 01.36.087.807.807 0 01.245.284c.121.222.168.477.276.706.17.363.498.647.88.769.42.134.896.07 1.269-.165.372-.234.636-.633.713-1.066.032-.18.034-.364.088-.538a.675.675 0 01.126-.24.433.433 0 01.226-.145.444.444 0 01.33.064c.098.06.174.15.235.248.121.195.183.424.316.611.101.143.242.257.4.332.158.075.334.112.509.111.35 0 .69-.149.959-.373.268-.225.47-.522.619-.839.15-.316.25-.653.344-.99.128-.463.243-.931.29-1.409.048-.477.026-.967-.117-1.425-.167-.533-.488-1.002-.801-1.465-.313-.463-.626-.94-.772-1.48-.12-.448-.12-.92-.11-1.384.104-4.548 1.106-9.083.692-13.614a23.733 23.733 0 00-1.368-5.99c-.03-.08-.06-.16-.094-.24a2.076 2.076 0 00-1.49-1.175 2.076 2.076 0 00-1.813.56z"
          ></path>
          <path
            id="path6966"
            fill="#502d16"
            fillOpacity="1"
            stroke="#502d16"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeOpacity="1"
            strokeWidth="1.134"
            d="M396.461 41.93c1.45 1.28 2.26-.65 3.478.852 1.22 1.501-.835 1.898.12 3.58.955 1.68 2.348.119 3.013 1.935s-1.407 1.523-1.05 3.424c.358 1.9 2.182.876 2.222 2.81.04 1.933-1.825.983-2.104 2.897-.28 1.914 1.779 1.537 1.189 3.378-.59 1.842-2.046.339-2.931 2.058-.886 1.72 1.183 2.031.027 3.581-1.156 1.55-2.045-.344-3.44.995-1.396 1.338.46 2.305-1.137 3.396-1.597 1.09-1.822-.99-3.577-.177s-.313 2.33-2.178 2.843c-1.865.513-1.402-1.527-3.326-1.328-1.924.199-1.053 2.102-2.983 1.982-1.93-.12-.83-1.9-2.714-2.337-1.884-.436-1.678 1.646-3.465.906-1.787-.74-.168-2.067-1.809-3.091-1.64-1.024-2.122 1.012-3.57-.268-1.45-1.28.511-2.01-.708-3.511-1.219-1.502-2.335.268-3.29-1.414-.956-1.681 1.136-1.734.47-3.55-.664-1.816-2.295-.504-2.653-2.405-.357-1.9 1.639-1.271 1.599-3.205-.04-1.933-2.008-1.223-1.729-3.136.28-1.914 1.963-.67 2.553-2.512.59-1.842-1.502-1.809-.617-3.528.886-1.72 2.074.003 3.23-1.547 1.156-1.55-.833-2.198.562-3.537 1.396-1.339 1.96.676 3.558-.415 1.597-1.09-.075-2.35 1.68-3.162 1.755-.813 1.634 1.276 3.5.762 1.864-.513.692-2.246 2.615-2.445 1.924-.2 1.132 1.737 3.062 1.857 1.93.12 1.384-1.9 3.269-1.463 1.884.436.506 2.01 2.292 2.75 1.787.741 1.927-1.347 3.567-.322 1.64 1.024-.174 2.066 1.275 3.346z"
            transform="matrix(.996 0 0 1.08277 2.515 -7.067)"
          ></path>
          <path
            id="path6968"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.864 38.223a11.753 11.482 0 017.494 10.702 11.753 11.482 0 01-2.3 6.824c2.222.76 3.264 2.96 2.678 4.45-.74 1.88-1.998 4.146-5.348 4.146-.616 0-1.26-.084-1.905-.231a5.73 3.064 0 01-5.382 2.012 5.73 3.064 0 01-5.442-2.105c-.431.07-.859.108-1.272.108-3.35 0-4.608-2.266-5.348-4.145-.606-1.54.526-3.839 2.904-4.523a11.753 11.482 0 01-2.09-6.536 11.753 11.482 0 017.31-10.63.634.634 0 01.279.121c.514.389-.145.947.444 1.248.589.302.851-.459 1.495-.255.643.204.264.927.94 1.026.676.1.6-.691 1.286-.7.686-.009.638.783 1.31.666.672-.116.269-.83.904-1.05.636-.22.926.532 1.503.216.578-.317-.1-.857.4-1.259a.642.642 0 01.14-.085z"
          ></path>
          <path
            id="path6970"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M376.81 60.84a9.116 9.116 0 00-2.522-.234 8.891 8.891 0 00-2.788.584c-1.194.463-2.254 1.193-3.053 2.102"
          ></path>
          <path
            id="path6972"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M382.284 43.198c-.542-.056-1.092.056-1.594.24a5.188 5.188 0 00-2.296 1.655c-.581.745-.911 1.614-1.143 2.488-.246.927-.39 1.89-.216 2.83.149.805.54 1.586 1.18 2.19.225.213.479.403.748.574.677.43 1.474.749 2.316.804 1.154.075 2.337-.38 3.037-1.17 1.438-1.98 1.833-4.491 1.058-6.726-.32-.923-.86-1.829-1.76-2.404a3.081 3.081 0 00-1.33-.481z"
          ></path>
          <path
            id="path6974"
            fill="#fff"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M389.625 43.255c.54-.058 1.09.052 1.585.248.795.314 1.456.844 1.98 1.445a6.535 6.535 0 011.312 2.335c.353 1.122.39 2.306.216 3.458-.101.674-.284 1.36-.744 1.914-.281.338-.654.612-1.048.853-.684.42-1.464.756-2.302.826-.46.038-.929-.005-1.373-.116a4.524 4.524 0 01-2.208-1.305 4.628 4.628 0 01-1.102-2.11c-.352-1.526.029-3.11.613-4.583.183-.463.388-.922.666-1.348a3.888 3.888 0 011.084-1.122 2.98 2.98 0 011.32-.495z"
          ></path>
          <path
            id="path6976"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M384.852 49.82c0 1.313-.868 2.378-1.94 2.378-1.071 0-2.142-.718-2.142-2.032s1.071-2.726 2.142-2.726c1.072 0 1.94 1.065 1.94 2.38z"
          ></path>
          <path
            id="path6978"
            fill="#502d16"
            stroke="#000"
            strokeWidth="0.201"
            d="M379.664 42.36a.006.005 0 01-.006.006.006.005 0 01-.006-.006.006.005 0 01.006-.005.006.005 0 01.006.005"
          ></path>
          <path
            id="path6980"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.14 41.917c.196-.223.426-.425.691-.59.188-.116 1.535-.786-.676.334.268-.122.561-.16.86-.176.255 0 .509.033.755.093.191.053.382.106.572.164.16.04.3.108.437.187.125.075.255.142.392.2.102.036.2.08.296.126a.708.708 0 01.142.087l1.095-.583v0c-.05-.038-.1-.077-.156-.11-.1-.041-.191-.094-.298-.121-.126-.068-.28-.1-.394-.19-.146-.08-.28-.173-.454-.206-.19-.066-.389-.11-.582-.167a3.727 3.727 0 00-.785-.12c-.313.005-.622.036-.91.149-.416.204-.836.403-1.25.612-.36.183-.627.478-.902.74l1.168-.429z"
          ></path>
          <path
            id="path6982"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M391.616 41.992a3.056 3.056 0 00-.69-.59c-.188-.117-1.536-.786.675.333-.268-.122-.56-.159-.858-.175-.256 0-.51.032-.756.092-.191.053-.382.107-.572.164-.16.04-.3.108-.438.187a3.163 3.163 0 01-.39.2c-.103.037-.2.08-.297.127a.709.709 0 00-.142.086l-1.095-.583v0c.05-.038.1-.077.156-.109.1-.042.19-.095.297-.122.127-.068.281-.1.395-.189.146-.082.279-.174.454-.207.19-.066.389-.11.582-.167.254-.073.518-.102.785-.12.312.005.622.036.91.15.416.203.836.402 1.249.611.36.183.628.478.903.74l-1.168-.428z"
          ></path>
          <path
            id="path6984"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c.04.323.038.65-.006.973a3.548 3.548 0 01-1.042 2.083c-.432.417-.99.737-1.605.92a4.47 4.47 0 01-1.926.134 4.178 4.178 0 01-1.757-.687 3.381 3.381 0 01-1.142-1.334"
          ></path>
          <path
            id="path6986"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M385.484 58.565c-.04.323-.038.65.006.973a3.548 3.548 0 001.043 2.083c.432.417.99.737 1.604.92a4.47 4.47 0 001.926.134 4.178 4.178 0 001.757-.687 3.381 3.381 0 001.142-1.334"
          ></path>
          <path
            id="path6988"
            fill="#500"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.955.137-1.01.986-2.243.986-1.233 0-3.848-.467-2.552-1.032 2.074-.902 2.198-2.488 2.198-2.488s.628 2.252 2.597 2.534z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path6990"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M382.05 62.403c.131-.244.402-.137.644-.137.224 0 .493-.102.595.138.11.259-.103.486-.224.738-.112.233-.173.564-.397.55-.241-.015-.3-.35-.42-.602-.112-.233-.321-.462-.199-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path6992"
            fill="#fff"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M388.084 62.424c.132-.244.402-.136.644-.136.224 0 .494-.103.595.137.11.26-.102.487-.224.738-.112.233-.172.564-.396.55-.242-.015-.3-.35-.42-.602-.113-.233-.321-.461-.2-.687z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path6994"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M390.442 58.449a9.93 9.93 0 011.683-.84c2.8-1.084 6.22-.898 8.836.48"
          ></path>
          <path
            id="path6996"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M392.686 59.29a11.072 11.072 0 013.927-.601c1.736.049 3.453.51 4.91 1.32"
          ></path>
          <path
            id="path6998"
            fill="#502d16"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M385.484 58.565c-1.062.036-1.243-.955-1.81-1.599-.574-.652-1.745-1.196-1.252-1.882.487-.676 1.776-.293 2.84-.322 1.076-.03 2.32-.484 2.902.164.575.64-.533 1.248-1.03 1.922-.502.682-.574 1.68-1.65 1.717z"
          ></path>
          <path
            id="path7000"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M394.378 60.903a7.925 7.925 0 012.135-.193c.812.037 1.616.2 2.36.481 1.011.382 1.908.983 2.584 1.732"
          ></path>
          <path
            id="path7002"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M380.84 58.256a9.93 9.93 0 00-1.683-.84c-2.8-1.083-6.22-.897-8.836.48"
          ></path>
          <path
            id="path7004"
            fill="none"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.201"
            d="M378.726 59.193a11.072 11.072 0 00-3.927-.6c-1.735.048-3.453.51-4.909 1.32"
          ></path>
          <path
            id="path7006"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M386.474 49.906c0 1.314.868 2.38 1.94 2.38 1.071 0 2.142-.719 2.142-2.033s-1.07-2.726-2.142-2.726c-1.072 0-1.94 1.065-1.94 2.38z"
          ></path>
          <path
            id="path7008"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M380.936 60.636a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7010"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.79 60.715a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7012"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M387.75 59.37a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7014"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.07 58.356a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7016"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M383.047 60.619a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7018"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M381.65 59.623a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7020"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.126 59.868a.104.092 0 01-.103.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.103.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7022"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M390.566 60.661a.104.092 0 01-.104.092.104.092 0 01-.104-.092.104.092 0 01.104-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7024"
            fill="#000"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.201"
            d="M389.718 59.108a.104.092 0 01-.104.092.104.092 0 01-.103-.092.104.092 0 01.103-.092.104.092 0 01.104.092"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7026"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeLinecap="butt"
            strokeLinejoin="miter"
            strokeOpacity="1"
            strokeWidth="0.192"
            d="M406.845 84.235c1.68-1.054 2.667-2.654 3.532-4.19.921-1.662 1.006-3.53.673-5.31-.35-2.702 2.098-7.092 5.05-7.132 8.42.399 1.417 10.811 2.334 4.922.07-.833-.228-2.532-1.315-2.595-1.139-.14-2.5 1.13-2.917 2.111-.542.798-.601 2.436-.426 3.343.12 5.221-.379 9.622-4.607 10.885-1.072.43-3.073 1.18-4.302.739-1.157-.507.13-1.86 1.098-2.283.288-.17.593-.319.88-.49z"
          ></path>
          <path
            id="path7028"
            fill="#28170b"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.217"
            d="M423.065 73.662c-4.173 1.903 1.558 5.596-.703 5.596s-6.442-3.693-6.442-6.64c0-2.946.79-4.291 3.051-4.291s4.094 2.388 4.094 5.335"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7030"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M372.26 35.887c-2.256 1.63-1.837 5.263-.233 7.328l.075-.054c-.426-.86-.538-1.84.036-2.254.492-.355 1.371-.211 2.176.165-.59-.967-.716-2.372.163-3.007.919-.664 2.621-.262 3.587.48-.296-.776-.311-1.584.205-1.956.448-.324 1.202-.25 1.935.03-2.132-1.528-5.845-2.247-7.943-.732z"
            paintOrder="markers fill stroke"
          ></path>
          <path
            id="path7032"
            fill="#a05a2c"
            fillOpacity="1"
            stroke="#000"
            strokeDasharray="none"
            strokeLinecap="square"
            strokeLinejoin="bevel"
            strokeMiterlimit="4"
            strokeWidth="0.219"
            d="M400.51 36.054c2.257 1.63 1.838 5.262.234 7.327l-.075-.054c.425-.86.537-1.84-.037-2.254-.492-.355-1.37-.211-2.175.165.589-.967.716-2.372-.164-3.007-.918-.664-2.62-.262-3.587.48.296-.776.312-1.584-.204-1.956-.448-.324-1.202-.25-1.935.03 2.132-1.528 5.845-2.247 7.943-.731z"
            paintOrder="markers fill stroke"
          ></path>
        </g>
        <g
          id="g1865"
          fillOpacity="1"
          stroke="none"
          strokeLinecap="square"
          strokeLinejoin="bevel"
          transform="matrix(1 0 0 .957 27.217 3.396)"
        >
          <g id="g997" transform="matrix(.29747 0 0 .3217 63.31 18.94)">
            <ellipse
              id="ellipse973"
              cx="229.337"
              cy="20.784"
              fill="#668000"
              strokeWidth="0.201"
              rx="3.428"
              ry="3.995"
            ></ellipse>
            <ellipse
              id="ellipse975"
              cx="235.508"
              cy="24.134"
              fill="#668000"
              strokeWidth="0.248"
              rx="4.114"
              ry="4.51"
            ></ellipse>
            <ellipse
              id="ellipse977"
              cx="234.274"
              cy="18.336"
              fill="#668000"
              strokeWidth="0.196"
              rx="3.703"
              ry="3.35"
            ></ellipse>
            <ellipse
              id="ellipse979"
              cx="240.445"
              cy="20.397"
              fill="#668000"
              strokeWidth="0.2"
              rx="3.84"
              ry="3.35"
            ></ellipse>
            <path
              id="rect981"
              fill="#784421"
              strokeWidth="0.248"
              d="M233.863 26.325H236.88V38.953H233.863z"
            ></path>
            <path
              id="rect983"
              fill="#784421"
              strokeWidth="0.248"
              d="M178.997 148.51H186.28V149.822H178.997z"
              transform="matrix(.86315 -.50495 .55234 .83362 0 0)"
            ></path>
            <path
              id="rect985"
              fill="#784421"
              strokeWidth="0.248"
              d="M214.476 -68.572H223.425V-66.48400000000001H214.476z"
              transform="matrix(.9092 .41638 -.46043 .8877 0 0)"
            ></path>
            <ellipse
              id="ellipse987"
              cx="244.285"
              cy="30.578"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="1.675"
            ></ellipse>
            <ellipse
              id="ellipse989"
              cx="243.188"
              cy="27.356"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse991"
              cx="225.909"
              cy="31.222"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse993"
              cx="222.892"
              cy="28.902"
              fill="#668000"
              strokeWidth="0.248"
              rx="3.291"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse995"
              cx="226.183"
              cy="26.841"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.577"
            ></ellipse>
          </g>
          <g id="g1023" transform="matrix(.25641 0 0 .27566 70.12 16.76)">
            <ellipse
              id="ellipse999"
              cx="229.337"
              cy="20.784"
              fill="#668000"
              strokeWidth="0.201"
              rx="3.428"
              ry="3.995"
            ></ellipse>
            <ellipse
              id="ellipse1001"
              cx="235.508"
              cy="24.134"
              fill="#668000"
              strokeWidth="0.248"
              rx="4.114"
              ry="4.51"
            ></ellipse>
            <ellipse
              id="ellipse1003"
              cx="234.274"
              cy="18.336"
              fill="#668000"
              strokeWidth="0.196"
              rx="3.703"
              ry="3.35"
            ></ellipse>
            <ellipse
              id="ellipse1005"
              cx="240.445"
              cy="20.397"
              fill="#668000"
              strokeWidth="0.2"
              rx="3.84"
              ry="3.35"
            ></ellipse>
            <path
              id="rect1007"
              fill="#784421"
              strokeWidth="0.248"
              d="M233.863 26.325H236.88V38.953H233.863z"
            ></path>
            <path
              id="rect1009"
              fill="#784421"
              strokeWidth="0.248"
              d="M178.997 148.51H186.28V149.822H178.997z"
              transform="matrix(.86315 -.50495 .55234 .83362 0 0)"
            ></path>
            <path
              id="rect1011"
              fill="#784421"
              strokeWidth="0.248"
              d="M214.476 -68.572H223.425V-66.48400000000001H214.476z"
              transform="matrix(.9092 .41638 -.46043 .8877 0 0)"
            ></path>
            <ellipse
              id="ellipse1013"
              cx="244.285"
              cy="30.578"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="1.675"
            ></ellipse>
            <ellipse
              id="ellipse1015"
              cx="243.188"
              cy="27.356"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse1017"
              cx="225.909"
              cy="31.222"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse1019"
              cx="222.892"
              cy="28.902"
              fill="#668000"
              strokeWidth="0.248"
              rx="3.291"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse1021"
              cx="226.183"
              cy="26.841"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.577"
            ></ellipse>
          </g>
          <g id="g1049" transform="matrix(.25641 0 0 .27566 76.08 18.305)">
            <ellipse
              id="ellipse1025"
              cx="229.337"
              cy="20.784"
              fill="#668000"
              strokeWidth="0.201"
              rx="3.428"
              ry="3.995"
            ></ellipse>
            <ellipse
              id="ellipse1027"
              cx="235.508"
              cy="24.134"
              fill="#668000"
              strokeWidth="0.248"
              rx="4.114"
              ry="4.51"
            ></ellipse>
            <ellipse
              id="ellipse1029"
              cx="234.274"
              cy="18.336"
              fill="#668000"
              strokeWidth="0.196"
              rx="3.703"
              ry="3.35"
            ></ellipse>
            <ellipse
              id="ellipse1031"
              cx="240.445"
              cy="20.397"
              fill="#668000"
              strokeWidth="0.2"
              rx="3.84"
              ry="3.35"
            ></ellipse>
            <path
              id="rect1033"
              fill="#784421"
              strokeWidth="0.248"
              d="M233.863 26.325H236.88V38.953H233.863z"
            ></path>
            <path
              id="rect1035"
              fill="#784421"
              strokeWidth="0.248"
              d="M178.997 148.51H186.28V149.822H178.997z"
              transform="matrix(.86315 -.50495 .55234 .83362 0 0)"
            ></path>
            <path
              id="rect1037"
              fill="#784421"
              strokeWidth="0.248"
              d="M214.476 -68.572H223.425V-66.48400000000001H214.476z"
              transform="matrix(.9092 .41638 -.46043 .8877 0 0)"
            ></path>
            <ellipse
              id="ellipse1039"
              cx="244.285"
              cy="30.578"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="1.675"
            ></ellipse>
            <ellipse
              id="ellipse1041"
              cx="243.188"
              cy="27.356"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse1043"
              cx="225.909"
              cy="31.222"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse1045"
              cx="222.892"
              cy="28.902"
              fill="#668000"
              strokeWidth="0.248"
              rx="3.291"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse1047"
              cx="226.183"
              cy="26.841"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.577"
            ></ellipse>
          </g>
          <g id="g594" transform="matrix(.7028 0 0 1.04378 -55.718 .743)">
            <ellipse
              id="path5476"
              cx="229.337"
              cy="20.784"
              fill="#668000"
              strokeWidth="0.201"
              rx="3.428"
              ry="3.995"
            ></ellipse>
            <ellipse
              id="path5478"
              cx="235.508"
              cy="24.134"
              fill="#668000"
              strokeWidth="0.248"
              rx="4.114"
              ry="4.51"
            ></ellipse>
            <ellipse
              id="path5480"
              cx="234.274"
              cy="18.336"
              fill="#668000"
              strokeWidth="0.196"
              rx="3.703"
              ry="3.35"
            ></ellipse>
            <ellipse
              id="ellipse5486"
              cx="240.445"
              cy="20.397"
              fill="#668000"
              strokeWidth="0.2"
              rx="3.84"
              ry="3.35"
            ></ellipse>
            <path
              id="rect5488"
              fill="#784421"
              strokeWidth="0.248"
              d="M233.863 26.325H236.88V38.953H233.863z"
            ></path>
            <path
              id="rect5504"
              fill="#784421"
              strokeWidth="0.248"
              d="M178.997 148.51H186.28V149.822H178.997z"
              transform="matrix(.86315 -.50495 .55234 .83362 0 0)"
            ></path>
            <path
              id="rect5506"
              fill="#784421"
              strokeWidth="0.248"
              d="M214.476 -68.572H223.425V-66.48400000000001H214.476z"
              transform="matrix(.9092 .41638 -.46043 .8877 0 0)"
            ></path>
            <ellipse
              id="path5508"
              cx="244.285"
              cy="30.578"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="1.675"
            ></ellipse>
            <ellipse
              id="path5510"
              cx="243.188"
              cy="27.356"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="path5512"
              cx="225.909"
              cy="31.222"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="path5514"
              cx="222.892"
              cy="28.902"
              fill="#668000"
              strokeWidth="0.248"
              rx="3.291"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="path5516"
              cx="226.183"
              cy="26.841"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.577"
            ></ellipse>
          </g>
          <g id="g6954" transform="matrix(.37959 0 0 .54272 29.729 13.615)">
            <ellipse
              id="ellipse6930"
              cx="229.337"
              cy="20.784"
              fill="#668000"
              strokeWidth="0.201"
              rx="3.428"
              ry="3.995"
            ></ellipse>
            <ellipse
              id="ellipse6932"
              cx="235.508"
              cy="24.134"
              fill="#668000"
              strokeWidth="0.248"
              rx="4.114"
              ry="4.51"
            ></ellipse>
            <ellipse
              id="ellipse6934"
              cx="234.274"
              cy="18.336"
              fill="#668000"
              strokeWidth="0.196"
              rx="3.703"
              ry="3.35"
            ></ellipse>
            <ellipse
              id="ellipse6936"
              cx="240.445"
              cy="20.397"
              fill="#668000"
              strokeWidth="0.2"
              rx="3.84"
              ry="3.35"
            ></ellipse>
            <path
              id="rect6938"
              fill="#784421"
              strokeWidth="0.248"
              d="M233.863 26.325H236.88V38.953H233.863z"
            ></path>
            <path
              id="rect6940"
              fill="#784421"
              strokeWidth="0.248"
              d="M178.997 148.51H186.28V149.822H178.997z"
              transform="matrix(.86315 -.50495 .55234 .83362 0 0)"
            ></path>
            <path
              id="rect6942"
              fill="#784421"
              strokeWidth="0.248"
              d="M214.476 -68.572H223.425V-66.48400000000001H214.476z"
              transform="matrix(.9092 .41638 -.46043 .8877 0 0)"
            ></path>
            <ellipse
              id="ellipse6944"
              cx="244.285"
              cy="30.578"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="1.675"
            ></ellipse>
            <ellipse
              id="ellipse6946"
              cx="243.188"
              cy="27.356"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse6948"
              cx="225.909"
              cy="31.222"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse6950"
              cx="222.892"
              cy="28.902"
              fill="#668000"
              strokeWidth="0.248"
              rx="3.291"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse6952"
              cx="226.183"
              cy="26.841"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.577"
            ></ellipse>
          </g>
          <g id="g6928" transform="matrix(.46072 0 0 .60888 10.277 20.492)">
            <ellipse
              id="ellipse6904"
              cx="229.337"
              cy="20.784"
              fill="#668000"
              strokeWidth="0.201"
              rx="3.428"
              ry="3.995"
            ></ellipse>
            <ellipse
              id="ellipse6906"
              cx="235.508"
              cy="24.134"
              fill="#668000"
              strokeWidth="0.248"
              rx="4.114"
              ry="4.51"
            ></ellipse>
            <ellipse
              id="ellipse6908"
              cx="234.274"
              cy="18.336"
              fill="#668000"
              strokeWidth="0.196"
              rx="3.703"
              ry="3.35"
            ></ellipse>
            <ellipse
              id="ellipse6910"
              cx="240.445"
              cy="20.397"
              fill="#668000"
              strokeWidth="0.2"
              rx="3.84"
              ry="3.35"
            ></ellipse>
            <path
              id="rect6912"
              fill="#784421"
              strokeWidth="0.248"
              d="M233.863 26.325H236.88V38.953H233.863z"
            ></path>
            <path
              id="rect6914"
              fill="#784421"
              strokeWidth="0.248"
              d="M178.997 148.51H186.28V149.822H178.997z"
              transform="matrix(.86315 -.50495 .55234 .83362 0 0)"
            ></path>
            <path
              id="rect6916"
              fill="#784421"
              strokeWidth="0.248"
              d="M214.476 -68.572H223.425V-66.48400000000001H214.476z"
              transform="matrix(.9092 .41638 -.46043 .8877 0 0)"
            ></path>
            <ellipse
              id="ellipse6918"
              cx="244.285"
              cy="30.578"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="1.675"
            ></ellipse>
            <ellipse
              id="ellipse6920"
              cx="243.188"
              cy="27.356"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.194"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse6922"
              cx="225.909"
              cy="31.222"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse6924"
              cx="222.892"
              cy="28.902"
              fill="#668000"
              strokeWidth="0.248"
              rx="3.291"
              ry="2.32"
            ></ellipse>
            <ellipse
              id="ellipse6926"
              cx="226.183"
              cy="26.841"
              fill="#668000"
              strokeWidth="0.248"
              rx="2.468"
              ry="2.577"
            ></ellipse>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default MediumBoard;