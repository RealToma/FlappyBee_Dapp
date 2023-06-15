import { useObstacle } from "../Game/Context"
import { OBSTACLE_WIDTH } from "../Game/Global"

export const Pipe = () => {
  const { obstacleHeight } = useObstacle()
  return (
    <svg width={'100%'} height={'auto'} style={{ position: 'absolute', top: 100, transform: 'rotate(180deg)' }} viewBox="0 0 138 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_iiiiiiii_14_12)">
        <path d="M11 66H128V795H11V66Z" fill="#73BF2E" />
        <path d="M5 5H133V59H5V5Z" fill="#73BF2E" />
      </g>
      <path d="M11 63.5H8.5V66V795V797.5H11H128H130.5V795V66V63.5H128H11ZM5 2.5H2.5V5V59V61.5H5H133H135.5V59V5V2.5H133H5Z" stroke="#543847" stroke-width="5" />
      <defs>
        <filter id="filter0_iiiiiiii_14_12" x="0" y="0" width={'100%'} height={'auto'} filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="42" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.603922 0 0 0 0 0.886275 0 0 0 0 0.345098 0 0 0 1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="37" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.454902 0 0 0 0 0.745098 0 0 0 0 0.184314 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect1_innerShadow_14_12" result="effect2_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="31" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.607843 0 0 0 0 0.890196 0 0 0 0 0.34902 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect2_innerShadow_14_12" result="effect3_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.894118 0 0 0 0 0.992157 0 0 0 0 0.545098 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect3_innerShadow_14_12" result="effect4_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="9" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.611765 0 0 0 0 0.901961 0 0 0 0 0.34902 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect4_innerShadow_14_12" result="effect5_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-27" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.501961 0 0 0 0 0.133333 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect5_innerShadow_14_12" result="effect6_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-21" dy="4" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.45098 0 0 0 0 0.741176 0 0 0 0 0.180392 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect6_innerShadow_14_12" result="effect7_innerShadow_14_12" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="-16" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.333333 0 0 0 0 0.501961 0 0 0 0 0.133333 0 0 0 1 0" />
          <feBlend mode="normal" in2="effect7_innerShadow_14_12" result="effect8_innerShadow_14_12" />
        </filter>
      </defs>
    </svg>

  )
}